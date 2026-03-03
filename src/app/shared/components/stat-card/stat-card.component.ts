import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [IonicModule,CommonModule],
  templateUrl: './stat-card.component.html'
})
export class StatCardComponent {

  @Input() title!: string;
  @Input() value!: number;
@Input() icon: string = '';
}