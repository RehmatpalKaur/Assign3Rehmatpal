import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpetsComponent } from './listofpets.component';

describe('ListofpetsComponent', () => {
  let component: ListofpetsComponent;
  let fixture: ComponentFixture<ListofpetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListofpetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListofpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
