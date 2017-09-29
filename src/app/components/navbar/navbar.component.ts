import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isLoggedIn:boolean;
	isloggedInUser:string;


  constructor(
  	private router:Router,
  	private flashMessagesService: FlashMessagesService,
  	private authService: AuthService
  	) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth =>{
  		if(auth){
  			this.isLoggedIn = true;
  			this.isloggedInUser = auth.email;
  		}else{
  			this.isLoggedIn = false;
  		}
  	});

  }
	onLogout(){
		this.authService.logout();
		this.flashMessagesService.show('You have LoggedOut Successfully', {cssClass:'alert-success', timeout:4000});
		this.router.navigate(['/']);	

	}
}
