import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import{Router} from '@angular/router';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private toastr: ToastrService, private apiService: ApiService, private router:Router) {

      if(localStorage.getItem('access_token')  !== null){

        this.router.navigateByUrl('/project');

      }else
      {
        this.toastr.error('First Login...');
        this.router.navigateByUrl('/login');
      }

   }

  ngOnInit() {

  }

  RegisterUser(userdata){ 
    console.log(userdata);
    this.apiService.registerUsers(userdata).subscribe((reponse)=>{
      console.log(reponse)
      this.toastr.success('Successfully Inserted...');
      this.router.navigateByUrl('projecthome');
      
     }); 
     
  }

  
  

}
