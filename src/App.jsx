import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddTask from "./pages/AddTask"
import TaskList from "./pages/TaskList"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
