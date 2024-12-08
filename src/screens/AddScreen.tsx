import { Input } from "../components/InputRightIcon";
import Button from "../components/Button";
import DropdownMenu from "../components/DropDownInput";
import Layout from "../Layout";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const AddScreen = () => {
  const [priority, setPriority] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [categoryChosen, setCategoryChosen] = useState<string>("");
  const [priorityChosen, setPriorityChosen] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todo/categories")
      .then((res) => {
        const categoryNames: string[] = res.data[0].map(
          (item: { id: number; name: string }) => {
            return item.name;
          }
        );
        setCategory(categoryNames);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("http://localhost:5000/api/todo/priorities")
      .then((res) => {
        const priorityNames: string[] = res.data[0].map(
          (item: { id: number; name: string }) => {
            return item.name;
          }
        );
        setPriority(priorityNames);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = () => {
    const todoData: {
      name: string;
      category_name: string;
      priority_name: string;
      due_date: string;
    } = {
      name: titleRef.current!.value,
      category_name: categoryChosen,
      priority_name: priorityChosen,
      due_date: dueDateRef.current!.value,
    };

    axios
      .post("http://localhost:5000/api/todo/tasks", todoData)
      .then((res) => {
        console.log(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Layout withNavbar childNav="Add To-do">
      <div className="px-4 lg:px-8">
        <form>
          {/* To-do */}
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
            ref={titleRef}
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
            ref={dueDateRef}
          />
        </form>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={() => (window.location.href = "/")}
            size="lg"
            className="flex justify-center items-center  rounded-[10px]  h-[37px] w-full max-w-[326px]"
          >
            Cancel
          </Button>
          <Button
            size="lg"
            className="flex justify-center items-center  rounded-[10px] h-[37px] w-full max-w-[326px]"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddScreen;
