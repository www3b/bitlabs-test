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
    const json = await response.json();

    // Remove [[Prototype]] from JSON
    return Object.assign(Object.create(null), json);
  };
}

export default new Api(API_ENDPOINT);
