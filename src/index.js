let hero = "Hal Jordan";
let xp = 5050;
let level;

if(xp <= 1000) {
    level = "ferro";
}else if( xp > 1000 & xp <= 2000){
    level = "bronze";
}else if(xp > 2000 & xp <= 5000){
    level = "prata"
}else if(xp > 5000 & xp <= 7000){
    level = "ouro"
 }else if(xp > 7000 & xp <= 8000){
    level = "platina"
}else if(xp > 8000 & xp <= 9000){
    level = "ascendente"
}else if(xp > 9000 & xp <= 10000){
    level = "imortal"
}else if(xp > 10000){
    level = "radiante"
}else{
    level = "xp inválido"
}
    console.log("O Herói de nome " + hero + " está no nível de " + level + ".")

