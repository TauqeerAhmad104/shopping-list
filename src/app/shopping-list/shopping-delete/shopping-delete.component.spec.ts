import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDeleteComponent } from './shopping-delete.component';

describe('ShoppingDeleteComponent', () => {
  let component: ShoppingDeleteComponent;
  let fixture: ComponentFixture<ShoppingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
