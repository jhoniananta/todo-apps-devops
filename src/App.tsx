import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoCard from './components/card-todo/TodoCard';
import Button from './components/Button';
import Typography from './components/Typography';
import AddScreen from './screens/AddScreen';
import './styles/style.css';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-8">
        <Routes>
          <Route
            path="/"
            element={
              <Layout withNavbar withSearch childNav="My To-Do List">
                <div className='p-8'>
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
                  <div className="h-8"></div>
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
            }
          />
          <Route path="/add" element={<AddScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
