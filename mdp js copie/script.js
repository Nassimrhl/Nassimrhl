var copyBTN = document.getElementById("copyBTN");

function getPassword() {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var passwordLength = 14;
    var password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }

    document.getElementById('password').value = password;

    copyBTN.style.background = "#6c757d";
    copyBTN.style.color = "#fff";
}

function copyMdp() {
    var inputPassword = document.getElementById('password');

    if (inputPassword.value.length == 14) {
        navigator.clipboard.writeText(inputPassword.value)
            .then(() => {
                copyBTN.style.background = "transparent";
                copyBTN.style.color = "#000";
                alert("Mot de passe copié !");
            })
            .catch(err => {
                alert("Mot de passe copié !");
                console.error(err);
            });
    } else {
        alert("Veuillez générer un mot de passe !");
    }
}
