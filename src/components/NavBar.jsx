import { NavLink } from "react-router-dom"


export default function NavBar() {
    return (
        <>
            <header>
                <NavLink to="/">
                    <h1>Task List</h1>
                </NavLink>
                <NavLink to="/add">
                    <h2>Add Task</h2>
                </NavLink>
            </header>
        </>
    )
}