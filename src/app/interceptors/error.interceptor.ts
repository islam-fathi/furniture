import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlertService } from '../services/alert/alert.service';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private allertService: AlertService,private authServer:AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!window.navigator.onLine)
        {
            let data = {
                reason: "Internet is required",
                status: 502
            };
            this.allertService.error('Internet is required');
            return throwError(new HttpErrorResponse({ error: 'Internet is required.' }));
        }
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // if(event.body.result.status == '500')
                //     this.router.navigate(['/serverError']);
                if (event.body.result.status == '401') 
                    this.authServer.userLogout();
                else if(event.body.result.status != '200' && typeof event.body.result.resultMsg != "undefined")
                    this.allertService.error(event.body.result.resultMsg);
                
            }
        }),
        catchError((error: HttpErrorResponse) => {
            // if(error.status == 500)
            //         this.router.navigate(['/serverError']);
            if (error.status == 401) 
                this.authServer.userLogout();
            else{
                let data = error && error.error && error.error.reason ? error.error.reason : '';
                this.allertService.error(data);
            }
            return throwError(error);
        }));
    }
}