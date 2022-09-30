import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  styles: [`
    .search-box {
      font-size: 20px;
      border-radius: 25px;
      padding: 8px 15px;
    }


  `],
  template: `
    <div class="container py-4">
      <div class="pb-3 mb-4 border-bottom d-flex justify-content-center py-3">
        <input type="text" class="search-box form-control" placeholder="Seach Location...">
        <!-- <span class="fa-duotone fa-magnifying-glass"></span> -->
      </div>

      <div class="row align-item-md-stretch">
        <div class="col-md-4 py-4">
          <div class="h-100 p-4 bg-light border rounded-3">
            <h4>Current Weather</h4>
            <button class="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>
        <div class="col-md-8 py-4">
          <div class="h-100 p-4 bg-light border rounded-3">
            <h3>3-hour 5 day Forecast</h3>
            <button class="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>
      </div>

      <div class="p-5 bg-light border rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Weather Map</h1>
          <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          <button class="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
      </div>

      <div class="row align-item-md-stretch">
        <div class="col-md-6 py-4">
          <div class="h-100 p-5 text-bg-secondary border rounded-3">
            <h2>Change the background</h2>
            <button class="btn btn-outline-light" type="button">Example button</button>
          </div>
        </div>
        <div class="col-md-6 py-4">
          <div class="h-100 p-5 text-bg-secondary border rounded-3">
            <h2>Other readings</h2>
            <button class="btn btn-outline-light" type="button">Example button</button>
          </div>
        </div>
      </div>


      <div class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">API</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About Me</a></li>
        </ul>
        <p class="text-center text-muted" href="google.com">&copy; 2022 Carlos Villanueva</p>
      </div>



    </div>



`
})

export class HomeComponent implements OnInit {


  constructor(  ) {}

  ngOnInit() {

  }


}
