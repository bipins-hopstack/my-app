import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScoreService } from '../score.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  [x: string]: any;

 
 
  ngOnInit(): void {
  }
  

  
  constructor (private ts:ScoreService,private http:HttpClient,private router: Router) {
    this.loadpost();
     this.ts.score=this.score;
      }

    
  public quizs: any=[];
  public currentQuestion:number=0;

  public score:number=0;

  //loading the REST Json
  loadpost(){    
  this.http.get('http://127.0.0.1:8080/quiz')
   .subscribe((quizs:any)=>{this.quizs=quizs});
  
}
//next Question
nextQuestion(){
  if(this.currentQuestion<4){
this.currentQuestion++
  }
}
//prevous Question
previousQuestion(){
  if(this.currentQuestion !=0){
  this.currentQuestion--
}
}

//answer validation
answer(e:any){
  console.log(this.quizs[this.currentQuestion].correctanswer)
  console.log("user answered value =>"+e.target.value)
if(e.target.value==this.quizs[this.currentQuestion].correctanswer){
  this.score+=10;
  this.ts.score=this.score;
  this.nextQuestion();
  
}else{
  this.nextQuestion();
}
}

//Submit Quiz
submitQuiz(){
if(confirm("You want to end the quiz ?")){
  this.router.navigateByUrl('/result');
}
}
   title = 'my-app';
    
}
