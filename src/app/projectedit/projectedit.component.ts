import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import{Router} from '@angular/router';

@Component({
  selector: 'app-projectedit',
  templateUrl: './projectedit.component.html',
  styleUrls: ['./projectedit.component.css']
})
export class ProjecteditComponent implements OnInit {
  projectedits;

  constructor(private toastr: ToastrService, private apiService: ApiService,private route: ActivatedRoute, private router:Router) { 
    
    if(localStorage.getItem('access_token')  !== null){

      this.route.params.subscribe( id => this.editProGet(id['id']) );

    }else
    {
      this.toastr.error('First Login...');
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(){


  }

  editProGet(id) {

    this.apiService
        .editPro(id)
        .subscribe((data)=>{
          console.log(data['project']);
          this.projectedits = data['project'];
          
        });
           
  }


  editProjectsPost(editdata){ 
    
    this.apiService.editProjects(editdata).subscribe((reponse)=>{

      console.log(reponse)
      this.toastr.success('Successfully Updated...');
      this.router.navigateByUrl('projecthome');
     }); 
     
  }

}
