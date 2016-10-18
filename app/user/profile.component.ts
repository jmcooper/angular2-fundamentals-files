import { Component } from '@angular/core'

@Component({
  template: `
    <h1>Edit Your Profile {{auth.currentUser.firstName}}</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Edit profile form will go here]
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default">Cancel</button>
    </div>
  `,
})
export class ProfileComponent {
       
}
