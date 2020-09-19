let templateID = "template_exxxm6f"
let serviceID = "service_6jp8yle"

function templateParams() {
  return {
    name: fields.name.value,
    phone: fields.phone.value,
    service: fields.service.value
  }
}

function loadingSpinner() {
  document.getElementById('remove').innerHTML = '<div id="spinner" class="set-height cen-spin"><i class="fas fa-spinner medium spin"></i><p>Sending...</p></div>'
  // document.getElementById('spinner').classList.add('show-success');
}

function replaceContactForm() {
  document.getElementById('remove').innerHTML = '<div id="ease-in" class="green hide set-height"><i class="fas fa-check large"></i><p>We have recieved your request and</p><p>we will be in touch soon</p></div>'
  document.getElementById('ease-in').classList.add('show-success')
}

function sendEmail() {
  if (validateForm()) {
    let params = templateParams()
    loadingSpinner()
    emailjs.send(serviceID, templateID, params).then(function(response) {
      replaceContactForm()
      console.log("Success", response)
    }, function(error) {
      alert("It looks like something went wrong.")
      console.log("Failed", error)
    })
  }
}
