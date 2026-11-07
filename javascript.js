function data(){
let a = document.getElementById("name").value.trim();
let b = document.getElementById("phoneno").value.trim();
let c = document.getElementById("email").value.trim();
let d = document.getElementById("password").value;
let e = document.getElementById("confirm-password").value;

if(a===""|| b===""||c===""||d===""||e===""){
    alert("All the fileds are required")
}else if(a.length<=6){
    alert("Username should contain aleast 6 characters");
    return false;
}else if(b.length !==10){
    alert("Enter a valid phone no.");
    return false;
}else if(d.length<=8){
    alert("Password should have aleast 8 characters");
    return false;
}else if(d !== e){
    alert("password dosen't match");
    return false;
}
return true;
}

