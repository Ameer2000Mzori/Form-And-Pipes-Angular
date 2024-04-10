import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.scss',
})
export class DataListComponent {
  data: any[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
