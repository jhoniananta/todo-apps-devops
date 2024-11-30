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
            style={{
              margin: "0",
              color: "#000000",
              fontWeight: "bold",
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "20px",
            }}
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
            style={{
              margin: "1rem 0 0.5rem",
              color: "#000000",
              fontWeight: "bold",
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "20px",
            }}
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
            style={{
              margin: "1rem 0 0.5rem",
              color: "#000000",
              fontWeight: "bold",
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "20px",
            }}
          >Priority</label>
          <DropdownMenu placeholder="Choose Priority" options={["Low", "Medium", "High"]}/>

          {/* Due Date */}
          <label
            htmlFor="date-input"
            style={{
              margin: "1rem 0 0.5rem",
              color: "#000000",
              fontWeight: "bold",
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "20px",
            }}
          >
            Due Date
          </label>
          <Input id="date-input" type="date" className="w-full" />
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <Button
            onClick={() => (window.location.href = "/")}
            style={{
              width: "120px",
              height: "22px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              width: "120px",
              height: "22px",
              backgroundColor: "#007bff",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddScreen;
