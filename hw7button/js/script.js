let btnGoTop = document.getElementById("btn__show-modal");
btnGoTop.addEventListener('click', () => {
    showModalBox();
});

showModalBox();

function showModalBox() {
    let modalBox = createModalBox();
    document.body.appendChild(modalBox);
}

function createModalBox() {
    let modalBox = document.createElement('div');
    modalBox.classList.add('my-modal-box');

    let inputName = document.createElement('input');
    inputName.classList.add('my-modal-box__input-name');
    inputName.type = "text";
    inputName.name = "name";
    inputName.id = "name";
    inputName.placeholder = "Entre your name";

    let inputEmail = document.createElement('input');
    inputEmail.classList.add('my-modal-box__input-email');
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.id = "email";
    inputEmail.placeholder = "Entre your email";

    let btnSend = document.createElement('button');
    btnSend.classList.add('my-modal-box__btn-send');
    btnSend.innerText = 'Go';

    // var checkEmail = inputEmail.value.indexOf("@");

    btnSend.addEventListener('click', () => {
        if (inputEmail.value.indexOf("@") == -1) {
            alert("Вы ввели неправильный E-mail");
        } else {
            alert("Your E-mail is - " + inputEmail.value + ", Your Name is - " + inputName.value);
        }
        document.body.removeChild(modalBox);
    });

    let btnCancel = document.createElement('button');
    btnCancel.classList.add('my-modal-box__btn-cancel');
    btnCancel.innerText = 'Cancel';
    btnCancel.addEventListener('click', () => {
        document.body.removeChild(modalBox);
    })

    modalBox.appendChild(inputName);
    modalBox.appendChild(inputEmail);
    modalBox.appendChild(btnSend);
    modalBox.appendChild(btnCancel);
    return modalBox;
}