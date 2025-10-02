//validate form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userEmail = contactForm.userEmail.value;
  const userPhone = contactForm.userPhone.value;
  const userMessageType = contactForm.userMessageType.value;
  const userMessage = contactForm.userMessage.value;

  const isValid = validateForm(
    userEmail,
    userPhone,
    userMessageType,
    userMessage
  );

  if (isValid) {
    //show loading
    const ticketId = document.getElementById("ticketId")
    const resUI =  document.getElementById("responseMessage")


    resUI.style.display = "block";
    resUI.innerHTML = "Loading...";
    resUI.classList.add("loading");
    
    const payload = {
      userEmail: userEmail.trim().toLowerCase(),
      userPhone: userPhone.trim(),
      userMessageType: userMessageType.trim(),
      userMessage: userMessage.trim(),
    };
    const response = submitForm(payload);
    ticketId.innerHTML = response.id;


    resUI.classList.remove("loading");
   resUI.innerHTML = response.response;
   resUI.style.display = "block";
   resUI.classList.add("success");
   
   contactForm.reset();
   contactForm.userEmail.focus();


   setTimeout(() => {
    resUI.style.display = "none";
    resUI.classList.remove("success");
   }, 10000);




  }
});

const validateForm = (userEmail, userPhone, userMessageType, userMessage) => {
  if (userEmail === "") {
    contactForm.userEmail.style.border = "2px solid red";
    contactForm.userEmail.focus();
    return false;
  } else {
    contactForm.userEmail.style.border = "2px solid green";
  }
  if (userPhone === "") {
    contactForm.userPhone.style.border = "2px solid red";
    contactForm.userPhone.focus();
    return false;
  } else {
    contactForm.userPhone.style.border = "2px solid green";
  }
  if (userMessageType === "") {
    contactForm.userMessageType.style.border = "2px solid red";
    contactForm.userMessageType.focus();
    return false;
  } else {
    contactForm.userMessageType.style.border = "2px solid green";
  }
  if (userMessage === "") {
    contactForm.userMessage.style.border = "2px solid red";
    contactForm.userMessage.focus();
    return false;
  } else {
    contactForm.userMessage.style.border = "2px solid green";
  }
  return true;
};

const submitForm = (payload) => {
  //genertae id
  // generate random id
  const id = "contact_" + Math.floor(10000 + Math.random() * 9000);
 
  const responseMessage = "Form submitted successfully";

  const getResponse = setTimeout(() => {
    return responseMessage;
  }, 10000);


  const response = {
    response: responseMessage,
    id: id,
  };

  return response;
};


const copyId = (id) => {
  const idUI = document.getElementById("ticketId");
  navigator.clipboard.writeText(id);
  idUI.innerHTML = "Copied to clipboard";
  idUI.classList.add("success");
  setTimeout(() => {
    idUI.innerHTML = "Copy";
    idUI.classList.remove("success");
  }, 1000);
};


