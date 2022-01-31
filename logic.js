var acoeff = document.getElementById("acoeff");
var bcoeff = document.getElementById("bcoeff");
var ccoeff = document.getElementById("ccoeff");
var form = document.getElementById("eqnform");

var setline1=document.getElementById("rline1");
var setline2=document.getElementById("rline2");

form.addEventListener("submit",function(event){
    var a=parseFloat(acoeff.value);
    var b=parseFloat(bcoeff.value);
    var c=parseFloat(ccoeff.value);
    var d= b*b - 4*a*c;
    
    var line1="";
    var line2="";
    
    if(d<0){
        line1="No real roots exist for this equation.";
        line2="Try again with another one.";
    }

    else if(d==0){
        line1="The roots are equal.";
        var root = (-b)/(2*a);
        line2="Root is : " + root;
    }
    else{
        line1="Two distinct roots exist."
        var root = Math.ceil(Math.sqrt(d)*100)/100;
        var root1=(-b-root)/(2*a);
        var root2 = (-b+root)/(2*a);
        line2 = "Roots are " + root1 + " and " + root2;
    }
    setline1.innerHTML=line1;
    setline2.innerHTML=line2;
    event.preventDefault();
});