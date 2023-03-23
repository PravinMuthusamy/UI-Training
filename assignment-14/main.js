function formValidate() {
  const inputFields = [
    {
      id: "first",
      name: "First Name",
      ptag: "firstName",
      regex: /^[a-zA-Z]{1,30}$/,
      errorMsg: "First Name is not valid",
    },
    {
      id: "last",
      name: "Last Name",
      ptag: "lastName",
      regex: /^[a-zA-Z]{1,30}$/,
      errorMsg: "Last Name is not valid",
    },
    {
      id: "email",
      name: "Email Address",
      ptag: "e-mail",
      regex: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
      errorMsg: "Email Address is not valid",
    },
    {
      id: "phone",
      name: "Phone Number",
      ptag: "phoneNumber",
      regex: /^\d{10}$/,
      errorMsg: "Phone Number is not valid",
    },
    {
      id: "pincode",
      name: "Pin Code",
      ptag: "pinCode",
      regex: /^\d{6}$/,
      errorMsg: "Pin Code is not valid",
    },
    {
      id: "card",
      name: "Card Number",
      ptag: "cardNumber",
      regex: /^\d{16}$/,
      errorMsg: "Card Number is not valid",
    },
    {
      id: "expiry",
      name: "Card Expiry",
      ptag: "cardExpiry",
      regex: /^(20)[2-9][3-9]$/,
      errorMsg: "Card Expiry is not valid",
    },
    {
      id: "CVV",
      name: "CVV",
      regex: /^\d{3,4}$/,
      ptag: "cvv",
      errorMsg: "CVV is not valid",
    },
  ];
  let flag = true;
  inputFields.forEach((field) => {
    let input = document.getElementById(field.id);
    let inputValue = input.value.trim();
    if (inputValue === "") {
      input.style.borderColor = "#ff0000";
      document.getElementById(field.ptag).innerText == field.name + " is required";
      flag = false;
    } 
    else if (!field.regex.test(inputValue)) {
      input.style.borderColor = "#ff0000";
      document.getElementById(field.ptag).innerText = field.errorMsg;
      flag = false;
    } 
    else {
      input.style.borderColor = "#d4d4d4";
      document.getElementById(field.ptag).innerText = "";
    }
  });
  return flag;
}
