import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
	{ path: 'users', component: UsersComponent },
	{ path: 'user/:id', component: UsersComponent, runGuardsAndResolvers: 'always' }
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }) ],
})
export class AppRoutingModule { }
