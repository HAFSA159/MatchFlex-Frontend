import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPackageComponent } from './match-package.component';

describe('MatchPackageComponent', () => {
  let component: MatchPackageComponent;
  let fixture: ComponentFixture<MatchPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
