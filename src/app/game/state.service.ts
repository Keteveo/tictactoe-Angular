import { Injectable } from "@angular/core";

/// ::::::::::::: A T T E N T I O N :::::::::::::::
///
/// This import statement works on Angular 6.3.3
import { BehaviorSubject } from "rxjs";
///
///
/// If you receive a "cannot find module" error,
/// remove the previous import and  use inted the next one:

//import { BehaviorSubject } from "rxjs-compat/BehaviorSubject";

///
///

export interface State {
  turn: string;
  movements: number;
  winner: string;
  values: string[][];
}

@Injectable({
  providedIn: "root"
})
export class StateService {
  private _state$: BehaviorSubject<State>;

  constructor() {
    let initialState = {
      turn: "PLAYER X",
      movements: 0,
      winner: "none",
      values: [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]
    };

    this._state$ = new BehaviorSubject(initialState);
  }

  get state$(): BehaviorSubject<State> {
    return this._state$;
  }

  get state(): State {
    return this._state$.getValue();
  }

  set state(state: State) {
    this._state$.next(state);
  }

  evaluateWinnerMovement() {
    let values = this.state.values;
    //Evaluate a winner movement only if there was no winner declared previously
    if (this.state.winner === "none") {
      console.log("winner ", this.state.winner);
      //evaluate rows
      for (var row = 0; row <= 2; row++) {
        if (
          values[row][0] !== "-" &&
          values[row][0] === values[row][1] &&
          values[row][0] === values[row][2]
        ) {
          return true;
        }
      }

      //evaluate columns
      for (var col = 0; col <= 2; col++) {
        if (
          values[0][col] !== "-" &&
          values[0][col] === values[1][col] &&
          values[0][col] === values[2][col]
        ) {
          return true;
        }
      }

      //evaluate diagonal "/""
      if (
        values[0][0] !== "-" &&
        values[0][0] === values[1][1] &&
        values[0][0] === values[2][2]
      ) {
        return true;
      }

      //evaluate diagonal "\"
      if (
        values[2][0] !== "-" &&
        values[2][0] === values[1][1] &&
        values[2][0] === values[0][2]
      ) {
        return true;
      }
    }
    return false;

    return false;
  }

  updateValue(row, col) {
    if (this.state.winner === "none") {
      if (this.state.values[row][col] === "-") {
        let thisTurn = this.state.turn;
        let newValue = this.state.turn === "PLAYER X" ? "X" : "0";
        let newTurn = this.state.turn === "PLAYER X" ? "PLAYER 0" : "PLAYER X";
        this.state.values[row][col] = newValue;
        this.state.movements++;
        if (this.evaluateWinnerMovement()) {
          this.state.winner = thisTurn;
        } else {
          //turn state is updated only if there's no winner. This way, the template can show the appropriate CSS style using *ngIF
          this.state.turn = newTurn;
        }
        this._state$.next(this.state);
      }
    }
  }

  reset() {
    this.state = {
      turn: "PLAYER X",
      movements: 0,
      winner: "none",
      values: [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]
    };
  }
}
