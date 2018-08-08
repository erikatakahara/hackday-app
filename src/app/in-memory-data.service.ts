import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {

	createDb() {
		const users = [
			{ id: 11, name: 'Aline Lee', avatar: 'https://api.adorable.io/avatars/50/user11.png' },
			{ id: 12, name: 'Erika Takahara', avatar: 'https://api.adorable.io/avatars/50/user12.png' },
			{ id: 13, name: 'Fernanda Bernardo', avatar: 'https://api.adorable.io/avatars/50/user13.png' },
			{ id: 14, name: 'Sr. Saúde', avatar: 'https://api.adorable.io/avatars/50/user14.png' },
			{ id: 15, name: 'William Mizuta', avatar: 'https://api.adorable.io/avatars/50/user15.png' },
			{ id: 16, name: 'Tiago Vasconcelos', avatar: 'https://api.adorable.io/avatars/50/user16.png' },
			{ id: 17, name: 'Gabriel Trajber', avatar: 'https://api.adorable.io/avatars/50/user17.png' },
			{ id: 18, name: 'Andre Barro', avatar: 'https://api.adorable.io/avatars/50/user18.png' },
			{ id: 19, name: 'Pedro Barros', avatar: 'https://api.adorable.io/avatars/50/user19.png' },
			{ id: 20, name: 'Camila Tessarolo', avatar: 'https://api.adorable.io/avatars/50/user20.png' }
		];

		const hackdays = [
			{
				id: 1,
				title: 'Adicionar animações no marketplace 2',
				description: 'Adicionar animações no marketplace para deixá-lo super ultra legal',
				reporter: 11,
				assignees: [],
				status: 'todo',
				team: 'martell',
				created_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)',
				updated_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)'
			},
			{
				id: 2,
				title: 'Adicionar animações no marketplace',
				description: 'Adicionar animações no marketplace para deixá-lo super ultra legal',
				reporter: 11,
				assignees: [],
				status: 'planned',
				team: 'martell',
				created_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)',
				updated_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)'
			},
			{
				id: 3,
				title: 'Colocar mais informações nos buckets',
				description: 'Colocar mais informações nos buckets como a descrição e data de criação',
				reporter: 11,
				assignees: [11, 16],
				status: 'in progress',
				team: 'martell',
				created_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)',
				updated_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)'
			},
			{
				id: 4,
				title: 'Deploy do marketplace em 7 min',
				description: 'Alterar o deploy do marketplace para acontecer em apenas 7 min',
				reporter: 11,
				assignees: [15, 18],
				status: 'to test',
				team: 'maesters',
				created_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)',
				updated_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)'
			},
			{
				id: 5,
				title: 'Update libs',
				description: 'Atualizar as libs do w7',
				reporter: 11,
				assignees: [15],
				status: 'fix',
				team: 'martell',
				created_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)',
				updated_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)'
			},
			{
				id: 6,
				title: 'Atualizar ícone do app do pwa',
				description: 'Atualiza ícone do app do pwa para algo mais bonitinho no iOS',
				reporter: 11,
				assignees: [15],
				status: 'done',
				team: 'martell',
				created_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)',
				updated_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)'
			},
			{
				id: 7,
				title: 'Atualizar ícone do app do pwa',
				description: 'Atualiza ícone do app do pwa para algo mais bonitinho no iOS',
				reporter: 11,
				assignees: [15],
				status: 'deployed',
				team: 'martell',
				created_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)',
				updated_at: 'Tue Aug 07 2018 23:28:01 GMT-0300 (-03)'
			}
		];
		return { users, hackdays };
	}

}