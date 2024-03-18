import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './users-list.component';
import { User } from '../user';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let usersStub: User[];

  usersStub = [{
    id: 9999,
    name: 'Test',
    username: 'Test123',
    email: 'test@mail.com',
    address: {
      street: '21st Jump st',
      suite: 'Random Apt',
      city: 'Random City',
      zipcode: '123',
      geo: {
        lat: '',
        lng: ''
      }
    },
    website: 'test.net',
    company: {}
  }]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Name', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Name');
  });

  it('should contain Username', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Username');
  });

  it('should contain Email', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Email');
  });

  it('should contain Website', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Website');
  });

  it('should contain Action', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Action');
  });
});

describe('When the UserListComponent is loading', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    component.isLoading = true;
    fixture.detectChanges();
  });

  it('the skeleton loader should be displayed', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('div.skeleton')).toBeTruthy();
  });
});

describe('When the UserListComponent displays error message', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    component.errorMessage = 'An error occurred while fetching data';
    component.isLoading = false;
    fixture.detectChanges();
  });

  it('the errorMessage should be displayed', () => {
    const element: HTMLElement = fixture.nativeElement;
    const error = element.querySelector('#error-message');
    expect(error).toBeTruthy();
    expect(error?.textContent).toContain(component.errorMessage);
  });
});
