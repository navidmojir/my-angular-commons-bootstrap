import { Component, Input, OnInit } from '@angular/core';
import { Paging } from '../../utils/paging';
import { Sorting } from '../../utils/sorting';
import { BaseService } from '../../services/base-service/base.service';
import { FieldConfig } from '../../utils/field-config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-grid.component.html',
  styleUrl: './my-grid.component.css'
})
export class MyGridComponent implements OnInit{
  @Input() prefix: string = "pre";
  @Input() backendUrl: string = "";
  @Input() filters: any;
  @Input() columns: FieldConfig[] = [];

  sorting: Sorting = new Sorting();

  paging: Paging = new Paging();
  
  entities: any[] = [];

  totalCount: number = 0;

  constructor(private baseService: BaseService){}

  ngOnInit(): void {
    this.loadConfigFromLocalStorage();
    // if(this.entities.length == 0)
    //   this.getDataFromBackend();
  }

  private loadConfigFromLocalStorage() {
    this.sorting = this.getFromLocalStorage("sorting");
    this.paging = this.getFromLocalStorage("paging");
  }

  private getFromLocalStorage(key: string): any {
    let configItem = localStorage.getItem(this.prefix + key);
    if(configItem == null)
      return null;
    return JSON.parse(configItem);
  }

  private setToLocalStorage(key: string, value: any): void {
    localStorage.setItem(this.prefix + key, JSON.stringify(value));
  }

  private getDataFromBackend(): void { 
    this.baseService.search(this.backendUrl, this.filters, this.paging, this.sorting).subscribe(
      (result: any) => {
        this.entities = result.body;        
        this.totalCount = +result.headers.get("X-Total-Count");	      
      }
    );
  }

  applySorting(sortColumn: string, ascending: boolean): void {
		this.sorting.sortColumn = sortColumn;
    this.sorting.ascending = ascending;
    this.setToLocalStorage('sorting', this.sorting);

		this.getDataFromBackend();
  }

  applyPaging(pageNumber: number, pageSize: number): void {
	
		this.paging.pageNumber = pageNumber;
    this.paging.pageSize = pageSize;
    this.setToLocalStorage("paging", this.paging);
		
		this.getDataFromBackend();
	}


}
