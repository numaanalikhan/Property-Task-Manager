import { useEffect, useState } from "react";
import axios from 'axios';

function AddTask({ onFormSubmit, onRefreshDisplay }) {
    const [formData, setFormData] = useState({});
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [fetchPropertyName, setPropertyName] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/property")
            .then((res) => setPropertyName(res.data))
            .catch((err) => console.log(err.message));
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:5000/task/add", formData)
            .then(() => {
                console.log("Task is added");
                onRefreshDisplay();
                onFormSubmit();
            })
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add a New Task</h2>

            <div className="flex flex-col space-y-4">
                <input
                    name="description"
                    value={formData.description || ""}
                    onChange={handleChange}
                    type="text"
                    placeholder="Description (e.g., Rent, Maintenance)"
                    className="border-2 p-2 bg-sky-50 rounded-lg font-semibold border-gray-300 focus:outline-none focus:border-sky-500"
                />
                
                <input
                    name="type"
                    value={formData.type || ""}
                    onChange={handleChange}
                    type="text"
                    placeholder="Type (e.g., Urgent, Regular)"
                    className="border-2 p-2 bg-sky-50 rounded-lg font-semibold border-gray-300 focus:outline-none focus:border-sky-500"
                />

                <input
                    name="dueDate"
                    value={formData.dueDate || ""}
                    onChange={handleChange}
                    type="date"
                    className="border-2 p-2 bg-sky-50 rounded-lg font-semibold border-gray-300 focus:outline-none focus:border-sky-500"
                />

                <select 
                    name="status"
                    value={formData.status || ""}
                    onChange={handleChange}
                    className="border-2 p-2 bg-sky-50 rounded-lg font-semibold border-gray-300 focus:outline-none focus:border-sky-500"
                >
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <select
                    name="property"
                    value={formData.property || ""}
                    onChange={handleChange}
                    className="border-2 p-2 bg-sky-50 rounded-lg font-semibold border-gray-300 focus:outline-none focus:border-sky-500"
                >
                    <option value="">Select a Property</option>
                    {fetchPropertyName.map((ele) => (
                        <option key={ele._id} value={ele._id}>
                            {ele.name}
                        </option>
                    ))}
                </select>

                <button
                    type="submit"
                    className="bg-sky-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-sky-600 transition duration-200"
                >
                    Add Task
                </button>
            </div>
        </form>
    );
}

export default AddTask;
