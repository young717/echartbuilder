const canvas = require("canvas");//npm install canvas
const echarts = require("echarts");//npm install echarts
const fs = require('fs');//node内置模块,直接引入

//创建一个canvas实例
let ctx = canvas.createCanvas(800,600)
//将canvas实例设置为echarts容器
echarts.setCanvasCreator(()=>ctx)
//使用canvas实例为容器创建echarts实例
let chart = echarts.init(ctx)
//echarts配置项
let option = {
    //....
} 
//设置图标实例配置项
chart.setOption(option);
//保存图片
const imgPath =  __dirname + '/bubble11.png'
fs.writeFileSync(imgPath, chart.getDom().toBuffer());