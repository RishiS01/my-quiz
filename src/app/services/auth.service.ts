import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(
  	public angularFireAuth: AngularFireAuth) { }

  login(email:string,password:string){
  	return new Promise((resolve,reject) =>{
  		this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
  		.then(userData =>resolve(userData),
  		err => reject(err))
  	});

  }

  getAuth(){
  	return this.angularFireAuth.authState.map(auth => auth);
  }
  logout(){
  	this.angularFireAuth.auth.signOut();
  }

}
