import { TestBed } from '@angular/core/testing';

import { ImagesService } from './images.service';

describe('ImagesService', () => {
  let service: ImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create as many images as requested', () => {
    const quantity = 1000;
    expect(service.get(quantity).length).toBe(quantity);
  });

  it('should not be duplicated IDs', () => {
    const ids = service.get(1000).map(image => image.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should return an empty collection for non-positive values', () => {
    expect(service.get(0).length).toBe(0);
    expect(service.get(-1).length).toBe(0);
    expect(service.get(NaN).length).toBe(0);
  });
});
