const axios=require("axios")
const express= require("express")
const app=express()
const router = new express.Router();
const apireq=async()=>{
const response=await axios.get("http://localhost:8090/fibo")
return response
}
router.get("/numbers", async(req, res) => {
    let response
    try{
        response= await apireq()
    }catch(e){
        console.log("e")
        }
    return res.status(200).send(response)
});
app.use(router)
app.listen(5000, () => {
    console.log("Server is up!");
  });
  