// src/services/ApiService.ts

class ApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = 'https://api.openai.com/v1/';
    this.apiKey = process.env.OPENAI_KEY || '';
  }

  async get(endpoint: string) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar dados');
    }

    return response.json();
  }


}

export const apiService = new ApiService();
