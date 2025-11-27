import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { UploadMultipleComponent } from '../upload-multiple/upload-multiple.component';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class Sidebar {
   private auth = inject(AuthService);
  private router = inject(Router);
  username: string | null = '';
  role: string | null = '';
  constructor() {
    this.username = this.auth.getUsername();
    this.role = this.auth.getRole();
  }
logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
