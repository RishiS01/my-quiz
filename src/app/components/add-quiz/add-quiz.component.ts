import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router,ActivatedRoute,Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
   quizzes:any[];
  pid:string;
  quizData = []
  $key:string;
  quiz = {
    quizName:'',
    image: ''
  }
  key:string;
  constructor(
    public quizService: QuizService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService

    ) { }

  ngOnInit() {
  }
  addQuiz(f:NgForm){ 
    let $this = this; 
    if(typeof this.quiz.image === typeof undefined){
      delete this.quiz.image
    }
    this.quiz.quizName = f.value.quizName;
    this.quizService.newQuiz(this.quiz).then(
        function(ref){
          $this.key = ref.key;
          $this.router.navigate(['/quiz/'+ref.key ]); 
        });

    this.flashMessagesService.show('New Quiz Added', {cssClass:'alert-success', timeout:2000});
    }

    onDeleteImage(image) {
    if (confirm("Are you sure?")) {
      const image = this.quiz.image
      delete this.quiz.image
    }
  }
   onUploadSuccess($event){
    console.log($event)
    this.quiz.image = $event[0].dataURL;
    console.log(this.quiz.image)
    
  }
}
