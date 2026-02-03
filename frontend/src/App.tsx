import { observer } from 'mobx-react-lite';
import { AppContainer } from './App.styles';
import { DepositForm, Layout, ResultDisplay } from '@/components';
import { useStores } from '@/hooks';

const App = observer(() => {
  const { calculationStore } = useStores();
  const isLoading = calculationStore.getLoadingState();
  const result = calculationStore.getResponse();
  return (
    <AppContainer>
      <Layout>
        <DepositForm/>
        {result && <ResultDisplay result={result} isLoading={isLoading}/>}
      </Layout>
    </AppContainer>
  );
});

export default App;
