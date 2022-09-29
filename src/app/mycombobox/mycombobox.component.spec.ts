import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomboboxComponent } from './mycombobox.component';

describe('MycomboboxComponent', () => {
  let component: MycomboboxComponent;
  let fixture: ComponentFixture<MycomboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycomboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycomboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
