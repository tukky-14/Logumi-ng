import { Component, OnInit } from '@angular/core';
import { Gummy } from '../gummy/gummy'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  gummydata: Gummy[];

  constructor() { }

  ngOnInit(): void {
  }

}
