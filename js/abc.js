

 function findsum()
{
             var a,b,c;
             a=document.getElementById("a").value;
             b=document.getElementById("b").value;
             c=Number(a)+Number(b);
           // document.getElementById("result").innerHTML="<u>Sum of two number is</u> "+c;
           document.getElementById("result").innerText="Your Sum is "+c;
}


