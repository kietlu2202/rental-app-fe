import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 're-aboutpage',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './about.component.html',
})
export class AboutpageComponent {}
