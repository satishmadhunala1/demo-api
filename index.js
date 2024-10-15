express=require("express")
app=express();
app.post("/",()=>{
    res.send("hello api")
})
app.listen(3000,()=>{
    console.log("connected");
    
})
