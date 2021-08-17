import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  implements OnInit{
  title = 'client';
  name = 'Noe Gallardo';
  users: any;
  router: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log("Metodo OnInit");
    this.getUsers()}

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }

  getQuestionID() {
    throw new Error('Method not implemented.');
  }
}
