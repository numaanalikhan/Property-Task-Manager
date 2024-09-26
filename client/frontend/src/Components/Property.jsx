import { useState, useEffect } from "react";
import AddProperty from "../Components/AddProperty";
import axios from "axios";

function Property() {
    var [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const getData = () => {
        axios.get("http://localhost:5000/property")
            .then((res) => {
                setProperty(res.data);
            }).catch((err) => console.log(err));
    };

    var [property, setProperty] = useState([]);
    useEffect(() => {
        getData();
    }, []);
   
    return (
        <>
            <div className="mb-4 flex items-center justify-between p-5 bg-blue-50 shadow-md">
                <span className="text-2xl font-semibold">All Properties</span>
                <button 
                    className="text-lg font-semibold text-white bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-500 transition duration-200"
                    onClick={toggleForm}
                >
                    {showForm ? "Close" : "Add Property"}
                </button>
            </div>

            {showForm && <AddProperty onFormSubmit={toggleForm} refreshProperties={getData} />}
        
            <div className="flex flex-wrap justify-start m-6 gap-4">
                {property.map((ele) => (
                    <div key={ele._id} className="w-[30%] bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-4">
                        <div className="font-bold text-lg mb-2 text-blue-700">
                            <p>{"Name: " + ele.name}</p>
                        </div>
                        <p className="text-gray-600">{"Property Type: " + ele.type}</p>
                        <p className="text-gray-600">{"Location: " + ele.location}</p>
                        <p className="text-gray-600">{"State Board: " + ele.board}</p>
                        <p className="text-gray-600">{"Registration Id: " + ele.idNumber}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Property;
