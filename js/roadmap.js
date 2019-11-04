window.onload = function () {
	let container = document.getElementById('roadMap');
	let WIDTH = parseFloat(window.getComputedStyle(container, null).width);

	let leftPadding = 50;//50

	var dataJSON = [
		{
			"title": "Профиль",
			"icon": "https://i.imgur.com/T0yO7SW.png",
			"_isDone": true,
			"description": "Тут будет более подробное описание всего происходящего...",
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
			"icon": "https://i.imgur.com/k3477wr.png",
			"_isDone": true,
			"description": "Тут будет более подробное описание всего происходящего...",
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
			"icon": "https://i.imgur.com/T0yO7SW.png",
			"_isDone": false,
			"description": "Тут будет более подробное описание всего происходящего...",
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
			"icon": "https://i.imgur.com/T0yO7SW.png",
			"_isDone": false,
			"description": "Тут будет более подробное описание всего происходящего...",
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
			"icon": "https://i.imgur.com/00sBlpX.png",
			"_isDone": false,
			"description": "Тут будет более подробное описание всего происходящего...",
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
			"icon": "https://i.imgur.com/T0yO7SW.png",
			"_isDone": false,
			"description": "Тут будет более подробное описание всего происходящего...",
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
			"icon": "https://i.imgur.com/T0yO7SW.png",
			"_isDone": false,
			"description": "Тут будет более подробное описание всего происходящего...",
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
			"icon": "https://i.imgur.com/T0yO7SW.png",
			"_isDone": false,
			"description": "Тут будет более подробное описание всего происходящего...",
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
			"icon": "https://i.imgur.com/T0yO7SW.png",
			"_isDone": false,
			"description": "Тут будет более подробное описание всего происходящего...",
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
		mainLine.id = "mainLine";
		// mainLine.style.width  = WIDTH + "px";
		mainLine.style.height = "7px";
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
			mainDotElement.id = "main-dot-"+i;
			mainDotElement.style.left = position + 'px';


		if (dotData._isDone) {
			var mainActiveDotElement = document.createElement('span');
				mainActiveDotElement.className = "mainActiveDotElement";
				mainActiveDotElement.id = "mainActiveDotElement" + i;
				mainActiveDotElement.style.left = position + 5 + 'px';
				mainActiveDotElement.style.top = 11 + 'px';

			mainLine.appendChild(mainActiveDotElement)
		}


		var mainTitle = document.createElement('h1');
			mainTitle.className = "mainTitle";
			mainTitle.id = "mainTitle" + i;
			mainTitle.innerHTML = dotData.title;
			mainLine.appendChild(mainTitle); //вынужденная мера

		var mainTitleWidth = parseFloat(window.getComputedStyle(document.getElementsByClassName('mainTitle')[i], null).width);

			mainTitle.style.left = position + mainDotElementWidth / 2 - mainTitleWidth / 2 + "px";


		if (i % 2 == 0)
			mainTitle.style.bottom = -25 + "px";
		else
			mainTitle.style.top = -25 + "px";


		var lineToIcon = document.createElement('div');
			lineToIcon.className = "lineToIcon";
			lineToIcon.id = "lineToIcon" + i;
			lineToIcon.style.height = lineToIconHeight + "px";
			lineToIcon.style.left = position + mainDotElementWidth / 2 + "px";

		if (i % 2 == 0)
			lineToIcon.style.top = -lineToIconHeight + mainDotElementWidth / 2 + "px";
		else 
			lineToIcon.style.bottom = -lineToIconHeight + mainDotElementWidth / 2 + "px";


		var mainIcon = document.createElement('div');
			mainIcon.className = "mainIcon";
			mainIcon.id = "mainIcon" + i;
			mainIcon.dataset.id = i;
			mainIcon.style.left = position - mainDotElementWidth / 2 + 'px'; // -1 - длина полоски lineToIcon деленая пополам

		if (i % 2 == 0)
			mainIcon.style.top = -lineToIconHeight - mainDotElementWidth  + "px";
		else 
			mainIcon.style.bottom = -lineToIconHeight - mainDotElementWidth  + "px";

		var mainIconImg = document.createElement('div');
			mainIconImg.className = "mainIconImg";
			mainIconImg.id = "mainIconImg" + i;
			mainIconImg.style.background = "url(" + dotData.icon + ") center center no-repeat";
			mainIconImg.style.backgroundColor = "rgba(255,255,255,1)";

		mainIconImg.style.left = position - mainDotElementWidth / 2 + 'px'; // -1 - длина полоски lineToIcon деленая пополам

		if (i % 2 == 0)
			mainIconImg.style.top = -lineToIconHeight - mainDotElementWidth  + "px";
		else 
			mainIconImg.style.bottom = -lineToIconHeight - mainDotElementWidth  + "px";



		var horisontalLine = document.createElement('div');
			horisontalLine.className = "horisontalLine";
			horisontalLine.id = "horisontalLine" + i;
			horisontalLine.style.left = position + mainDotElementWidth / 2 + 'px';
			mainLine.appendChild(horisontalLine)

		if (i % 2 == 0)
			horisontalLine.style.top = -lineToIconHeight  + "px";
		else 
			horisontalLine.style.bottom = -lineToIconHeight  + "px";


		var horisontalLineWidth = parseFloat(window.getComputedStyle(document.getElementsByClassName('horisontalLine')[i], null).width);
		var verticalLine = document.createElement('div');
			verticalLine.className = "verticalLine";
			verticalLine.id = "verticalLine" + i;
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

			// маленькие кружки на вертикальной линии (бордер)
			var smallDot = document.createElement('div');
				smallDot.className = "smallDot smallDot"+i;
				smallDot.id = "smallDot" + i;
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
				smallTitles.className = "smallTitles smallTitles" + i;
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
					smallDotActive.className = "smallDotActive smallDotActive" + i;
					smallDotActive.id = "smallDotActive" + i + j;

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


		mainIcon.addEventListener('mouseover', function () {
			var id = this.dataset.id;

			var lineToIconHover = document.getElementById('lineToIcon' + id)
			var mainIconHover   = document.getElementById("mainIcon"   + id)

			var horisontalLineHover = document.getElementById('horisontalLine' + this.dataset.id)
			var verticalLineHover   = document.getElementById("verticalLine"   + this.dataset.id)


			var smallDotHover 		= document.getElementsByClassName('smallDot' + id);
			var smallTitlesHover	= document.getElementsByClassName('smallTitles' + id);
			var smallDotActiveHover = document.getElementsByClassName('smallDotActive' + id);


			lineToIconHover.classList.add('lineToIconHover');
			mainIconHover.classList.add('mainIconHover');

			horisontalLineHover.classList.add('horisontalLineHover');
			verticalLineHover.classList.add('verticalLineHover');

			for (var j = 0; j < smallDotHover.length; j++)
				smallDotHover[j].classList.add("smallDotHover")

			for (var j = 0; j < smallTitlesHover.length; j++)
				smallTitlesHover[j].classList.add("smallTitlesHover")

			for (var j = 0; j < smallDotActiveHover.length; j++)
				smallDotActiveHover[j].classList.add("smallDotActiveHover")

		})

		mainIcon.addEventListener('mouseout', function () {
			var id = this.dataset.id;

			var lineToIconHover = document.getElementById('lineToIcon' + id)
			var mainIconHover   = document.getElementById("mainIcon"   + id)

			var horisontalLineHover = document.getElementById('horisontalLine' + id)
			var verticalLineHover   = document.getElementById("verticalLine"   + id)

			var smallDotHover 		= document.getElementsByClassName('smallDot' + id);
			var smallTitlesHover	= document.getElementsByClassName('smallTitles' + id);
			var smallDotActiveHover = document.getElementsByClassName('smallDotActive' + id);

			lineToIconHover.classList.remove('lineToIconHover');
			mainIconHover.classList.remove('mainIconHover');

			horisontalLineHover.classList.remove('horisontalLineHover');
			verticalLineHover.classList.remove('verticalLineHover');


			for (var j = 0; j < smallDotHover.length; j++)
				smallDotHover[j].classList.remove("smallDotHover")

			for (var j = 0; j < smallTitlesHover.length; j++)
				smallTitlesHover[j].classList.remove("smallTitlesHover")

			for (var j = 0; j < smallDotActiveHover.length; j++)
				smallDotActiveHover[j].classList.remove("smallDotActiveHover")
		})


		mainIcon.addEventListener('click', function () {
			var id = this.dataset.id;

			var body = document.getElementsByTagName('body')[0]

			var popupWrap = document.createElement('div');
				popupWrap.id = "popupWrap";

			var popupMain = document.createElement('div');
				popupMain.id = "popupMain";

			var popupTitle = document.createElement('h3');
				popupTitle.id = "popupTitle";
				popupTitle.innerHTML = dataJSON[id].title;

			var popupMainText = document.createElement('p');
				popupMainText.className = "popupMainText";
				popupMainText.innerHTML = dataJSON[id].description;
				


			popupMain.appendChild(popupTitle)
			popupMain.appendChild(popupMainText)
			popupWrap.appendChild(popupMain)
			body.appendChild(popupWrap)

			popupWrap.addEventListener('click', function (e) {

				if (this != e.target)
					return;

				this.parentNode.removeChild(this);

			})
		});


		mainLine.appendChild(mainIconImg)
		mainLine.appendChild(mainIcon);
		mainLine.appendChild(lineToIcon)
		mainLine.appendChild(mainDotElement);

		leftPadding+=200;
	}
}