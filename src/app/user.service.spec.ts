import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

import { UserService } from './user.service';

const data: User = {
	id: 1,
	name: '',
	avatar: ''
};

describe('UserService', () => {
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ],
			providers: [UserService]
		});

		httpClient = TestBed.get(HttpClient);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', inject([UserService], (service: UserService) => {
		expect(service).toBeTruthy();
	}));

	it('should get user', inject([UserService], (service: UserService) => {
		service.get(1).subscribe(user => {
			expect(user).toEqual(data);
		});
		const req = httpTestingController.expectOne('api/users/1');
		expect(req.request.method).toEqual('GET');
		req.flush(data);
	}));
});
