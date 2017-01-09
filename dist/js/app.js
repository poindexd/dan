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
		bodyEl.scrollTop = bodyEl.scrollHeight;
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
		 + command + '</div>');
	}


	$scope.init = function(){
		historyEl = angular.element(
			document.querySelector('#history')
		);
		bodyEl = document.getElementById('cli-body');
		$scope.playCommands(['profile', 'social']);
	}


	$scope.playCommands = function(commands, i=0, cur=0){

		if (i == commands[cur].length + 1){
			$scope.submitLine(commands[cur]);
			cur = cur+1;
			i = 0;
		}
		if (cur == commands.length){
			return;
		}

		$scope.inputLine = commands[cur].substr(0, i);

		$timeout(function(){
			$scope.playCommands(commands, i + 1, cur);	
		}, Math.random() * 300)
	}

	$scope.init();
}]);
