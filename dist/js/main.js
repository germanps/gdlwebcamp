(function(){
	"use strict";

	var gift = document.getElementById('gift');

	document.addEventListener('DOMContentLoaded', function(){
		//console.log('entra');
		//Campos datos usuarios
		var name = document.getElementById('name');
		var surname = document.getElementById('surname');
		var email = document.getElementById('email');

		//Campos pases
		var oneDayPass = document.getElementById('oneDayPass');
		var twoDaysPass = document.getElementById('twoDaysPass');
		var fullPass = document.getElementById('fullPass');

		//Botones y divs
		var calculate = document.getElementById('calculate');
		var btnRegister = document.getElementById('btnRegister');
		var error = document.getElementById('error');
		var productsList = document.getElementById('productsList');
		var totalAmount = document.getElementById('totalAmount');

		//Extras
		var sticker = document.getElementById('sticker');
		var tshirt = document.getElementById('tshirt')

		//Listeners
		calculate.addEventListener('click', calculateAmount);
		oneDayPass.addEventListener('blur', showDays); //evento quitar foco
		twoDaysPass.addEventListener('blur', showDays); //evento quitar foco
		fullPass.addEventListener('blur', showDays); //evento quitar foco

		//Validations
		name.addEventListener('blur', validateFields);
		surname.addEventListener('blur', validateFields);
		email.addEventListener('blur', validateFields);
		email.addEventListener('blur', validateEmail);

		//Functions
		function validateEmail(e){
			if (!this.value.indexOf("@")) {
				error.style.display = 'none';
				
			}else{
				error.style.color = 'red';
				error.innerHTML = "Ingresa un email válido";
				//this.focus();
			}
		}

		function validateFields(){
			if (this.value == '') {
				error.style.display = 'block';
				error.style.color = 'red';
				error.innerHTML = "Este campo es obligatorio";
				//this.focus();
			}else{
				error.style.display = 'none';
			}
		}

		function calculateAmount(e){
			e.preventDefault();

			if (gift.value === '') {
				alert('Debes elegir un regalo');
				gift.focus();
			}else{
				var passDay = oneDayPass.value,
					passTwoDays = twoDaysPass.value,
					passfull = fullPass.value,
					tshirtAmount = tshirt.value,
					stickerAmount = sticker.value;


				var totalPay = (passDay * 30) + 
							   (passTwoDays * 45) + 
							   (passfull * 50) +
							   ((tshirtAmount * 10) * .93) + //descuento del 7%
							   (stickerAmount * 2);

				var list = [];
				if (passDay >= 1) {
					list.push(passDay + " Pases por día");
				}
				if (passTwoDays >= 1) {
					list.push(passTwoDays + " Pases por 2 días");
				}
				if (passfull >= 1) {
					list.push(passfull + " Pases por todos los días");
				}
				if (tshirtAmount >= 1) {
					list.push(tshirtAmount + " Camisetas");
				}
				if (stickerAmount >= 1) {
					list.push(stickerAmount + " Pegatinas");
				}

				productsList.style.display = 'block';
				productsList.innerHTML = '';

				for (var i = 0; i < list.length; i++) {
					productsList.innerHTML += '<span>' + list[i] + '</span>';
				}

				totalAmount.innerHTML = "$ " + totalPay.toFixed(2);

			}
		}

		function showDays(e){
			var passDay = oneDayPass.value,
				passTwoDays = twoDaysPass.value,
				passfull = fullPass.value;
			var chosenDays = [];
			if(passDay > 0){
				chosenDays.push('friday');
				console.log(chosenDays);
			}
			if(passTwoDays > 0){
				chosenDays.push('friday', 'saturday');
				console.log(chosenDays);
			}
			if(passfull > 0){
				chosenDays.push('friday', 'saturday', 'sunday');
				console.log(chosenDays);
			}
			for (var i = 0; i < chosenDays.length; i++) {
				document.getElementById(chosenDays[i]).style.display = 'block';
			}
		}

	}); // DOM CONTENT LOADED
})();