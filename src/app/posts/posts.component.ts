import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {DataService} from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts()
    .subscribe(d => this.posts$ = d);
  }

}
