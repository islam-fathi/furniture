import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router,private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this._authService.userLogout();
    this.dataSharingService.isUserLoggedIn.next(false);
    this.router.navigate(['home']);
  }

}
