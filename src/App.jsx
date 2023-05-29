import './App.css';
import { FormProvider } from './context/FormProvider';
import { MainContent } from './components/MainContent/MainContent';

function App() {
	return (
		<FormProvider>
			<MainContent />
		</FormProvider>
	);
}

export default App;
