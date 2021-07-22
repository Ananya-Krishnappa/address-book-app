/**
 * Validate the inputs that are added to the contact in address book
 */
class Contact {
    id;
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "first name is incorrect";
        }
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let nameRegex = RegExp('^[A-Za-z0-9]{4,}$');
        if (nameRegex.test(address)) {
            this._address = address;
        } else {
            throw "address is incorrect";
        }
    }
    get city() {
        return this._city;
    }
    set city(city) {
        let nameRegex = RegExp('^[A-Za-z]{4,}$');
        if (nameRegex.test(city)) {
            this._city = city;
        } else {
            throw "city is incorrect";
        }
    }
    get state() {
        return this._state;
    }
    set state(state) {
        let nameRegex = RegExp('^[A-Za-z]{4,}$');
        if (nameRegex.test(state)) {
            this._state = state;
        } else {
            throw "state is incorrect";
        }
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let nameRegex = RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
        if (nameRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw "phoneNumber is incorrect";
        }
    }
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let nameRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if (nameRegex.test(zip)) {
            this._zip = zip;
        } else {
            throw "zip is incorrect";
        }
    }

    toString() {
        return "id=" + this.id + ",firstName=" + this.firstName + ",address=" + this.address + ",city=" + this.city + ",state=" + this.state + ",phoneNumber=" + this.phoneNumber + ",zip=" + this.zip;
    }
}