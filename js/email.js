templateID = "template_hhzzcmu"
serviceID = "service_1n46doc"
templateParams = {
  name: fields.name.value,
  phone: fields.phone.value,
  service: fields.service.value
}

function sendEmail() {
  emailjs.send(serviceID, templateID, templateParams)
}
