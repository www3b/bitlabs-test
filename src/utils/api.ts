const API_ENDPOINT = 'https://api-qjoa5a5qtq-uc.a.run.app'

interface IApi {
  post?<T>(url: string, data: {}): Promise<T>;
  get?<T>(url: string): Promise<T>;
};

class Api implements IApi {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public async post<T extends Record<string, any>>(url: string, data = {}): Promise<T> {
    const response = await window.fetch(`${this.endpoint}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    const status = response.status;

    const json = await response.json();

    if (status >= 200 && status < 300) {
      // Remove [[Prototype]] from JSON
      return Object.assign(Object.create(null), json);
    } else {
      return Promise.reject(json);
    }
  };
}

export default new Api(API_ENDPOINT);
