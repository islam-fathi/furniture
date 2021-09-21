import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mainFunctions } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  _allMaterialsUrl = environment.apiUrl+environment.appMain+'/Material/getMaterialList';
  _allFinishesUrl = environment.apiUrl+environment.appMain+'/Finish/getFinishList';
  _allStylesUrl = environment.apiUrl+environment.appMain+'/Style/getStyleList';
  _allColorsUrl = environment.apiUrl+environment.appMain+'/Color/getColorList';


  constructor(private http: HttpClient) { }

  getmateriallist(): Observable<any> {
    let request = mainFunctions.requestData();

    return this.http.post<any>(this._allMaterialsUrl, request);
  }

  getfinishList(): Observable<any> {
    let request = mainFunctions.requestData();

    return this.http.post<any>(this._allFinishesUrl, request);
  }

  getStyleList(): Observable<any> {
    let request = mainFunctions.requestData();

    return this.http.post<any>(this._allStylesUrl, request);
  }

  getColorList(): Observable<any> {
    let request = mainFunctions.requestData();

    return this.http.post<any>(this._allColorsUrl, request);
  }
}
