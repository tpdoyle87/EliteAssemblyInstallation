templateID = "template_hhzzcmu"
serviceID = "service_1n46doc"
templateParams = {
  name: fields.name.value,
  phone: fields.phone.value,
  service: fields.service.value
}
userID = "tpdoyle87@gmail.com"

function replaceContactForm() {
  document.getElementById('remove').innerHTML = '<div id="ease-in" class="green hide set-height"><i class="fas fa-check large"></i><p>We have recieved your request and</p><p>we will be in touch soon</p></div>'
  document.getElementById('ease-in').classList.add('show-success')
}
function sendEmail() {
  if (validateForm()) {
    replaceContactForm()
    emailjs.send(serviceID, templateID, templateParams,userID)
  }
}
