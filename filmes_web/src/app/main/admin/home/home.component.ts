import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm?: FormGroup;
  socialUser: SocialUser = new SocialUser;
  isLoggedin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit() {
    this.initForm();
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
