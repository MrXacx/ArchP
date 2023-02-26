const minLength = 6;
const maxLength = 35;
let input;
export let idOfCall;
export function prepare(data){
    input = data;
}
export function nameValidator(key){
    idOfCall = key;
    let name = input[key].split(" ");
    let numbers = /[^a-zA-Z]+/;
    if(numbers.test(name) || name.join() == ""){
        throw new Error("Isso foi baseado no alfabeto? Use apenas letras!");
    }
    else if(name.length > 5){
        throw new Error("Nome muito longo! Adicione um nome com até 5 palavras");
    }
}
export function lengthValidator(key){
    idOfCall = key;
    let number = parseInt(input[key]);
    if(number < minLength){
        throw new Error("Vamos melhorar isso? Sua senha deve ter, ao menos, "+minLength+" caracteres");
    }
    else if(number > maxLength){
        throw new Error("Calma aí! Sua senha pode ter, no máximo, "+maxLength+" caracteres");
    }
}
