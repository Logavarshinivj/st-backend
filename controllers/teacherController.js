const Teacher=require("../models/teacherModel")

const createTeacher = async(req,res)=>{
    try{
        const{name,qualification,experience,mobile}=req.body
        let newTeacher=await Teacher.create({name,qualification,experience,mobile})
        res.send(newTeacher)
    }
    catch{
        res.send({message:"error creating teacher"})
    }
}

const getTeachers=async(req,res)=>{
    try{
    const students=await Teacher.find({})
    res.send(students)
    }
    catch{
        res.send({message:"error getting students"})
    }

}

const deleteTeacher = async(req,res)=>{
    try{
    const result=await Teacher.deleteOne({_id:req.params.id})
    res.send(result)
    }
    catch{
        res.send({message:"error deleting"})
    }
}

const getTeacher = async(req,res)=>{
   
        const result=await Teacher.findOne({_id:req.params.id})
        if(result){
            res.send(result)
           }
           else{
            res.send("no such teacher found")
           }
  
}

const updateTeacher=async(req,res)=>{
    const result=await Teacher.updateOne({_id:req.params.id},{$set:req.body})
    res.send(result)
}
module.exports={createTeacher,getTeachers,deleteTeacher,getTeacher,updateTeacher}