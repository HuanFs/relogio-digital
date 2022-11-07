//Definição das variáveis
const horas=document.getElementById('horas');
const minutos=document.getElementById('minutos');
const segundos=document.getElementById('segundos');
var tema=document.querySelector('body');
//Atribuição de dados as variáveis
const relogio= setInterval(function tempo(){
    let dataHoje= new Date();
    let hora= dataHoje.getHours();
    let minuto= dataHoje.getMinutes();
    let segundo= dataHoje.getSeconds();
/*condição para caso as horas minutos ou segundos contenham apenas um dígito(1 à 9), seja adicionado o numeral 0 à frente*/
    if(hora<10) hora = '0' + hora;
    if(minuto<10) minuto = '0' + minuto;
    if(segundo<10) segundo = '0' + segundo;
//Saída de dados
    horas.textContent = hora;
    minutos.textContent= minuto;
    segundos.textContent= segundo;
})
