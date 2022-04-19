const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const message = document.getElementById('message');

const saveDetails = () => {

	fetch("https://blooming-falls-81359.herokuapp.com/viewer/details", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			firstName: firstNameInput,
		    lastName: lastNameInput,
		    email: emailInput,
		    contactNo: contactInput,
		    message: messageInput
		})
	})

}

let firstNameInput = '';
let lastNameInput = '';
let emailInput = '';
let contactInput = '';
let messageInput = '';

firstName.addEventListener('input', (e) => {
	firstNameInput = e.target.value
})

lastName.addEventListener('input', (e) => {
	lastNameInput = e.target.value
})

email.addEventListener('input', (e) => {
	emailInput = e.target.value
})

contact.addEventListener('input', (e) => {
	contactInput = e.target.value
})

message.addEventListener('input', (e) => {
	messageInput = e.target.value
})
