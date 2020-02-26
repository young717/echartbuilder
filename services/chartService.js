const canvas = require("canvas"); //npm install canvas
const echarts = require("echarts"); //npm install echarts
const fs = require("fs"); //node内置模块,直接引入

function getChart(option, fileName) {
  if (!option) {
    option = {};
  }
  //创建一个canvas实例
  let ctx = canvas.createCanvas(600, 400);
  //将canvas实例设置为echarts容器
  echarts.setCanvasCreator(() => ctx);
  //使用canvas实例为容器创建echarts实例
  let chart = echarts.init(ctx);

  //设置图标实例配置项
  chart.setOption(option);
  //保存图片
  // console.log(__dirname);
  const imgPath = __dirname + "/img/" + fileName;
  console.log(imgPath);
  fs.writeFileSync(imgPath, chart.getDom().toBuffer());
}

module.exports = getChart;
