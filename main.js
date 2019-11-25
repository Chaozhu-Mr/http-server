var http = require('http');
var urltool = require('url');
var querytool = require('querystring');
var path = require('path');
var fs = require('fs');
console.log(__dirname);
var server = http.createServer(function(req,res){
	
	//req.method;
	//req.headers;
	
	//console.log(urltool.parse(req.url));
	//console.log(querytool.parse(urltool.parse(req.url).query));
	//ת��ԭʼ��req.url
	var urlobj = urltool.parse(req.url);
	//��ȡ��׺��
	var strhouzhui = path.extname(urlobj.pathname);
	console.log(strhouzhui)
	res.writeHead(200, {'Content-Type': 'text/'+(strhouzhui.slice(1)?strhouzhui.slice(1):'plain')+';charset=utf-8'});
	//��ȡ·�������ļ���
	var strfilename = urlobj.pathname
	if(strfilename==='/favicon.ico'){
		return;
	}
	
	//console.log(strfilename);
	if(req.method==="GET"){
		//��̬��Դ����Ӧ
		if(strhouzhui==='.html'||strhouzhui==='.css'||strhouzhui==='.js'){
		   res.end(fs.readFileSync(path.join(__dirname,'/static',strfilename)))
		}else if(strfilename==='/login'){
			var paramobj = querytool.parse(urlobj.query);
			if(paramobj.username==="zhangsan"&&paramobj.pwd==='123'){
				res.end('success');
			}else{
				res.end('err:username or pwd bu zhengque');
			}
			
		}
		
	}else{
		if(strfilename==='/login'){
			//var paramobj = querytool.parse(urlobj.query);
			console.log('--------------------');
			var str = "";
			req.on('data',function(data){
				str+=data;
			});
			req.on('end',function(err){
				
				var paramobj = querytool.parse(str);
				if(paramobj.username==="zhangsan"&&paramobj.pwd==='123'){
				    res.end('{"success":"6666"}');
				}else{
					res.end('{"err":"username or pwd bu zhengque"}');
				}
			});
			//console.log(paramobj)
			
		}
	}
	
});

server.listen(3336);