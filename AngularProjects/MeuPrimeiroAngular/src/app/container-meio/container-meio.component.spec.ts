import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMeioComponent } from './container-meio.component';

describe('ContainerMeioComponent', () => {
  let component: ContainerMeioComponent;
  let fixture: ComponentFixture<ContainerMeioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerMeioComponent]
    });
    fixture = TestBed.createComponent(ContainerMeioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
