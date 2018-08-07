import { Injectable } from '@angular/core';
import { User } from './models/user';
import { USERS } from './database/users';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor() { }

	getUsers(): Observable<User[]> {
	  return of(USERS);
	}

	getUser(id: number): Observable<User> {
		return of(USERS.find(user => user.id === id))
	}
}
