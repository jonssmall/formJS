  function submitForm(e) {
    e.preventDefault();

    formElement = targetElement(e);

    console.log(formElement.elements);

    const formData = new FormData(formElement);
    for (var [key, value] of formData.entries()) { 
        console.log(key, value);
    }

    return false;
}

function $ (selector, el) {
    if (!el) {el = document;}
    return el.querySelector(selector);
}

function $$ (selector, el) {
    if (!el) {el = document;}
    return el.querySelectorAll(selector);
}

function targetElement(event) {
    return event.target;
}