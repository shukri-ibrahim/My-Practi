
function manchestergoal(){
 i=document.getElementById('p1')
 i2=i.innerHTML,
 i2++;
 document.getElementById('p1').innerText=i2;

    
} 
// const settime= setTimeout(manchestergoal,5000);

const mytime = setInterval(manchestergoal, 10000);
function manchesterfoal(){
    i=document.getElementById('p2')
    i2=i.innerHTML,
    i2++;
    document.getElementById('p2').innerText=i2;
}
function liverpoolgoal(){
    i=document.getElementById('p3')
    i2=i.innerHTML,
    i2++;
    document.getElementById('p3').innerText=i2
}
const mytime2 = setInterval(liverpoolgoal, 1000);
function liverpoolfoal(){
    i=document.getElementById('p4')
    i2=i.innerHTML,
    i2++;
    document.getElementById('p4').innerText=i2
}
function resetfunctions(){
    i=document.getElementById('p1')
 i2=i.innerHTML,
 i2=0;
 document.getElementById('p1').innerText=i2
 i=document.getElementById('p2')
 i2=i.innerHTML,
 i2=0;
 document.getElementById('p2').innerText=i2
 i=document.getElementById('p2')
 i2=i.innerHTML,
 i2=0;
 document.getElementById('p3').innerText=i2
 i=document.getElementById('p4')
 i2=i.innerHTML,
 i2=0;
 document.getElementById('p4').innerText=i2
}



