import { TestBed } from '@angular/core/testing';

import { JugadoresSeleccionadosoService } from './jugadores-seleccionadoso.service';

describe('JugadoresSeleccionadosoService', () => {
  let service: JugadoresSeleccionadosoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadoresSeleccionadosoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
