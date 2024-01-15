let numerosDaSorte = [37, 14, 26, 5, 94, 87];

for(let i=0;i < numerosDaSorte.length;i++){
  if(numerosDaSorte[i] > 50){
    console.log(numerosDaSorte[i] + " é maior que 50");    
  }else{
    if(numerosDaSorte[i] % 2 == 0){
      console.log(numerosDaSorte[i] + " é par e menor que 50");
    }else{
      console.log(numerosDaSorte[i] + " é menor que 50");
    }
  }
}


Crie um novo projeto com dois arquivos: index.html e script.js. No arquivo HTML, defina a estrutura padrão HTML, e inclua uma tag h1 com o título "Conexão com um arquivo JavaScript". No arquivo JavaScript defina uma função que imprima a mensagem "Conexão feita com sucesso!" no terminal, e execute ela três vezes. Finalmente, conecte ambos arquivos, abra seu projeto no navegador usando a extensão LiveServer e confira se a mensagem foi impressa três vezes no terminal. 
