import styled from 'styled-components';
import Card from '@components/Card';
import { Link } from 'react-router-dom';
import { colors } from '@styles';

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 50px 20px;
	align-items: center;
	gap: 30px;
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
`;

const Home = () => {
	return (
		<HomeContainer>
      <CommonLink to='/series'>
      <Card placeholderText='SERIES' title='Popular Series' />
      </CommonLink>
      <CommonLink to='/movies'>
			<Card placeholderText='MOVIES' title='Popular Movies' />
      </CommonLink>
		</HomeContainer>
	);
};

export default Home;
