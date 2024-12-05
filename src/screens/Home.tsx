import Layout from "../Layout";
import TodoCard, { TodoCardProps } from "../components/card-todo/TodoCard";
import Button from "../components/Button";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoCardProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todo/tasks")
      .then((res) => {
        const flatTodos: TodoCardProps[] = res.data.flat().map((todo: TodoCardProps)=> {
          return {
            ...todo,
            due_date: new Date(todo.due_date).toLocaleDateString("id-ID"),
          }
        });
        setTodos(flatTodos);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [todos]);

  // console.log(todos);
  if (todos.length === 0) return <div>Loading...</div>;

  return (
    <Layout withNavbar withSearch childNav="My To-Do List">
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
          {todos.map((todo, index) => {
            console.log("Todo", index, ":", todo);
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