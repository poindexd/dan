var app = angular.module('app', [
	'ngAnimate',
	'thatisuday.ng-image-gallery',
	//'masonry',
	'akoenig.deckgrid',
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
			text: 'AngularJS',
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

	$scope.methods = {};

	$scope.openDesignGallery = function(index){
		console.log('opening gallery for index: ', index)
		$scope.methods.open(index);
	}

	$scope.design = [
		{
			id: 0,
			url: 'img/gallery/respondent-dashboard.png'
		},
		{
			id: 1,
			url: 'img/gallery/fuego.png'
		},
		{
			id: 2,
			url: 'img/gallery/carevoice.png'
		},
		{
			id: 3,
			url: 'img/gallery/hotpath/hotpath_home.png'
		},
		{
			id: 4,
			url: 'img/gallery/iamcampaigne/preview.jpg'
		},
		// {
		// 	id: 5,
		// 	url: 'img/gallery/iamcampaigne/preview_3.jpg'
		// },
		{
			id: 6,
			url: 'img/gallery/wellopp/redesign.png'
		},
		{
			id: 7,
			url: 'img/gallery/wellopp/dd.png'
		},
		{
			id: 8,
			url: 'img/gallery/maposaur/maposaur_console.png'
		},
		// {
		// 	id: 20,
		// 	url: 'img/gallery/vc.png'
		// },
		{
			id: 21,
			url: 'img/gallery/baasket.png'
		},
		// {
		// 	id: 9,
		// 	url: 'img/gallery/013.JPG'
		// },
		// {
		// 	id: 10,
		// 	url: 'img/gallery/namu.png'
		// },
		// {
		// 	id: 11,
		// 	url: 'img/gallery/033.PNG'
		// },
		
		// {
		// 	id: 10,
		// 	url: 'img/gallery/033.PNG'
		// },
		// {
		// 	id: 11,
		// 	url: 'img/gallery/047.PNG'
		// },
		// {
		// 	id: 12,
		// 	url: 'img/gallery/namu.png'
		// }


	];

	$scope.projects = [
		{ title: 'Respondent',
			tags: ['angular', 'node_js', 'ui'],
			image: '/img/projects/respondent-dashboard.jpg',
			gallery: [
				{
					id: 1,
					url: '/img/gallery/respondent-dashboard.png', thumbUrl: '/img/gallery/respondent-dashboard.png',
					title: 'Redesigned and rebuilt most of the researcher dashboard, core features, and a new product.'
				}
			],
			links: [
				{title: 'Website', url: 'https://www.respondent.io'},
			],
			description: 'Leading frontend development and UI/UX at a startup with 100k monthly users'
		},
		{ title: 'Hotpath',
			tags: ['angular', 'node_js', 'firebase'],
			image: '/img/projects/dd.jpg',
			gallery: [
				{
					id: 2,
					url: '/img/gallery/hotpath/modules.jpg', thumbUrl: '/img/thumbnails/hotpath/modules.jpg',
					title: 'Powering Hotpath is a framework I wrote, called Alpaca. It uses a combination of modules and build tasks to facilitate slideshow viewing.'
				}
			],
			links: [
				{title: 'Website', url: 'https://hotpath.org'},
				{title: 'Slides', url: 'https://docs.google.com/presentation/d/1fXGS0zLGAp8lU5KhXl2R51ZVs4z0pNzwc6QLeT1XUW4/edit#slide=id.g1af1d95d23_0_558'}
			],
			description: 'Managed a survey creation and data collection tool.'
		},
		{ title: 'Wellopp',
			tags: ['web', 'ui'],
			image: 'img/projects/thumb.jpg',
			gallery: [
				{
					id: 1,
					url: 'img/gallery/wellopp/redesign.png', thumbUrl: 'img/thumbnails/wellopp/redesign.png',
					title: 'Redesigned the existing client-facing dashboard, adding a timeline  and report feature.'
				},
				// {
				// 	id: 2,
				// 	url: 'img/gallery/wellopp/wellopp.png', thumbUrl: 'img/thumbnails/wellopp/wellopp.png',
				// 	title: 'The new wellopp.com website, as part of the rebranding from Homeward Healthcare.'
				// },
				{
					id: 3,
					url: 'img/gallery/wellopp/splash.png', thumbUrl: 'img/thumbnails/wellopp/splash.png',
					title: 'The splash header of wellopp.com'
				},
				{
					id: 4,
					url: 'img/gallery/wellopp/556.jpg', thumbUrl: 'img/thumbnails/wellopp/556.jpg',
					title: 'At Behavior Design Bootcamp in Healdsburg, California with @bjfogg'
				},
				{
					id: 5,
					url: 'img/gallery/wellopp/mhacks.jpg', thumbUrl: 'img/thumbnails/wellopp/mhacks.jpg',
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
					url: 'img/gallery/devicepreview/tablet.png', thumbUrl: 'img/thumbnails/devicepreview/tablet.png',
				},
				{
					id: 3,
					url: 'img/gallery/devicepreview/phone.png', thumbUrl: 'img/thumbnails/devicepreview/phone.png'
				},
				{
					id: 1,
					url: 'img/gallery/devicepreview/desktop.png', thumbUrl: 'img/thumbnails/devicepreview/desktop.png',
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
					url: 'img/gallery/fooblox/scratch.png', thumbUrl: 'img/thumbnails/fooblox/scratch.png',
					title: 'Original concept. The goal was to describe progams with colored blocks. The plan was to 1) identify the blocks by color using object recognition, 2) convert the block matrix into a python expression string, 3) execute the expression string and collect output.'
				},
				{
					id: 2,
					url: 'img/gallery/fooblox/142.jpg', thumbUrl: 'img/thumbnails/fooblox/142.jpg',
					title: 'I used a webcam attached to a lamp and the c++ OpenCV library to perform object recognition.'
				},
				{
					id: 3,
					url: 'img/gallery/fooblox/005.jpg', thumbUrl: 'img/thumbnails/fooblox/005.jpg',
					title: '24 hours into HackingEDU hackathon. Over 1000 hackers from around the world.'
				},
				{
					id: 4,
					url: 'img/gallery/fooblox/lesson.jpg', thumbUrl: 'img/thumbnails/fooblox/lesson.jpg',
					title: 'Web UI includes learning lessons and challenges, designed to teach programming basics.'
				},
				{
					id: 5,
					url: 'img/gallery/fooblox/present.jpg', thumbUrl: 'img/thumbnails/fooblox/present.jpg',
					title: 'I was selected as a finalist and had the opportunity to present.'
				},
				{
					id: 6,
					url: 'img/gallery/fooblox/devpost.jpg', thumbUrl: 'img/thumbnails/fooblox/devpost.jpg',
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
					url: 'img/gallery/msight/106.jpg', thumbUrl: 'img/thumbnails/msight/106.jpg',
					title: 'The feedback sleeve provides directional assistance using vibration.'
				},
				{
					id: 2,
					url: 'img/gallery/msight/107.jpg', thumbUrl: 'img/thumbnails/msight/107.jpg',
					title: 'Presentations. I am the zombie that sacrificed sleep'
				},
				{
					id: 3,
					url: 'img/gallery/msight/087.jpg', thumbUrl: 'img/thumbnails/msight/087.jpg',
					title: 'The team: me, Ethan Weber (MIT), Jason Lin (USC/Georgia Tech), Kartikay Goyle (U of Toronto)'
				},
				{
					id: 4,
					url: 'img/gallery/msight/team.jpg', thumbUrl: 'img/thumbnails/msight/team.jpg'
				},
				{
					id: 5,
					url: 'img/gallery/msight/086.jpg', thumbUrl: 'img/thumbnails/msight/086.jpg',
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
					url: 'img/gallery/maposaur/maposaur_console.png', thumbUrl: 'img/thumbnails/maposaur/maposaur_console.png',
					title: 'The Angular web dashboard, used by venues to manage events'
				},
				{
					id: 2,
					url: 'img/gallery/maposaur/010.png', thumbUrl: 'img/thumbnails/maposaur/010.png',
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
					url: '/img/gallery/carevoice.png', thumbUrl: '/img/thumbnails/carevoice.png'
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
					url: 'img/gallery/afo.jpg', thumbUrl: 'img/thumbnails/afo.jpg',
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
					url: 'img/gallery/iamcampaigne/preview.jpg', thumbUrl: 'img/thumbnails/iamcampaigne/preview.jpg',
					title: 'Original design, light variant'
				},
				{
					id: 2,
					url: 'img/gallery/iamcampaigne/preview_3.jpg', thumbUrl: 'img/thumbnails/iamcampaigne/preview_3.jpg',
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
					url: 'img/gallery/arenabros/050.jpg', thumbUrl: 'img/thumbnails/arenabros/050.jpg',
					title: 'Arena Bros was built in Unity using C#. The player can run, block, hit, and throw energy balls against an ai opponent.'
				},
				{
					id: 2,
					url: 'img/gallery/arenabros/053.jpg', thumbUrl: 'img/thumbnails/arenabros/053.jpg',
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
			name: 'photos',
			description: 'Photos of my life'
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

	$scope.menuItems = [
		{
			name: 'Projects',
			icon: 'developer_board',
			command: 'projects'
		},
		{
			name: 'Design',
			icon: 'gesture',
			command: 'design'
		},
		{
			name: 'Bio',
			icon: 'face',
			command: 'bio'
		},
		{
			name: 'Resume',
			icon: 'card_travel',
			command: 'resume'
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

	$scope.closeMenu = function(){
		$scope.menu = false;
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
			console.log('help')
			anime({
				targets: outputWindowEl,
				scrollTop: prev_height,
				duration: 500,
				easing: 'linear'
			})
			bodyEl.scrollTop = bodyEl.scrollHeight;
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
		} else if (command == 'photos'){ 
			window.open('https://photos.app.goo.gl/QTiTypc7ZapzbFaz9', '_blank');
			$scope.showOutput('<br>', 'photos');
		} else if (command == 'design' || command == 'help' || command == 'profile' || command == 'social' || command == 'bio' || command == 'projects'){
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

	$scope.menu = false;
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

	$scope.desktop = false;

	$scope.mobileAndTabletcheck = function() {
  	var check = false;
  	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  	$scope.desktop = !check;
  	return check;
	};

	$scope.focus = function(){
		if ($scope.desktop || !$scope.mobileAndTabletcheck())
			document.getElementById('input').focus();
	}

	$scope.playCommands = function(commands, callback, i, cur){

		i = i || 0;
		cur = cur || 0;
		
		if (i == commands[cur].length + 1){
			$scope.submitLine(commands[cur]);
			cur = cur+1;
			i = 0;
		}
		if (cur == commands.length){
			$scope.cursorOffset = 0;
			if (callback) {
				callback();
			}
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
