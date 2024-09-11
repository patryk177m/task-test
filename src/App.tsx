import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Users } from "./pages/Users";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:name?:username?:email?:phone?" element={<Users />} />
      </Routes>
    </Router>
  )
}

export default App
