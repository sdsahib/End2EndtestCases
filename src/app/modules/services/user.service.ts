import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url ='http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getusers():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/getAllUsers`);
  }

  saveUsers(user:User):Observable<User>{
    return this.http.post<User>(`${this.url}/createUser`,user);
  }

  updateUsers(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/updateUser?id=${user.id}`,user);
  }
}
