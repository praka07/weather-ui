import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  input = {name: ''};

  constructor(private service:ApiService,private router: Router) { }

  ngOnInit(): void {
  }

  checkClimate(){

    this.service.setCityName(this.input.name);
    this.router.navigate(['report']);
  }

}
