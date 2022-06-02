function invalidInput() {
  const firstName = document.getElementById('first-name-field__input').value;
  const lastName = document.getElementById('last-name-field__input').value;
  const email = document.getElementById('email-field__input').value;
  const password = document.getElementById('password-field__input').value;

  if (firstName == '') {
    document.getElementById('first-name__invalid-symbol').style.visibility = 'visible';
    document.getElementById('first-name__invalid-text').style.visibility = 'visible';
    document.getElementById('first-name-field').style.border = '2px solid hsl(0, 100%, 74%)';
    document.getElementById('first-name-field').style.marginBottom = '1.5rem';
    document.getElementById('first-name-field__input').style.color = 'hsl(0, 100%, 74%)'
  } 
  else {
    document.getElementById('first-name__invalid-symbol').style.visibility = 'hidden';
    document.getElementById('first-name__invalid-text').style.visibility = 'hidden';
    document.getElementById('first-name-field').style.border = '1px solid hsl(246, 25%, 77%';
    document.getElementById('first-name-field').style.marginBottom = '0';
    document.getElementById('first-name-field__input').style.color = 'rgba(0, 0, 0, 0.7)'
  }

  if (lastName == '') {
    document.getElementById('last-name__invalid-symbol').style.visibility = 'visible';
    document.getElementById('last-name__invalid-text').style.visibility = 'visible';
    document.getElementById('last-name-field').style.border = '2px solid hsl(0, 100%, 74%)';
    document.getElementById('last-name-field').style.marginBottom = '1.5rem';
    document.getElementById('last-name-field__input').style.color = 'hsl(0, 100%, 74%)'
  } 
  else {
    document.getElementById('last-name__invalid-symbol').style.visibility = 'hidden';
    document.getElementById('last-name__invalid-text').style.visibility = 'hidden';
    document.getElementById('last-name-field').style.border = '1px solid hsl(246, 25%, 77%';
    document.getElementById('last-name-field').style.marginBottom = '0';
    document.getElementById('last-name-field__input').style.color = 'rgba(0, 0, 0, 0.7)'
  }

  if (email == '') {
    document.getElementById('email__invalid-symbol').style.visibility = 'visible';
    document.getElementById('email__invalid-text').style.visibility = 'visible';
    document.getElementById('email-field').style.border = '2px solid hsl(0, 100%, 74%)';
    document.getElementById('email-field').style.marginBottom = '1.5rem';
    document.getElementById('email-field__input').style.color = 'hsl(0, 100%, 74%)'
  } 
  else {
    document.getElementById('email__invalid-symbol').style.visibility = 'hidden';
    document.getElementById('email__invalid-text').style.visibility = 'hidden';
    document.getElementById('email-field').style.border = '1px solid hsl(246, 25%, 77%';
    document.getElementById('email-field').style.marginBottom = '0';
    document.getElementById('email-field__input').style.color = 'rgba(0, 0, 0, 0.7)'
  }

  if (password == '') {
    document.getElementById('password__invalid-symbol').style.visibility = 'visible';
    document.getElementById('password__invalid-text').style.visibility = 'visible';
    document.getElementById('password-field').style.border = '2px solid hsl(0, 100%, 74%)';
    document.getElementById('password-field').style.marginBottom = '1.5rem';
    document.getElementById('password-field__input').style.color = 'hsl(0, 100%, 74%)'
  } 
  else {
    document.getElementById('password__invalid-symbol').style.visibility = 'hidden';
    document.getElementById('password__invalid-text').style.visibility = 'hidden';
    document.getElementById('password-field').style.border = '1px solid hsl(246, 25%, 77%';
    document.getElementById('password-field').style.marginBottom = '0';
    document.getElementById('password-field__input').style.color = 'rgba(0, 0, 0, 0.7)'
  }
}