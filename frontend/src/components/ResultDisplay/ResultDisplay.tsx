import { formatCurrency } from '@/utils';
import {
  LoadingText,
  ResultCard,
  ResultGrid,
  ResultItem,
  ResultLabel,
  ResultTitle,
  ResultValue,
} from './ResultDisplay.styles';
import { CalculationResponse } from '@/types';

interface ResultDisplayProps {
  result: CalculationResponse;
  isLoading: boolean;
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, isLoading }) => {
  const { profit, total } = result;

  if (isLoading) {
    return (
      <ResultCard>
        <LoadingText>Загрузка результатов...</LoadingText>
      </ResultCard>
    );
  };

  return (
    <ResultCard>
      <ResultTitle>Результаты расчета</ResultTitle>
      <ResultGrid>
        <ResultItem>
          <ResultLabel>Итоговая сумма</ResultLabel>
          <ResultValue $highlight>{formatCurrency(total)}</ResultValue>
        </ResultItem>
        <ResultItem>
          <ResultLabel>Доход</ResultLabel>
          <ResultValue $highlight>{formatCurrency(profit)}</ResultValue>
        </ResultItem>
      </ResultGrid>
    </ResultCard>
  );
};

export default ResultDisplay;
