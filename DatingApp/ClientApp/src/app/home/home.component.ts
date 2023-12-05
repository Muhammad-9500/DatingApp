import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  title = 'The Dating App';


  public users: AppUsers[] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }


    ngOnInit(): void {
      this.getUsers();
  }

  getUsers() {
    this.http.get<AppUsers[]>('https://localhost:7023/api/users').subscribe(result => {
      this.users = result;
    }, error => console.log(error));
  }

}

interface AppUsers {
  id: number;
  userName: string;
  passwordHash: Blob;
  passwordSalt: Blob;
}
