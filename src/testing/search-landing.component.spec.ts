import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLandingComponent } from '../app/search-landing/search-landing.component';

describe('SearchLandingComponent', () => {
  let component: SearchLandingComponent;
  let fixture: ComponentFixture<SearchLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchLandingComponent]
    });
    fixture = TestBed.createComponent(SearchLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
