import { TestBed } from '@angular/core/testing';
import { User } from './user';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
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

  let errorMessage = { status: '' }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all users', (done: DoneFn) => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response(JSON.stringify(usersStub))));
    service.getAllUsers().then((users:User[])  => {
      expect(users[0].id).toBe(usersStub[0].id)
      done();
    })
  });

  it('should return an empty array if fetching all users failed', (done: DoneFn) => {
    spyOn(window, 'fetch').and.rejectWith([])
    service.getAllUsers().catch(err => {
      expect(err).toEqual([]);
      done();
    })
  })

  it('should fetch one user by id', (done: DoneFn) => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response(JSON.stringify(usersStub[0]))));
    service.getUserById(usersStub[0].id).then((val: User | typeof errorMessage) => {
      expect((val as User).id).toBe(usersStub[0].id)
      done();
    })
  });

  it('should return an empty object if fetching one user by id failed', (done: DoneFn) => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response('{"status": 404}')))
    service.getUserById(-1).then((val: User | typeof errorMessage) => {
      expect(val.status).toBe(404)
      done()
    })
  })
});
