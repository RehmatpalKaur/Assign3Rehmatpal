import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsofpetsComponent } from './detailsofpets.component';

describe('DetailsofpetsComponent', () => {
  let component: DetailsofpetsComponent;
  let fixture: ComponentFixture<DetailsofpetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsofpetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsofpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
