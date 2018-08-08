import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { UserService } from '../user.service';


@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	users: User[];
	selectedUser: User;
	navigationSubscription;

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private location: Location,
		private router: Router
	) {}

	ngOnInit() {
		this.getUser();
		this.getUsers();
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
		// If it is a NavigationEnd event re-initalise the component
		if (e instanceof NavigationEnd) {
			this.getUser();
		}
	   });
	}

	getUser(): void {
		const id = +(this.route.snapshot.paramMap.get('id'));
		if (id) {
			this.userService.get(id).subscribe(selectedUser => this.selectedUser = selectedUser);	
		} else {
			this.selectedUser = undefined;
		}
		
	}

	getUsers(): void {
		this.userService.list().subscribe(users => this.users = users);
	}

	save(): void {
		this.userService.update(this.selectedUser).subscribe(() => console.log('Updated!'));
	}

	add(name: string, avatar: string): void {
		name = name.trim();
		avatar = avatar.trim();
		if (!name && !avatar) {
			return;
		}
		this.userService.add({ name, avatar } as User)
			.subscribe(user => {
				this.users.push(user);
			});
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {  
			this.navigationSubscription.unsubscribe();
		}
	}

}
