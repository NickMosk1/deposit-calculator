import { ValidationErrors, FormData } from "@/types";

export const validateForm = (data: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  const amount = parseFloat(data.amount);
  if (isNaN(amount)) {
    errors.amount = 'Введите сумму';
  } else if (amount < 1000) {
    errors.amount = 'Минимальная сумма: 1000 ₽';
  } else if (amount > 10000000) {
    errors.amount = 'Максимальная сумма: 10 000 000 ₽';
  };

  const months = parseInt(data.months)
  if (isNaN(months)) {
    errors.months = 'Введите срок';
  } else if (months < 1) {
    errors.months = 'Минимальный срок: 1 месяц';
  } else if (months > 60) {
    errors.months = 'Максимальный срок: 60 месяцев';
  };

  const rate = parseFloat(data.rate)
  if (isNaN(rate)) {
    errors.rate = 'Введите ставку';
  } else if (rate < 1) {
    errors.rate = 'Минимальная ставка: 1%';
  } else if (rate > 20) {
    errors.rate = 'Максимальная ставка: 20%';
  };

  return errors;
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
