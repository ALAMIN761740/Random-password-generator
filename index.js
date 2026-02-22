const btnE1 = document.querySelector(".generate-btn");
const inputE1 = document.getElementById("input");
const copyE1 = document.querySelector(".fa-copy");
const alertContainerE1 = document.querySelector(".alert-container");




btnE1.addEventListener("click", () => {
    createPassword();
});

copyE1.addEventListener("click", () => {
    copyPassword();
    if (inputE1.value ) {
            alertContainerE1.classList.add("active");

            setTimeout(() => {
            alertContainerE1.classList.remove("active");
        }, 2000);
    }
    else {        
        alertContainerE1.innerText = "Please generate a password first!";
        alertContainerE1.classList.add("active"); 
        setTimeout(() => {            alertContainerE1.classList.remove("active");
        }, 2000);
    }  
});



// generate password
function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    inputE1.value = password;
    alertContainerE1.innerText = password + " copied to clipboard!";
}

// copy password to clipboard
function copyPassword() {    
    inputE1.select();
    inputE1.setSelectionRange(0, 99999); // For mobile devices
    function copyPassword() {    
    navigator.clipboard.writeText(inputE1.value);
}
}