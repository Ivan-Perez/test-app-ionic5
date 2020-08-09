import { Component } from '@angular/core';
import {ImagesService} from '../../services/images.service';
import {Image} from '../../model/Image';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private readonly imagesQuantity = 4000;
  public images: Image[] = [];

  public constructor(imagesService: ImagesService) {
    this.images = imagesService.get(this.imagesQuantity);
  }
}
