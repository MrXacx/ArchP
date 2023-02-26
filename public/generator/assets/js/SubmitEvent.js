import * as HTML from "./inc/ChangeHTML.js";
import * as validator from "./inc/ResquestFormValidator.js";
function prepareRequest(data){
    let request = {};
    let i = 0;
    Object.entries(data).forEach((value) => {
        request[++i] = value[0]+"="+value[1];
    });
    return(Object.values(request).join("&"));
}
document.addEventListener('DOMContentLoaded', function() { // espera HTML carregar
    let form = document.getElementById('form');
    form.addEventListener('submit', function(event) { // espera usuário acionar a geração
        event.preventDefault(); // evita envio padrão
        let formData = new FormData(form);
        let data = Object.fromEntries(formData.entries()); // passa todos os dados inseridos
        let x=0;
        console.log(x++);
        try{
            validator.prepare(data);
            validator.nameValidator('name');
            data['name'] = encodeURIComponent(data['name']);
            validator.lengthValidator('number');
        } catch (error){
            HTML.resetErrors();
            HTML.printErrorForm(validator.idOfCall, error);
            return;
        }
        let http = new XMLHttpRequest();
        http.open("POST", "../../private/Core.php", true); // conecta JS ao PHP
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // define forma de envio da requisição
        http.onreadystatechange = function (){ // callback de execução
            if(this.readyState == 4 && this.status == 200){ // sem erros
                HTML.printResponse(this.responseText);
                HTML.resetErrors();
            }
            else if(this.readyState == 2){
                console.log("Requisição sendo executada");
            }
            else if(this.readyState == 3){
                console.log("Requisição dando primeiros resultados");
            }
            else{
                console.log("Conexão com servidor falhou! Código 1: " + this.readyState);
                console.log("Conexão com servidor falhou! Código 2: " + this.status);
            }
        }
        http.send(prepareRequest(data));
    });
});