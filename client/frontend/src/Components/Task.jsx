import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import axios from "axios";
import { FaTrash } from "react-icons/fa"; // Importing the trash icon from React Icons

function Task() {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const [fetchData, setFetchData] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    const getData = () => {
        axios.get("http://localhost:5000/task")
            .then((res) => setFetchData(res.data))
            .catch((err) => console.log(err));
    };

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/task/${id}`)
            .then(() => {
                console.log("Task deleted successfully"); // Log on success
                getData(); // Refresh the task list after deletion
            })
            .catch((err) => console.log(err));
    };

    const updateTaskStatus = (id, newStatus) => {
        console.log(`Updating task ID: ${id} to status: ${newStatus}`); // Log for debugging
        axios.patch(`http://localhost:5000/task/${id}`, { status: newStatus })
            .then(() => {
                console.log("Status updated successfully"); // Log on success
                getData(); // Refresh the task list after updating
            })
            .catch((err) => console.error("Error updating status:", err)); // Log any errors
    };

    useEffect(() => {
        getData();
    }, []);

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter tasks based on status and property name
    const filteredTasks = fetchData.filter(task => {
        const propertyName = task.property.name.toLowerCase();
        const status = task.status.toLowerCase(); // Get the task status

        // Check if the property name or status matches the search term
        return (
            propertyName.includes(searchTerm.toLowerCase()) || 
            status.includes(searchTerm.toLowerCase())
        );
    });

    return (
        <>
            <div className="flex items-center justify-between p-5 bg-blue-50 shadow-md">
                <p className="text-2xl font-semibold">All Tasks</p>
                <div className="flex items-center">
                    <button 
                        className="text-lg font-semibold text-white bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-500 transition duration-200"
                        onClick={toggleForm}
                    >
                        Add Task
                    </button>
                    <input 
                        className="text-black border-2 border-blue-300 rounded-lg bg-white px-3 py-2 ml-5 focus:outline-none focus:border-blue-500"
                        placeholder="Search by Property or Status"
                        value={searchTerm}
                        onChange={handleSearchChange} // Update state on input change
                    />
                </div>
            </div>

            {showForm && <AddTask onFormSubmit={toggleForm} onRefreshDisplay={getData} />}
            
            <div className="m-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTasks.map((ele) => {
                    // Check if the task is overdue
                    const isOverdue = new Date(ele.dueDate) < new Date();

                    return (
                        <div 
                            key={ele._id} 
                            className={`border border-gray-300 rounded-lg p-4 shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-xl relative ${isOverdue ? 'bg-red-100 border-red-500' : ''}`} // Highlight if overdue
                        >
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <p className="font-bold text-lg">{ele.property.name}</p>
                                    <p className="text-gray-700">{ele.description}</p>
                                    <p className="text-sm text-gray-500">{ele.type}</p>
                                    <p className="text-sm text-gray-500">Due Date: {new Date(ele.dueDate).toLocaleDateString()}</p> {/* Format date */}
                                </div>
                                
                                <div className="flex space-x-2 mt-2">
                                    {['Pending', 'In Progress', 'Completed'].map(status => (
                                        <button 
                                            key={status}
                                            onClick={() => updateTaskStatus(ele._id, status)} // Correct function call
                                            className={`flex-1 border-2 rounded-lg px-3 py-1 transition duration-200 ${ele.status === status ? 'bg-blue-600 text-white' : 'bg-blue-100 text-black hover:bg-blue-200'}`}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Delete button with icon */}
                            <button 
                                onClick={() => deleteTask(ele._id)} 
                                className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition duration-200"
                                aria-label="Delete Task"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Task;
