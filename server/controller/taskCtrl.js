const taskModel = require("../model/taskModel");
const PropertyModel = require("../model/propertyModel"); // Assuming you have a Property model

const addTask = async (req, res) => {
    try {
        var data = req.body;
        var task = await taskModel(data);
        await task.save();
        res.status(200).send("Task is Created for the property");
    } catch (err) {
        res.status(500).send(err);
    }
};

const getTask = async (req, res) => {
    try {
        const { status, propertyName } = req.query;

        const filter = {};
        if (status) {
            filter.status = status;
        }
        if (propertyName) {
            const property = await PropertyModel.findOne({ name: propertyName });
            if (property) {
                filter.property = property._id; // Use the property ID for filtering
            }
        }

        var tasks = await taskModel.find(filter).populate('property');
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
};

const updateStatus = async (req, res) => {
    try {
        var taskId = req.params.taskId;
        var { status } = req.body;

        if (!['Pending', 'In Progress', 'Completed'].includes(status)) {
            return res.status(400).send("Invalid status value");
        }

        await taskModel.findOneAndUpdate({ _id: taskId }, { $set: { status } });
        res.status(200).send("Status Updated");
    } catch (err) {
        console.error("Error updating status:", err);
        res.status(500).send("Internal Server Error");
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await taskModel.findByIdAndDelete(id);
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addTask,
    getTask,
    updateStatus,
    deleteTask,
};
