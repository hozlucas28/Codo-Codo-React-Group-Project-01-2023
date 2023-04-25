import { GroupProvider } from './contexts/GroupContext.jsx'
import CardsView from './views/CardsView.jsx'

function App() {
	return (
		<GroupProvider>
			<CardsView></CardsView>
		</GroupProvider>
	)
}

export default App
