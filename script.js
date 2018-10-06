function submitForm(e) {
    e.preventDefault();

    formElement = targetElement(e);
    const formData = new FormData(formElement);
    console.log([...formData.entries()].reduce((acc, e) => {
        acc[e[0]] = e[1];
        return acc;
    }, {}));

    alert('Check console for FormData request object.')
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