import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergalleryComponent } from './usergallery.component';

describe('UsergalleryComponent', () => {
  let component: UsergalleryComponent;
  let fixture: ComponentFixture<UsergalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
