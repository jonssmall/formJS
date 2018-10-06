const todos = [
    'Real-time validation',
    'Submit button disabled until all form fields valid',
    'Custom validation using constraint API',
    'Get rid of ugly default validation graphic, but keep element validity property..',
    'Pop-up the help text on invalid'
];

function submitForm(e) {
    e.preventDefault();

    console.log(e.target.elements);

    return false;
}

function validateForm(formElement) {
    console.log(formElement.checkValidity());
    formElement.querySelector('button[type="submit"]').disabled = !formElement.checkValidity();
}

/*
    nothing custom here, 
    just need to peel validity from input 
    and send down usual path
*/
function defaultValidate(e) {
    styleControl(e.target, e.target.checkValidity());

    // todo: conditionally check for sibling <help> and add message?

    validateForm(e.target.form);
}

function styleControl(element, isValid) {
    element.classList.toggle("is-success", isValid);
    element.classList.toggle("is-danger", !isValid);
}

function $(selector) {
    return document.querySelector(selector);
}

document.addEventListener('DOMContentLoaded', function() {
    $('#todo').innerHTML = todos.map(t => `<li>${t}</li>`).join('');
});