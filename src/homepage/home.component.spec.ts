import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomepageComponent } from './home.component';

let component: HomepageComponent;
let fixture: ComponentFixture<HomepageComponent>;

describe('Home Component Unit Test', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HomepageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home page component', () => {
    expect(component).toBeDefined();
  });

  it('should display the intro text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(
      'Welcome to Button Apartment LLC'
    );
  });
});
