import Layout from "../Layout";
import TodoCard from "../components/card-todo/TodoCard";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";

export default function Home() {
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
          <TodoCard
            title="Tugas Tekber"
            category="Study"
            priority="High"
            dateCreated="21/11/2024"
          />
        </div>
      </div>
    </Layout>
  );
}
