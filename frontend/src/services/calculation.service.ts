import axios, { AxiosInstance, AxiosError } from 'axios';
import { CalculationRequest, CalculationResponse } from '@/types';
import { Nullable } from '@/utils';

class CalculationService {
  private static instance: Nullable<CalculationService> = null;
  private api: AxiosInstance;

  public static getInstance(): CalculationService {
    if (!this.instance) this.instance = new this();
    return this.instance;
  };

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api',
      headers: { 'Content-Type': 'application/json' },
    });
  };

  async calculateDeposit(data: CalculationRequest): Promise<CalculationResponse> {
    try {
      const response = await this.api.post<CalculationResponse>('/calculate', data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) this.handleApiError(error);
      throw error;
    };
  };

  private handleApiError(error: AxiosError) {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data as any;

      switch (status) {
        case 400:
          throw new Error(data.message || 'Некорректные данные запроса');
        case 422:
          throw new Error('Ошибка валидации данных');
        case 500:
          throw new Error('Внутренняя ошибка сервера');
        default:
          throw new Error(data.message || `Ошибка сервера: ${status}`);
      };
    } else if (error.request) {
      throw new Error('Сервер не отвечает. Проверьте подключение');
    } else {
      throw new Error('Ошибка при выполнении запроса');
    };
  };
};

export default CalculationService;
