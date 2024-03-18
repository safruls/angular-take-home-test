import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { UserDetailsComponent } from './user-details.component';
import { User } from '../user';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let userStub: Partial<User>;

  userStub = {
    id: 9999,
    name: 'Test',
    username: 'Test123'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsComponent, RouterModule.forRoot([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Personal Information"', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Personal Information');
  });

  it('should contain Company Information"', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Company Information');
  });
})

describe('When the UserDetailsComponent is loading', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsComponent, RouterModule.forRoot([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.isLoading = true;
    fixture.detectChanges();
  });

  it('the skeleton loader should be displayed', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('div.skeleton')).toBeTruthy();
  });
});

describe('When the UserDetailsComponent displays error message', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsComponent, RouterModule.forRoot([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.errorMessage = 'An error occurred while fetching data';
    component.isLoading = false;
    fixture.detectChanges();
  });

  it('the errorMessage should be displayed', () => {
    const element: HTMLElement = fixture.nativeElement;
    const error = element.querySelector('#error-message-in-details-page');
    expect(error).toBeTruthy();
    expect(error?.textContent).toContain(component.errorMessage);
  });
});
