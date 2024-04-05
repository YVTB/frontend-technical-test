import React, { useState, useEffect } from 'react';
import { colors, fonts } from '@styles';
import styled, { css } from 'styled-components';
import placeHolderImage from '@assets/placeholder.png';
import OverlayContent from '@components/Overlay';

interface ICardProps {
	description?: string;
	imageUrl?: string;
	title?: string;
	placeholderText?: string;
	releaseYear?: number;
}

interface IImageContainerProps {
	imageUrl: string;
	children: React.ReactNode;
}

const CardContainer = styled.div`
	display: flex;
	height: 400px;
	width: 250px;
	flex-direction: column;
	margin: 30px 0;
	@media (min-width: 576px) {
		height: 400px;
		width: 200px;
	}
`;

const CardImage = styled.div<{ $imageurl?: string }>`
	display: flex;
	min-height: 375px;
	width: 250px;
	background-color: ${colors.darkGrey};
	${({ $imageurl }) => css`
		background-image: url(${$imageurl ? $imageurl : placeHolderImage});
		background-size: ${$imageurl ? '100%' : '200%'};
	`}
	background-repeat: no-repeat;
	background-position: center;
	align-items: center;
	justify-content: center;
	@media (min-width: 576px) {
		&:hover {
			opacity: 0.5;
			border: 3px solid ${colors.white};
		}
		min-height: 300px;
		width: 200px;
		box-sizing: border-box;
	}
`;

const PlaceholderText = styled.p`
	text-align: center;
	${fonts.main600};
	color: ${colors.white};
	font-size: 45px;
`;

const CardTitle = styled.p`
	${fonts.main500};
	font-size: 20px;
	font-color: ${colors.black};
`;

const ImageContainer: React.FC<IImageContainerProps> = ({ imageUrl }) => {
	const [validImageUrl, setValidImageUrl] = useState<string>(imageUrl);

	useEffect(() => {
		const img = new Image();
		img.onload = () => setValidImageUrl(imageUrl);
		img.onerror = () => setValidImageUrl(placeHolderImage);
		img.src = imageUrl;
	}, [imageUrl]);

	return <CardImage $imageurl={validImageUrl} />;
};

const Card: React.FC<ICardProps> = ({
	description,
	imageUrl,
	placeholderText,
	title,
	releaseYear
}) => {
	const [activeOverlay, setActiveOverlay] = useState<boolean>(false);

	const handleCardClick = () => {
		setActiveOverlay(true);
	};

	const handleCloseOverlay = () => {
		setActiveOverlay(false);
	};

	return (
		<CardContainer onClick={() => handleCardClick()}>
			<ImageContainer imageUrl={imageUrl || ''}>
				{placeholderText && (
					<PlaceholderText>{placeholderText}</PlaceholderText>
				)}
			</ImageContainer>
			<CardTitle>{title}</CardTitle>
			{activeOverlay && (
				<OverlayContent
					description={description}
					title={title}
					onClose={handleCloseOverlay}
					releaseYear={releaseYear}
					imageUrl={imageUrl}
				/>
			)}
		</CardContainer>
	);
};

export default Card;
