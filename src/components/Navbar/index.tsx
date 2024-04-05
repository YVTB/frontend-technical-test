import { useState } from 'react';
import styled, { css } from 'styled-components';
import Hamburger from '@assets/icons/Hamburger';
import { colors, fonts } from '@styles';
import { useLocation } from 'react-router-dom';

const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 20px 50px;
	align-items: center;
	height: fit-content;
	background-color: ${colors.blue};
	width: 100%;
	box-sizing: border-box;
`;

const Nav = styled.nav`
	display: flex;
	font-size: 18px;
	align-items: center;
	justify-content: space-between;
	background-color: ${colors.blue};
	width: 100%;
`;

const MainNav = styled.ul<{ $displaynav: string }>`
	${({ $displaynav }) => css`
    display: ${$displaynav};
  `}
	list-style-type: none;
	margin: 0;
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
	justify-content: center;
	flex-direction: column;
	background-color: ${colors.blue};
	border-radius: 10px;
	height: 150px;
	width: 220px;
	padding: 0;
	@media (min-width: 576px) {
		display: flex;
		position: relative;
		flex-direction: row;
		height: fit-content;
		justify-content: space-around;
		transform: none;
		width: fit-content;
		top: 0;
		left: 0;
	}
`;

const NavLi = styled.li`
	display: flex;
	text-align: center;
	margin: 15px auto;
	width: 200px;
	justify-content: center;
	@media (min-width: 576px) {
		margin: 0 12px;
	}
`;

const NavLink = styled.a`
	list-style-type: none;
	display: flex;
	text-decoration: none;
	color: ${colors.white};
	${fonts.main300};
	font-size: 18px;
`;

const TrialButton = styled.button`
	display: flex;
	padding: 10px;
	border: none;
	border-radius: 2px;
	justify-content: center;
	@media (min-width: 576px) {
		width: 200px;
	}
`;

const Logo = styled(NavLink)`
	display: inline-block;
	font-size: 20px;
	color: ${colors.white};
	${fonts.main600};
	padding: 0 @media (min-width: 576px) {
		letter-spacing: 2px;
		color: ${colors.white};
		margin: 10px;
		font-size: 24px;
	}
`;

const NavBarToggle = styled.div`
	display: flex;
	cursor: pointer;
	color: ${colors.white};
	font-size: 24px;
	@media (min-width: 576px) {
		display: none;
	}
`;

const SubtitleContainer = styled.div`
	background-color: ${colors.midGrey};
	display: flex;
	width: 100vw;
	flex-direction: column;
	height: 50px;
	justify-content: center;
	padding: 20px 50px;
	box-sizing: border-box;
`;

const SubtitleText = styled.h1`
	${fonts.main500};
	color: ${colors.white};
	font-size: 20px;
	margin: 0;
	text-transform: capitalize;
	@media (min-width: 576px) {
		font-size: 18px;
	}
`;

const Navbar = () => {
	const [displayNav, setDisplayNav] = useState<string>('none');
	const toggleNavBar = () => {
		setDisplayNav(displayNav === 'flex' ? 'none' : 'flex');
	};

	const { pathname } = useLocation();

	const subtitle =
		pathname === '/' ? 'popular titles' : `popular ${pathname.slice(1)}`;

	return (
		<>
			<NavContainer>
				<Nav>
					<Logo href='#'>DEMO Streaming</Logo>
					<NavBarToggle onClick={() => toggleNavBar()}>
						<Hamburger />
					</NavBarToggle>
					<MainNav $displaynav={displayNav}>
						<NavLi>
							<NavLink href='#'>Log in</NavLink>
						</NavLi>
						<NavLi>
							<TrialButton onClick={() => {}}>
								Start your free trial
							</TrialButton>
						</NavLi>
					</MainNav>
				</Nav>
			</NavContainer>
			<SubtitleContainer>
				<SubtitleText>{subtitle}</SubtitleText>
			</SubtitleContainer>
		</>
	);
};

export default Navbar;
