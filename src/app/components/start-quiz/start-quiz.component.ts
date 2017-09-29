import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { QuizDat } from '../../model/Quiz';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
	
	id:string;
	quizData = [];
  answers : any[];
  questions:string;
  isCorrectAnswer: boolean;
  selected = null;
  userAnswer:boolean;
  image:string;
  constructor(
  	public quizService: QuizService,
  	public router:Router,
  	public route: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];
    this.quizService.getQuizData(this.id).subscribe(data =>{
      for(let id in data){
        this.quizData.push({
          ...data[id]
        });
      }
    });console.log(this.quizData)
  }
  result(){
    this.quizService.userAnswers(this.quizData)
     this.router.navigate(['/result/'+this.id]);
  }
}
