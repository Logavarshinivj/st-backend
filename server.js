const express= require('express')
const app= express()
const dotenv= require('dotenv')
const cors = require('cors')
const connectDb = require('./db/connectDb')

dotenv.config()
connectDb()

const PORT=4000
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use("/",require('./routes/StudRoute'))
app.use("/",require('./routes/teacherRoute'))
app.listen(PORT,()=>console.log(`Server started on port ${PORT}🔥🔥`))
