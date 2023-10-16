class FetchService {
  private async request<T>(url: string, config: RequestInit): Promise<T> {
    try {
      const response = await fetch(url, config)

      return response as any
    }
    catch (error) {
      return Promise.reject(error)
    }
  }

  async get<T>(url: string): Promise<T> {
    const config: RequestInit = {
      method: 'GET',
    }
    return this.request<T>(url, config)
  }

  async post<T>(url: string, data: T): Promise<T> {
    const config: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    return this.request<T>(url, config)
  }
}

export default new FetchService()
