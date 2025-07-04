export default function makeValidation({text_title, text_content}) {
    let validated = {
        isValid: false,
        message: ''
    };
    if(text_title && text_content) {
        if(text_title.length < 5)
            validated.message = `title must be at least 5 character `;

        else if(text_content.length < 15) 
            validated.message = `content must be at least 15 character`;

        else validated.isValid = true;
    }
    else validated.message = 'please fill all fields'
    return validated;
}