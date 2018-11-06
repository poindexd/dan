angular.module('commandTemplates', []).run(['$templateCache', function($templateCache) {$templateCache.put('command-template-bio','<div class="card-panel"><p class="flow-text">I\'m 25 years old, born in New York and raised in Michigan. I graduated from the <strong>University of Michigan</strong> with a degree in <strong>Computer Science and Entrepreneurship</strong>. I currently live in <strong>Denver, Colorado</strong>, where I work as a <strong>software engineer</strong> for a NYC-based startup.</p><p class="flow-text">I enjoy working on technical side projects and staying up late. I\'m taking robotics and cooking science courses in pursuit of my dream of building an robotic kitchen. I\'m learning to speak Korean, and I <i class=\'middle pink-text material-icons\'>favorite</i> Korean food. </p></div>');
$templateCache.put('command-template-cover','<div class="card-panel" id="resume"><div class="row"><div class="col s12" style="border-bottom: 2px solid #eee;"><h5 class="center" style="margin: 18px 0px;">Dan Poindexter</h5></div><div class="col s12" style="border-bottom: 2px solid #eee; display: flex; flex-direction: row; justify-content:space-around; font-size: 0.8em;"><p>(616) 856-2365</p><p>poindexd@umich.edu</p><p>danpoindexter.com</p><p>1859 28th St #513, Denver CO 80216</p></div><div class="col s12" style="margin-top: 20px; padding: 0px 36px; text-align: justify;"><div class="row"><div class="col s12" style="margin: 20px 0px;"><h5 class="left">Hello Canvas!</h5><p class="right">November 5, 2018</p></div></div><p>I am very interested in Canvas and the opportunity to work as a front-end engineer in the robotics industry! I have a deep interest in robotics, and I am currently pursuing a MicroMasters degree in robotics.</p><p>I am a full-stack engineer with 3+ years of experience, specializing in front-end.  Over the past few years, I have led front-end development and UI/UX at a couple of early-stage startups. I currently lead front-end development of a market research platform that continues to grow 15% monthly. Since I came on as the second engineering hire, the number of monthly users has doubled to over 100k.</p><p>Over the past few years, I have focused on front-end, mostly working in AngularJS, Node, and Express. Besides for these technologies, I have used many of the tools listed on the job description - React, Redux, websockets, ES6, Android, Google maps, Leaflet, etc. </p><p>My lifelong dream is to build a robotic kitchen. In pursuit of that goal, I want a position where I can learn as much as possible about robotics. I would love to be exposed to hardware and computer vision in the workplace.</p><p>This company looks like a perfect fit for me to apply my knowledge of web development and support my robotics journey. I am excited to learn more about Canvas, the product, and how I can be a part of your success!</p><br/><p>Thanks for your consideration,</p><p>Dan</p></div></div></div>');
$templateCache.put('command-template-design','<ng-image-gallery images="design" thumbnails="false" methods="methods"></ng-image-gallery><div ng-init="deckgrid = true"><div class="deckgrid" deckgrid="deckgrid" source="design" ng-if="deckgrid"><div style="padding: 5px;"><img class="z-depth-1" ng-src="{{card.url}}" width="100%" ng-click="mother.openDesignGallery(card.$index)" style="cursor:pointer;"/></div></div></div>');
$templateCache.put('command-template-help','<div class="card-panel"><h5>This is an <strong>experimental</strong> command line interface. Let me know what you think!</h5><div class="container"><div ng-repeat="command in commands"><div class="row"><div class="col s2"><a class="right blue-text" ng-click="playCommands([command.name])">{{command.name}}</a></div><div class="col s10"><span>{{command.description}}</span></div></div></div></div></div>');
$templateCache.put('command-template-profile','<div class="card-panel"><div class="row"><div class="col s12 l4 center"><img class="responsive-img" src="img/danpoindexter.png" style="width: 175px;"/></div><div class="col s12 l8"><h4>Hi! I\'m Dan. </h4><h5>I\'m a developer that loves building simple web experiences</h5><h5 class="hide-on-small-only">Try typing a command! Start typing <strong>"help"</strong>.</h5></div></div></div>');
$templateCache.put('command-template-projects','<br/><div class="row"><div class="col s12 m6 l4" ng-repeat="project in projects | limitTo: projectLimit"><div class="card medium" ng-click="project.detail = true" style="cursor: pointer;"><div class="card-image" ng-show="!project.detail"><img ng-src="{{project.image}}"/></div><div class="card-content" ng-show="!project.detail"><p><strong class="black-text">{{project.title}}</strong></p><p class="black-text">{{project.description}}</p></div><div class="card-content" ng-show="project.detail"><p><strong class="black-text">{{project.title}}<a class="black-text" ng-click="project.detail = false;$event.stopPropagation()"><i class="material-icons right">close</i></a></strong></p><br/><ng-image-gallery images="project.gallery"></ng-image-gallery></div><div class="card-action" ng-show="project.detail"><a ng-repeat="link in project.links" ng-href="{{link.url}}">{{link.title}}</a></div><div class="card-action" ng-show="!project.detail"><div class="chip" ng-repeat="tag in project.tags" ng-class="tags[tag].color">{{tags[tag].text}}</div></div></div></div></div><div class="row"><div class="col s12 center"><a class="chip grey white-text" ng-show="projectLimit &lt; projects.length" ng-click="projectLimit = projectLimit + 6">+ load more</a></div></div>');
$templateCache.put('command-template-resume','<div class="card-panel" id="resume"><div class="row"><div class="col s12"><h5>Dan Poindexter</h5><!--h6 Professional Summary--><blockquote><div class="blockquote"><p>Experienced full-stack engineer specializing in front-end, UX, and material design</p></div></blockquote></div><div class="col s12 l8" id="left"><h6>Experience</h6><blockquote style="margin-bottom:0px;"><div class="blockquote"><h6>Respondent, New York NY<span class="right date">November 2017 - Present</span></h6><span class="title">Software Engineer</span><ul class="dashed"><li>Led front-end development at a startup with 100k monthly users, designing, building, and maintaining core features</li><li>Led UI/UX of new features and refactor of dashboard to SPA</li></ul><h6>Wellopp,  Toledo OH<span class="right date">April 2016 - October 2017</span></h6><span class="title">Lead Product Engineer</span><ul class="dashed"><li>Managed local and remote teams, leading development of several healthcare web applications</li><li>Led and unified UI/UX across all company products</li></ul><h6>Maposaur,  Ann Arbor MI<span class="right date">May 2015 - April 2016</span></h6><span class="title">Founder and Developer</span><ul class="dashed"><li>Founded event services startup that allows users to create custom event maps and chat areas via mobile and web app</li></ul><h6>Steelcase,  Grand Rapids MI<span class="right date">May 2014 - August 2014</span></h6><span class="title">Web Developer</span><ul class="dashed"><li>Developed .NET web application that allows furniture dealers to collaborate, design, and submit custom requests</li></ul></div></blockquote><h6>Education</h6><blockquote style="margin-bottom:0px;"><div class="blockquote"><h6>University of Pennsylvania, Online<span class="right date">February 2019</span></h6><span class="title">MicroMasters Robotics</span><br/><br/><h6>University of Michigan,  Ann Arbor MI<span class="right date">December 2015</span></h6><span class="title">B.S.E. Computer Science in Engineering</span><br/><span class="title">Program in Entrepreneurship</span></div></blockquote></div><div class="col s12 l4" id="right" style="border-left:2px solid #eee;"><h6>Contact</h6><ul><li>(616) 856 - 2365</li><li>poindexd@umich.edu</li><li>danpoindexter.com</li></ul><h6>Expertise</h6><p>AngularJS, Node.js, Express, Gulp, Pug/HTML, Sass/CSS, SQL/NoSQL, Firebase, Git</p><h6>Skills</h6><p>React, Redux, UI/UX, Unit Testing, Product Management</p><h6>Additional Courses</h6><p>Machine Learning (Stanford), Advanced React and Redux, The Complete React Native and Redux Course</p><h6>Achievements</h6><ul><li>University Honors,</li><li>Dean\'s List,</li><li>Fogg Behavior Design Boot Camp Graduate,</li><li>Devpost Staff Pick,</li><li>HackingEdu Finalist,</li><li>MHacks 6 Best Overall Use of Microsoft Technology,</li><li>University of Michigan Club of Grand Rapids Scholarship</li></ul></div></div></div>');
$templateCache.put('command-template-social','<div class="card-panel"><div class="row"><div class="col s3 center"><div class="circle grey" style="width: 3em;height:3em;padding:0.75em;margin: 0 auto;"><a href="https://linkedin.com/in/danpoindexter" target="_blank"><img src="./img/icons/linkedin.svg" style="width: 1.5em;" alt="LinkedIn"/></a></div></div><div class="col s3 center"><div class="circle grey" style="width: 3em;height:3em;padding:0.75em;margin: 0 auto;"><a href="https://github.com/poindexd" target="_blank"><img src="./img/icons/github.svg" style="width: 1.5em;" alt="GitHub"/></a></div></div><div class="col s3 center"><div class="circle grey" style="width: 3em;height:3em;padding:0.75em;margin: 0 auto;"><a href="https://photos.app.goo.gl/QTiTypc7ZapzbFaz9" target="_blank"><img src="./img/icons/photos.svg" style="width: 1.5em;" alt="Photos"/></a></div></div><div class="col s3 center"><div class="circle grey" style="width: 3em;height:3em;padding:0.75em;margin: 0 auto;"><a href="mailto:poindexd@umich.edu" target="_blank"><img src="./img/icons/envelope-o.svg" style="width: 1.5em;" alt="Mail"/></a></div></div></div></div>');}]);