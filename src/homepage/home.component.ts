import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 're-homepage',
  standalone: true,
  imports: [CarouselModule, ImageModule],
  templateUrl: './home.component.html',
})
export class HomepageComponent implements OnInit {
  homePics: string[] = [];

  ngOnInit(): void {
    this.homePics = ['homeDemo1.jpg', 'homeDemo2.jpg', 'homeDemo3.jpg'];
  }
}
