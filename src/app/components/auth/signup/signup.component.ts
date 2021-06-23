import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { mainFunctions } from 'src/main';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;
  showPass = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
    this.registrationForm = this.formBuilder.group({
      custPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmCustPassword: ['', [Validators.required]],
      custEmail: ['', [Validators.required]],
      custName: ['', [Validators.required, Validators.minLength(8)]],
    }
    ,{validator: this.checkIfMatchingPasswords('custPassword', 'confirmCustPassword')});
  }
  get f() { return this.registrationForm.controls; }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  register() {
    this.submitted = true;
    if(this.registrationForm.valid)
      this.authService.registerUser(this.registrationForm.value).subscribe(
        (result) =>{
          if(result.result.status == '200')
          {
            this.router.navigate(['/auth/signup/successfully']);
          }
          else if(typeof result.result.errors != "undefined") 
          {
            let validationErrors = mainFunctions.getError(result.result.errors);
            Object.keys(validationErrors).forEach(prop => {
              const formControl = this.registrationForm.get(prop);
              if (formControl) {
                // activate the error message
                formControl.setErrors({
                  serverError: validationErrors[prop as any]
                });
              }
            });
          }
        }
      );
  }

}
