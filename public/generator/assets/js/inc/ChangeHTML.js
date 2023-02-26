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
    let error = document.getElementById('error_in_'+id)
    error.innerHTML = message;
    error.style.width = "auto";
}
export function resetErrors(){
    let error = document.getElementsByClassName('error');
    console.log("error =>"+error);
    Object.values(error).forEach((span) => {
        span.innerHTML= " ";
        span.style.width = "0px";
    });    
}