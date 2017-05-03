var app = angular.module('app', [
	'ngAnimate',
	'thatisuday.ng-image-gallery',
	'commandTemplates'
]);


app.controller('controller', [
	'$scope',
	'$compile',
	'$templateRequest',
	'$timeout',
	'$animate',
	function($scope, $compile, $templateRequest, $timeout, $animate){
	
	var historyEl= {};
	var bodyEl = {};
	var outputEl = {};
	var outputWindowEl = {};

	$scope.inputLinePrefix = '$';
	$scope.inputLine = '';

	$scope.tags = {
		angular: {
			text: 'Angular',
			color: 'red'
		},
		android: {
			text: 'Android',
			color: 'green'
		},
		app_engine:{
			text: 'App Engine',
			color: 'amber'
		},
		javascript: {
			text: 'Javascript',
			color: 'orange'
		},
		c_plus_plus: {
			text: 'C++',
			color: 'purple'
		},
		java: {
			text: 'Java',
			color: 'deep-orange'
		},
		node_js: {
			text: 'Node.js',
			color: 'light-green'
		},
		object_recognition: {
			text: 'Vision',
			color: 'deep-purple'
		},
		hardware:{
			text: 'Hardware',
			color: 'amber'
		},
		web: {
			text: 'Web',
			color: 'indigo'
		},
		unity: {
			text: 'Unity',
			color: 'deep-orange'
		},
		firebase: {
			text: 'Firebase',
			color: 'amber'
		},
		ui: {
			text: 'UI',
			color: 'pink'
		}

	}

	$scope.projects = [
		{ title: 'Hotpath',
			tags: ['angular', 'node_js', 'firebase'],
			image: '/img/projects/dd.jpg',
			gallery: [
				{
					id: 2,
					url: '/img/gallery/hotpath/modules.jpg',
					title: 'Powering Hotpath is a framework I wrote, called Alpaca. It uses a combination of modules and build tasks to facilitate slideshow viewing.'
				}
			],
			links: [
				{title: 'Website', url: 'https://hotpath.org'},
				{title: 'Slides', url: 'https://docs.google.com/presentation/d/1fXGS0zLGAp8lU5KhXl2R51ZVs4z0pNzwc6QLeT1XUW4/edit#slide=id.g1af1d95d23_0_558'}
			],
			description: 'Managing a survey creation and data collection tool. Estimated beta - June 2017'
		},
		{ title: 'Wellopp',
			tags: ['web', 'ui'],
			image: 'img/projects/thumb.jpg',
			gallery: [
				{
					id: 1,
					url: 'img/gallery/wellopp/redesign.png',
					title: 'Redesigned the existing client-facing dashboard, adding a timeline  and report feature.'
				},
				{
					id: 2,
					url: 'img/gallery/wellopp/wellopp.png',
					title: 'The new wellopp.com website, as part of the rebranding from Homeward Healthcare.'
				},
				{
					id: 3,
					url: 'img/gallery/wellopp/splash.png',
					title: 'The splash header of wellopp.com'
				},
				{
					id: 4,
					url: 'img/gallery/wellopp/556.jpg',
					title: 'At Behavior Design Bootcamp in Healdsburg, California with @bjfogg'
				},
				{
					id: 5,
					url: 'img/gallery/wellopp/mhacks.jpg',
					title: 'Attended MHacks 8 as a mentor. Hackathon in Detroit, MI with over 1000 hackers.'
				}
			],
			links: [
				{title: 'Website', url: 'https://wellopp.com'},
				{title: 'Samples', url: 'https://github.io/poindexd/hh-demo'}
			],
			description: 'Managed the public website, dashboard, and UI/UX across the company'
		},
		{ title: 'Angular Device Preview',
			tags: ['angular'],
			image: 'img/projects/devicepreview.jpg',
			links: [
				{title: 'Original', url: 'http://codepen.io/poindexd/pen/jyrKyd'},
				{title: 'Code', url: 'https://github.com/poindexd/alpaca/blob/master/editor/js/device-preview.js'},
			],
			gallery: [
				{
					id: 2,
					url: 'img/gallery/devicepreview/tablet.png',
				},
				{
					id: 3,
					url: 'img/gallery/devicepreview/phone.png'
				},
				{
					id: 1,
					url: 'img/gallery/devicepreview/desktop.png',
				},
			],
			description: 'A module for accurate device previews. Features iframe isolation, scope transclusion, and viewport/unit correction.'
		},
		{ title: 'Foo Blox',
			tags: ['c_plus_plus', 'object_recognition'],
			image: '/img/projects/fooblox.jpg',
			gallery: [
				{
					id: 1,
					url: 'img/gallery/fooblox/scratch.png',
					title: 'Original concept. The goal was to describe progams with colored blocks. The plan was to 1) identify the blocks by color using object recognition, 2) convert the block matrix into a python expression string, 3) execute the expression string and collect output.'
				},
				{
					id: 2,
					url: 'img/gallery/fooblox/142.jpg',
					title: 'I used a webcam attached to a lamp and the c++ OpenCV library to perform object recognition.'
				},
				{
					id: 3,
					url: 'img/gallery/fooblox/005.jpg',
					title: '24 hours into HackingEDU hackathon. Over 1000 hackers from around the world.'
				},
				{
					id: 4,
					url: 'img/gallery/fooblox/lesson.jpg',
					title: 'Web UI includes learning lessons and challenges, designed to teach programming basics.'
				},
				{
					id: 5,
					url: 'img/gallery/fooblox/present.jpg',
					title: 'I was selected as a finalist and had the opportunity to present.'
				},
				{
					id: 6,
					url: 'img/gallery/fooblox/devpost.jpg',
					title: 'Foo Blox was selected as a Devpost staff pick and featured in their newsletter.'
				}

			],
			description: 'Write code using blocks! HackingEDU finalist and Devpost staff pick.'
		},
		{ title: 'MSight',
			tags: ['c_plus_plus', 'object_recognition', 'hardware'],
			image: '/img/projects/sleeve.jpg',
			links: [
				{title: 'Devpost', url: 'https://devpost.com/software/innovation-insight'},
			],
			gallery: [
				{
					id: 1,
					url: 'img/gallery/msight/106.jpg',
					title: 'The feedback sleeve provides directional assistance using vibration.'
				},
				{
					id: 2,
					url: 'img/gallery/msight/107.jpg',
					title: 'Presentations. I am the zombie that sacrificed sleep to fix bugs'
				},
				{
					id: 3,
					url: 'img/gallery/msight/087.jpg',
					title: 'The team: me, Ethan Weber (MIT), Jason Lin (USC/Georgia Tech), Kartikay Goyle (U of Toronto)'
				},
				{
					id: 4,
					url: 'img/gallery/msight/team.jpg'
				},
				{
					id: 5,
					url: 'img/gallery/msight/086.jpg',
					title: 'Our team won "Best use of Microsoft Technology" and Microsoft Bands'
				}
			],
			description: 'MSight helps the visually impaired navigate the space around them.  MHacks 6 Winner "Best Use of Microsoft Technology"'
		},
		{ title: 'Maposaur',
			tags: ['android', 'app_engine', 'java'],
			image: '/img/projects/maposaur.jpg',
			gallery: [
				{
					id: 1,
					url: 'img/gallery/maposaur/maposaur_console.png',
					title: 'The Angular web dashboard, used by venues to manage events'
				},
				{
					id: 2,
					url: 'img/gallery/maposaur/010.png',
					title: 'The Android app with event areas shown'
				}

			],
			description: 'Maposaur allows anyone to create custom maps and chat areas.',
		},
		{
			title: 'CareVoice',
			tags: ['web', 'ui'],
			image: '/img/projects/carevoice.jpg',
			links: [
				{title: 'website', url: 'http://carevoice.org'}
			],
			gallery: [
				{
					id: 1,
					url: '/img/gallery/carevoice.png'
				}
			],
			description: 'A landing page for a Healthcare company that offers end-of-life planning services.'
		},
		{ title: 'Open Classifier Project',
			tags: ['web', 'object_recognition'],
			image: '/img/projects/21.jpg',
			description: 'Website and open source library to improve object recognition.'
		},
		{ title: 'Craigslist Dream Killer',
			tags: ['javascript'],
			image: '/img/projects/snippet.jpg',
			description: 'A twitterbot that tweets responses to Dev ads'
		},
		{ title: 'First Step Orthotics',
			tags: ['web', 'node_js'],
			links: [
				{title: 'Slides', url: 'https://docs.google.com/presentation/d/1m1LrCVgOmhDpgoff0-1ly4Sr-ARP-fTWDLIJ0Nqg_-Q'},
				{title: 'News', url: 'http://www.engin.umich.edu/college/about/news/stories/2017/january/3-d-printed-orthotics-and-prosthetics-a-better-fit-the-same-day'}
			],
			gallery: [
				{
					id: 1,
					url: 'img/gallery/afo.jpg',
					title: 'The manual process of creating Ankle/Foot orthotics takes over 3 weeks. With 3D printing, the time can be cut down to hours. Our team used openSCAD on Node.js to generate AFOs from sculpted models. See slides for more details.'
				}
			],
			image: '/img/projects/afo.jpg',
			description: 'Aims to change how orthotics are produced using 3D modeling and printing'
		},
		{ title: 'On The Way',
			tags: ['web'],
			image: '/img/projects/ontheway.jpg',
			description: 'Uses the Automatic API and Google Places to show you places you drove past.'
		},
		{ title: 'Image Tiler',
			tags: ['web', 'javascript', 'node_js'],
			image: '/img/projects/imagetiler.jpg',
			description: 'Break large images into tiles and serve them using Node/Express'
		},
		{ title: 'IAM Campaigne',
			tags: ['web', 'ui'],
			image: '/img/projects/preview_3.jpg',
			gallery: [
				{
					id: 1,
					url: 'img/gallery/iamcampaigne/preview.jpg',
					title: 'Original design, light variant'
				},
				{
					id: 2,
					url: 'img/gallery/iamcampaigne/preview_3.jpg',
					title: 'Final design, dark variant'
				}

			],
			description: 'A website to showcase the music of recording artist Campaigne.'
		},
		{ title: 'Arena Bros',
			tags: ['android', 'unity'],
			image: '/img/projects/arena.jpg',
			links: [
				{title: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.BabluSoftware.ArenaBros&hl=en'}
			],
			gallery: [
				{
					id: 1,
					url: 'img/gallery/arenabros/050.jpg',
					title: 'Arena Bros was built in Unity using C#. The player can run, block, hit, and throw energy balls against an ai opponent.'
				},
				{
					id: 2,
					url: 'img/gallery/arenabros/053.jpg',
					title: 'This project taught me how time consuming game development is!'
				}

			],
			description: 'Arena Bros is a 3D arena fighting game for Android.'
		},
		
	];

	$scope.projectLimit = 6;

	$scope.commands = [
		{
			name: 'projects',
			description: "What I've been working on"
		},
		{
			name: 'bio',
			description: 'Let me introduce myself'
		},
		{
			name: 'resume',
			description: 'Opens in a new window'
		},
		{
			name: 'profile',
			description: 'View the intro'
		},
		{
			name: 'social',
			description: 'Find me on the web'
		},
		{
			name: 'help',
			description: 'Display the help menu'
		},	
		{
			name: 'clear',
			description: 'Clear the console'
		}
	];
	
	$scope.submitLine = function(line){

		if (!$scope.inputLine){
			historyEl.append($scope.inputLinePrefix);
			historyEl.append('<br>');
			bodyEl.scrollTop = bodyEl.scrollHeight;
			return;
		}
		$scope.runCommand(line || $scope.inputLine);

	}

	$scope.showOutput = function(output, command){
		var prev_height = outputEl[0].scrollHeight

		if (output){
			historyEl.append($scope.inputLinePrefix + '&nbsp;&nbsp;' + command || $scope.inputLine);
			historyEl.append('<br>');
			//historyEl.append(output);
			outputEl.append(output);
			//historyEl.append('<br>');
		}
		$scope.inputLine = '';
		$timeout(function(){
			bodyEl.scrollTop = bodyEl.scrollHeight;
			outputWindowEl.scrollTop = prev_height;
		}, 50, false);
	}

	$scope.runCommand = function(command){
		if (command == 'clear'){
			historyEl.empty();
			outputEl.empty();
			$scope.showOutput(false);
			return;
		} else if (command == 'resume'){
			window.open('resume.html', '_blank');
			$scope.showOutput('<br>', 'resume');
		} else if (command == 'help' || command == 'profile' || command == 'social' || command == 'bio' || command == 'projects'){
			$templateRequest('command-template-' + command).then(function(tpl){
				var template = angular.element(tpl);
				//element.after(template);
				$scope.showOutput($compile(template)($scope), command);
			});
			return;
		} else {
			$scope.showOutput('<div class="red-text">unrecognized command: '
		 + command + '</div>', command);
		}
		
	}


	$scope.init = function(){
		historyEl = angular.element(
			document.querySelector('#history')
		);
		outputEl = angular.element(
			document.querySelector('#output')
		);

		outputWindowEl = document.getElementById('output-window');
		bodyEl = document.getElementById('cli-body');

		console.log('console-window:', outputWindowEl);

		$scope.playCommands(['profile', 'social'], function(){
			$scope.cursorOffset = 0;
			$scope.focus();
		});
		
	}

	$scope.focus = function(){
		document.getElementById('input').focus();
	}

	$scope.playCommands = function(commands, callback, i=0, cur=0){

		if (i == commands[cur].length + 1){
			$scope.submitLine(commands[cur]);
			cur = cur+1;
			i = 0;
		}
		if (cur == commands.length){
			$scope.cursorOffset = 0;
			callback();
			return;
		}

		$scope.inputLine = commands[cur].substr(0, i);

		$scope.cursorOffset = i * 9;

		$timeout(function(){
			$scope.playCommands(commands, callback, i + 1, cur);	
		}, Math.random() * 300)
	}

	$scope.init();



	$scope.moveCursor = function(event){
		//console.log(event);
		var w = 9;
		var offset = 0;
		if (
				(event.keyCode >= 48 && event.keyCode <= 90)
				|| event.keyCode == 32
				|| (event.keyCode >= 186 && event.keyCode <= 222)
				){
			offset = w;
		}
		if (event.keyCode == 8){
			offset = -w;
		}
		if (event.keyCode == 37){
			offset = -w;
		}
		if (event.keyCode == 39){
			offset = w;
		}
		if (event.keyCode == 13){
			$scope.submitLine();
			$scope.cursorOffset = 0;
			return;
		}

		var newOffest = $scope.cursorOffset + offset;
		$scope.cursorOffset = Math.min(
			Math.max(newOffest, 0),
			w * ($scope.inputLine.length + 1)
		);

	}

}]);
