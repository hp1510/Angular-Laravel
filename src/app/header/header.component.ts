import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  access_token;

  constructor(private toastr: ToastrService, private apiService: ApiService, private router:Router) { }

  ngOnInit() {
    this.access_token = localStorage.getItem('access_token');
  }

  onClick(logout: Event): void {
    
      this.apiService.logout()
      this.toastr.success('Successfully Log Out...');
      this.router.navigateByUrl('');
      location.reload();

  }

}
