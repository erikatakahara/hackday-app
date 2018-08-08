import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private usersUrl = 'api/users';

	constructor(private http: HttpClient) { }

	list(): Observable<User[]> {
	  return this.http.get<User[]>(this.usersUrl).pipe(tap(users => console.log('Fetched users', users)));
	}

	get(id: number): Observable<User> {
		const url = `${this.usersUrl}/${id}`;
		return this.http.get<User>(url).pipe(tap(users => console.log('Fetched user', url, users)));
	}

	update(user: User): Observable<any> {
		return this.http.put(this.usersUrl, user, httpOptions).pipe(tap(_ => console.log('Updated user', user)));
	};

	add(user: User): Observable<User> {
		return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(tap(_ => console.log('Updated user', user)));
	};
}
