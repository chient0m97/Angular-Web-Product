import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroprightMenuComponent } from './dropright-menu.component';

describe('DroprightMenuComponent', () => {
  let component: DroprightMenuComponent;
  let fixture: ComponentFixture<DroprightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroprightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroprightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
