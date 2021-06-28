import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup;
  showPass = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  get userName() {
    return this.registrationForm.get("authCredentialsDto").get("custName");
  }

  get password() {
    return this.registrationForm.get("authCredentialsDto").get("custPassword");
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/profile']);
    }
    this.registrationForm = this.fb.group({
      authCredentialsDto: new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null)
      }),
      createProfileDto: new FormGroup({
        email: new FormControl(null, Validators.required),
        name: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        confirmPassword: new FormControl(null, Validators.required)
      })
    });
  }

  register() {
    const userCredentials = {
      custName: this.userName.value,
      custPassword: this.password.value
    };
    this.authService
      .registerUser(this.registrationForm.value)
      .subscribe(() => {
        this.authService.login(userCredentials).subscribe(
          resToken => {
            localStorage.setItem("token", resToken.data.token);
            this.authService.prepareUserData();
            this.authService.getCurrentUser().subscribe(
              resUser => {
                this.authService.currentUser = resUser;
              }
            );
            this.router.navigate([`/profile`]);
          },
          error => console.log(error)
        );
      });

  }

}
