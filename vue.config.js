let data=require("./src/mock/index");

let bodyParser=require("body-parser");

// console.log(data);
const datas=data.data;

module.exports={
    devServer:{
        before(app){
            app.get("/api/list",(req,res)=>{
                res.send(datas);
            })
        }
    }
}