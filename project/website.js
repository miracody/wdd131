// Create a user message object
const userMessage = {
  name: "",
  email: "",
  message: ""
};


const messageLog = [];

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  
  userMessage.name = document.getElementById("name").value.trim();
  userMessage.email = document.getElementById("email").value.trim();
  userMessage.message = document.getElementById("message").value.trim();

  
  if (userMessage.name && userMessage.email && userMessage.message) {
    
    messageLog.push({ ...userMessage });
   
    alert(`Thank you, ${userMessage.name}! Your message has been received.`);

    
    messageLog.forEach((msg, index) => {
      console.log(`Message ${index + 1}: ${msg.name} - ${msg.email}`);
    });

    clearForm();
  } else {
    alert("Please fill out all fields before submitting.");
  }
}


function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
});
