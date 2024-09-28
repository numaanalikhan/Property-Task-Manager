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
       res.status(200).send(await propertyModel.find());
    }catch(err){
        res.status(500).send("Inrernal server error");
    }
}

module.exports = {
    addProperty,
    getProperty,
                }