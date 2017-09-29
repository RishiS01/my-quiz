import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import { CanActivate, Router } from '@angular/router';


@Injectable()

export class AuthGuard implements CanActivate{

	constructor(
		private router:Router,
		public angularFireAuth: AngularFireAuth)
	{ }

	canActivate():Observable<boolean>{
		return this.angularFireAuth.authState.map(auth => {
			if(!auth){
				this.router.navigate(['/login']);
				return false;
			}else{
				return true;
			}
		});
	}
}