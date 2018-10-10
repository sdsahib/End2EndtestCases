import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url ='http://localhost:4200/assets/data.json';
  constructor(private http: HttpClient) { }

  getusers():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}`);
  }
}
