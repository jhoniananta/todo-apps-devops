import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Input } from "../components/InputRightIcon";
import Button from "../components/Button";
import DropdownMenu from "../components/DropDownInput";
import Layout from "../Layout";
import Loading from "../Loading";

const EditScreen = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<string[]>([]);
  const [priority, setPriority] = useState<string[]>([]);
  const [categoryChosen, setCategoryChosen] = useState<string>("");
  const [priorityChosen, setPriorityChosen] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [categoriesRes, prioritiesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BASE_URL}/api/todo/categories`),
          axios.get(`${import.meta.env.VITE_BASE_URL}/api/todo/priorities`),
        ]);

        setCategory(
          categoriesRes.data[0].map(
            (item: { id: number; name: string }) => item.name
          )
        );
        setPriority(
          prioritiesRes.data[0].map(
            (item: { id: number; name: string }) => item.name
          )
        );
      } catch (err) {
        console.error("Error fetching categories or priorities:", err);
      }
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/todo/tasks/${id}`)
      .then((res) => {
        const task = res.data;

        setTitle(task.title);
        setCategoryChosen(task.category);
        setPriorityChosen(task.priority);
        setDueDate(new Date(task.due_date).toISOString().split("T")[0]); // Format date

        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching task by ID:", err);
        setIsLoading(false);
      });
  }, [id]);

  const handleSubmit = () => {
    const todoData = {
      name: title,
      category_name: categoryChosen,
      priority_name: priorityChosen,
      due_date: dueDate,
    };

    axios
      .put(`${import.meta.env.VITE_BASE_URL}/api/todo/tasks/${id}`, todoData)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout withNavbar childNav="Edit To-do">
      <div className="px-4 lg:px-8">
        <form>
          {/* Title */}
          <label
            htmlFor="todo-input"
            className="m-0 text-black font-bold block mb-2 text-xl"
          >
            To-do
          </label>
          <Input
            id="todo-input"
            type="text"
            placeholder="What needs to be done?"
            className="w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Categories */}
          <label
            htmlFor="categories-input"
            className="m-0 text-black font-bold block mb-2 text-xl mt-3"
          >
            Categories
          </label>
          <DropdownMenu
            placeholder="Choose Category"
            options={category}
            selected={categoryChosen}
            handleChange={(selectedOption) => setCategoryChosen(selectedOption)}
          />

          {/* Priority */}
          <label
            htmlFor="priority-input"
            className="m-0 text-black font-bold block mb-2 text-xl mt-3"
          >
            Priority
          </label>
          <DropdownMenu
            placeholder="Choose Priority"
            options={priority}
            selected={priorityChosen}
            handleChange={(selectedOption) => setPriorityChosen(selectedOption)}
          />

          {/* Due Date */}
          <label
            htmlFor="date-input"
            className="m-0 text-black font-bold block mb-2 text-xl mt-3"
          >
            Due Date
          </label>
          <Input
            id="date-input"
            type="date"
            className="w-full"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </form>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={() => (window.location.href = "/")}
            size="lg"
            className="w-full max-w-[326px] h-[37px] rounded-[10px] flex justify-center items-center"
          >
            Cancel
          </Button>
          <Button
            size="lg"
            className="w-full max-w-[326px] h-[37px] rounded-[10px] flex justify-center items-center"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default EditScreen;
