import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  async onSummit() {
    this.loginService.login(
      {
        email: this.emailFormControl.value.replace('@', '%40'),
        pass: this.passwordFormControl.value
      }
    );
    this.emailFormControl.reset();
    this.passwordFormControl.reset();
  }

}
