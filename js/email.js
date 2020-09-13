templateID = "template_hhzzcmu"
serviceID = "service_1n46doc"
templateParams = {
  name: fields.name.value,
  phone: fields.phone.value,
  service: fields.service.value
}
userID = "tpdoyle87@gmail.com"
function sendEmail() {
  if (validateForm()) {
    emailjs.send(serviceID, templateID, templateParams,userID)
  }
}
