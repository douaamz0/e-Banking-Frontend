
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {map, Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountDetails } from '../model/account.model';
import { AccountsService } from '../services/accounts.service';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit {
  customerId!: number;
  customer!: Customer;
  accounts!: Observable<Array<AccountDetails>>;
  errorMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.customer = navigation.extras.state as Customer;
    }
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    if (this.customerId) {
      this.accounts = this.customerService.getCustomerAccounts(this.customer.id).pipe(
        catchError(err => {
          this.errorMessage = err.message;
          return throwError(err);
        })
      );
    }
  }

}
