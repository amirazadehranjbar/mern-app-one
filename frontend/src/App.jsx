import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreateNotePage from "./pages/CreateNotePage.jsx";
import DetailNotePage from "./pages/DetailNotePage.jsx";

function App() {
    return (
        <div className="w-full h-screen bg-slate-800">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/create-note" element={<CreateNotePage/>}/>
                <Route path="/details/:id" element={<DetailNotePage/>}/>
            </Routes>
        </div>
    )
}

export default App
