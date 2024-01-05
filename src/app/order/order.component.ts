import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake } from '../models/cake';
import { Order } from '../models/order';
import { RouterService } from '../services/router.service';
import { OrderService } from '../services/order.service';
import { Validators } from '@angular/forms';
import { CakeService } from '../services/cake.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanComponentDeactivate } from '../services/logout.guard';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  cake?: Cake;
  order: Order = {quantity: 1};
  
  constructor(private activatedRoute: ActivatedRoute,
    private cakeService: CakeService,
    private orderService: OrderService,
    private routerService: RouterService,
    private snackBar: MatSnackBar) { }

  submitStatus: boolean = false;
  
  canDeactivate() {
    if (!this.submitStatus)
      this.submitStatus = confirm(
        'You have not placed an order yet. Any details entered will be lost. Are you sure you want to leave?'
      );
    return this.submitStatus;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id") ?? "";
      this.cakeService.getCakeById(id).subscribe(data => {
        this.cake = data;
        this.submitStatus = false;
      })
    })
  }

  calculateTotalPrice(): number {
    if (this.cake && this.cake.price && this.order.quantity) {
      return this.cake.price * this.order.quantity;
    }
    return 0;
  }
  
  makeRequest() {
    if (this.order.customerName && this.order.customerEmail && this.order.customerPhone && this.order.orderDate) {
      this.order.name = this.cake?.name;
      this.orderService.saveOrderRequest(this.order).subscribe({
        next: data => {
          this.snackBar.open("Order Request Submitted!", "", {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
          this.submitStatus = true;
          this.routerService.navigateToLandingView();
        },
        error: err => {
          alert(err);
        }
      })
    }
  }


}

