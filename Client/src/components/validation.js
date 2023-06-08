export default (data) => {
    let errors ={};

    if(!data.email.includes ("@")){
        errors.e1= "Email is not valid";
    }
    if(!data.email) {
        errors.e2= "Ingrese Email"
    }
    if(data.email.length > 35) {
        errors.e3= "Menos de 35 caracteres"
    }
    if(!/\d/.test(data.password)) {
        errors.p1= "Debe tener al menos un numero"
    }
    if(data.password.length < 6 || data.password.length > 10) {
        errors.p2= "Longitud incorrecta"
    }
    return errors
};