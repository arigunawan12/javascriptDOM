const footer = document.getElementsByClassName("copyright");
footer[0].innerHTML = "Copyright @wahyuarigunawan";
footer[0].style.fontSize = "larger";

document.getElementsByClassName("contact-us-btn")[0].addEventListener("click", function () {
  alert(
    "Thanks for being awesome! \n\nWe have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members.\n\nOtherwise, we will reply by email as soon as possible.\n\nTalk to you soon,Flix Movie Admin"
  );
});

let div = document.getElementsByClassName("alert");
div[0].innerHTML = "Claim Your Free Membership Now <strong>Click Here</strong>";
div[0].style.textAlign = "center";
document.body.append(div);
setTimeout(() => div[0].remove(), 5000);
