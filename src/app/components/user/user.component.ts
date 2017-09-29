import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	quizzes:any[];
  loader:boolean = false;
	quiz ={
		name:''
	}
  quizData = [];
  id:string 
  constructor(
  	public quizService: QuizService,
  	public router:Router) { }

  ngOnInit() {
    this.loader = true;
  	this.quizService.getQuiz().subscribe(data =>{
      this.loader = false;
  		this.quizzes = data;
  	});
  }

  startQuiz(){
    
  }
}
