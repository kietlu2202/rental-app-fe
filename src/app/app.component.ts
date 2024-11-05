import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, ImageModule, ButtonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'HOME',
        command: () => {
          this.router.navigate(['']);
        },
      },
      {
        label: 'ABOUT US',
        command: () => {
          this.router.navigate(['/about']);
        },
      },
      {
        label: 'CONTACT',
        command: () => {
          this.router.navigate(['/contact']);
        },
      },
    ];
  }
}
