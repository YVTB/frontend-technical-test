import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@components/Home';
import SeriesMovies from '@components/SeriesMovies';
import styled from 'styled-components';

const AppContainer = styled.div`
	display: flex;
	max-width: 100vw;
	flex-direction: column;
	justify-content: center;
	@media (min-width: 576px) {
		justify-content: center;
		align-items: center;
	}
`;

const App: React.FC = () => {
	return (
		<AppContainer>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<Layout>
								<Home />
							</Layout>
						}
					/>
					<Route
						path='/series'
						element={
							<Layout>
								<SeriesMovies />
							</Layout>
						}
					/>
					<Route
						path='/movies'
						element={
							<Layout>
								<SeriesMovies />
							</Layout>
						}
					/>
				</Routes>
			</Router>
		</AppContainer>
	);
};

export default App;
