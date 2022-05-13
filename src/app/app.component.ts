import { Component } from "@angular/core";

@Component({
   selector: "app-root",
   templateUrl: "./app.component.html",
   styleUrls: ["./app.component.css"]
})
export class AppComponent {
   newMemberName = "";
   errorMsg = "";
   members: string[] = [];
   numberOfTeams: number | "" = "";
   teams: string[][] = [];

   clearValue() {
      this.newMemberName = "";
   }

   onInput(value: string) {
      this.errorMsg && (this.errorMsg = "");
      this.newMemberName = value;
   }

   onNumberOfTeamsInput(value: string) {
      this.errorMsg && (this.errorMsg = "");
      this.numberOfTeams = +value;
   }

   addMember() {
      if (this.newMemberName.length > 0) {
         this.members.push(this.newMemberName);
         this.clearValue();
      } else {
         this.errorMsg = "Name can't be empty";
      }
   }

   generateTeams() {
      if (!this.numberOfTeams || this.numberOfTeams <= 0) {
         this.errorMsg = "invalid number of teams!";
         return;
      }

      if (this.members.length < this.numberOfTeams) {
         this.errorMsg = "Not enough members!";
         return;
      }

      this.errorMsg = "";
      const allMembers = [...this.members];

      while (allMembers.length) {
         for (let i = 0; i < this.numberOfTeams; i++) {
            const randomIndex = Math.floor(Math.random() * allMembers.length);
            const member = allMembers.splice(randomIndex, 1)[0];
            if (!member) break;

            if (this.teams[i]) {
               this.teams[i].push(member);
            } else {
               this.teams[i] = [member];
            }
         }
      }

      this.members = [];
   }
}
