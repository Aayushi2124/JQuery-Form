$(document).ready(function() {
    $('#fullname').on('blur', function() {
        validateFullName();
    }).on('focus', function() {
        $('#fullname-error').css({'display':'none'});
    });

    $('#email').on('blur', function() {
        validateEmail();
    }).on('focus', function() {
        $('#email-error').css({'display':'none'});
    });

    $('#mobile').on('blur', function() {
        validateMobile();
    }).on('focus', function() {
        $('#mobile-error').css({'display':'none'});
    });

    $('#dob').on('blur', function() {
        validateDOB();
    }).on('focus', function() {
        $('#dob-error').css({'display':'none'});  
    });

    $('#password').on('blur', function() {
        validatePassword();
    }).on('focus', function() {
        $('#password-error').css({'display':'none'});
    });

    $('#confirm-password').on('blur', function() {
        validateConfirmPassword();
    }).on('focus', function() {
        $('#confirm-password-error').css({'display':'none'});
    });

    $('#registration-form').on('submit', function(e) {
        e.preventDefault();

        validateFullName();
        validateEmail();
        validateMobile();
        validateDOB();
        validatePassword();
        validateConfirmPassword();

        if ($('.error:visible').length === 0) {
            var formData = $(this).serialize();

            $.ajax({
                url: 'register.php', 
                type: 'POST',
                data: formData,
                success: function(response) {
                   
                    $('#registration-form')[0].reset(); 

                    alert(response);

                    // console.log(response);

                    // $('#status').text(response);
                    // if (response === 'Registration successful!') {
                    //     alert('Registration successful!');
                    // } else {
                    //     alert('Registration failed. Please try again.');
                    // }
                }
            });
        }
    });

    function validateFullName() {
        var fullName = $('#fullname').val();
        if (fullName === '') {
            $('#fullname-error').text('Full Name is required').show();
        } else if (fullName.length < 2){
            $('#fullname-error').text('Full Name have 2-30 characters.').show();
        }else {
            $('#fullname-error').hide();
        }
    }

    function validateEmail() {
        var email = $('#email').val();
        if (email === '') {
            $('#email-error').text('Email is required').show();
        } else if (!isValidEmail(email)) {
            $('#email-error').text('Invalid Email').show();
        } else {
            $('#email-error').hide();
        }
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateMobile() {
        var mobile = $('#mobile').val();
        if (mobile === '') {
            $('#mobile-error').text('Mobile No is required').show();
        } else if (!isValidMobile(mobile)) {
            $('#mobile-error').text('Invalid Mobile No').show();
        } else {
            $('#mobile-error').hide();
        }
    }

    function isValidMobile(mobile) {
        var mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    }

    function validateDOB() {
        var dob = $('#dob').val();
        var todaysDate = new Date();
        if (new Date(dob) > todaysDate) {
            $('#dob-error').text('Date of Birth should be less than todays date').show();
        }else if (dob === '') {
            $('#dob-error').text('Date of Birth is required').show();
        }else {
            $('#dob-error').hide();
        }
    }

    function validatePassword() {
        var password = $('#password').val();
        if (password === '') {
            $('#password-error').text('Password is required').show();
        } else if (password.length < 5){
            $('#password-error').text('Password should be greater than 5 character.').show();
        }else {
            $('#password-error').hide();
        }
    }

    function validateConfirmPassword() {
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();
        if (confirmPassword === '') {
            $('#confirm-password-error').text('Confirm Password is required').show();
        } else if (password !== confirmPassword) {
            $('#confirm-password-error').text('Passwords do not match').show();
        } else {
            $('#confirm-password-error').hide();
        }
    }
});
