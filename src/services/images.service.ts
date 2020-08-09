import { Injectable } from '@angular/core';
import {Image} from '../model/Image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private static randomText(): string {
    const texts = [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat',
      'Ut wisi enim ad minim veniam',
      'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat',
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
      'Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim',
      'Qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi',
    ];
    const index = Math.floor(Math.random() * texts.length);
    return texts[index];
  }

  public constructor() { }

  public get(quantity: number): Image[] {
    const images = [];
    for (let i = 0; i < quantity; i++) {
      const photo = 'https://picsum.photos/id/' + i + '/500/500.jpg';
      images.push(new Image(i, photo, ImagesService.randomText()));
    }
    return images;
  }
}
