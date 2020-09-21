const { mock } = require("mockjs");
let Mock=require("mockjs");

//模拟数据
const data=Mock.mock({
    "铁板烧系列|10-20":[{
        name:"@cname",
        title:"@ctitle(5,10)",
        "price|1-100":1,
        carNum:0,
        id:"@id",
        img:"@image(50x50,@color,@city)"
    }],
    "点心系列|10-20":[{
        name:"@cname",
        title:"@ctitle(5,10)",
        "price|1-100":1,
        carNum:0,
        id:"@id",
        img:"@image(50x50,@color,@city)"
    }],
    "汉堡系列|10-20":[{
        name:"@cname",
        title:"@ctitle(5,10)",
        "price|1-100":1,
        carNum:0,
        id:"@id",
        img:"@image(50x50,@color,@city)"
    }]
})

module.exports={
    data,
}