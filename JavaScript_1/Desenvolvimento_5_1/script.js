let elementoH1 = document.querySelector('h1');
let elementoA = document.querySelector('a');
let elementoUL = document.querySelector('ul');
let elementoOL = document.getElementById('lista-ordenada');
let MyBody = document.querySelector('body');

let NOrder = ['Primeiro item', 'Segundo item', 'Terceiro item'];
let Ordenada = ['Primeiro Lugar', 'Segundo Lugar', 'Terceiro Lugar'];

//console.log(elementoH1);
elementoH1.innerText = 'Primeiro h1';

//console.log(elementoA);
elementoA.innerText = 'Proz Educação - Atividade 5-1';

//console.log(elementoUL);

for (i = 0; i <= NOrder.length - 1; i++) {
	let elementoLI = document.createElement('li');
	elementoLI.innerHTML = NOrder[i];
	elementoUL.appendChild(elementoLI);
}
MyBody.appendChild(elementoUL);

for (i = 0; i <= Ordenada.length - 1; i++) {
	let elementoLI = document.createElement('li');
	elementoLI.innerHTML = Ordenada[i];
	elementoOL.appendChild(elementoLI);
}
MyBody.appendChild(elementoOL);



						
//console.log(elementoH1);
//console.log(elementoA);	
//console.log(elementoUL);
					





