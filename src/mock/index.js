let Mock=require("mockjs");

module.exports=Mock.mock({
    "list|10":[{
        "name":"@ctitle(4,6)",
        "key":"@id",
        "age|10-100":1,
        "address":"@city",
        "color":"@color",
        "img":"@img(100x100,@color)",
        "tilte":"@ctitle(5,10)",
        "children|3":[{
            "name":"@ctitle(4,6)",
            "key":"@id",
            "age|10-100":1,
            "address":"@city",
        }]
    }]
})