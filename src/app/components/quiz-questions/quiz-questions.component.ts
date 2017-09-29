import { Component, OnInit,Input } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { QuizService } from '../../services/quiz.service';
import { FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {
  quizzes:any[];
  answers = [{
        id: new Date().valueOf(),
        name: '',
        isCorrectAnswer:false,
        image:''
      }]
	key:string;
  question:string;
  quiz = {
     quizName:'',
   image: ''
  }
 pid:string;
loader:boolean = false;

constructor(
  	public router:Router,
  	public flashMessagesService:FlashMessagesService,
  	public quizService:QuizService,
  	public route: ActivatedRoute
  	) {}

  ngOnInit() { 
    this.key = this.route.snapshot.params['id'];
    console.log(this.key)

   }
  showAdd(answer){
   return answer.id === this.answers[this.answers.length-1].id;
  }
  
  addNewAnswer(){
    this.answers.push({
      id: new Date().valueOf(),
      name: '',
       image:'',
      isCorrectAnswer:false
    })
  }
  removeAnswer(answer,i){ 
   answer = this.answers.length-1;
   if(confirm("Are you sure?")){
      if( answer !== 0){
        this.answers.splice(i,1);
      }
    }
  };
  onAddQuestionSubmit(){
    const key = this.key
    const qu = {  
      question : this.question,
      answers:this.answers
    }
     console.log(qu)

     this.quizService.addQuestion(qu,this.key);
     this.flashMessagesService.show('New Question added', {cssClass:'alert-success',timeout:2000});
     this.router.navigate(['/quiz/'+this.key]);
  }
  onDeleteImage(image,i){
    if(confirm("Are you sure?")){
      const image = this.answers[i].image
      delete this.answers[i].image
    }
  }
  
  onAddFile(file){
  var reader = new FileReader();
      reader.addEventListener("load", () => {
        this.quiz.image = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }  
    }
  onAnswerUploadSuccess($event,i){
    
    this.answers[i].image = $event[0].dataURL;
    console.log(this.answers[i].image)
  }
}

  
  










 