import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddScreen from './screens/AddScreen';
import './styles/style.css';
import Home from './screens/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-8">
        <Routes>
          <Route
            path="/"
            element={
              <Home/>
            }
          />
          <Route path="/add" element={<AddScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
