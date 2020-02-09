const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname +'/views/partials');
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extend:false}));

hbs.registerHelper('Table',(num,Hex)=>{
    var str = '';
   str += '<table style="width:35%;height:35%">';
   str += '<tbody>';

    
    for(let i = 0; i < num; i++){
        var color = ((1<<24)*Math.random()|0).toString(16);
        var color1 = ((1<<24)*Math.random()|0).toString(16);
        var color2 = ((1<<24)*Math.random()|0).toString(16);

        Hex = color;
        Hex1 = color1;
        Hex2 = color2;

        
        str+='<tr><td style="background-color: #'+Hex+';">'+Hex+'<br/><span style="color:#ffffff">'+Hex.toUpperCase()+'</span></td> <td style="background-color: #'+Hex1+';">'+Hex1+'<br/><span style="color:#ffffff">'+Hex1.toUpperCase()+'</span></td> <td style="background-color: #'+Hex2+';">'+Hex2+'<br/><span style="color:#ffffff">'+Hex2.toUpperCase()+'</span></td></tr>';
 
    }

    str += '</tbody>';
    str += '</table>';
   
    
    return new hbs.handlebars.SafeString(str);
})

function rando(req,res,next)
{
    req.num = Math.round(Math.random()*(50 - 20 + 1)) + 20;
    next();
}

app.use(rando);


app.post("/table", function(req,res){
    res.render("index", {name:"Fidel's Lab 3", selection:req.body.selectNumber});
});

app.get('/', (req, res)=>{
    res.render('index', {name:"Fidel's Lab 3"});
});

app.get('/*',(req,res)=>{
    res.render('error',{numbo:req.num});
});

app.listen(3000,()=>{console.log('Server is running at localhost:3000')});