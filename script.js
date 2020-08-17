function huiswerkMaken (vak, callback){
    console.log(
    `Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)
    callback
}

function klaarMetHuiswerk (){
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}

huiswerkMaken("Nederlands", 1000)
setTimeout(klaarMetHuiswerk , 2000);