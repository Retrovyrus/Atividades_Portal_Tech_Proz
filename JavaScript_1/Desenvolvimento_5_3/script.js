
let elementoHeader = document.querySelector('head');
let elementoBody = document.querySelector('body');
let elementoTitle = document.querySelector('title');
let elementoStyle = document.createElement('style');

elementoStyle.innerText =
`
	<style>
	.flex-container {
	display: flex;
	justify-content: space-between;
	width: 100px;
	margin: 100px;
	text-align: center;
	line-height: 50px;
	font-size: 30px;
	}
	</style>
`

let elementoH1 = document.createElement('h1');
let elementoDiv = document.createElement('div');
//let elementoStyle = document.createElement('style');

elementoTitle.innerText = "Mau Donalds";
elementoTitle.id = "titulo"

elementoH1.innerText = "Sanduíches de Carne Bovina";
elementoDiv.innerHTML =
`
 <div class="flex-container"><a>
 <div>
 <img src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$k7XNMm8t/200/200/original?country=br" alt="Imagem de Big Mac Duplo" loading="lazy" height="240" width="300">
 </div>Big Mau Duplo
 <p>R$35,00</p>
 </a></div>
 
<div class="flex-container"><a>
<div>
<img src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$k7XLv1LM/200/200/original?country=br" alt="Imagem de Big Mac Bacon" loading="lazy" height="240" width="300">
</div>Big Mau Bacon
<p>R$30,00</p>
</a></div>

<div class="flex-container"><a>
<div>
<img src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br" alt="Imagem de Big Mac" loading="lazy" height="240" width="300">
</div>Big Mau
<p>R$22,00</p>
</a></div>

<div class="flex-container"><a>
<div>
<img src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzX1Xu4q/200/200/original?country=br" alt="Imagem de Duplo Quarterão" loading="lazy" height="240" width="300">
</div>Duplo Quarterão Mau
<p>R$25,00</p>
</a></div>
`

elementoHeader.appendChild(elementoTitle);
elementoBody.appendChild(elementoStyle);
elementoBody.appendChild(elementoH1);
elementoBody.appendChild(elementoDiv);
