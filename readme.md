# Project 1
 Project One Frogger README

Contents 

Project Overview
Brief
Timeframe
Deploy Link
Technologies Used
Instructions for use.
Planning
Build
Bugs
Challenges
Wins & Learning
Areas For Future Development

Project Overview

As part of my 12-week software engineering immersive, my first solo project was to create a classic arcade game using HTML, CSS and JavaScript.

Project Brief 

Render a game in the browser.
Include separate HTML / CSS / JavaScript files.
Use KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself) principles.
Deploy the game online, where the rest of the world can access it. 
Use semantic markup for HTML and CSS (adhere to best practices)
Time Frame

7 Days

Deployment 

Deployed here

Technologies Used

HTML
CSS
JavaScript
GIt
GitHub

Instructions For Use 

The frog has to travel across the road and across the river to the lilypad to complete the game. Press start game, then the keyboard arrow keys to move the frog in a direction. If the frog gets hit by the cars or goes into the blue river, you lose a life and the frog goes back to the start. If the frog loses all three lives it's game over and you have to hit restart to play again. 

Planning

The initial plan was to split the week into 3 main sections. Game mechanics (JavaScript and HTML), styling (CSS) and the last section was allowing 24hrs of unplanned time to either add to the game mechanics or the styling. 

I didn’t write any code out initially but I did think of what functions I would need to create for the game to work, I arrived at:

Create a grid for players and objects to move along.
Create cars that have different speeds which move along road areas.
Create logs that move along river areas, these must be arrays.
Create frog movement mechanics.
Create a function that detects whether the frog has been hit by a car.
Create a river function that detects if the frog has gone into the river.
Create a death function which after losing a life, respawns the frog at the starting point and deducts a life. 
Create a function that allows the frog to sit on a log and move with the log.
Create a game win function when the frog arrives at the lilypad. 

For the styling part, I thought it would be best if I go with a more classic version of frogger. I didn’t realise how hard it was going to be to get really good png images to use, but I’ll talk more about that in the challenges section.

The build

Grid

To have an appearance of a game, I created a grid where the Frog can move around and the cars and logs have set areas they can move across the screen. I use DOM manipulation and pushed cells into an empty div to create a grid. I looped this to create a 10 x 10 grid.



Movement

One of the key features of the game is the ability of the frog to move across the grid. The switch statement adds or minus in the x or y-axis depending on which key is pressed. At the end of the switch statement it runs the “collisionWater” and “gameWin” functions, these are to check whether the frog has entered the water or has reached the lilypad for the game win. 






River functionality 

How the road, cars, river and logs work is quite similar. Below is the code for the river. To create the river, “riverOnePosition” const are named. Then the “addRiverOne” function uses a “forEach” to populate the array of river cells with the “riverLaneOne” class. 

Each river cell is moving every 500ms, and then the logs move at the same time to create the illusion that the log is floating down the stream. Once a river cell moves to the far left of the grid, in this case, cell 9, the “handleRiverOne” function uses an “if” statement to add the width (10) onto the individual river cell. This same principle is used for all moving objects to give the illusion that they go off-screen left then loop back through to the right of the screen. 

If the frog touches the water it loses a life, that's why near the bottom of the code the function collisonWater is there. It checks to see if the frog is in a river cell. 





Bugs

There is a styling bug on one of the rows of logs, you can sometimes see one and a half frogs where the image has repeated itself. This should be a quick fix. 

Another bug is after the game is reset, the lilypad sprite doesn't show until the frog has moved one position. This is due to the gameWin function which only allows the lilypad to render when the frog has begun to play, this should be an easy fix.

Challenges

The main challenge on this project was I didn’t ask for help. Instead of asking for help from peers, I would sit on a problem all day until I figured out a way to get around it. This isn’t a great use of time as I could have been putting more time into styling.

Another challenge was I underestimated how much time it would take to style and find good png images to use. In all honesty, I didn’t know the differences between a png image and JPEG before starting this project. So with more time I’d redo the styling and change the images for better quality ones. 

Wins & Learning

The major win was being able to create a working game after a few weeks of studying JavaScript, HTML and CSS. It was incredibly hard for me at the time to do but looking back post-course it was a great exercise as it was challenging and got me to think outside the box of general classwork. 


Area For Future Development

Styling, I'm not happy with most of the sprites used, the colours clash a bit and you can’t see the frog or lilypad with the background. Some better and smoother animations could be added to the cars/river. Hover styling to buttons needs adding and the font needs changing too.

More functionality, new levels, different obstacles, something to replenish the frog's lives in later levels.

As this was my first project, my code is very long and could be refactored for clearer readability. 
