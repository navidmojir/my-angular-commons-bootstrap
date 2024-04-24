import { Component, Input, OnInit } from '@angular/core';
import { Paging } from '../../utils/paging';
import { Sorting } from '../../utils/sorting';
import { BaseService } from '../../services/base-service/base.service';
import { FieldConfig } from '../../utils/field-config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-my-grid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-grid.component.html',
  styleUrl: './my-grid.component.css'
})
export class MyGridComponent implements OnInit{
  @Input() prefix: string = "pre";
  @Input() serviceObject: BaseService | null = null;
  @Input() filters: any;
  @Input() columns: FieldConfig[] = [];
  @Input() actions: any[] = [];

  sorting: Sorting = new Sorting();

  paging: Paging = new Paging();
  
  entities: any[] = [];

  totalCount: number = 0;
  lastPageNumber: number = 0;

  pageLabels: string[]= [];

  constructor(){}

  ngOnInit(): void {
    this.loadConfigFromLocalStorage();
    if(this.entities.length == 0)
      this.getDataFromBackend();

    
  }

  private loadConfigFromLocalStorage() {
    this.sorting = this.getFromLocalStorage("sorting") != null ? this.getFromLocalStorage("sorting") : new Sorting();
    this.paging = this.getFromLocalStorage("paging") != null ? this.getFromLocalStorage("paging") : new Paging();
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
    if(this.serviceObject == null) {
      console.error('serviceObject input is null');
      return;
    }
    this.serviceObject.search(this.filters, this.paging, this.sorting).subscribe(
      (result: any) => {
        console.log(result)
        this.entities = result.body;        
        this.totalCount = +result.headers.get("X-Total-Count");	  
        // console.log(this.totalCount);
        this.lastPageNumber = Math.floor(this.totalCount / this.paging.pageSize);
        if(this.totalCount % this.paging.pageSize == 0)
          this.lastPageNumber--;
        this.generatePageLabels();    
      }
    );
  }

  applySorting(sortField: string): void {
    if(sortField == this.sorting.sortField)
      this.sorting.ascending = !this.sorting.ascending;
    else
      this.sorting.ascending = true;
		
    this.sorting.sortField = sortField;
    
    this.setToLocalStorage('sorting', this.sorting);

		this.getDataFromBackend();
  }

  private applyPaging(pageNumber: number, pageSize: number): void {
	
		this.paging.pageNumber = pageNumber;
    this.paging.pageSize = pageSize;
    this.setToLocalStorage("paging", this.paging);
		
		this.getDataFromBackend();
	}

  changePage(pageLabel: string) {
    console.log(pageLabel)
    if(pageLabel == '...')
     return;
    this.applyPaging(Number(pageLabel) - 1, this.paging.pageSize);
  }

  private generatePageLabels() {
    this.pageLabels = [];

    let currentPage = this.paging.pageNumber + 1;
    let lastPage = this.lastPageNumber + 1;
    let firstPage = 1;

    // console.log(currentPage, lastPage, this.totalCount)

    let result = new Set<number>();

    result.add(firstPage);

    if(currentPage != 1)
      result.add(currentPage - 1);

    result.add(currentPage);

    if(currentPage != lastPage)
      result.add(currentPage + 1);

    result.add(lastPage);

    let prevR = -1;
    for(let r of result) {
      
      if(r - prevR != 1 && r != 1)
        this.pageLabels.push('...');
      this.pageLabels.push(r + '');
      prevR = r;
    }
    
  }

  pageSizeChanged(value: any) {
    this.applyPaging(this.paging.pageNumber, value);
  }

  prevPage() {
    if(this.paging.pageNumber - 1 < 0)
      return;
    this.applyPaging(this.paging.pageNumber - 1, this.paging.pageSize);
  }

  nextPage() {
    if(this.paging.pageNumber + 1 > this.lastPageNumber)
      return;
    this.applyPaging(this.paging.pageNumber + 1, this.paging.pageSize);
  }
}
