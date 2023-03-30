let searchbtn=document.querySelector("#search-btn");
let searchform=document.querySelector(".search-form");
let like=document.querySelector("#heart");
let loginform=document.querySelector(".login_form");
let menu=document.querySelector("#menu");
let times=document.querySelector("#times");
let nav_bar=document.querySelector(".navbar");
let contact=document.querySelector("#contact");
let contacto=document.querySelector(".contact");
let menu1=document.getElementsByClassName('menu1');
function showbar()
{
    searchbtn.className="fa fa-times";
    searchform.style.display="flex";
     searchbtn.setAttribute("onclick","hiddenbar()");
    
}
function hiddenbar()
{
    searchbtn.className="fa fa-search";
     searchform.style.display="none";
     searchbtn.setAttribute("onclick","showbar()");  
}
function heart()
{
    like.classList.toggle("fa-solid");  
 }
 
 function show_form()
 {
     loginform.classList.add("active");
 }
 function hideform()
 {
     loginform.classList.remove("active"); 
 }
 function showmenu()
 {
     nav_bar.classList.toggle("active");  
 }
 function show_contact(){
    contacto.style.display="flex";

}
function hidecontact(){
    
    contacto.style.display="none";
}
function showmenu(){
    document.querySelector('.menu1').style.height='180px';
    document.querySelector('.menu1').style.width='110px';
    document.querySelector('.purchases').style.right='50px';
    document.querySelector('#shirt').style.right='70px';
    document.querySelector('#shoes').style.right='70px';
    document.querySelector('#accessories').style.right='70px';
    document.querySelector('#total').style.right='70px';
    document.querySelector('#cost').style.right='20px';
    document.querySelector('#total').style.right='70px';
    document.querySelector('.exit').style.left='2px';
}
function hidemenu(){
    document.querySelector('.menu1').style.height='0px';
    document.querySelector('.menu1').style.width='0px';
    document.querySelector('.purchases').style.right='-200px';
    document.querySelector('#shirt').style.right='-200px';
    document.querySelector('#shoes').style.right='-200px';
    document.querySelector('#accessories').style.right='-200px';
    document.querySelector('#cost').style.right='-200px';
    document.querySelector('#total').style.right='-200px';
    document.querySelector('.exit').style.left='200px';
}
