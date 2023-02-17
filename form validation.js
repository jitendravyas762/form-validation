const form=document.querySelector("form")
form.onsubmit=(e)=>{
    e.preventDefault()
const name=document.querySelector(".name")
const email=document.querySelector(".email")
const number=document.querySelector(".number")
const gender=document.querySelectorAll(".gender")
const address=document.querySelector(".address")
const courses=document.querySelector(".courses")


let expname=/^[a-zA-Z ]{3,50}$/
// let expemail=/^[a-zA-Z0-9]+\.\_\@[a-zA-Z0-9]\.[a-zA-Z]{2,3}$/
let expemail=/^[a-zA-Z0-9\.\_\+]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/
let expnum=/^[0-9]{10}$/

if(check(name,expname,"enter your currect name")){
    if(check(email,expemail,"enter your currect email")){
        if(check(number,expnum,"enter your currect number")){
            if(check1(gender,"select gender")){
                document.querySelector("form").submit()
                alert("your form has been submit")
            }

        }

    }

}
return false;





}

function check(element,regax,msg){
 if(element.value.match(regax)){
    return true;
 }
 else{
    alert(msg)
    return false
 }
   
    
}
function check1(elements,msg){
    let arr=false
    for( let i=0; i<elements.length; i++){
        if(elements[i].checked){
            return arr=true;
         }
     
       else{
         alert("select your gender")
       }

    }
    
      
       
   }
