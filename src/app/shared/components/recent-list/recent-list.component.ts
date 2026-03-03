import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-list',
  standalone: true,
  imports: [IonicModule,CommonModule],
  templateUrl: './recent-list.component.html'
})
export class RecentListComponent {

  @Input() items: any[] = [];
  @Input() field!: string;

}
