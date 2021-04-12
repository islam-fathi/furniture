import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  template: `<header class="">
  <nav class="navbar navbar-expand-lg bg-white justify-content-between py-3 position-relative">
      <div class="container">
          <a class="navbar-brand" href="#"><img src="../assets/images/logo.png" class="h-100" alt=""></a>
          <button class="navbar-toggler ml-auto border-base" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars base-color"></i>
        </button>

          <div class="collapse navbar-collapse align-items-center justify-content-center" id="navbarSupportedContent">
              <form class="form-inline my-2 my-lg-0 ml-auto">
                  <div class="input-group border rounded-lg overflow-hidden">
                      <input type="text" class="form-control border-0" placeholder="Search for products">
                      <div class="input-group-append">
                          <span class="base-bg"><button class="btn rounded-lg text-white">Search</button></span>
                      </div>
                  </div>
              </form>
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                      <a class="nav-link" href="#"><img src="../assets/images/Icons/basket.svg" alt=""></a>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="../assets/images/avatar.jpg" class="rounded-circle" width="35px" height="35px" alt="">
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
          <button class="navbar-toggler ml-auto border-base" type="button" data-toggle="collapse" data-target="#navbarSupportedMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars base-color"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedMenu">
              <ul class="navbar-nav m-auto pt-2 pt-md-0">
                  <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Shop</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">About Us</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Contact Us</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</header>`
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
