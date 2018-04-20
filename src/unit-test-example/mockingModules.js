import axios from 'axios';

class Users {
  static getAll() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

export default Users;