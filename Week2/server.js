var express = require("express");
var path = require("path");
var hbs = require("hbs");
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
//ensure request gets called or sent
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get("/index",function(req,res)
{
  res.render("index.hbs",{LoremIpsum:"Sed at sodales diam, ac sodales odio. Nam suscipit eleifend aliquam. Integer erat mi, posuere in dui nec, ornare maximus diam. Nullam efficitur posuere lectus, eu ultrices neque mollis ut. Quisque vel odio eros. Curabitur vulputate magna risus, quis ullamcorper nisi rutrum in. Sed lobortis lectus vitae mauris rutrum, ornare hendrerit dui varius. Praesent volutpat pharetra odio, eu tristique nisl condimentum eget. Mauris sem purus, lacinia nec placerat nec, faucibus eget eros. Praesent nec molestie est. Aliquam vitae sem aliquam, fringilla tellus ut, egestas sapien. Aenean vitae magna vestibulum, mollis enim ut, venenatis est. Ut quis sagittis purus. Donec enim dui, egestas non elit in, varius elementum lorem. Proin quis dolor nibh."});
});

app.get("/about",function(req,res)
{
  res.render("about.hbs",{LoremIpsum:"Sed at sodales diam, ac sodales odio. Nam suscipit eleifend aliquam. Integer erat mi, posuere in dui nec, ornare maximus diam. Nullam efficitur posuere lectus, eu ultrices neque mollis ut. Quisque vel odio eros. Curabitur vulputate magna risus, quis ullamcorper nisi rutrum in. Sed lobortis lectus vitae mauris rutrum, ornare hendrerit dui varius. Praesent volutpat pharetra odio, eu tristique nisl condimentum eget. Mauris sem purus, lacinia nec placerat nec, faucibus eget eros. Praesent nec molestie est. Aliquam vitae sem aliquam, fringilla tellus ut, egestas sapien. Aenean vitae magna vestibulum, mollis enim ut, venenatis est. Ut quis sagittis purus. Donec enim dui, egestas non elit in, varius elementum lorem. Proin quis dolor nibh."});
});

app.get("/form",function(req,res)
{
  res.render("form.hbs",{junk:"My form page"});
});

app.post("/results",function(req,res)
{
  res.render("results.hbs",{junk:"Name:" + req.body.name+ "  " +"  Email:"+req.body.email +"   Comments: "+ req.body.comments });
});


app.get("/Chocolate",function(req,res) {
   
});
app.listen(3000,()=>{console.log("Server running on port 3000")});