const express= require('express')
const {createTeacher,getTeachers,deleteTeacher,getTeacher,updateTeacher}=require("../controllers/teacherController")
const router=express.Router()

router.post("/create-teacher",createTeacher)
router.get("/get-teachers",getTeachers)
router.delete("/delete-teacher/:id",deleteTeacher)
router.get("/get-teacher/:id",getTeacher)
router.put("/update-teacher/:id",updateTeacher)

module.exports= router