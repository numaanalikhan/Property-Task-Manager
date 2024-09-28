import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Property from "./Components/Property";
import Task from "./Components/Task"
import Home from "./Components/Home";

function App (){
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/property" element={<Property/>}/>
            <Route path="/tasks" element={<Task/>}/>
        </Routes>
        <footer className="bg-blue-500 text-white py-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p>&copy; {new Date().getFullYear()}  Property Task Manager. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default App