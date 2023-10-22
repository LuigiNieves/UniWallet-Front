import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  group!: FormGroup;

  constructor(public form: FormBuilder){
    this.group = this.form.group({
      username: '',
      password: ''
    });

  }


  handleSubmit(e: Event) {
    e.preventDefault();

    const {username, password} = this.group.value

    console.log(this.group)

    console.log(username, password)

  }
}
