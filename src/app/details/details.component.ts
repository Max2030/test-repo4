import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {DataService} from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;
  constructor(private data: DataService, private route:ActivatedRoute) {
    this.route.params.subscribe(p => this.user$ = p.id);
   }

  ngOnInit() {
    this.data.getUser(this.user$)
      .subscribe(d => this.user$ = d);
  }

}
