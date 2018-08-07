import { Component, OnInit } from '@angular/core';
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

	constructor(private userService: UserService) {

	}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes(): void {
		this.userService.getUsers().subscribe(users => this.users = users);
		this.selectedUser = this.users[0];
	}

	onSelect(user: User): void {
		this.selectedUser = user;
	}

}
