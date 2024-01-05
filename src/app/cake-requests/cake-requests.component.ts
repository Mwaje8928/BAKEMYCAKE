import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from '../services/cake.service';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';

@Component({
  selector: 'app-cake-requests',
  templateUrl: './cake-requests.component.html',
  styleUrls: ['./cake-requests.component.css']
})
export class CakeRequestsComponent {
  search="";
  displayedColumns: string[] = ['orderDate', 'customerName', 'customerEmail','address', 'customerPhone', 'quantity','name','price','totalprice'];
  order: Order []=[];
  filteredData: any[] = [];

  constructor(private cakeService: CakeService,private http: HttpClient, private router: Router,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails(){
    this.cakeService.getOrderList().subscribe((data: any)=>{
      this.order=data;
      this.filteredData=data;
    });
  }
  
  filterData() {
    if (!this.search) {
      this.filteredData = this.order;
    } 
    else {
        this.filteredData = this.order.filter((element) =>
        element.customerPhone?.toString().includes(this.search)
      );
    }
  }

}
