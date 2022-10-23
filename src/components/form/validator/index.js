const formValidator = (fieldList)=> {
    let resp = {};
    let data = {};
    let errorMessages = []
    fieldList.forEach((element)=> {
        if(element?.type === 'text') {
            if(element?.value.length > 0) {
                data[`${element?.name}`] = element?.value;
            }else {
                errorMessages = [...errorMessages, 'Your name can not be empty'];
            }
        }

        if(element?.type === 'number') {
            if(element?.value.length === 0) {
                errorMessages = [...errorMessages, 'Your number can not be empty'];
            }else {
                if(isNaN(parseInt(element.value)) === true) {
                    errorMessages = [...errorMessages, 'Invalid Phone number'];
                }else {
                    data[`${element?.name}`] = element?.value;
                }
            }
        }

        if(element?.type === 'email') {
            if(element?.value.length === 0) {
                errorMessages = [...errorMessages, 'Your email can not be empty'];
            }else {
                const re = /\S+@\S+\.\S+/;
                if(re.test(element?.value) === true) {
                    data[`${element?.name}`] = element?.value;
                }else {
                    errorMessages = [...errorMessages, 'Invalid email'];
                }
            }
        }
    });

    if(errorMessages.length === 0) {
        resp = {
            validated: true,
            data: data,
            errors: errorMessages
        }
    }else {
        resp = {
            validated: false,
            data: {},
            errors: errorMessages
        }
    }

    return resp;
}

export default formValidator;