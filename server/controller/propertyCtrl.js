const propertyModel = require("../model/propertyModel");

const addProperty =async (req,res)=>{
    try{
        var data = req.body;
        var property = await  propertyModel(data);
        property.save();
        res.status(200).json("Propery Created Successfully");
    }catch(err){
            {console.log(err);
        }
    }
}

const getProperty = async (req,res)=>{
    try{
        // var id = req.params;
        var properties =  await propertyModel.find();
        res.status(200).json(properties);
    }catch(err){
        res.status.send(err);
    }
}

module.exports = {
    addProperty,
    getProperty,
                }