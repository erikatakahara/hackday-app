import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { User } from '../models/user';
import { UserService } from '../user.service';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
	let component: UsersComponent;
	let fixture: ComponentFixture<UsersComponent>;
	let userServiceStub: Partial<UserService>;
	let newEvent = (eventName: string, bubbles = false, cancelable = false) => {
		let evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(eventName, bubbles, cancelable, null);
		return evt;
	};

	beforeEach(async(() => {
		let userList = [
			new User(1, 'Lorem', 'https://api.adorable.io/avatars/50/user1.png'),
			new User(2, 'Ipsum', 'https://api.adorable.io/avatars/50/user2.png')
		];
		userServiceStub = {
			list(): Observable<User[]> {
				return of(userList);
			},

			add(user: User): Observable<User> {
				return of(new User(userList.length, user.name, user.avatar));
			}
			
		};
		TestBed.configureTestingModule({
		  declarations: [ UsersComponent ],
		  imports: [ FormsModule, RouterTestingModule ],
		  providers: [ { provide: UserService, useValue: userServiceStub } ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UsersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

  	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create user', () => {
		const hostElement = fixture.debugElement.nativeElement;
		const list: HTMLElement = hostElement.querySelector('.listing');
		const nameInput: HTMLInputElement = hostElement.querySelector('.new-user .name input');
		const avatarInput: HTMLInputElement = hostElement.querySelector('.new-user .avatar input');
		const saveBtn: HTMLInputElement = hostElement.querySelector('.new-user .btn');
		nameInput.value = 'Miya';
		nameInput.dispatchEvent(newEvent('input'));
		avatarInput.value = 'avatar';
		avatarInput.dispatchEvent(newEvent('input'));
		saveBtn.dispatchEvent(newEvent('click'));

		fixture.detectChanges();
		expect(hostElement.querySelectorAll('li').length).toEqual(4);
		expect(hostElement.querySelector('li:last-child').textContent).toContain('Miya');
	});
});
