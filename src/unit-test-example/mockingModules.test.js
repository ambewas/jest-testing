import axios from 'axios';
import Users from './mockingModules';

// create a mock of axios. This allows us to mock implementations & spy on calls.
jest.mock('axios');

it('should fetch users', () => {
  const resp = { data: [{ name: 'Bob' }] };

  // mock the get implementation of axios, so we don't have to actually do API calls in our tests.
  axios.get.mockImplementation(() => Promise.resolve(resp));

  Users
    .getAll()
    .then(users => {
      // assert that the API actually calls axios.get
      expect(axios.get).toHaveBeenCalled();

      // assert that it returns the correct data.
      expect(users).toEqual(resp.data)
    });
});