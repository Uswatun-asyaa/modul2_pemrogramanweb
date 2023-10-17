// script.js
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("Alamat").value;

    var fieldsNotFilled = [];

    if (name === "") {
        fieldsNotFilled.push("Name");
    }
    if (email === "") {
        fieldsNotFilled.push("Email");
    }
    if (alamat === "") {
        fieldsNotFilled.push("Alamat");
    }

    if (fieldsNotFilled.length > 0) {
        var confirmation = confirm("Fields " + fieldsNotFilled.join(", ") + " are not filled. Do you want to continue?");
        if (!confirmation) {
            return false;
        }
    }
    return true;
}
