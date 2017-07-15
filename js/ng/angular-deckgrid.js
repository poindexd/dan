/*! angular-deckgrid (v0.5.0) - Copyright: 2013 - 2014, André König (andre.koenig@posteo.de) - MIT */
/*
 * angular-deckgrid
 *
 * Copyright(c) 2013-2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */
angular.module("akoenig.deckgrid",[]),angular.module("akoenig.deckgrid").directive("deckgrid",["DeckgridDescriptor",function(e){"use strict";return e.create()}]),/*
 * angular-deckgrid
 *
 * Copyright(c) 2013-2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */
angular.module("akoenig.deckgrid").factory("DeckgridDescriptor",["Deckgrid","$templateCache",function(e,t){"use strict";function r(){this.restrict="AE",this.template='<div data-ng-repeat="column in columns" class="{{layout.classList}}"><div data-ng-repeat="card in column" data-ng-include="cardTemplate"></div></div>',this.scope={model:"=source"},this.$$deckgrid=null,this.transclude=!0,this.link=this.$$link.bind(this),this.$$templateKeyIndex=0}return r.prototype.$$destroy=function(){this.$$deckgrid.destroy()},r.prototype.$$link=function(r,n,i,o,a){var c="deckgrid/innerHtmlTemplate"+ ++this.$$templateKeyIndex+".html";r.$on("$destroy",this.$$destroy.bind(this)),angular.isUndefined(i.cardtemplate)?(angular.isUndefined(i.cardtemplatestring)?a(r,function(e){var r,n=[],i=0,o=e.length;for(i;i<o;i+=1)r=e[i].outerHTML,angular.isDefined(r)&&n.push(r);t.put(c,n.join())}):t.put(c,n.attr("cardtemplatestring")),r.cardTemplate=c):r.cardTemplate=i.cardtemplate,r.mother=r.$parent,this.$$deckgrid=e.create(r,n[0])},{create:function(){return new r}}}]),/*
 * angular-deckgrid
 *
 * Copyright(c) 2013-2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */
angular.module("akoenig.deckgrid").factory("Deckgrid",["$window","$log",function(e,t){"use strict";function r(t,r){var n,i,o=this;this.$$elem=r,this.$$watchers=[],this.$$scope=t,this.$$scope.columns=[],this.$$scope.layout=this.$$getLayout(),this.$$createColumns(),n=this.$$scope.$watchCollection("model",this.$$onModelChange.bind(this)),this.$$watchers.push(n),angular.forEach(o.$$getMediaQueries(),function(e){function t(){e.removeListener(r)}var r=o.$$onMediaQueryChange.bind(o);e.addListener(r),o.$$watchers.push(t)}),i=e.matchMedia("(orientation: portrait)"),i.addListener(o.$$onMediaQueryChange.bind(o))}return r.prototype.$$getMediaQueries=function(){function t(e){try{return e.sheet.cssRules||[]}catch(e){return[]}}function r(e){var t=/\[(\w*-)?deckgrid\]::?before/g,r=0,n="";if(!e.media||angular.isUndefined(e.cssRules))return!1;for(r=e.cssRules.length-1;r>=0;r-=1)if(n=e.cssRules[r].selectorText,angular.isDefined(n)&&n.match(t))return!0;return!1}var n=[],i=[];return n=Array.prototype.concat.call(Array.prototype.slice.call(document.querySelectorAll("style[type='text/css']")),Array.prototype.slice.call(document.querySelectorAll("link[rel='stylesheet']"))),angular.forEach(n,function(n){var o=t(n);angular.forEach(o,function(t){r(t)&&i.push(e.matchMedia(t.media.mediaText))})}),i},r.prototype.$$createColumns=function(){var e=this;if(!this.$$scope.layout)return t.error("angular-deckgrid: No CSS configuration found (see https://github.com/akoenig/angular-deckgrid#the-grid-configuration)");this.$$scope.columns=[],angular.forEach(this.$$scope.model,function(t,r){var n=r%e.$$scope.layout.columns|0;e.$$scope.columns[n]||(e.$$scope.columns[n]=[]),t.$index=r,e.$$scope.columns[n].push(t)})},r.prototype.$$getLayout=function(){var t,r=e.getComputedStyle(this.$$elem,":before").content;return r&&(r=r.replace(/'/g,""),r=r.replace(/"/g,""),r=r.split(" "),2===r.length&&(t={},t.columns=0|r[0],t.classList=r[1].replace(/\./g," ").trim())),t},r.prototype.$$onMediaQueryChange=function(){var e=this,t=this.$$getLayout();t.columns!==this.$$scope.layout.columns&&(e.$$scope.layout=t,e.$$scope.$apply(function(){e.$$createColumns()}))},r.prototype.$$onModelChange=function(e,t){var r=this;e=e||[],t=t||[],angular.equals(t,e)||r.$$createColumns()},r.prototype.destroy=function(){var e=this.$$watchers.length-1;for(e;e>=0;e-=1)this.$$watchers[e]()},{create:function(e,t){return new r(e,t)}}}]);