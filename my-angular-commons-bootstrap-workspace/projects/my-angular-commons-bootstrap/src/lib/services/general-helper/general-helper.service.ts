import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Paging } from "../../utils/paging";
import { Sorting } from "../../utils/sorting";
import { ErrorDisplayer } from "../../utils/error-displayer";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class GeneralHelperService {

    public loadIdFromUrl(route: ActivatedRoute): number{
        let strId = route.snapshot.paramMap.get('id');
        if(strId == null) {
          console.log('The id is not provided in the path');
          return -1;
        }
        return +strId;
      }
}