let searchbtn=document.querySelector("#search-btn");
let searchform=document.querySelector(".search-form");
let like=document.querySelector("#heart");
let loginform=document.querySelector(".login_form");
let menu=document.querySelector("#menu");
let times=document.querySelector("#times");
let nav_bar=document.querySelector(".navbar");
let contact=document.querySelector("#contact");
let contacto=document.querySelector(".contact");
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