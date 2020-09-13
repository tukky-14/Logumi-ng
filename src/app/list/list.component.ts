import { Component, OnInit } from '@angular/core';
import { Gummy } from '../gummy/gummy'
import { GummyService } from '../gummy.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  gummydata: Gummy[];

  constructor(private rsv: GummyService) { }

  ngOnInit(): void {
    this.gummydata = this.rsv.getGummydata();
  }

}
