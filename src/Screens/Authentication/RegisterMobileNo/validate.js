export function handleValidations(text, type) {
    console.log("textype=>>",text, type)
     if (type === 'phoneNo') {
         let phoneRegex = /^[1-9][0-9]{9,12}$/;
         if (text === '') {
             return {
                 status: false,
                 value: text,
                 errorText: 'Please enter phone number.'
             }
         }
         else if (!phoneRegex.test(text)) {
             return {
                 status: false,
                 value: text,
                 errorText:'Please enter valid phone number'
             }  
         }
         else {
             console.log("else case--->",(text).trim)
             return {
                 value: text,
                 status: true,
                 errorText: ''
             }
         }
     }
 }
 
 