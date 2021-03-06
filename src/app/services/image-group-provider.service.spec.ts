import { TestBed, inject } from '@angular/core/testing';

import { ImageGroupProviderService } from './image-group-provider.service';
import { ImageGroup } from '../shared/image-group.class';
import { MockBackendService } from './mock-backend.service';
import { HttpClient } from '@angular/common/http';
import { EventManagerService } from './event-manager.service';
import { Response, Success, Error, CODE } from '../shared/response.class';

describe('ImageGroupProviderService', () => {
  let mockBackendService: MockBackendService;
  let eventManager: EventManagerService;

  beforeEach(() => {
    mockBackendService = new MockBackendService();
    TestBed.configureTestingModule({
      providers: [
        ImageGroupProviderService,
        { provide: HttpClient, useValue: mockBackendService },
        { provide: EventManagerService, useValue: eventManager }
      ]
    });
  });

  it('should be created', inject([ImageGroupProviderService], (service: ImageGroupProviderService) => {
    expect(service).toBeTruthy();
  }));
});
