function validateForm() {

    var formAlert = document.querySelector('.form__alert');
    var formInputs = document.querySelectorAll('.form__input input');
    var checkboxBlock = document.querySelector('.form__checkbox');
    var inputText = document.querySelector('input[type="text"]');
    var checkbox = document.querySelector('#check');
    var select = document.querySelector('select');
    var hiddenText = document.querySelector('.form__hidden');
    var button = document.querySelector('button');

    checkbox.addEventListener('change', function() {
        inputText.disabled = this.checked;
    });

    select.addEventListener('change', function() {

        if (select.value === 'value-2' || select.value === 'value-3') {
            inputText.disabled = this.checked;
            checkbox.disabled = !this.checked;

            hiddenText.classList.add('form__hidden_show');
            checkboxBlock.classList.add('form__checkbox_hidden');
        } else {

            if(select.value === 'value-1'){
                checkbox.checked = false;
            }

            inputText.disabled = this.checked;
            checkbox.disabled = this.checked;

            hiddenText.classList.remove('form__hidden_show');
            checkboxBlock.classList.remove('form__checkbox_hidden');

        }

    });

    button.addEventListener('click', function() {
        formInputs.forEach(function(i) {
            if (i.disabled === false) {
                formAlert.classList.add('form__alert_show');
            } else {
                formAlert.classList.remove('form__alert_show');
            }
        });
    });

}

validateForm();
