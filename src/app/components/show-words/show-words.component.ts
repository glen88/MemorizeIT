import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemoryServiceService } from '../../services/memory-service.service';

@Component({
  selector: 'app-show-words',
  templateUrl: './show-words.component.html',
  styleUrls: ['./show-words.component.scss'],
})
export class ShowWordsComponent implements OnInit{
url = 'assets/img/';
@Input() palabra: string;
  constructor(public service: MemoryServiceService, public route: Router) {}

  ngOnInit() {

  }

}
