import { colors, fonts } from '@styles';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IOverlayContentProps {
	onClose: () => void;
	title?: string;
	description?: string;
	releaseYear?: number;
	imageUrl?: string;
}

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${colors.black70};
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 50px;
	right: 30px;
	padding: 5px 10px;
	border: none;
	border-radius: 5px;
	@media (min-width: 576px) {
		top: 80px;
		right: 20%;
	}
`;

const ContentContainer = styled.div`
	background-color: ${colors.white};
	border-radius: 10px;
	width: 90%;
	height: 90vh;
	justify-content: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	@media (min-width: 576px) {
		width: 70%;
	}
`;

const ContentTitle = styled.h5`
	${fonts.main600};
	font-size: 18px;
	@media (min-width: 576px) {
		font-size: 30px;
	}
`;

const DescriptionText = styled.p`
	margin: 20px;
	@media (min-width: 576px) {
		margin: 20px 80px;
	}
`;

const ImageLink = styled.a`
	text-decoration: none;
	color: ${colors.blue};
	margin: 10px auto;
	text-decoration: underline;
`;

const OverlayContent: React.FC<IOverlayContentProps> = ({
	description,
	onClose,
	title,
	releaseYear,
	imageUrl
}) => {
	const [validImageUrl, setValidImageUrl] = useState<string | undefined>(
		imageUrl
	);

	useEffect(() => {
		const img = new Image();
		img.onload = () => setValidImageUrl(imageUrl);
		img.onerror = () => setValidImageUrl(undefined);
		img.src = imageUrl || '';
	}, [imageUrl]);

	const handleStopPropagation = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		onClose();
	};

	return (
		<Overlay>
			<ContentContainer>
				<CloseButton onClick={handleStopPropagation}>Close</CloseButton>
				<ContentTitle>{title}</ContentTitle>
				<DescriptionText>{description}</DescriptionText>
				<DescriptionText>{`Released: ${releaseYear}`}</DescriptionText>
				{!validImageUrl ? null : (
					<DescriptionText>
						<ImageLink target='_blank' href={validImageUrl}>
							Image URL
						</ImageLink>
					</DescriptionText>
				)}
			</ContentContainer>
		</Overlay>
	);
};

export default OverlayContent;
