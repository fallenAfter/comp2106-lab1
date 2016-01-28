// link connect package
var connect= require('connect');

//link url module
var url= require('url');

//create new app
app= connect();

//create variable to hold the calculation result
var result;
// variable to hold the intended symbol
var symbol;

//create function to manage calculator
var calculator= function(req, res, next){
	//get the query string from the adress
	var qs= url.parse(req.url, true).query;
	var x= parseFloat(qs.x);
	var y= parseFloat(qs.y);
	//write header to output plaintext
	res.writeHead(200,{
		'content-type': 'text-plain'
	});

	if(qs.method == 'add'){
		add(x,y);
		symbol= '+';
	}
	else if(qs.method == 'subtract'){
		subtract(x,y);
		symbol= '-';
	}
	else if(qs.method == 'multiply'){
		multiply(x,y);
		symbol= '*';
	}
	else if(qs.method == 'divide'){
		divide(x,y);
		symbol= '/';
	}
	
	res.write('Output: '+ x + symbol + y +'='+ result);
	res.end();
};

//route url
app.use('/calculate', calculator);


app.listen(3000);
console.log('app running');

function add(x,y){
	result= x+y;
}
function subtract(x,y){
	result= x-y;
}
function multiply(x,y){
	result= x*y;
}
function divide(x,y){
	result= x/y;
}