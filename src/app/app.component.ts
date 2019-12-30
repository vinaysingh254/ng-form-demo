import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  submitted = false;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    /* this.signupForm.setValue({
       userData: {
         username: suggestedName,
         email: ''
       },
       secret: this.defaultQuestion,
       questionAnswer: '',
       gender: 'Male'
     });*/

    // override part of value
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(f: NgForm) {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }
}
