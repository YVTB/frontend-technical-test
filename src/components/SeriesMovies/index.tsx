import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchPrograms } from '../../redux/moviesSlice';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Card from '@components/Card';
import { colors } from '@styles';

const SeriesMoviesContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	align-items: center;
	gap: 30px;
	flex-wrap: wrap;
	@media (min-width: 576px) {
		flex-direction: row;
		justify-content: flex-start;
		padding: 50px 50px 150px;
		gap: 50px;
	}
`;

const CommonLink = styled(Link)`
	text-decoration: none;
	color: ${colors.black};
	margin: 10px auto;
`;

const SeriesMovies = () => {
	const dispatch = useAppDispatch();
	const programs = useAppSelector(state => state.programs.entries);
	const status = useAppSelector(state => state.programs.status);
	const error = useAppSelector(state => state.programs.error);

	useEffect(() => {
		dispatch(fetchPrograms());
	}, [dispatch]);

	const { pathname } = useLocation();

	const filterBy = pathname === '/series' ? 'series' : 'movie';
	const showedPrograms = programs.filter(el => el.programType === filterBy);

	const first20Programs = showedPrograms?.slice(0, 20);
	const filteredPrograms = first20Programs.filter(el => el.releaseYear >= 2010);

	const sortedPrograms = filteredPrograms.sort((a, b) =>
		a.title.localeCompare(b.title, 'en', { sensitivity: 'base', numeric: true })
	);

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Oops, something went wrong...</div>;
	}

	return (
		<>
			<CommonLink to='/'>Back</CommonLink>
			<SeriesMoviesContainer>
				{sortedPrograms.map((el, i) => (
					<Card
						key={i}
						imageUrl={el.images['Poster Art'].url}
						title={el.title}
						description={el.description}
						releaseYear={el.releaseYear}
					/>
				))}
			</SeriesMoviesContainer>
			<CommonLink to='/'>Back</CommonLink>
		</>
	);
};

export default SeriesMovies;
