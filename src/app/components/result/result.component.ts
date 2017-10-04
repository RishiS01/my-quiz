import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { QuizDat } from '../../model/Quiz';
import { FacebookService, UIResponse, UIParams,InitParams } from 'ngx-facebook';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
 

})
export class ResultComponent implements OnInit {
   
  a:number;
 quizDat:QuizDat;
	id:string;
	quizData = [];
  userAnswers = [{
    answers:[]
  }];
  question :{
    id: string,
    name: '',
  answers: [{
      isCorrectAnswer:boolean,
      userAnswer:boolean
    }],
  }
  isCorrectAnswer = true;
  correctAnswers = 0;

  answers = [{
    id: new Date().valueOf(),
    name: '',
    isCorrectAnswer:false,
    image:''
  }]
userResult = false;
 
  constructor(
  	public router:Router,
  	public quizService: QuizService,
  	public route: ActivatedRoute
  ) { }

  ngOnInit() {
    const qArray =[];
    const answers =[];
    let $this = this; 
    this.id = this.route.snapshot.params['id'];

    this.userAnswers = this.quizService.getUserAnswers();
       if(this.userAnswers.length === 0){
         this.userResult = true;
         return

       }
    this.userAnswers.forEach(function(qArray){
    qArray.answers.forEach(function(i){
      if(i.userAnswer == undefined){
        i.userAnswer = false
      }
    })
      let answerCount = 0
      const y = qArray.answers.length
      qArray.answers.map(x =>{
      if(x.isCorrectAnswer === x.userAnswer){
        answerCount++ 
      }
    })
      if(y === answerCount){
        $this.correctAnswers++
        console.log($this.correctAnswers)
      }
    });
    this.score()
  }  
  isCorrect(question){
    return question.answers.every(x => x.isCorrectAnswer === x.userAnswer) ? 'correct' : 'wrong';
  }
  score(){ 
    this.a = this.correctAnswers/this.userAnswers.length *100;
  }
  FbShare(){
    window.open(`https://www.facebook.com/sharer/sharer.php?u=https://my-quiz-app-in.herokuapp.com/start-quiz/${this.id}`);
  // this.router.navigate(['/']);
  }
}

 

 



 




 

  


