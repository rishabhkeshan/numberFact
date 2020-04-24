
"use strict";

window.addEventListener('load', function() { "use strict";
	const
		cardMath = document.getElementById('card-math'),
		cardTrivia = document.getElementById('card-trivia'),
		cardDate = document.getElementById('card-date'),
		cardYear = document.getElementById('card-year'),
		mathBtn = document.getElementById('mathBtn'),
		triviaBtn = document.getElementById('triviaBtn'),
		dateBtn = document.getElementById('dateBtn'),
		yearBtn = document.getElementById('yearBtn'),
		cbMath = document.getElementById('cbMath'),
		cbTrivia = document.getElementById('cbTrivia'),
		cbDate = document.getElementById('cbDate'),
		cbYear = document.getElementById('cbYear'),
		numberFact = document.getElementById('numberFact'),
		triviaFact = document.getElementById('triviaFact'),
		dateFact = document.getElementById('dateFact'),
		yearFact = document.getElementById('yearFact'),
		sub1=document.getElementById('sub1'),
		sub2=document.getElementById('sub2'),
		sub3=document.getElementById('sub3'),
		sub4=document.getElementById('sub4');
											
											
	function slide(slideId) {
		switch(slideId) {
			case 0: {
				cardMath.style.display = 'block';
				cardTrivia.style.display = cardYear.style.display = cardDate.style.display = 'none';
				
				break;
			}
				
			case 1: {
				cardTrivia.style.display = 'block';
				cardDate.style.display = cardYear.style.display = cardMath.style.display = 'none';
				
				break;
			}
				
			case 2: {
				cardDate.style.display = 'block';
				cardTrivia.style.display = cardYear.style.display = cardMath.style.display = 'none';
				
				break;
			}
			case 3: {
				cardYear.style.display = 'block';
				cardTrivia.style.display = cardDate.style.display = cardMath.style.display = 'none';
				
				break;
			}
		}
	}
											
	mathBtn.addEventListener('click', () => slide(0));
	triviaBtn.addEventListener('click', () => slide(1));
	dateBtn.addEventListener('click', () => slide(2));
    yearBtn.addEventListener('click', () => slide(3));
											
	sub1.addEventListener('click', function(e) {
		e.preventDefault();
		if(cbMath.value != '') {
		   	fetch(`//numbersapi.com/${cbMath.value}/math`).then((res) => res.text()).then((data) => numberFact.textContent = data);
		}
		
		else {
			numberFact.textContent = '';
		}

	});
											
	sub2.addEventListener('click', function() {
		if(cbTrivia.value != '') {
		   	fetch(`//numbersapi.com/${cbTrivia.value}`).then((res) => res.text()).then((data) => triviaFact.textContent = data);
		}
		
		else {
			triviaFact.textContent = '';
		}
	});
											
	sub3.addEventListener('click', function() {
		if(cbDate.value != '') {
			let
				date = new Date(cbDate.value),
				month = date.getMonth() + 1,
				day = date.getDate();

		   	fetch(`//numbersapi.com/${month}/${day}/date`).then((res) => res.text()).then((data) => dateFact.textContent = data);
		}
		
		else {
			dateFact.textContent = '';
		}
	});
											
	sub4.addEventListener('click', function() {
		if(cbYear.value != '') {
		   	fetch(`//numbersapi.com/${cbYear.value}/year`).then((res) => res.text()).then((data) => yearFact.textContent = data);
		}
		
		else {
			yearFact.textContent = '';
		}
	});
											
	slide(0);
});
