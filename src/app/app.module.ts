import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

//Firebase services import

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Loader Css import
import { LoadersCssModule } from 'angular2-loaders-css';


//Dropzone import
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';


// Components import

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { ResultComponent } from './components/result/result.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { StartQuizComponent } from './components/start-quiz/start-quiz.component';

// Services import

import { AuthService } from './services/auth.service';
import { QuizService } from './services/quiz.service';
import { AuthGuard } from './guards/auth.guard';
import { ComponentsComponent } from './components/components.component';

// import Facebookmodule

import { FacebookModule } from 'ngx-facebook';
import { CeiboShare } from 'ng2-social-share';



//RoutesConfigration

const appRoutes:Routes = [
  { path:'',component:UserComponent},
  { path:'login',component:LoginComponent},
  { path:'quiz/:id',component:QuizComponent,canActivate:[AuthGuard]},
  { path:'navbar', component:NavbarComponent},
  { path:'quiz-questions/:id',component:QuizQuestionsComponent,canActivate:[AuthGuard]},
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  { path:'result/:id',component:ResultComponent },
  { path:'edit-question/:id/:qid', component:EditQuestionComponent},
  { path:'start-quiz/:id', component:StartQuizComponent},
  { path:'add-quiz',component:AddQuizComponent}
  
];

// dropzone configration

const dropzone_config: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  // url: "/file/post",
  maxFilesize: 5,
  maxFiles: 1,
  acceptedFiles: 'image/*',
  addRemoveLinks: true,
  uploadMultiple:false,
   // autoProcessQueue:false
};

export const firebaseConfig = {
   apiKey: "AIzaSyBRqMetE-hOgEnlzvJwPf4FY334mXWEaEk",
    authDomain: "quizapp-22d9f.firebaseapp.com",
    databaseURL: "https://quizapp-22d9f.firebaseio.com",
    projectId: "quizapp-22d9f",
    storageBucket: "quizapp-22d9f.appspot.com",
    messagingSenderId: "830872795834"
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    NavbarComponent,
    UserComponent,
    QuizQuestionsComponent,
    DashboardComponent,
    ResultComponent,
    QuizQuestionsComponent,
    EditQuestionComponent,
    StartQuizComponent,
    AddQuizComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DropzoneModule.forRoot(dropzone_config),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule,
    FormsModule,
    ReactiveFormsModule,
    LoadersCssModule,
    FacebookModule.forRoot()

    
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    QuizService,
    AuthGuard,
    CeiboShare
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }








