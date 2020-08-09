import { Pipe, PipeTransform } from '@angular/core';
import {Image} from '../model/Image';

@Pipe({
  name: 'filterImages'
})
export class FilterImagesPipe implements PipeTransform {
  public transform(images: Image[], searchTerm: string): Image[] {
    if (searchTerm) {
      // if the search term is numeric, return that image if its ID exactly matches
      let findById: number = null;
      if (!isNaN(Number(searchTerm))) {
        findById = Number(searchTerm);
      }
      searchTerm = searchTerm.toLowerCase();
      return images.filter(image => {
        if (findById !== null && image.id === findById) {
          return true;
        }
        return image.text.toLowerCase().includes(searchTerm);
      });
    } else {
      return images;
    }
  }
}
