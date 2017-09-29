import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	quizzes:any[]; 
	id:string;
	quiz = {
   	quizName:'',
   image: ''
  }
quizData= [];
 $key:string;
 image:string;
loader:boolean = false;
pid:string;
  

  constructor(                                            
  	public router:Router,
  	public route: ActivatedRoute,
  	public quizService: QuizService,
  	public flashMessagesService: FlashMessagesService,
    ) 
  { }

  ngOnInit() {
  	 this.id = this.route.snapshot.params['id'];
     this.loader = true;
  	 this.quizService.getQuiz().subscribe(data =>{
     this.loader = false;
  	 this.quizzes = data;
    });
  }
	onDelete(q:string){
		
		if(confirm("Are you sure?")){
			this.quizService.deleteQuiz(q);
			this.flashMessagesService.show("Quiz Deleted Successfully", {cssClass:'alert-success', timeout:2000});
			this.router.navigate(['/dashboard']);
		console.log(q);
		} 
	}
  onUploadSuccess($event){
    console.log($event)
    this.quiz.image = $event[0].dataURL;
    console.log(this.quiz.image)
  }

}
