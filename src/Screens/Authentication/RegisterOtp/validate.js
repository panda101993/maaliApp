export function handleValidations(text, type) {
    console.log("textype=>>",text, type)
     if (type === 'otp') {
         if (text === '') {
             return {
                 status: false,
                 value: text,
                 errorText: 'Please enter 4 digit otp.'
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
 
 