import { Injectable } from '@angular/core';
import { Gummy } from './gummy/gummy';
import { GUMMYDATA } from './gummy/gummydata';

@Injectable({
  providedIn: 'root'
})
export class GummyService {
  gummydata:Gummy[]=GUMMYDATA;

  constructor() { }

  getGummydata():Gummy[]{
    return this.gummydata;
  }

  getGummy(id:string):Gummy{
    return this.gummydata.find(gummy=>gummy.id.toString()==id);
  }

}
