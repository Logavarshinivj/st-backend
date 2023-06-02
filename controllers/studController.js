const Student=require("../models/studModel.js")

const createStudent=async(req,res)=>{
//    try{
        const {name,fathername,email,mobile}=req.body
        const newStudent=await Student.create({name,fathername,email,mobile})
        res.send(newStudent)
    // }

    // catch{
    //     res.send({message:"error creating student"})
    // }
}

const getStudents=async(req,res)=>{
    try{
        const students=await Student.find({})
        res.send(students)
    }
    catch{
        res.send({message:"error getting students"})
    }
}

const deleteStudent=async(req,res)=>{
    try{
        const result=await Student.deleteOne({_id:req.params.id})
        res.send(result)
    }

    catch{
        res.send({message:"error deleting student"})
    }
}

const getOneStudent = async (req, res)=>{
   
       let result=await Student.findOne({_id:req.params.id})
       if(result){
        res.send(result)
       }
       else{
        res.send("no such student found")
       }
  
}

const updateStudent = async (req, res) =>{
    try{
    const result =await Student.updateOne({_id:req.params.id},{$set:req.body})
    res.send(result)
    }
    catch{
        res.send({message: 'error updating student'})
    }
}

module.exports={createStudent,getStudents,deleteStudent,getOneStudent,updateStudent}