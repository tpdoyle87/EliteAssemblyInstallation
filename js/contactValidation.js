let fields = {
  email: document.getElementById('email'),
  phone: document.getElementById('phone'),
  name: document.getElementById('name'),
  service: document.getElementById('service'),
  hidden: document.getElementById('hidden')
}


function validateEmail() {
  let email = document.getElementById('email').value
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    fields.email.classList.remove('failed')
    fields.hidden.classList.add('hide')
    fields.hidden.classList.remove('error')
    return true
  } else {
    fields.email.classList.add('failed')
    fields.hidden.classList.remove('hide')
    fields.hidden.classList.add('error')
    return false
  }
}

function validatePhone() {
  let phone = document.getElementById('phone').value
  if (/^\d{10}$/.test(phone)) {
    fields.phone.classList.remove('failed')
    fields.hidden.classList.add('hide')
    fields.hidden.classList.remove('error')
    return true
  } else {
    fields.phone.classList.add('failed')
    fields.hidden.classList.remove('hide')
    fields.hidden.classList.add('error')
    return false
  }
}

function validateName() {
  let name = document.getElementById('name').value
  if (name.length > 0) {
    fields.name.classList.remove('failed')
    fields.hidden.classList.add('hide')
    fields.hidden.classList.remove('error')
    return true
  } else {
    fields.name.classList.add('failed')
    fields.hidden.classList.remove('hide')
    fields.hidden.classList.add('error')
    return false
  }
}

function validateService() {
  let service = document.getElementById('service').value
  if (service.length > 0) {
    fields.service.classList.remove('failed')
    fields.hidden.classList.add('hide')
    fields.hidden.classList.remove('error')
    return true
  } else {
    fields.service.classList.add('failed')
    fields.hidden.classList.remove('hide')
    fields.hidden.classList.add('error')
    return false
  }
}

function validateForm() {
  let success = true
  functionArray = [validateEmail(), validatePhone(), validateName(), validateService()]
  for(let i = 0; i < functionArray.length; i++) {
    if (success) {
      success = functionArray[i]
    } else {
      functionArray[i]
    }
  }
  return success
}
