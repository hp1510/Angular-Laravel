import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import{Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userlog;
  constructor(private toastr: ToastrService, private apiService: ApiService, private router:Router) {}

  ngOnInit() {
  }

  Login(userdata){ 
    this.apiService.login(userdata).subscribe((reponse)=>{
      console.log(reponse['access_token']);
      localStorage.setItem('access_token',reponse['access_token']);
      this.userlog = reponse['access_token'];

      if(this.userlog == true)
      {
        this.toastr.success('Successfully Log In...');
        this.router.navigateByUrl('');
      }
      else
      {
        this.toastr.error('Wrong Email & Password...');
        this.router.navigateByUrl('login'); 
      }
     
      
     }); 
     
  }

}
