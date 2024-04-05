import styled from 'styled-components';
import { colors, fonts } from '@styles';
import Facebook from '@assets/icons/Facebook';
import Twitter from '@assets/icons/Twitter';
import Instagram from '@assets/icons/Instagram';
import Microsoft from '@assets/icons/Microsoft';
import PlayStore from '@assets/icons/PlayStore';
import AppleStore from '@assets/icons/AppleStore';

const footerListsData = [
	'Home',
	'Terms and Conditions',
	'Privacy Policy',
	'Collection Statement',
	'Help',
	'Manage Account'
];

const MainContainer = styled.div`
	display: flex;
	min-height: 250px;
	background-color: ${colors.darkGrey};
	flex-direction: column;
	padding: 39px 32px 20px;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	@media (min-width: 576px) {
		padding: 50px;
		position: relative;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const ColumnsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	@media (min-width: 576px) {
		flex-direction: row;
		align-items: center;
		gap: 0;
	}
`;

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		margin: 0 10px 0 0;
	}
`;

const ColumnTitle = styled.p`
	margin: 0;
	${fonts.main500};
	font-size: 10px;
	color: ${colors.white};
  @media (min-width: 576px) {
    font-size: 15px;
    text-decoration: none;
    display: flex;
    
`;

const Divider = styled.span`
	display: none;
	@media (min-width: 576px) {
		display: flex;
		margin-right: 10px;
	}
`;

const Copyright = styled.p`
	${fonts.main500};
	font-size: 10px;
	line-height: 14.52px;
	color: ${colors.white};
	margin: 20px 0;
	text-decoration: underline;
	@media (min-width: 576px) {
		font-size: 15px;
		text-decoration: none;
	}
`;

const BottomContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const SocialsContainer = styled.div`
	display: flex;
	gap: 20px;
`;

const StoresContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 0 0;
	gap: 20px;
	@media (min-width: 576px) {
		flex-direction: row;
	}
`;

const Footer = () => {
	return (
		<MainContainer>
			<TextContainer>
				<ColumnsContainer>
					{footerListsData.map((title, i) => {
						return (
							<ColumnContainer key={i}>
								<ColumnTitle>
									{i > 0 && <Divider> | </Divider>}
									{title}
								</ColumnTitle>
							</ColumnContainer>
						);
					})}
				</ColumnsContainer>
				<Copyright>Copyright 2023 All Right Reserved</Copyright>
			</TextContainer>
			<BottomContainer>
				<SocialsContainer>
					<Facebook />
					<Twitter />
					<Instagram />
				</SocialsContainer>
				<StoresContainer>
					<Microsoft small />
					<PlayStore small />
					<AppleStore small />
				</StoresContainer>
			</BottomContainer>
		</MainContainer>
	);
};

export default Footer;
