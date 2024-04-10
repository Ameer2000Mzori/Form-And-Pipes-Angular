import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataArray: any[] = [];
  private dataSubject = new BehaviorSubject<any[]>(this.dataArray);

  constructor() {}

  saveData(data: any) {
    this.dataArray.push(data);
    this.dataSubject.next(this.dataArray);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
}
