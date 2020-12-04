import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { MemoryServiceService } from '../services/memory-service.service';

@Component({
  selector: 'app-page-score',
  templateUrl: './page-score.page.html',
  styleUrls: ['./page-score.page.scss'],
})
export class PageScorePage implements OnInit, ViewWillEnter {
  level: string;
  lista: string;

  constructor( private activate: ActivatedRoute, private service: MemoryServiceService) {
    this.level = activate.snapshot.paramMap.get('level');
    this.lista = activate.snapshot.paramMap.get('lista');
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.service.setLevel = 3;
  }

}
