import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mariobross',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>mariobross works!</p>`,
  styleUrl: './mariobross.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MariobrossComponent { }
