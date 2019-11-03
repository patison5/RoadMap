window.onload = function () {
	let container = document.getElementById('roadMap');
	let WIDTH = parseFloat(window.getComputedStyle(container, null).width);

	let leftPadding = 50;

	var dataJSON = [
		{
			"title": "Профиль",
			"icon": "",
			"_isDone": true,
			"list": [
				{
					"title": "Статистика",
					"status": true,
				},
				{
					"title": "Управление",
					"status": true,
				},
				{
					"title": "Информация",
					"status": true,
				}
			]
		},
		{
			"title": "Топ игроков",
			"icon": "",
			"_isDone": true,
			"list": [
				{
					"title": "Списки всех",
					"status": true,
				},
				{
					"title": "Поиск",
					"status": true,
				},
			]
		},
		{
			"title": "Квесты",
			"icon": "",
			"_isDone": false,
			"list": [
				{
					"title": "Награды",
					"status": false,
				},
				{
					"title": "Задания",
					"status": false,
				},
			]
		},
		{
			"title": "Банкир",
			"icon": "",
			"_isDone": false,
			"list": [
				{
					"title": "Хранение ресов",
					"status": false,
				},
				{
					"title": "НПС Ебрагим",
					"status": false,
				},
			]
		},
		{
			"title": "Круговое меню",
			"icon": "",
			"_isDone": false,
			"list": [
				{
					"title": "Дизайн",
					"status": true,
				},
				{
					"title": "Код",
					"status": false,
				},
			]
		},
		{
			"title": "Приведи друга",
			"icon": "",
			"_isDone": false,
			"list": [
				{
					"title": "Вк БОТ",
					"status": false,
				},
				{
					"title": "Награды",
					"status": false,
				},
			]
		},
		{
			"title": "Охотник за головами",
			"icon": "",
			"_isDone": false,
			"list": [
				{
					"title": "Дизайн",
					"status": true,
				},
				{
					"title": "Награды",
					"status": false,
				},
				{
					"title": "Код",
					"status": true,
				},
			]
		},
		{
			"title": "Новости обновлений",
			"icon": "",
			"_isDone": false,
			"list": [
				{
					"title": "ВК БОТ",
					"status": false,
				},
				{
					"title": "Награды",
					"status": false,
				}
			]
		},
		{
			"title": "Свинка почтальон",
			"icon": "",
			"_isDone": false,
			"list": [
				{
					"title": "ИИ Свинки",
					"status": false,
				},
				{
					"title": "способы применения",
					"status": false,
				},
				{
					"title": "Код",
					"status": false,
				},
			]
		}

	]

	//создание главной полоски

	let mainLine = document.createElement('div');
		mainLine.Id = "mainLine";
		// mainLine.style.width  = WIDTH + "px";
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


		if (dotData._isDone) {
			var mainActiveDotElement = document.createElement('span');
				mainActiveDotElement.className = "mainActiveDotElement";
				mainActiveDotElement.style.left = position + 5 + 'px';

			mainLine.appendChild(mainActiveDotElement)
		}


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
			mainIcon.style.left = position - mainDotElementWidth / 2 + 'px'; // -1 - длина полоски lineToIcon деленая пополам

		if (i % 2 == 0)
			mainIcon.style.top = -lineToIconHeight - mainDotElementWidth  + "px";
		else 
			mainIcon.style.bottom = -lineToIconHeight - mainDotElementWidth  + "px";


		var horisontalLine = document.createElement('div');
			horisontalLine.className = "horisontalLine";
			horisontalLine.style.left = position + mainDotElementWidth / 2 + 'px';
			mainLine.appendChild(horisontalLine)

		if (i % 2 == 0)
			horisontalLine.style.top = -lineToIconHeight  + "px";
		else 
			horisontalLine.style.bottom = -lineToIconHeight  + "px";


		var horisontalLineWidth = parseFloat(window.getComputedStyle(document.getElementsByClassName('horisontalLine')[i], null).width);
		var verticalLine = document.createElement('div');
			verticalLine.className = "verticalLine";
			verticalLine.style.left = position + mainDotElementWidth / 2  + horisontalLineWidth + 'px';

		// выставляем высотку в зависимости от того, сколько пунктов меню.. (по 40на каждый элемент)
			verticalLine.style.height = dataJSON[i].list.length * 40 + "px";


			mainLine.appendChild(verticalLine)
		
		var verticalLineHeight = parseFloat(window.getComputedStyle(document.getElementsByClassName('verticalLine')[i], null).height);

		if (i % 2 == 0)
			verticalLine.style.top = -lineToIconHeight - (verticalLineHeight - 2)  + "px"; //-2 just for beauty (connect 2 lines)
		else 
			verticalLine.style.bottom = -lineToIconHeight - (verticalLineHeight - 2) + "px"; //-2 just for beauty (connect 2 lines)


		var padding = 0;
		for (var j = 0; j < dataJSON[i].list.length; j++) {
			var list = dataJSON[i].list;

			var smallDot = document.createElement('div');
				smallDot.className = "smallDot";
				smallDot.style.width = 15 + 'px';
				smallDot.style.height = 15 + 'px';
				smallDot.style.left = position + mainDotElementWidth / 2  + horisontalLineWidth - 15 / 2 + 'px';

			if (i % 2 == 0)
				smallDot.style.top = -lineToIconHeight - verticalLineHeight + padding + "px"; //-2 just for beauty
			else 
				smallDot.style.bottom = -lineToIconHeight - verticalLineHeight + padding + "px"; //-2 just for beauty

			mainLine.appendChild(smallDot)


			// создание заголовков
			var smallTitles = document.createElement('h2')
				smallTitles.className = "smallTitles";
				smallTitles.id = "smallTitles" + i + j;
				smallTitles.innerHTML = list[j].title;
				mainLine.appendChild(smallTitles)


			// длина строки
			var smallTitlesWidth = window.getComputedStyle(document.getElementById(('smallTitles' + i + j)), null).width;


			smallTitles.style.left = position + mainDotElementWidth / 2  + horisontalLineWidth - parseFloat(smallTitlesWidth) - 15  + 'px';

			if (i % 2 == 0)
				smallTitles.style.top = -lineToIconHeight - verticalLineHeight + padding + "px"; //-2 just for beauty
			else 
				smallTitles.style.bottom = -lineToIconHeight - verticalLineHeight + padding + "px"; //-2 just for beauty


			if (list[j].status) {
				var smallDotActive = document.createElement('div')
					smallDotActive.className = "smallDotActive";

				smallDotActive.style.width = 9 + 'px';
				smallDotActive.style.height = 9 + 'px';
				smallDotActive.style.left = position + mainDotElementWidth / 2  + horisontalLineWidth - 9 / 2 + 'px';

				if (i % 2 == 0)
					smallDotActive.style.top = -lineToIconHeight - verticalLineHeight + padding + 9 / 3 + "px"; // тут какая-то магия, хз почему 3...
				else 
					smallDotActive.style.bottom = -lineToIconHeight - verticalLineHeight + padding + 9 / 3 + "px"; // тут какая-то магия, хз почему 3...

				mainLine.appendChild(smallDotActive)
			}

			padding+=40;
		}



		mainLine.appendChild(mainIcon);
		mainLine.appendChild(lineToIcon)
		mainLine.appendChild(mainDotElement);

		leftPadding+=200;
	}


		



	// Создание кружков

	// создание поп-ап окон
}