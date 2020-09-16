import axios from 'axios';
import jwt_decode from 'jwt-decode';
class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = 'get') {
    paramsOrData._token = JSON.parse(
      window.localStorage.getItem('token')
    ).token;

    console.debug('API Call:', endpoint, paramsOrData, verb);

    try {
      return (
        await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === 'get' ? 'params' : 'data']: paramsOrData,
        })
      ).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  //returns an array of companies
  static async getCompanies(params = '') {
    let res = await this.request(`companies`, { search: params });
    return res.companies;
  }

  static async getJobs(params = '') {
    let res = await this.request('jobs', { search: params });
    return res.jobs;
  }

  static async login(username, password) {
    let res = await this.request('login', { username, password }, 'post');
    return res.token;
  }
  static async signUp(signUpData) {
    let res = await this.request('users', signUpData, 'post');
    return res.token;
  }

  static async updateUser(token, formData) {
    const { username } = jwt_decode(token);
    let res = await this.request(`users/${username}`, formData, 'patch');
    return res.user;
  }

  static async applyToJob(job_id) {
    let res = await this.request(`jobs/${job_id}/apply`, {}, 'post');
    return res.data;
  }

  static async getUserJobs() {
    const token = JSON.parse(window.localStorage.getItem('token')).token;

    const { username } = jwt_decode(token);
    let res = await this.request(`users/${username}`, {}, 'get');
    return res.user.jobs;
  }
}

export default JoblyApi;
