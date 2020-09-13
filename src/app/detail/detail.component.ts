import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gummy } from '../gummy/gummy'
import { GummyService } from '../gummy.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  gummyid: string;
  gummy: Gummy;

  constructor(private route:ActivatedRoute, private rsv: GummyService) { }

  ngOnInit(): void {
    this.gummyid = this.route.snapshot.paramMap.get('id');
    this.gummy = this.rsv.getGummy(this.gummyid);
  }

}
