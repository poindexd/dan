angular.module('commandTemplates', []).run(['$templateCache', function($templateCache) {$templateCache.put('command-template-help','<span>Commands:</span><div ng-repeat="command in commands"><span>{{command}}</span></div>');
$templateCache.put('command-template-profile','<div class="center"><img src="img/danpoindexter.png" style="width: 150px"/></div>');
$templateCache.put('command-template-social','<br/><div class="row"><div class="col s2 center"><!--a(href=url): i.fa.fa-2x(class=icon)--><a href="https://facebook.com/danmanpoindexter"><img src="./img/icons/facebook.svg" style="width: 40px" alt="Facebook"/></a></div><div class="col s2 center"><!--a(href=url): i.fa.fa-2x(class=icon)--><a href="https://linkedin.com/in/danpoindexter"><img src="./img/icons/linkedin.svg" style="width: 40px" alt="LinkedIn"/></a></div><div class="col s2 center"><!--a(href=url): i.fa.fa-2x(class=icon)--><a href="https://github.com/poindexd"><img src="./img/icons/github.svg" style="width: 40px" alt="GitHub"/></a></div><div class="col s2 center"><!--a(href=url): i.fa.fa-2x(class=icon)--><a href="https://soundcloud.com/dannyp93"><img src="./img/icons/soundcloud-logo.svg" style="width: 40px" alt="Soundcloud"/></a></div><div class="col s2 center"><!--a(href=url): i.fa.fa-2x(class=icon)--><a href="https://codepen.io/poindexd"><img src="./img/icons/codepen.svg" style="width: 40px" alt="Codepen"/></a></div><div class="col s2 center"><!--a(href=url): i.fa.fa-2x(class=icon)--><a href="mailto:poindexd@umich.edu"><img src="./img/icons/envelope-o.svg" style="width: 40px" alt="Mail"/></a></div></div>');}]);