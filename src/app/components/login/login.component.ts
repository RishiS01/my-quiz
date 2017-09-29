import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AuthService }  from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	email:string;
	password:string;

  constructor(
  	private router:Router,
  	private flashMessagesService:FlashMessagesService,
  	private authService:AuthService
  	) { }

  ngOnInit() {
  }

  onLoginSubmit(){
  	this.authService.login(this.email, this.password)
  		.then((res) =>{
  			this.flashMessagesService.show("You have successfully Login" , {cssClass:'alert-success', timeout:4000});
  			this.router.navigate(['/dashboard']);
		})
		.catch((err) =>{
			
  			this.flashMessagesService.show(err.message, {cssClass:'alert-danger', timeout:4000});
  			this.router.navigate(['/login']);
  		})

  }
}
