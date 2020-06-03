import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroprightMenuDetailComponent } from './dropright-menu-detail.component';

describe('DroprightMenuDetailComponent', () => {
  let component: DroprightMenuDetailComponent;
  let fixture: ComponentFixture<DroprightMenuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroprightMenuDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroprightMenuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
