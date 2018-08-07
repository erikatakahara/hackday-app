import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private location: Location
	) {}

	ngOnInit() {
		this.getHeroes();
		this.getHero();
	}

	getHero(): void {
		const id = +(this.route.snapshot.paramMap.get('id') || 11);
		this.userService.getUser(id).subscribe(selectedUser => this.selectedUser = selectedUser);
	}

	getHeroes(): void {
		this.userService.getUsers().subscribe(users => this.users = users);
	}

}
