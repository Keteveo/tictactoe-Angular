import { Component, OnInit } from "@angular/core";
import { StateService } from "./../state.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  private _stateService: StateService;

  constructor(stateService: StateService) {
    this._stateService = stateService;
  }

  _handleResetClick() {
    // console.log("Clicking on the square ", this.row, this.column);
    this._stateService.reset();
  }

  ngOnInit() {}
}
