const mongoose=require("mongoose")

const studSchema= new mongoose.Schema(
    {
       name:{
        type:String
       },
       fathername:{
        type:String
       },
       email:{
        type:String
       },
       mobile:{
        type:Number
       }
    }
)

const Student=mongoose.model("students",studSchema);
module.exports=Student