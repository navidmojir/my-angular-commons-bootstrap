import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export class ErrorDto {
    message: string = "";
    error: String = "";
    code: number = 0;
}

export interface ErrorDisplayer {
    display(error: HttpErrorResponse): void;
}