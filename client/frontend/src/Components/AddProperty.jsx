import { useState } from "react";
import axios from "axios";

function AddProperty({ onFormSubmit, refreshProperties }) {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({}); // To track validation errors

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear the error for the current field if it's being corrected
        setErrors({ ...errors, [e.target.name]: '' });
    };

    // Validate the form inputs
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Property name is required";
        if (!formData.type) newErrors.type = "Property type is required";
        if (!formData.idNumber) newErrors.idNumber = "Registration number is required";
        if (!formData.location) newErrors.location = "Location is required";
        if (!formData.board) newErrors.board = "Waqf Board is required";

        setErrors(newErrors);
        // If no errors, return true (form is valid)
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation before submitting
        if (validateForm()) {
            axios.post("http://localhost:5000/property/add", formData)
                .then(() => {
                    console.log("Successfully Created");
                    onFormSubmit(); // Call to hide the form
                    refreshProperties(); // To get new property added to the DOM
                })
                .catch((err) => console.log(err));
        } else {
            console.log("Form validation failed");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add New Property</h2>

            <label className="block mb-1">Property Name</label>
            <input 
                type="text" 
                name="name" 
                value={formData.name || ""} 
                onChange={handleChange} 
                className="border border-gray-300 p-2 rounded-md w-full mb-2"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

            <label className="block mb-1">Property Type</label>
            <input 
                type="text" 
                name="type" 
                value={formData.type || ""} 
                onChange={handleChange} 
                className="border border-gray-300 p-2 rounded-md w-full mb-2"
            />
            {errors.type && <span className="text-red-500 text-sm">{errors.type}</span>}

            <label className="block mb-1">Registration Number</label>
            <input 
                type="number" 
                name="idNumber" 
                value={formData.idNumber || ""} 
                onChange={handleChange} 
                className="border border-gray-300 p-2 rounded-md w-full mb-2"
            />
            {errors.idNumber && <span className="text-red-500 text-sm">{errors.idNumber}</span>}

            <label className="block mb-1">Location</label>
            <input 
                type="text" 
                name="location" 
                value={formData.location || ""} 
                onChange={handleChange} 
                className="border border-gray-300 p-2 rounded-md w-full mb-2"
            />
            {errors.location && <span className="text-red-500 text-sm">{errors.location}</span>}

            <label className="block mb-1">State Waqf Board</label>
            <input 
                type="text" 
                name="board" 
                value={formData.board || ""} 
                onChange={handleChange} 
                placeholder="Telangana State Waqf Board"
                className="border border-gray-300 p-2 rounded-md w-full mb-2"
            />
            {errors.board && <span className="text-red-500 text-sm">{errors.board}</span>}

            <button 
                type="submit" 
                className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition duration-200"
            >
                Add Property
            </button>
        </form>
    );
}

export default AddProperty;
