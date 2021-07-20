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

function save() {
    try {
        let contact = createContactInAddressBook();
        createAndUpdateStorage(contact);
    } catch (e) {
        console.error(e);
    }
}

function createContactInAddressBook() {
    let contact = new Contact();
    contact._id = new Date().getTime();
    return getFormData(contact);
}

function getFormData(contact) {
    contact._firstName = document.forms["form"]["firstName"].value;
    contact._address = document.forms["form"]["address"].value;
    contact._city = document.forms["form"]["city"].value;
    contact._state = document.forms["form"]["state"].value;
    contact._phoneNumber = document.forms["form"]["phone"].value;
    contact._zip = document.forms["form"]["zip"].value;
    console.log(contact.toString());
    return contact;
}

function createAndUpdateStorage(contact) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(contact);
    } else {
        addressBookList = [contact]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}