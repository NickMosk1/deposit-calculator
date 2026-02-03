import { useState } from 'react';
import { CalculationService } from '@/services';
import { ValidationErrors, FormData } from '@/types';
import {
  FormContainer,
  FormTitle,
  Form,
  FormGroup,
  Label,
  InputContainer,
  Input,
  Suffix,
  ErrorText,
  Button,
  LoadingSpinner,
} from './DepositForm.styles';
import { validateForm } from '@/utils';
import { INITIAL_FORM_DATA } from '@/consts';
import { useStores } from '@/hooks';
import { observer } from 'mobx-react-lite';

const DepositForm: React.FC = observer(() => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const { calculationStore } = useStores();
  const isLoading = calculationStore.getLoadingState();

  const calculationService = CalculationService.getInstance();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof ValidationErrors]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        calculationStore.setLoadingState(true);
        const requestData = { amount: parseFloat(formData.amount), months: parseInt(formData.months), rate: parseFloat(formData.rate) };
        const response = await calculationService.calculateDeposit(requestData);
        calculationStore.setResponse(response);
      } catch (error) {
        console.error('Ошибка при расчете:', error);
        setErrors({ amount: error instanceof Error ? error.message : 'Ошибка сервера' });
      } finally {
        calculationStore.setLoadingState(false);
      };
    };
  };

  return (
    <FormContainer>
      <FormTitle>Калькулятор вклада</FormTitle>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="amount">Сумма вклада</Label>
          <InputContainer>
            <Input
              id="amount"
              name="amount"
              type="number"
              value={formData.amount}
              onChange={handleChange}
              $hasError={!!errors.amount}
              placeholder="Например: 100000"
              min="1000"
              max="10000000"
              step="1000"
              disabled={isLoading}
            />
            <Suffix>₽</Suffix>
          </InputContainer>
          <ErrorText>{errors.amount}</ErrorText>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="months">Срок в месяцах</Label>
          <InputContainer>
            <Input
              id="months"
              name="months"
              type="number"
              value={formData.months}
              onChange={handleChange}
              $hasError={!!errors.months}
              placeholder="Например: 12"
              min="1"
              max="60"
              step="1"
              disabled={isLoading}
            />
            <Suffix>месяцев</Suffix>
          </InputContainer>
          <ErrorText>{errors.months}</ErrorText>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="rate">Годовая ставка</Label>
          <InputContainer>
            <Input
              id="rate"
              name="rate"
              type="number"
              value={formData.rate}
              onChange={handleChange}
              $hasError={!!errors.rate}
              placeholder="Например: 8.5"
              min="1"
              max="20"
              step="0.1"
              disabled={isLoading}
            />
            <Suffix>%</Suffix>
          </InputContainer>
          <ErrorText>{errors.rate}</ErrorText>
        </FormGroup>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <><LoadingSpinner/>Рассчитываем...</> : 'Рассчитать'}
        </Button>
      </Form>
    </FormContainer>
  );
});

export default DepositForm;
