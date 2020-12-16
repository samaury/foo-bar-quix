import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooBarQuixAboutComponent } from './foo-bar-quix-about.component';

describe('FooBarQuickAboutComponent', () => {
  let component: FooBarQuixAboutComponent;
  let fixture: ComponentFixture<FooBarQuixAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooBarQuixAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooBarQuixAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
