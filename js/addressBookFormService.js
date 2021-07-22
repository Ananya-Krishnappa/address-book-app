window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#firstName');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new Contact()).firstName = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
})

function save(event) {
    event.preventDefault();
    event.stopPropagation();
    try {
        let postUrl = "http://localhost:3000/AddressBook/";
        let methodType = "POST";
        let contact = createContactInAddressBook();
        let id = extractIdFromUrl();
        if (id) {
            contact.id = id;
            postUrl = `http://localhost:3000/AddressBook/${id}`;
            methodType = "PUT";
        }
        makePromiseCall(methodType, postUrl, true, contact)
            .then(responseText => {
                console.log("New Contact Added:" + responseText);
                location.href = '../pages/homePage.html';
            })
            .catch(error => {
                console.log(`${methodType} error status:` + JSON.stringify(error));
            });
    } catch (e) {
        console.error(e);
    }
}

function createContactInAddressBook() {
    let contact = new Contact();
    contact._firstName = document.forms["form"]["firstName"].value;
    contact._address = document.forms["form"]["address"].value;
    contact._city = document.forms["form"]["city"].value;
    contact._state = document.forms["form"]["state"].value;
    contact._phoneNumber = document.forms["form"]["phone"].value;
    contact._zip = document.forms["form"]["zip"].value;
    console.log(contact.toString());
    return contact;
}

const resetForm = () => {
    setValue('#firstName', '');
    setValue('#address', '');
    setValue('#city', 'Bengaluru');
    setValue('#state', 'Karnataka');
    setValue('#phone', '');
    setValue('#zip', '');
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}