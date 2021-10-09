 
    
    var readlineSync = require('readline-sync');
    
    var nomeEvento = "";
    nomeEvento = readlineSync.question("Informe um nome pra o seu evento: ");
    
    var nome = "";
    nome = readlineSync.question("Informe o seu Nome: ");

    var idade = 0;
    idade = readlineSync.question("Informe sua idade: ");

    var NParticipantes = 0;
    NParticipantes = readlineSync.question("Digite o numero de participantes: ");

    function dateCheck(date){
        let element = date.split('/');
        let now = new Date();
        date = new Date(element[2], element[1] - 1, element[0]);

        return date > now ? true : false;
    }
    
    dataEvento = dateCheck(readlineSync.question("Digite a data em que gostaria de realizar o evento? ")); 
    

    if(idade < 18){
    
        console.log("Idade minima nao permitida!");
      
    }else if(NParticipantes > 100){

      console.log("Numero de participantes excedeu o limite!");
    }
    else if(dataEvento == false){
      console.log("Data do evento inválida!");
    }
    else{
      console.log("Cadastro realizado com sucesso!");
}






