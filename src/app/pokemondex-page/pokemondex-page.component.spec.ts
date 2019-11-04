import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondexPageComponent } from './pokemondex-page.component';

describe('PokemondexPageComponent', () => {
  let component: PokemondexPageComponent;
  let fixture: ComponentFixture<PokemondexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemondexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemondexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
