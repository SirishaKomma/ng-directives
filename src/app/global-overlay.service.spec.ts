import { TestBed } from '@angular/core/testing';

import { GlobalOverlayService } from './global-overlay.service';

describe('GlobalOverlayService', () => {
  let service: GlobalOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
