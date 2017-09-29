import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { QuizService } from '../../services/quiz.service';


@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  quizzes:any[]; 
	quizData = [];
  answers: any[]
  cid:string;
  pid:string;
  question:string;
  
  constructor(
  	public router:Router,
  	public flashMessagesService:FlashMessagesService,
  	public quizService:QuizService,
  	public route: ActivatedRoute
  	) {
      this.answers = [{id: new Date().valueOf(),
       name: '',
       isCorrectAnswer:false
      }]
  }
  
  ngOnInit() { 
  	this.pid = this.route.snapshot.params['id'];
    this.cid = this.route.snapshot.params['qid'];
    this.quizService.getQuiz().subscribe(data =>{
      this.quizzes = data;
    });
    this.quizService.getQuizQuestion(this.pid,this.cid).subscribe(data =>{
      this.question = data.question;
      this.answers = data.answers;
    })
      console.log(this.quizData);
  }

  showAdd(answer){
   return answer.id === this.answers[this.answers.length-1].id;
  }

  addNewAnswer(){
    this.answers.push({
      id: new Date().valueOf(),
      name: '',
      isCorrectAnswer:false
    })
  }

  removeAnswer(answer,i){
    const len = this.answers.length-1;
    if(confirm("Are you sure?")){
      if( len !== 0){
        this.answers.splice(i,1);
      }
    }
    
  };
  onUpdate(){
    const key = this.cid;
    const qu = {  
      question : this.question,
      answers:this.answers
    }
    this.quizService.updateQuiz(this.pid,this.cid,qu);
    this.flashMessagesService.show("Question updated", {cssClass :'alert-success', timeout:2000});
    this.router.navigate(['/quiz/' +this.pid]);
  }
  onDeleteImage(i){
    if(confirm("Are you sure?")){
      delete this.answers[i].image;
    }
  }
  
  onImageAdded(file,i){
   var reader  = new FileReader();
    reader.addEventListener("load",  () => {
      this.answers[i].image = reader.result;
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
