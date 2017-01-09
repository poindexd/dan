var app = angular.module('app', ['commandTemplates']);


app.controller('controller', [
	'$scope',
	'$compile',
	'$templateRequest',
	'$timeout',
	function($scope, $compile, $templateRequest, $timeout){
	
	var historyEl= {};
	var bodyEl = {};

	$scope.inputLinePrefix = '$';
	$scope.inputLine = '';

	$scope.commands = ['help'];
	
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
		if (output){
			historyEl.append($scope.inputLinePrefix + '&nbsp;&nbsp;' + command || $scope.inputLine);
			historyEl.append('<br>');
			historyEl.append(output);
			historyEl.append('<br>');
		}
		$scope.inputLine = '';
		$timeout(function(){
			bodyEl.scrollTop = bodyEl.scrollHeight;
		}, 50, false);
	}

	$scope.runCommand = function(command){
		if (command == 'clear'){
			historyEl.empty();
			$scope.showOutput(false);
			return;
		}

		if (command == 'help' || command == 'profile' || command == 'social'){
			$templateRequest('command-template-' + command).then(function(tpl){
				var template = angular.element(tpl);
				//element.after(template);
				$scope.showOutput($compile(template)($scope), command);
			});
			return;
		}
		$scope.showOutput('<div class="red-text">unrecognized command: '
		 + command + '</div>', command);
	}


	$scope.init = function(){
		historyEl = angular.element(
			document.querySelector('#history')
		);
		bodyEl = document.getElementById('cli-body');
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
		console.log(event);
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
