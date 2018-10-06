function logFormData(formElement) {
    const formData = new FormData(formElement);
    for (var [key, value] of formData.entries()) { 
        console.log(key, value);
    }
}