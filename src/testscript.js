// var btn = document.createElement("BUTTON");
// btn.innerHTML = "CLICK ME";
// document.body.appendChild(btn);
// btn.onclick=()=>{this.myFunction2()};


// btn.setAttribute("style","height: 40px;");
// let c;
// bnm={};
// p1={s:'',e:'',m:''};

names=[
    "Bob","John","Dennis","Davis","Mark","Julian","Henry"];
lastnames=[
    "Marley","Cosby","Rodrigez","Iglecias","Tigre","Paquio"];
isActivateds=[
    "yes","no"];

expiresAtDay=[];
for(let i=0;i<=31;i++){
    expiresAtDay.push(i);}

expiresAtMonth=[];
for(let i=0;i<=12;i++){
    expiresAtMonth.push(i);}
    
expiresAtYear=[];
for(let i=2021;i<=2031;i++){
    expiresAtYear.push(i);}

class k{
    id=
        parseInt(Math.random()*500+1);

    name=
        names[parseInt(Math.random()*6)];

    lastname=
        lastnames[parseInt(Math.random()*6)];

    isActivated=
        isActivateds[parseInt(Math.random()*2)];

    expiresAt=
        expiresAtDay[parseInt(Math.random()*expiresAtDay.length)]+"/"
        +
        expiresAtMonth[parseInt(Math.random()*expiresAtMonth.length)]+"/"
        +
        expiresAtYear[parseInt(Math.random()*expiresAtYear.length)];
}

for (let i=0; i<3; i++){
    user=new k;
    console.log(user);}

const list=[];
var ty={}
list.push(ty);

const builds=[];
var p1={i:""};



