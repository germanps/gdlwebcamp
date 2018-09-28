
/*var api = 'AIzaSyDLh29qSZwYCWUdqGtGIpHWD-5VMgyOIp0';*/
var api = 'AIzaSyBBHcAYUhPU4sumiOdsXCwx7azX7u1Fzcs';

function initMap() {

	var latLng = {
		lat: 41.3850639,
		lng: 2.1734034999999494
	}

   var map = new google.maps.Map(document.getElementById('mapa'), {
		'center': latLng,
		'scrollwheel': false,
		'zoom': 14,
		'mapTypeId': google.maps.MapTypeId.ROADMAP
	});

    var content = '<h2> GDLWEBCAM </h2>' +
    			  '<p>Del 10 al 12 de Diciembre</p>' + 
    			  '<p>Visitanos!</p>';

  	var marker = new google.maps.Marker({
	   	position: latLng,
	   	map: map,
	   	title: 'GDLWEBCAM'
    });

    var info = new google.maps.InfoWindow({
    	content: content
    });

    marker.addListener('click', function(){
    	info.open(map, marker)
    });
}
window.addEventListener('DOMContentLoaded', leafMap , false);
function leafMap () {
	/*LEAFMAP*/
	//var map = L.map('map').setView([41.566168056838926, 1.819612975678183], 12);
	var mapa = document.getElementById('map');
	if(mapa){
		var map = L.map('map', {
			center: [41.566168056838926, 1.819612975678183],
			zoom: 12,
			dragging: true,
			scrollWheelZoom: false,
			opacity: 0.5
		});

		L.tileLayer('http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.marker([41.566168056838926, 1.819612975678183]).addTo(map).bindPopup('GDLWEBCAM 2018.<br> Entradas disponibles.').openPopup().bindTooltip('Collbató, Catalunya').openTooltip();
	}

	/**********************/
}

(function(){
	"use strict";	

	//init map

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
		try {
			calculate.addEventListener('click', calculateAmount);
			oneDayPass.addEventListener('blur', showDays); //evento quitar foco
			twoDaysPass.addEventListener('blur', showDays); //evento quitar foco
			fullPass.addEventListener('blur', showDays); //evento quitar foco

			//Validations
			name.addEventListener('blur', validateFields);
			surname.addEventListener('blur', validateFields);
			email.addEventListener('blur', validateFields);
			email.addEventListener('blur', validateEmail);
		} catch(e) {

		}
		

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


jQuery(document).ready(function($) {
	//Lettering
	$('.site-name').lettering();


	//Programa de Conferencias
	$('.program-event .info-course:first').show();
	$('.menu-program a').on('click', function(e) {
		$('.menu-program a').removeClass('active');
		$(this).addClass('active');
		$('.hiden').hide();
		var enlace = $(this).attr('href');
		$(enlace).fadeIn(500);
		return false;
	});


	//Animaciones números
	$('.summary-event li:nth-child(1) p').animateNumber({ number: 6}, 1200);
	$('.summary-event li:nth-child(2) p').animateNumber({ number: 15}, 1200);
	$('.summary-event li:nth-child(3) p').animateNumber({ number: 3}, 1500);
	$('.summary-event li:nth-child(4) p').animateNumber({ number: 9}, 1500);

	//Final Countdown
	$('.countdown').countdown('2018/12/10 09:00:00', function (e) {
		$('#dias').html(e.strftime('%D'));
		$('#horas').html(e.strftime('%H'));
		$('#minutos').html(e.strftime('%M'));
		$('#segundos').html(e.strftime('%S'));
	});
});


