import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Typography from "./components/Typography";
import AddScreen from "./screens/AddScreen";
import "./styles/style.css";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-4">
        <Routes>
          <Route
            path="/"
            element={
              <Layout withNavbar withSearch childNav="My To-Do List">
                <div>
                  <h1 className="text-center bg-blue-50">
                    Hello World Test PSO halo gais welcome back to
                  </h1>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" size="lg">
                      Button
                    </Button>
                    <Button variant="primary" size="base">
                      Button
                    </Button>
                    <Button variant="primary" size="sm">
                      Button
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline-primary" size="lg">
                      Button
                    </Button>
                    <Button variant="outline-primary" size="base">
                      Button
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      Button
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Typography variant="p" weight="regular">
                      Typography
                    </Typography>
                    <Typography variant="p" weight="medium">
                      Typography
                    </Typography>
                    <Typography variant="p" weight="semibold">
                      Typography
                    </Typography>
                    <Typography variant="p" weight="bold">
                      Typography
                    </Typography>
                  </div>
                </div>
              </Layout>
            }
          />
          <Route path="/add" element={<AddScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
