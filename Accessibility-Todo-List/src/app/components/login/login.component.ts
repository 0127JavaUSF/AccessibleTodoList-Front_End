import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  usernameClass: string;
  passwordClass: string;
  hide = 'error hide my-auto';
  dontHide = 'error my-auto';

  constructor(
    private route: Router,
    private userService: UserService) { }

  ngOnInit(): void {

    this.usernameClass = this.hide;
    this.passwordClass = this.hide;
  }

  validatePassword(): boolean {

    if (!this.password.trim()) {

      this.passwordClass = this.dontHide;
      return false;
    } else {
      this.passwordClass = this.hide;
      return true;
    }
  }

  validateUsername(): boolean {

    if (!this.username.trim()) {

      this.usernameClass = this.dontHide;
      return false;
    } else {
      this.usernameClass = this.hide;
      return true;
    }
  }

  onSubmit() {

    // if username or password empty
    const isPWValid = this.validatePassword();
    const isUserValid = this.validateUsername();
    if (!isPWValid || !isUserValid) {
      return;
    }

    const user = new User();
    user.username = this.username;
    user.password = this.password;
    // JL: commented; back-end not yet pushed on github
    /*
    console.log(user);
    this.userService.login(user).subscribe(data => {
      const newUser = data;


      //route to search page by default
      this.route.navigate(['search']);

    }, error => {
      console.error(error);
      const test = 0;
    });
    */
    this.route.navigate(['todo-list']);
  }
}
