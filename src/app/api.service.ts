import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})

export class ApiService {


  constructor(private httpClient : HttpClient) { }

  //insert data...
  baseUrl:string = "http://127.0.0.1:8000/project/project_edit"; 
  public registerUsers(obj){
      return this.httpClient.post(this.baseUrl,obj, {
        headers: new HttpHeaders({
             'Content-Type':  'application/json',
           })
      }).map(data=>
       data);
  }

  //get data...
  public getProjects(){
    return this.httpClient.get(`http://127.0.0.1:8000/project_home`);
  }

  //delete data...
  public delProjects(id){
    return this.httpClient.get('http://127.0.0.1:8000/projectdelete/'+ id);
  }

  //edit data...
  
  public editPro(id){
    return this.httpClient.get(`http://127.0.0.1:8000/project/edit/`+ id);
     
  }


  public editProjects(obj){
    return this.httpClient.post('http://127.0.0.1:8000/project/project_description',obj, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).map(data=>
      data);
  }


  login(obj) {
        return this.httpClient.post<{access_token:  string}>('http://127.0.0.1:8000/api/login', obj, {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
          })
     }).map(data=>
       data);

  }

  register(obj) {

    return this.httpClient.post<{access_token: string}>('http://127.0.0.1:8000/api/register',obj, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).map(data=>
      data);

  }

  logout() {
     return localStorage.removeItem('access_token');
  }

  

}
