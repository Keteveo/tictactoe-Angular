# Tictactoe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

# Did you get a compilation error on the file state.service.ts?
If you use a previous Angular version like 6.3.3, an error may pop-up when you try to compile the code due to a code change on the way to import the BehaviorSubject between versions. 

## importing BehaviorSubject code changes between versions:
### Angular Version 7.3.3 .- 
import { BehaviorSubject } from "rxjs";

### Angular previous versions .-
import { BehaviorSubject } from "rxjs-compat/BehaviorSubject";
or
import { BehaviorSubject } from "rxjs/BehaviorSubject";


## How to solve the error
I have documented the error inside the state.service.ts file.
If you receive the error message, just open the file, comment the line 6, and remove comments from line 12 of the file.
If you find any problem, please contact me at mapulidop (@) gmail (.) com (eighter use English and Spanish at your choice)

# The TicTacToe application

The application includes the requested improvements as follows:

## 1 Movements count
I have created a new component "footer" to be installed under the board, where it's placed the movements count.
The movements logic is implemented in the status service adding the property "movements" to the service _status. This property is increased whenever a new movement is done, and is inserted into the footer templated with an async pipe to render any changes on the property.

## 2 Reset button
The reset button is placed at the footer component
Whenever you push this button, you call the reset function from the Status service. I've added to this function the logic to reset the movement count.

## 3 Winner
I created a property to the status called "winner". This property can have one out of three values: "none", "PLAYER X" or "PLAYER 0".
I also created a new method "evaluateWinnerMovement" witch is called from the method "updateValue" everytime you make a new move. The evaluateWinnerMovement method goes across the values array evaluating any possible winning combination in rows, columns or diagonals. It returns true if it finds a winner move.
When the updateValue detects a winner movement, it updates the state.winner property to set the name of the player who made the last movement. If a winner was found, the state.turn doesn't change, to keep the value of the player who made the winner movement.
I also added a starting condition to the updateValue method, that checks if there's a winner. If there's no winner, it keeps as usuall but if there is one, it exits with no further action. This prevents the game to continue after a winner was found.



## Bonus: CSS and status improvements
I've added some css to the game with a few *ngIf statements to apply it depending on the Status of the game.
### Adding color to players
I added a different color for Player X (green) and Player 0 (orange). This is done using classes on every component's css code. 
The color pattern applies to squares depending on their value, and the header depending on the turn or if there's a winner.
### Adding color to the footer
The footer movement count badge changes it's color to red if it gets to 9 movements
### No more movements message on header
The header shows the message "no more movements" if it detects the movement count has gone up to 9. It also changes it's color to red whenever this happens


# Any comments?
Please contact me if you have any questions or you find any problem running the code.
mapulidop (@) gmail (.) com



# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
