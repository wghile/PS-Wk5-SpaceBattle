Game can be accessed here: https://wghile.github.io/spacebattlegame/

## About

This was a mini project for the Per Scholas Scholas Software Engineering course. We were expected to build a game using OOP, loops and functions. At minimum, the game was meant to be playable in the console. Starting code was forked from our instructor: https://github.com/tishana/Space_Battle_starter_code.

## Specifications

### Build a game of battling alien spaceships using Javascript

Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

Battle the aliens as you try to destroy them with your lasers.

There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

Ship Properties:

- hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed

- firepower is the amount of damage done to the hull of the target with a successful hit

- accuracy is the chance between 0 and 1 that the ship will hit its target

Your spaceship, the USS Assembly should have the following properties:

- hull - 20

- firepower - 5

- accuracy - .7

The alien ships should each have the following ranged properties determined randomly:

- hull - between 3 and 6

- firepower - between 2 and 4

- accuracy - between .6 and .8

You could be battling six alien ships each with unique values.

## Features

- I added a 'Start Game' button to the forked starter code to redirect users to another html page I created so the game could be played

- One player game where the user plays as the Razor Crest ship -- the user is expected to operate controls for both their ship (using P key) and the alien ship (using Q key)

- Simple animation to make the game a little fun and not so static

- Game Status at the bottom of the page to indicate player turn

## How to Play

1. Press the 'Start Game'

2. The game will always start with the user. Press the P key

3. Read the Game Status at the bottom of the screen to know next steps:

   - If the user destroyed the alien ship with one hit a prompt will pop up asking the user if they will like to retreat (ending the game immediately) or continue playing

   - If the user missed the alien ship will counter attack (user must press the Q key)

   - If the user hit the alien ship but the alien ship is still alive the alien ship will counter attack (user must press the Q key)

4. Continue the game until either:

   - User decides to retreat

   - User's hull reaches 0 and is destroyed

   - User destroyes all of the alien ships

## Challenges

A big challenge I faced was removing one of the alien images in the alien lives section each time an alien ship was destroyed. I really liked the idea of this feature for the game but was running into errors after removing the last child of the alien lives node. Through many hours of trial and error, and just scanning through all of the drop down options of what I could do with the node list of alien lives in VS Code, I eventually figured it out.

I also had difficulty with changing the colors of the user's hull value depending on if it was between certain values to indicate health danger zone. It was a simple if else statement in theory, but I think I was not calling on the right variable. So for a while the color never changed from being green. Once I figured out all of the other aspects of the game and came back to it, it somehow got working.. haha sometimes you really just have to step back from something and look back at it later.

## Future Improvements

So a big part of this assignment was the use of OOP to create the game. I was able to write a couple of classes, constructor methods, methods and even use inheritance to build the game's structure. But as you can see in my main.js file a lot of this code was not used and I am in violation of the DRY principle 😬 🙊.. I definitely had difficulty incorporating my classes and methods into the actual game since I also wanted to include some DOM manipulation with some of the methods and didn't know how to bridge the two. A lot of errors came about as well. So I pivoted and just used that code as a blueprint to write out all of the steps I wanted to happen for a certain function (i.e. checking the ship's hull, attacking, counterattacking, etc.) It's all very repetitive and I need to go back and figure out how to best use classes and the methods to have more cleaner code.

I think having the alien ship operate automatically without having to press the Q key would be cool. So the user just plays as themself without having to worry about operating the alien ship. I also noticed it is not very obvious when it is the alien ship's turn and the user's..

The event listeners I have for both the alien ship and the user can be pressed at any time without it being that player's turn which isn't good. I would need to figure out how to disable the keys when it's not the other player's turn.

## Acknowledgements

Thank you to my instructors for teaching me the JavaScript foundation to build this game.
