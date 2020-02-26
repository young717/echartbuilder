const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const getChart = require("./services/chartService");
// // 在 app 文件夹开启静态服务
// app.use(express.static("./app"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//参数为json，结构如下
// {
//   "option":"xxx",
//   "fileName":"aaa"
// }
app.post("/", (req, res) => {
  var option = req.body.option;
  var fileName = req.body.fileName;
  if (!fileName || !option) {
    return;
  }

  getChart(option, fileName);

  res.send("download success ..., filename is " + fileName);
  res.end();
});

app.listen(8080, () => {
  console.log("Demo server listening on port 8080");
});

