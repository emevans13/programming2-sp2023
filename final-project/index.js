const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const timeInput = document.querySelector("#time");
const dateInput = document.querySelector("#date");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "mYvP79rgABXl4xKKV";
const serviceID = "service_lznfn3l";
const templateID = "template_1z8luic";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
   e.preventDefault();

   submitBtn.innerText = "Just a moment...";

   const inputFields = {
      to_name: "Ms. Shepard",
      name: nameInput.value,
      reply_to: emailInput.value,
      date: dateInput.value,
      time: timeInput.value,
      message: messageInput.value,
   };

   emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitBtn.innerText = "Message Sent Successfully.";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }, (error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong";
    });
});







// <script type="text/javascript">
//    (function(){
//       emailjs.init("vEH1UMHM39a54Za5X");
//    })();
// </script>
  
//   <script type="text/javascript">
//     var templateParams = {
//     to_name: 'James',
//     from_name: 'Brianna',
//     message: 'This is a test!!'
// };
 
// emailjs.send('service_mxwnvlt', 'template_njks42p', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });
//   </script>