window.onload = function () {
	let container = document.getElementById('roadMap');
	let WIDTH = parseFloat(window.getComputedStyle(container, null).width);

	let leftPadding = 50;

	var dataJSON = [
		{
			"title": "Профиль",
			"list": [
				{
					"title": "Статистика",
					"status": false,
				},
				{
					"title": "Управление",
					"status": false,
				},
				{
					"title": "Информация",
					"status": false,
				}
			]
		},
		{
			"title": "Топ игроков",
			"list": [
				{
					"title": "Списки всех",
					"status": false,
				},
				{
					"title": "Поиск",
					"status": false,
				},
			]
		},
		{
			"title": "Профиль",
			"list": [
				{
					"title": "Статистика",
					"status": false,
				},
				{
					"title": "Управление",
					"status": false,
				},
				{
					"title": "Информация",
					"status": false,
				}
			]
		},
		{
			"title": "Топ игроков",
			"list": [
				{
					"title": "Списки всех",
					"status": false,
				},
				{
					"title": "Поиск",
					"status": false,
				},
			]
		}
	]

	//создание главной полоски

	let mainLine = document.createElement('div');
		mainLine.Id = "mainLine";
		mainLine.style.width  = WIDTH + "px";
		mainLine.style.height = "5px";
		mainLine.style.background = "#198b4c";

	// Построение дерева
	container.appendChild(mainLine)




	for (var i = 0; i < dataJSON.length; i++) {
		var dotData = dataJSON[i];
		var position = leftPadding;

		var mainDotElementWidth = 25;
		var lineToIconHeight = 100;


		var mainDotElement = document.createElement('span');
			mainDotElement.className = "main-dot";
			mainDotElement.style.left = position + 'px';


		var mainTitle = document.createElement('h1');
			mainTitle.className = "mainTitle";
			mainTitle.innerHTML = dotData.title;
			mainLine.appendChild(mainTitle); //вынужденная мера

		var mainTitleWidth = parseFloat(window.getComputedStyle(document.getElementsByClassName('mainTitle')[i], null).width);

			mainTitle.style.left = position + mainDotElementWidth / 2 - mainTitleWidth / 2 + "px";


		if (i % 2 == 0)
			mainTitle.style.bottom = -25 + "px";
		else
			mainTitle.style.top = -25 + "px";



		var lineToIcon = document.createElement('div');
			lineToIcon.className = "lineToIcon"
			lineToIcon.style.height = lineToIconHeight + "px";
			lineToIcon.style.left = position + mainDotElementWidth / 2 + "px";

		if (i % 2 == 0)
			lineToIcon.style.top = -lineToIconHeight + mainDotElementWidth / 2 + "px";
		else 
			lineToIcon.style.bottom = -lineToIconHeight + mainDotElementWidth / 2 + "px";



		var mainIcon = document.createElement('div');
			mainIcon.className = "mainIcon";
			mainIcon.style.left = position - mainDotElementWidth / 2 - 1 + 'px'; // -1 - длина полоски lineToIcon деленая пополам

		if (i % 2 == 0)
			mainIcon.style.top = -lineToIconHeight - mainDotElementWidth  + "px";
		else 
			mainIcon.style.bottom = -lineToIconHeight - mainDotElementWidth  + "px";


		mainLine.appendChild(mainIcon);
		mainLine.appendChild(lineToIcon)
		mainLine.appendChild(mainDotElement);

		leftPadding+=200;
	}


		



	// Создание кружков

	// создание поп-ап окон
}