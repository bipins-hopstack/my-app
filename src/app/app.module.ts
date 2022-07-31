import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { ScoreService } from './score.service';


const routes:Routes=[

  {path:'about',component:AboutComponent},
  {path:'quiz',component:QuizComponent},
  {path:'result',component:ResultComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent,
    QuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
