const datas=require("./src/mock/index");

let bodyParser=require("body-parser");

module.exports={
    lintOnSave:false,
    devServer:{
        before(app){
            app.use(bodyParser.json());

            // console.log(data);

            app.get("/api/list",(req,res)=>{
                res.json(datas);
            })


            //删除数据
            app.post("/api/del/list",(req,res)=>{
                // console.log(req);
                let {id}=req.body;
                // console.log(id);

                // console.log(data);
                //过滤一波
                // let list=datas.list.filter(item=>item.key!==id);
                let index=datas.list.findIndex(item=>item.key===id);
                datas.list.splice(index,1);
                // console.log(datas);
                res.send(datas.list);
            })


            //验证账号 密码
            app.post("/api/verifyPass",(req,res)=>{
                let {username,password}=req.body;

                if(username==="admin"&&password==="123"){
                    res.send({
                        code:0,
                        mess:"登录成功",
                        token:'admin'+new Date().getTime(),  //后端返回token给前端

                        // 后端返回userinfo给前端
                        userinfo:{
                            img:'https://dummyimage.com/100X100/f279c3&text=香港岛',
                            nickname:"张三"
                        }
                    })
                }else{
                    res.send({
                        code:1,
                        mess:"账号和密码错误"
                    })
                }
            })

            //详细数据
            app.post("/api/detail/list",(req,res)=>{
                let {ids}=req.body;

                console.log(ids);

                //找到对应数据
                // console.log(data.list);
                let dda=datas.list.filter(item=>item.key===ids)[0];
                res.send(dda);
            })

            //新增数据
            app.post("/api/add",(req,res)=>{
                let {ndata}=req.body;

                let newData=datas.list.push(ndata);
                res.send({
                    data:newData,
                })
            })
        }
    }
}