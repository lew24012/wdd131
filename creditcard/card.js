function isCardNumberValid(number) {
	return number === '1234123412341234'
}

function isFutureDate(monthStr, yearStr) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    console.log(`Current month: ${currentMonth}, Current year: ${currentYear}`);
    const enteredMonth = parseInt(monthStr);
    const enteredYear = parseInt(yearStr) + 2000;
    console.log(`Entered month: ${enteredMonth}, Entered year: ${enteredYear}`);

    if (isNaN(enteredMonth) || isNaN(enteredYear) || enteredMonth < 1 || enteredMonth > 12) {
        return false;
    }

    if (enteredYear > currentYear) {
        return true;
    }

    if (enteredYear === currentYear) {
        if (enteredMonth >= currentMonth) {
            return true;
        }
    }

    if (enteredYear < currentYear) {
        return false;
    }

    if (enteredYear === currentYear && enteredMonth < currentMonth) {
        return false;
    }
}

function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	document.querySelector('.errorMsg').innerHTML = ''
	let errorMsg = ''
	console.log(event.target.cardNumber.value)
	displayError('')
	if (isNaN(event.target.cardNumber.value)) {
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		errorMsg += 'Card number is not a valid card number\n'
	} 
    if (isFutureDate(event.target.expirationMonth.value, event.target.expirationYear.value) == false) {
        errorMsg += 'Expiration date is not valid\n'
    }
	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}
	return true
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);
