import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

import { UserService } from '../../core/services/user.service';
import { ProductService } from '../../core/services/product.service';

import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { RecentListComponent } from '../../shared/components/recent-list/recent-list.component';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  imports: [
    IonicModule,
    CommonModule,
    StatCardComponent,
    RecentListComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {

 users: any[] = [];
  products: any[] = [];
  loading = true;
  error = false;

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private loadingCtrl: LoadingController
  ) {}

async ngOnInit() {
  const loading = await this.loadingCtrl.create({
    message: 'Cargando datos...',
  });

  await loading.present();
    forkJoin({
      users: this.userService.getUsers(),
      products: this.productService.getProducts()
    }).subscribe({
      next: (response) => {
        this.users = response.users;
        console.log("user",this.users);
        this.products = response.products;
       loading.dismiss();
         this.loading = false;
      },
      error: () => {
        this.error = true;
         loading.dismiss();
           this.loading = false;
      }
    });
  }
}