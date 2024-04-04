import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Paging } from "../../utils/paging";
import { Sorting } from "../../utils/sorting";
import { ErrorDisplayer } from "../../utils/error-displayer";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";

export class DefaultErrorDisplayer implements ErrorDisplayer{
    display(error: HttpErrorResponse): void {
        alert(error.message);
    }

}

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    private errorDisplayer: ErrorDisplayer = new DefaultErrorDisplayer();

    constructor(private httpClient: HttpClient
        ) {
    }

    public setErrorDisplayer(ed: ErrorDisplayer) {
        this.errorDisplayer = ed;
    }

    private handleError(error: HttpErrorResponse) {
		console.log(error);
        try {
            this.errorDisplayer.display(error);
        } catch(e) {
            alert("Failed to display error");
        }
        return throwError(() => error);
    }

    public post(path: string, body: any, options? : any) {
        return this.httpClient.post(path, body, options).pipe(
              catchError((error) => this.handleError(error))
        );
    }

    public get(path: string, options?: any) {
        return this.httpClient.get(path, options).pipe(
            catchError((error) => this.handleError(error))
      );
    }

    public getAsBlob(path: string) {
        return this.httpClient.get(path, { responseType: 'blob' as 'json' }).pipe(
            catchError((error) => this.handleError(error))
      );
    }

    public put(path: string, body: any) {
        return this.httpClient.put(path, body).pipe(
              catchError((error) => this.handleError(error))
        );
    }

    public delete(path: string) {
        return this.httpClient.delete(path).pipe(
              catchError((error) => this.handleError(error))
        );
    }

    public search(path: string, filters: any, paging: Paging, sorting: Sorting) {
        let req = {filters: filters, paging: paging, sorting: sorting};
        return this.post(path, req);
    }
}