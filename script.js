const nama = document.querySelector('input[id="name"]');
const email = document.querySelector('input[id="email"]');
const city = document.querySelector('input[id="city"]');
const zipCode = document.querySelector('input[id="zip-code"]');
const status = document.querySelector('input[id="status"]');


function handleGetFormData() {
    return {
        name : nama.value,
        email : email.value,
        city : city.value,
        zipCode : zipCode.value,
        status : checkboxIsChecked(),
    }
}

function isNumber(str) {
    return !isNaN(str);
}

function checkboxIsChecked(){
    return status.checked;
}


function validateFormData(obj){
    if(obj.name != "" && obj.city != "" && obj.email != "" && obj.zipCode != "" && isNumber(obj.zipCode) && checkboxIsChecked()) {
        return true;
    } else {
        return false;
    }
}

function submit(){
    const warning = document.getElementById('warning');
    objek = handleGetFormData();
    if(validateFormData(objek) == false){
        warning.innerHTML = "Periksa form anda sekali lagi";
        return false;
    } else {
        warning.innerHTML = "";
        return true;
    }
}

const submitForm = document.getElementById('submit-form');
submitForm.addEventListener('click', function(e) {
    if(submit() == false) {
        e.preventDefault();
    }
});
