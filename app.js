const canvas = require("canvas"); //npm install canvas
const echarts = require("echarts"); //npm install echarts
const fs = require('fs'); //node内置模块,直接引入

//创建一个canvas实例
let ctx = canvas.createCanvas(800, 600)
//将canvas实例设置为echarts容器
echarts.setCanvasCreator(() => ctx)
//使用canvas实例为容器创建echarts实例
let chart = echarts.init(ctx)
//echarts配置项
let option = {
    xAxis: {
        type: 'category',
        data: ['我', '你', '她', '撒旦撒旦', '撒旦撒旦', '古典风格', '撒旦发射点']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
};

//设置图标实例配置项
chart.setOption(option);
const imgPath = __dirname + '/bubble1.png'
try {
    fs.writeFileSync(imgPath, chart.getDom().toBuffer());
    chart.dispose();
    console.log("Create Img:" + imgPath)
} catch (err) {
    console.error("Error: Write File failed" + err.message)
}