import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home"
import Property from "./Components/Property";
import Task from "./Components/Task"

function App (){
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/property" element={<Property/>}/>
            <Route path="/tasks" element={<Task/>}/>
        </Routes>
        </>
    )
}

export default App