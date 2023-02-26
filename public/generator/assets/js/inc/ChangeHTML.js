export function printResponse(message){
    document.getElementsByTagName('form')[0].style.display = "none";  
    document.getElementById("response").style.display = "flex";
    document.getElementById("paragraph").innerHTML = message;
}
export function printForm(){
    document.getElementById('form').style.display = "flex";; 
    document.getElementById("response").style.display = "none";
    document.getElementById("paragraph").innerHTML = "";
}
export function printErrorForm(id, message){
    console.log('error_in_'+id);
    document.getElementById('error_in_'+id).innerHTML = message;
}
export function resetErrors(){
    errors = document.getElementsByClassName('error');
    errors.innerHTML = "";
    erros.style.display = "none";
}