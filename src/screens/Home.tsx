import Layout from "../Layout";
import TodoCard, { TodoCardProps } from "../components/card-todo/TodoCard";
import Button from "../components/Button";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { DrawerDialogDemo } from "../components/Filter";

export default function Home() {
  const [todos, setTodos] = useState<TodoCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [filterTodos, setFilterTodos] = useState<TodoCardProps[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [categoryChosen, setCategoryChosen] = useState<string>("");
  const [priorityChosen, setPriorityChosen] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [fetch, setFetch] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todo/tasks")
      .then((res) => {
        const flatTodos: TodoCardProps[] = res.data
          .flat()
          .map((todo: TodoCardProps) => {
            return {
              ...todo,
              due_date: new Date(todo.due_date).toLocaleDateString("id-ID"),
            };
          });
        setTodos(flatTodos);
        if (fetch) {
          setFilterTodos(flatTodos);
          setFetch(false);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [todos]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 650);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFilterClick = () => {
    setFilterOpen(true);
  };

  useEffect(() => {
    if (isSearch) {
      setFilterTodos(
        todos.filter((todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase())
        )
      );
      setIsFilter(false);
    } else if (isFilter) {
      setFilterTodos(
        todos.filter(
          (todo) =>
            (!categoryChosen || todo.category === categoryChosen) &&
            (!priorityChosen || todo.priority === priorityChosen)
        )
      );
      setIsSearch(false);
    } else {
      setFilterTodos(todos);
    }
  }, [categoryChosen, priorityChosen, search, todos]);

  const handleFilter = (categoryChosen: string, priorityChosen: string) => {
    setFilterOpen(false);
    setCategoryChosen(categoryChosen);
    setPriorityChosen(priorityChosen);
    setIsFilter(true);
    setIsSearch(false);
  };

  const handleSearch = (search: string) => {
    setSearch(search);
    setIsSearch(true);
    setIsFilter(false);
  };

  // console.log(todos);
  if (isLoading) return <Loading />;

  return (
    <Layout
      withNavbar
      withSearch
      childNav="My To-Do List"
      handleFilterClick={handleFilterClick}
      handleSearch={(search: string) => handleSearch(search)}
    >
      {isFilterOpen && (
        <DrawerDialogDemo
          isDesktop={isDesktop}
          open={isFilterOpen}
          onClose={() => setFilterOpen(false)}
          handleFilter={(selectedCategory, selectedPriority) =>
            handleFilter(selectedCategory, selectedPriority)
          }
        />
      )}
      <div className="p-8 flex flex-col gap-8 items-start">
        <a href="/add" className="w-full">
          <Button
            size="lg"
            className="flex justify-center items-center max-md:mt-4 rounded-[30px] md:rounded-[50px] h-[37px] w-full md:h-[83px] md:w-[349px]"
            leftIcon={FaPlus}
          >
            Add Todo
          </Button>
        </a>
        <div className="flex flex-wrap gap-4">
          {filterTodos.map((todo, index) => {
            return (
              <TodoCard
                key={index}
                id={todo.id}
                title={todo.title}
                category={todo.category.toString()}
                priority={todo.priority.toString()}
                due_date={todo.due_date.toString()}
                isDone={todo.isDone}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
