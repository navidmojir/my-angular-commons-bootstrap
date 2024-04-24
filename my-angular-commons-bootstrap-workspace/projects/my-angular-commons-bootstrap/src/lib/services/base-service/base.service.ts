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

    private baseUrl = '';

    private resourceName = '';

    constructor(private httpClient: HttpClient
        ) {
    }

    protected setErrorDisplayer(ed: ErrorDisplayer) {
        this.errorDisplayer = ed;
    }

    protected setBaseUrl(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    protected setResourceName(resourceName: string) {
        this.resourceName = resourceName;
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

    public httpPost(path: string, body: any, options? : any) {
        return this.httpClient.post(this.baseUrl + '/' + path, body, options).pipe(
              catchError((error) => this.handleError(error))
        );
    }

    public httpGet(path: string, options?: any) {
        return this.httpClient.get(this.baseUrl + '/' + path, options).pipe(
            catchError((error) => this.handleError(error))
      );
    }

    public httpGetAsBlob(path: string) {
        return this.httpClient.get(this.baseUrl + '/' + path, { responseType: 'blob' as 'json' }).pipe(
            catchError((error) => this.handleError(error))
      );
    }

    public httpPut(path: string, body: any) {
        return this.httpClient.put(this.baseUrl + '/' + path, body).pipe(
              catchError((error) => this.handleError(error))
        );
    }

    public httpDelete(path: string) {
        return this.httpClient.delete(this.baseUrl + '/' + path).pipe(
              catchError((error) => this.handleError(error))
        );
    }

    //CRUD and Search operations

    public search(filters: any, paging: Paging, sorting: Sorting) {
        let req = {filters: filters, paging: paging, sorting: sorting};
        let path = this.resourceName + '/search';
        return this.httpPost(path, req, {observe: 'response'});
    }

    public create(entity: any) {
        return this.httpPost(this.resourceName, entity);
    }

    public retrieve(id: any) {
        return this.httpGet(this.resourceName + '/' + id);
    }

    public update(id: any, entity: any) {
        return this.httpPut(this.resourceName + '/' + id, entity);
    }

    public remove(id: any) {
        return this.httpDelete(this.resourceName + '/' + id);
    }
}