FormValidation.formValidation(
    document.getElementById('registrationForm'),
    {
        fields: {
            userName: {
                validators: {
                    notEmpty: {
                        message: 'The username is required',
                    },
                    stringLength: {
                        message: 'The name must be more than 6 characters long',
                        min: 6,
                    },
                },
            },
        },
    },
);

var state = false;
function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("confirm-password").setAttribute("type", "password");
        state = false;
    }
    else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("confirm-password").setAttribute("type", "text");
        state = true;
    }
}