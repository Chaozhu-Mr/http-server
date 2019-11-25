var http = require('http');
var urltool = require('url');
var path = require('path');
var querytool = require('querystring');
var fs = require('fs');
console.log(querytool.parse("name=whitemu&sex=man&sex=women"));
//搭建服务器
// var server = http.createServer(function (req,res) {
//    // /index.html
//    // console.log(req.url);
//    //转对象url
//  var urlobj = urltool.parse(req.url);
//  //console.log(req.url);
//  //取到url对象中pathname属性值的后缀
//  var strhouzhui = path.extname(urlobj.pathname);
//  console.log(strhouzhui);
//  res.writeHead(200,{'Content-Type':'text/'+(strhouzhui.slice(1)?strhouzhui.slice(1):'plain')+';charset=utf-8'});
//  var strfilename = urlobj.pathname;
//  if(strfilename==='/favicon.ico') {
//      return;
//  }

//  if(req.method==='GET'){
     
//  }
// });
// server.listen(8011);