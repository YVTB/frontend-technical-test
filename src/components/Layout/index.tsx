import React from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import styled from 'styled-components';

interface LayoutProps {
	children: React.ReactNode;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<MainContainer>
			<Navbar />
			{children}
			<Footer />
		</MainContainer>
	);
};

export default Layout;
