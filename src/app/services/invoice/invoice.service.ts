import { Invoice } from './../../models/invoice';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoiceUrl = `http://localhost:3000/invoices`;
  private errorHandler: ErrorHandler = new ErrorHandler();

  constructor(private http: HttpClient) {}

  getUserInvoice(id: number): Observable<Invoice> {
    try {
      return this.http.get<Invoice>(`${this.invoiceUrl}/${id}`);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}
