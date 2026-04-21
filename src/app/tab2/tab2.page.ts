import { Component } from '@angular/core';

// Importar el servicio
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})

export class Tab2Page {
  // CHANGE: Update constructor to include `photoService`
  constructor(public photoService: PhotoService) {}

  // CHANGE: Add call to `loadSaved()` when navigating to the Photos tab
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  // CHANGE: Add `addNewToGallery()` method
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}