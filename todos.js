document.addEventListener('DOMContentLoaded', function() {

    const listItems = todos.reduce((acc, t) => {
        return acc += `<li>${t.text} ${t.complete ? '\u2713' : ''}</li>`;
    }, '');

    $('#todo').innerHTML = listItems;

});

const todos = [
    {
        text: 'Real-time validation', 
        complete: true 
    },
    {
        text: 'Submit button disabled until all form fields valid', 
        complete: true 
    },
    {
        text: 'Custom validation using constraint API', 
        complete: true 
    },
    {
        text: 'Hide default validation graphic, but keep element validity property', 
        complete: true 
    },
    {
        text: 'Pop-up the help text on invalid', 
        complete: true 
    },
    {
        text: 'Multi-input validation', 
        complete: true 
    },
    {
        text: 'Accurate FormData object (needed name attribute)', 
        complete: true
    },
];  