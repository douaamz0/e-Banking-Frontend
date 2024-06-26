import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";
import {AccountDetails} from "../model/account.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  backendHost:string="http://localhost:8085";
  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers");
  }
  public searchCustomer(keyword:string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers/search?keyword="+keyword);
  }
  public saveCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.backendHost+"/customers",customer);
  }
  public deleteCustomer(id:number){
    return this.http.delete(this.backendHost+"/customers/"+id);
  }
  public getCustomerAccounts(customerId: number): Observable<Array<AccountDetails>> {
    return this.http.get<Array<AccountDetails>>(`${this.backendHost}/customer-accounts/${customerId}`);
  }

}
