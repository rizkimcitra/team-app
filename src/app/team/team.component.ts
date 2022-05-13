import { Component, OnInit, Input } from "@angular/core";

@Component({
   selector: "app-team",
   templateUrl: "./team.component.html",
   styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
   @Input() teams: string[] = [];
   @Input() index: number = 0;
   constructor() {}

   ngOnInit(): void {}
}
