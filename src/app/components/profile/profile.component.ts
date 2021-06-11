import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  typesOfAction: string[] = ['My Orders', 'Tracking Order', 'My Favourite List', 'Edit Account'];

  showPass = true;
  constructor() { }

  ngOnInit(): void {
  }

}
