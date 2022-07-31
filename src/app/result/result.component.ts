import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
public score:number;
  constructor(private ts:ScoreService) { 
    this.score=this.ts.score;
    console.log(this.score);
  }

  ngOnInit(): void {
  }

}
