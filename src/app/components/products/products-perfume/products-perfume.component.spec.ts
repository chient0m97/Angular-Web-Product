import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPerfumeComponent } from './products-perfume.component';

describe('ProductsPerfumeComponent', () => {
  let component: ProductsPerfumeComponent;
  let fixture: ComponentFixture<ProductsPerfumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPerfumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPerfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
