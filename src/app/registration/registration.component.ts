import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private toastr: ToastrService, private apiService: ApiService, private router:Router) { }

  ngOnInit() {
  
  }

  Register(userdata){ 
    this.apiService.register(userdata).subscribe((reponse)=>{
      console.log(reponse)
      this.toastr.success('Successfully Sign Up...');
      this.router.navigateByUrl('login');
      
     }); 
     
  }

}
