import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjecteditComponent } from '../projectedit/projectedit.component';
import{Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-projecthome',
  templateUrl: './projecthome.component.html',
  styleUrls: ['./projecthome.component.css']
})
export class ProjecthomeComponent implements OnInit {
  projects;
  projectedits;
  constructor(private toastr: ToastrService, private apiService: ApiService, private HttpClientModule:HttpClientModule, private router:Router) {}
    
  ngOnInit() {

    this.apiService.getProjects().subscribe((data)=>{
      console.log(data['projectimage']);
      this.projects = data['projectimage'];
            
    });

  }

  delProjects(id) {

          if(localStorage.getItem('access_token')  !== null){

            this.apiService
            .delProjects(id)
            .subscribe(
              response => {
                console.log('sucessfully deleted');
                this.toastr.error('sucessfully deleted');
                location.reload();
              },
              error => {
                console.log('error......');
              }
          );
           
          }else
          {
            this.toastr.error('First Login...');
            this.router.navigateByUrl('/login');
          }
    }

   
}
