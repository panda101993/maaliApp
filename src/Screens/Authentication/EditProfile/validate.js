export function handleValidations(text, type) {
    console.log("textype=>>",text, type)
     if (type === 'name') {
         let nameRegex = /([A-z][\s\.]|[A-z])+$/;
         if (text === '') {
             return {
                 status: false,
                 value: text,
                 errorText: '*Please enter name.'
             }
         }
         else if (!nameRegex.test(text)) {
             return {
                 status: false,
                 value: text,
                 errorText:'*Please enter valid name.'
             }  
         }
         else {
             // console.log("else case--->",(text).trim)
             return {
                 value: text,
                 status: true,
                 errorText: ''
             }
         }
     }else if(type === 'email') {
         let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,5})$/i;
         if (text === '') {
             return {
                 status: false,
                 value: text,
                 errorText: '*Please enter email id.'
             }
         }
         else if (!emailRegex.test(text)) {
             return {
                 status: false,
                 value: text,
                 errorText:'*Please enter valid email id.'
             }  
         }
         else {
             return {
                 value: text,
                 status: true,
                 errorText: ''
             }
         }
     }else if(type === 'block') {
         if (text === '') {
             return {
                 status: false,
                 value: text,
                 errorText: '*Please enter block.'
             }
         }
         else {
             return {
                 value: text,
                 status: true,
                 errorText: ''
             }
         }
     }else if(type === 'locality') {
         if (text === '') {
             return {
                 status: false,
                 value: text,
                 errorText: '*Please enter locality.'
             }
         }
         else {
             return {
                 value: text,
                 status: true,
                 errorText: ''
             }
         }
     }
     
     else if(type === 'landmark') {
         if (text === '') {
             return {
                 status: false,
                 value: text,
                 errorText: '*Please enter landmark.'
             }
         }
         else {
             return {
                 value: text,
                 status: true,
                 errorText: ''
             }
         }
     }else {
         let pincodeRegex = /^[1-9][0-9]{5}$/;
         if (text === '') {
             return {
                 status: false,
                 value: text,
                 errorText: '*Please enter pincode.'
             }
         }
         else if (!pincodeRegex.test(text)) {
             return {
                 status: false,
                 value: text,
                 errorText:'*Please enter valid pincode.'
             }  
         }
         else {
             return {
                 value: text,
                 status: true,
                 errorText: ''
             }
         }
     }  
 }