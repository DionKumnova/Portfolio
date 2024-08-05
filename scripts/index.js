document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#centerpiece input, #centerpiece2 input');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            input.placeholder = ''; 
        });

        input.addEventListener('blur', function() {
            if (input.value === '' ) {

                if (input.id === "nameInput") {
                    input.placeholder = 'Enter name'; 
                } 
                
                if (input.id === "passwordInput") {
                    input.placeholder = 'Enter password'; 
                    
                }
            }
        });
    });
});

function validateAndNavigate() {
    var nameInput = document.getElementById('nameInput').value;
    var passwordInput = document.getElementById('passwordInput').value;
    
    if (nameInput && passwordInput) {
        window.location.href = '../mainpage.html';  
    } else {
        alert('Please fill in both fields.');
    }
}

function resetFields() {
    var nameInput = document.getElementById('nameInput');
    var passwordInput = document.getElementById('passwordInput');

    nameInput.value = '';
    passwordInput.value = '';
    nameInput.placeholder = 'Enter name';
    passwordInput.placeholder = 'Enter password';
}

window.addEventListener('pageshow', function(event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        resetFields();
    }
});