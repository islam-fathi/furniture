import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';
import { mainFunctions } from 'src/main';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // we will use reactive forms
  authCredentialsDto: FormGroup;
  modalRef: BsModalRef;
  showPass = true;
  submitted = false;
  @ViewChild('invalidCredentials', {static: true}) invCredentials: TemplateRef<any>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private modalService: BsModalService,
    private dataSharingService: DataSharingService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  get f() { return this.authCredentialsDto.controls; }


  userLogin() {

    this.submitted = true;
    if(this.authCredentialsDto.valid)
    {
      this.authService.login(this.authCredentialsDto.value).subscribe(
        res => {    
          if(res.result.status == '200'){
            this.dataSharingService.isUserLoggedIn.next(true);
            this.router.navigate([`/home`]);
          }
          else if(typeof res.result.errors != "undefined") 
            {
              let validationErrors = mainFunctions.getError(res.result.errors);
              Object.keys(validationErrors).forEach(prop => {
                const formControl = this.authCredentialsDto.get(prop);
                if (formControl) {
                  // activate the error message
                  formControl.setErrors({
                    serverError: validationErrors[prop as any]
                  });
                }
              });
            }
          
        });
    }
    
  }

  ngOnInit() {
    this.authCredentialsDto = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hide(): void {
    this.modalRef.hide();
  }
}
