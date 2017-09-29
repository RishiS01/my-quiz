import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class QuizService {
  quizzes: FirebaseListObservable<any[]>;
  quizData: FirebaseObjectObservable<any>;
  question: FirebaseObjectObservable<any>;
  private userData = [];

  constructor(public angularFire: AngularFireDatabase) {
  		this.quizzes = this.angularFire.list('/quizzes');
	}

   newQuiz(quiz){ 
		return this.quizzes.push(quiz);
	}

	getQuiz(){
		this.quizzes = this.angularFire.list('/quizzes');
		return this.quizzes;
	}

	getQuizData(id){
		this.quizData = this.angularFire.object(`/quizzes/${id}/quizData`);
		return this.quizData;
	}
	
	addQuestion(qu,key){
		const quiz = this.angularFire.list(`/quizzes/${key}/quizData`);
		quiz.push(qu);
	}

	deleteQuiz(q){
		return this.quizzes.remove(q.$key);
	}

	getQuizQuestion(pid,cid){
		return  this.angularFire.object(`/quizzes/${pid}/quizData/${cid}`);
	}

	delete_question(question,id){
		return this.angularFire.object(`/quizzes/${id}/quizData/${question.id}`).remove();
		 
	}
	
	updateQuiz(pid:string,cid:string,qu){
		return this.angularFire.object(`/quizzes/${pid}/quizData/${cid}`).update(qu);
	}

	userAnswers(data){
		this.userData = data;
		console.log(this.userData)
	}

	getUserAnswers(){
		return this.userData;
	}

	onEditQuizData(id){
		this.quizData = this.angularFire.object(`/quizzes/${id}`);
		return this.quizData;
	}
	
	onEditUpdate(id:string,x){
		return  this.angularFire.object(`/quizzes/${id}`).set(x);
	}
}

