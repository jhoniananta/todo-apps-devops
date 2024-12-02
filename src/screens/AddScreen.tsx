import { Input } from "../components/InputRightIcon";
import Button from "../components/Button";
import DropdownMenu from "../components/DropDownInput";
import Layout from "../Layout";

const AddScreen = () => {
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
          />

          {/* Categories */}
          <label
            htmlFor="categories-input"
            className="m-0 text-black font-bold block mb-2 text-xl mt-3"
          >
            Categories
          </label>
          <Input
            id="categories-input"
            type="text"
            placeholder="Choose a category"
            className="w-full"
          />

          {/* Priority */}
          <label
            htmlFor="priority-input"
            className="m-0 text-black font-bold block mb-2 text-xl mt-3"
          >Priority
          </label>
          <DropdownMenu placeholder="Choose Priority" options={["Low", "Medium", "High"]}/>

          {/* Due Date */}
          <label
            htmlFor="date-input"
            className="m-0 text-black font-bold block mb-2 text-xl mt-3"
          >
            Due Date
          </label>
          <Input id="date-input" type="date" className="w-full" />
        </form>

        <div className="flex justify-center gap-4 mt-8"
        >
          <Button
            onClick={() => (window.location.href = "/")}
            className="w-[120px] h-[22px] bg-[#E4EDFF] rounded-[8px]"
          >
            Cancel
          </Button>
          <Button
            className="w-[120px] h-[22px] bg-[#E4EDFF] rounded-[8px]"
          >
            Save
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddScreen;
