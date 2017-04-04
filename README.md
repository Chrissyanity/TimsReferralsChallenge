# <strong>TimsReferralsChallenge</strong>



<strong>Approach</strong>

I decided to approach Tim's website dilemma by using the AngularJS in conjunction with some basic server-side SQL. I created a database that stored link titles and clicks. From there, I used SQL and CRUD commands to extract and use data from the table. I decided to go the CRUD route because I knew it would come in handy for adding new link titles and deleting rows from the database.

<strong>Technical Choices</strong>

I wanted to keep my code as lean as possible so I used Angular for the most part. I used one controller, one service, one module and two distinct views(referral page and landing page). All of the heavy lifting was done inside of my controller and my factory worked as a middle man between my server.js file and my controller. 

I used Angular expression on my referral page view to create the table and pull the information for the database. I relied on ng-click to update the number of clicks and the adding of a new link. I intended to to use ng-click for my 'edit' and 'delete' buttons as well but unfortunately, I ran into a functionality road block on those. 

Although Tim's website was created in '91, I made it mobile ready for 2017 using responsive bootstrap. 


<strong>Additional information</strong>

Unfortunately, I left out the 'delete' and 'edit' ng-click functionality. I set up the code for both methods inside of my server.js file, factory and controller but for the life of me, I could not get them to delete the rows when the buttons were clicked. 

I also left out the grabbing of the URL and displaying it somewhere on the landing page. My approach was to use $scope.watch $location.search to parse the URL and grab my link title. This would have been pretty straight forward if I only had one parameter to parse but I needed to parse link and link.title. I planned to use an Angular expression on the landing page to display the parsed title from the controller.

I also found another method on StackOverflow where I find a match to the URL string. Example: 
<em>var str = "http://www.your_url.com/landing/?link=wolverines";
var pagenum = str.match(/\?link\=(.*)/)[1];
document.getElementById("result").innerHTML = pagenum[0].toUpperCase() + pagenum.slice(1)+" are awesome!";</em>

This method worked when tested but did not work when I placed it in my code.

I'm sure with a little more time I could resolve all of these issues!

<strong>Links</strong>

HTML/CSS Challenge: 
https://github.com/Chrissyanity/coding-challenge

Tim's Referral Heroku:
https://peaceful-stream-33286.herokuapp.com/
