import throttle from "lodash.throttle";

// const refs = {
//     form: document.querySelector('.feedback-form '),
//     textarea: document.querySelector('.feedback-form textarea')
// }
// form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input',throttle(onTextareaInput, 500));

const form = document.querySelector('.feedback-form')
 let formData = {};


form.addEventListener('input', throttle((event) =>{
    formData[event.target.name]= event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));


}), 500);

 if(localStorage.getItem('feedback-form-state')){
    formData= JSON.parse(localStorage.getItem('feedback-form-state'));
    for (let key in formData){
        form.elements[key].value = formData[key];
    }
 }
 form.addEventListener('submit',
function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
    console.log(formData);
  }
 )


// function outputToFormData() {
//     const savedMessage = localStorage.getItem('feedback-form-state');
//     const parsedMsg = JSON.parse(savedMessage);
//     if (savedMessage) {
//       formInput.value = parsedMsg.email;
//       textarea.value = parsedMsg.message;
//     }
   
// }
//   outputToFormData();

  
//   function onTextareaInput(event){
//     const message = event.currentTarget.value;
//     localStorage.setItem('feedback-form-state', message);
//   }


//   function populateTextarea(event){
//     const savedMessage = localStorage.getItem('feedback-form-state');
//     if(savedMessage){
//         refs.textarea.value = savedMessage;
//     }


//   }
//   populateTextarea();