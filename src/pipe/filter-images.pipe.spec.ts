import { FilterImagesPipe } from './filter-images.pipe';
import {Image} from '../model/Image';

describe('FilterImagesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterImagesPipe();
    expect(pipe).toBeTruthy();
  });

  const images = [
    new Image(1, 'url', 'text'),
    new Image(10, 'url', 'more text'),
    new Image(20, 'url', 'another text'),
    new Image(21, 'url', 'text 20 text'),
  ];

  it('returns the same collection if no search term', () => {
    const pipe = new FilterImagesPipe();
    expect(pipe.transform(images, undefined)).toBe(images);
    expect(pipe.transform(images, null)).toBe(images);
    expect(pipe.transform(images, '')).toBe(images);
  });

  it('filters by id or text', () => {
    const pipe = new FilterImagesPipe();
    expect(pipe.transform(images, '7').length).toBe(0);
    expect(pipe.transform(images, '1').length).toBe(1);
    expect(pipe.transform(images, '20').length).toBe(2);
  });

  it('filters ignoring case', () => {
    const pipe = new FilterImagesPipe();
    expect(pipe.transform(images, 'TexT').length).toBe(4);
  });
});
