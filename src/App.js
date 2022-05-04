import './App.css';
// Screens
import Home from './screens/Home';
import Detail from './screens/Detail';
// Router
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
