import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuDetailComponent } from './dropdown-menu-detail.component';

describe('DropdownMenuDetailComponent', () => {
  let component: DropdownMenuDetailComponent;
  let fixture: ComponentFixture<DropdownMenuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownMenuDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMenuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
