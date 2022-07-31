const navLink = document.getElementById("navLink");
function showMenu(){
    navLink.style.right="0";
}
function hideMenu(){
    navLink.style.right = "-200px"
}
// geting the form,name,email,telephone,message by id
document.querySelector("#form").addEventListener("submit",formvalidation);
const inputname = document.getElementById("name");
const email = document.getElementById("email");
const telephone = document.getElementById("Telephone");
const message = document.getElementById("Message");
const btn = document.getElementById("btnFunction");

// //to remove the error message before submit
// clearError([inputname,email,telephone,message]);
// function clearError(inputArr){
//   inputArr.forEach(input =>{
//     const formGroup = input.parentElement;
//     formGroup.className= "form-group-error";
//     const small = formGroup.querySelector("small");
//     small.innerText = ''; 
//   });
       
//   };

//Adding ShowError message

function showError(input, message)
{
    const formGroup = input.parentElement;
    formGroup.className= "form-group-error";
    const small = formGroup.querySelector("small");
    small.innerText = message; 
    small.style.fontSize = "14px";
}
//Adding ShowSucces message
function showSuccess(input){
    formGroup = input.parentElement;
    formGroup.className = "form-group-success";
}

//checkRequired
 function checkRequired(inputArr){
  inputArr.forEach(input => {
    if(input.value.trim() ===  "" ){
      showError(input,`${getFieldName(input)} Field is Required`)
    }
    else{
      showSuccess(input);
    }
  });
 }
//get field name
function  getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// function to check input using regrex
function checkInputName(name){
    var text = /^[A-Za-z. ]{3,50}$/;
  if(name.value.trim() === ""){
    showError(name,`${getFieldName(name)} Field is Required`)
    return false;
  }
  else if(!text.test(name.value.trim())){
    showError(name,`${getFieldName(name)} Field is invalid`)
    return false;
  }
  else if(text.test(name.value.trim())){
    showSuccess(name);
    return true;
  }
  else if(name.value.length < 3){
    showError(name,`${getFieldName(name)} Field should be atleast 3 character`);
    return false;
  }
  else if(name.value.length > 50){
    showError(name,`${getFieldName(name)} Field should not be geater than 50 character`);
    return false;
  }

  else{
    showSuccess(name);
    return true;
  }
}
//function to check email
function checkEmail(email){
  if(email.value.trim() === ""){
    showError(email,`${getFieldName(email)}  Field is Required`);
    return false;
  }
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if(!re.test(email.value)){
  showError(email,"Please enter a valid email address");
  return false;
 }
 else if(re.test(email.value)){
  showSuccess(email);
  return true;
 }
 else{
  showSuccess(email);
  return true;
 }
}
//function to check telephone
 function checkTelephone(telephone){
  if(telephone.value.trim() === ""){
    showError(telephone, `${getFieldName(message)}  Field is Required`);
    return false;
  }
    var tel =/^(\+234|234|0)(701|702|703|704|705|706|707|708|709|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907|912|913|914|915|916|917|918|919)([0-9]{7})$/
      if(!tel.test(telephone.value))
      {
        showError(telephone,"Please enter a valid number");
        return false;
      }
      else{
        showSuccess(telephone);
        return true;
      }
    }
  //function to check message min
  function checkMessageMaxLength(messages){
    if(messages.value.trim() === ""){
      showError(messages, `${getFieldName(messages)} Field is Required`);
    return false;
    }
    else if(messages.value.length < 3)
    {
    showError(messages, `${getFieldName(messages)} field should be atleast 3 character`);
    return false;
    }
  else{
    showSuccess(messages);
    return true;
  }
}
//function to check message input
 function formvalidation(e){
  e.preventDefault();
  checkInputName(inputname);
  checkEmail(email);
  checkTelephone(telephone);
  checkMessageMaxLength(message);

 if(checkEmail(email) && checkInputName(inputname) && checkMessageMaxLength(message) && checkTelephone(telephone))
{
  sendEmail(inputname,email,message);
  document.querySelector("#form").reset();
}

 }
function sendEmail(input, Useremail, UserMessage){
  let mypromise = new Promise(function(resolve){
    if(resolve){
      resolve("Your message has been sent")
     }
  })
   
  Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nwubasilas@yahoo.com",
        Password:"99FCC7E92DA6630BB0665276067C1D01843E",
        //Passlword : "yxndxscaebtuivto",
        To : "nwubasilas@yahoo.com",
        From : `${Useremail.value}`,
        Subject : `${input.value} sent a message`,
        Body :`Name : ${input.value} <br> Email Address : ${Useremail.value} <br> Message: ${UserMessage.value}`,
      }); 
      mypromise.then((message)=> 
      {
        Swal.fire({
          icon: 'success',
          title:`${message}`,
        });
      });
    }






















































// //checkInputName 
// function  checkInputName(input){
//   var text = /^[a-z\u00C0-\u02AB'´`]+\.?\s?([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/;
//   if(text.test(input.value.trim())){
//     showSuccess(input);
//     return true;
//   }
//   else if(input.value.trim() === ""){
//     showError(input,`${getFieldName(input)} field is required`);
//     return false;
//   }
//   else{
//     showError(input,`${getFieldName(input)} field required character`);
//     return false;
//   }

// }
// //checkEmail using regrex
// function checkEmail(input){
//   let valid = false;
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if(re.test(input.value.trim())){
//     showSuccess(input);
//     return true;
//   }
//   else if(input.value === ""){
//     showError(input,`${getFieldName(input)} field is required`);
//     return false;
//   }
//   else if(!re.test(input.value.trim())){
//     showError(input,`${getFieldName(input)} field is invalid`);
//     return false;
//   }
//   else{
//     showSuccess(input);
//     return true;
//   }

// }
// //checkTelephone using regrex
// function checkTelephone(input){

//   var tel =/^(\+234|234|0)(701|702|703|704|705|706|707|708|709|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907|912|913|914|915|916|917|918|919)([0-9]{7})$/
//   if(tel.test(input.value.trim())){
//     showSuccess(input);
//     return true;
//   }
//   else if(input.value === ""){
//     showError(input, `${getFieldName(input)} field is required`);
//     return false;
//     }
//   else if(!tel.test(input.value.trim())){
//     showError(input, `${getFieldName(input)} field is invalid`);
//     return false;
//   }
//   else {
//     showSuccess(input);
//     return true;
//   }
// }
// // checkMessageLength;
// function checkMessageLength(input, min , max){

//   if(input.value.length > max){
//     showError(input,`${getFieldName(input)} field should be less than ${max} character`);
//     return true;
//   }
//   else if(input.value.trim() === "" ){
//     showError(input, `${getFieldName(input)} field is required`);
//     return false;
//   }
//  else if(input.value.length < min){
//     showError(input,`${getFieldName(input)} field should be atleast ${min} character`);
//     return false;
//   }

//   else{
//     showSuccess(input);
//     return true;
//   }
// }
// //adding Event listerner


 


// if(inputname.value === ""){
//   showError(inputname,"Name field is required");
// }

// else if(!InputnameRegrex(inputname.value)){
//     showError(inputname,"Name field should be between 3 to 30 character");
// }

// else{
//     showSuccess(inputname);
// }
// if(email.value === ""){
//     showError(email," Email field is required");
//   }
//   else{
//     showSuccess(email);
// }
//   if(telephone.value === ""){
//     showError(telephone,"Telephone field is required");
//   }
//   else if(!inputNumberRegrex(telephone.value)){
//     showError(telephone,"Telephone field should be 11 digit");
// }

//   else{
//     showSuccess(telephone);
// }
//   if(message.value === ""){
//     showError(message,"Message field is required");
//   }
// else if(message.value.length < 3){
//   showError(message,"Message should not be less than 3 char");
// }
// else if(message.value.length > 100){
//   showError(message,"Message should not be greater than 100 char");
// }
//   else{
//     showSuccess(message);



// form.addEventListener("submit", (e) =>{
//   if(!isValid){
//     e.preventDefault();
//   }
//   else{
//     checkInputName(inputname);
//     checkEmail(email);
//     checkTelephone(telephone);
//     checkMessageLength(message,5,50);
//   }
  








// //Sending the data to my email
// // function SendEmail(input,Useremail,Usermessage)
// // {
// //   Email.send({
// //     Host:"smtp.gmail.com",
// //     username: "ebukanwuba45@gmail.com",
// //     password : "09092350484",
// //     To: "ebukanwuba@gmail.com",
// //     from: `${Useremail} sent you a message`,
// //     subject : `Name : ${input} <br>
// //     Email Address : ${Useremail}`,
// //     body: ` ${input} says ${Usermessage}`,
// //   })
// // }



















    




