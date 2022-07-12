const form =document.getElementsByTagName('form')[0];
function validate(callback) {
    var username = document.getElementById("username")
    var password = document.getElementById("pwd")
    var regexp = /^([a])([d])([m])([i])([n])$/
    var regexp2 =/^([1])([2])([3])([4])([5])$/



    if(username.value.trim()==="" || password.value.trim()===""){
        alert("Empty fields");
        return false;
}
else if(!regexp.test(username.value)) {
    alert("Invalid Username ");
    return false;
}
else if(!regexp2.test(password.value)) {
    alert("Invalid Password");
    return false;
}
else {
    return true;
}
callback();
}

form.addEventListener('submit' , function (event) {
    if(!validate()) {
        event.preventDefault();
    }
});


