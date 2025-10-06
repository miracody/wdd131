const userMessage = {
  name: "",
  email: "",
  message: ""
};

//Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); 

  userMessage.name = document.getElementById("name").value.trim();
  userMessage.email = document.getElementById("email").value.trim();
  userMessage.message = document.getElementById("message").value.trim();

  
  if (userMessage.name && userMessage.email && userMessage.message) {
    
    alert(`Thank you, ${userMessage.name}! Your message has been received. We'll reply to ${userMessage.email} soon.`);
  } else {
    alert("Please fill out all fields before submitting.");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
});
