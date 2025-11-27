import { Component } from '@angular/core';
import { FileService } from '../file-service';
import { HttpEventType } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-multiple',
  imports: [CommonModule],
  templateUrl: './upload-multiple.component.html',
  styleUrl: './upload-multiple.component.css',
})
export class UploadMultipleComponent {
files: File[] = [];
  progress = 0;

  constructor(private fileService: FileService) {}

  onFileSelected(event: any) {
    this.files = Array.from(event.target.files);
  }

  uploadFiles() {

    this.fileService.uploadFiles(this.files).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round((100 * event.loaded) / (event.total || 1));
      }

      if (event.type === HttpEventType.Response) {
        alert("Archivos subidos correctamente");
        this.progress = 0;
        this.files = [];
      }

    });
  }
}
