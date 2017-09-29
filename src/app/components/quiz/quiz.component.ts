import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes: any[];
	pid: string;
	quizData = []
  $key: string;
  quiz = {
    quizName: '',
    image: '',
    quizData: [],

  }
  key: string;

  loader: boolean = false;


  constructor(
    public quizService: QuizService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {

    this.pid = this.route.snapshot.params['id'];
    console.log(this.pid);
    this.quizService.onEditQuizData(this.pid).subscribe(data => {
      this.quiz.quizName = data.quizName;
      this.quiz.image = data.image;
      this.quiz.quizData = data.quizData

      this.quizData = [];
      if (typeof data.$value === typeof undefined) {
        for (let id in data.quizData) {
          this.quizData.push({
            ...data.quizData[id],
            id
          }); console.log(this.quizData)
        }
      }
    });
  }


  onDeleteQuestion(q) {
    if (confirm("Are you sure?")) {
      this.quizService.delete_question(q, this.pid)
      console.log(this.pid);
      this.flashMessagesService.show('Question deleted successfully', { cssClass: 'alert-success', timeout: 2000 });
      this.router.navigate(['/quiz/' + this.pid]);
    }
  }

  onEditQuiz(f: NgForm) {
    const key = this.pid;
    if (typeof this.quiz.image === typeof undefined) {
      delete this.quiz.image
    } if (typeof this.quiz.quizData === typeof undefined) {
      delete this.quiz.quizData
    }
    this.quiz.quizName = f.value.quizName,
      console.log(f.value.quizName)
    console.log(this.quiz.image)
    this.quizService.onEditUpdate(this.pid, this.quiz);
    this.flashMessagesService.show('Quiz Name updated', { cssClass: 'alert-success', timeout: 2000 });
    this.router.navigate(['/dashboard']);
  }

  onDeleteImage(image) {
    if (confirm("Are you sure?")) {
      const image = this.quiz.image
      delete this.quiz.image
    }
  }

  onImageAdded(file) {
    console.log("added")
     var reader = new FileReader();
      reader.addEventListener("load", () => {
        this.quiz.image = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }  
  }
}
