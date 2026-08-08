import { useEffect } from "react";
import { themeChange } from "theme-change";
import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreateNotePage from "./pages/CreateNotePage.jsx";
import DetailNotePage from "./pages/DetailNotePage.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
    useEffect(() => {
        themeChange(false)
        // false = we're not using React SPA re-render hack from their demo,
        // theme-change handles DOM attribute directly
    }, [])

    return (
        <div className="w-full h-screen">
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/create-note" element={<CreateNotePage/>}/>
                <Route path="/details/:id" element={<DetailNotePage/>}/>
            </Routes>
        </div>
    )
}

export default App