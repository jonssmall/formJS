function applyValidation(element) {

    styleControl(element, element.checkValidity());

    // todo: how tightly do we want to couple DOM structure to showing help?
    const msg = element.validationMessage;
    const helpElement = $('.help', element.parentElement.parentElement);
    helpElement.hidden = !msg;
    helpElement.innerText = msg;

    validateForm(element.form);
}

function styleControl(element, isValid) {
    element.classList.toggle("is-success", isValid);
    element.classList.toggle("is-danger", !isValid);
}

function validateForm(formElement) {
    $('button[type="submit"]', formElement).disabled = !formElement.checkValidity();
}

function defaultValidate(e) {
    applyValidation(e.target);
}

function primeOnly(e) {
    function isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1 && num !== 0;
    }

    const el = targetElement(e);

    if (el.value && !isPrime(parseInt(el.value))) {
        el.setCustomValidity('Only prime numbers allowed.');
    } else {
        el.setCustomValidity('');
    }

    applyValidation(el);
}

// todo: if each element calls applyValidation for itself, validateForm gets called twice..
function peasAndCarrots(e) {
    const [peas, carrots] = [$('#peas'), $('#carrots')];

    if (peas.value.toLowerCase() === 'peas' && carrots.value.toLowerCase() === 'carrots') {
        peas.setCustomValidity('');
        carrots.setCustomValidity('');
    } else {        
        peas.setCustomValidity('Jenny and me was like _____ and _____');
        carrots.setCustomValidity('Jenny and me was like _____ and _____');
    }

    applyValidation(peas);
    applyValidation(carrots);
}