import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  group!: FormGroup;

  constructor(public form: FormBuilder, private router: Router) {
    this.group = this.form.group({
      username: '',
      password: '',
    });
  }

  $ = (element: string): HTMLElement | null => document.querySelector(element);

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.$('svg')?.addEventListener('click', () => {
  //       const value = this.$('#password') as HTMLInputElement;
  //       value.type = value.type === 'password' ? 'password' : 'text';
  //       console.log(value);
  //     });
  //   },1000);
  // }

  handlePassword(element: HTMLInputElement) {
    element.type = element.type === 'password' ? 'text' : 'password';
  }

  handleSubmit(e: Event) {
    e.preventDefault();

    const { status } = this.group;

    if (status == 'INVALID') return;

    const { username, password } = this.group.value;

    window.localStorage.setItem('user', JSON.stringify({ username, password }));
  }

  canActivate(): boolean {
    this.router.navigate(['/main']);
    return false;
  }
}
