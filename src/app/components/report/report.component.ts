import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Weather } from 'src/app/model/weather.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  cityName!: string;
  report!:Weather;

  constructor(private service: ApiService,private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cityName = this.service.getCityName();
    this.service.getReportByCityName().subscribe(res => {
      if (res.cod == 404) {
        this.toastr.warning("City Not Found", 'Warning');
        this.router.navigate(['report']);
      } else {
        this.report = res;
        console.log(this.report);
      }
    }, error => {
      if (500 == error.status) {
        this.toastr.error('Internal server error', 'Major Error');

      } else {
        this.toastr.error('everything is broken ', 'Major Error');
      }

    })
  }

}
