import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean;

    constructor(private dataSharingService: DataSharingService) {
      console.log(this.isUserLoggedIn);
        this.dataSharingService.isUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
            console.log(this.isUserLoggedIn);
        });
    }

  ngOnInit(): void {
  }

}
