import { colors } from '@styles';

interface ITwitterProps {
	color?: string;
	width?: number;
	height?: number;
}

const Twitter: React.FC<ITwitterProps> = ({
	color,
	width = 22,
	height = 18
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height={height}
			width={width}
			viewBox='0 0 368.40001 299.39999'
			style={{ color: color ? color : colors.white }}
		>
			<path
				fill='#FFF'
				d='M368.4 35.5c-13.6 6-28.1 10.1-43.4 11.9 15.6-9.4 27.6-24.2 33.2-41.8-14.6 8.7-30.8 15-48 18.3C296.4 9.2 276.8 0 255 0c-41.7 0-75.6 33.8-75.6 75.6 0 5.9.7 11.7 2 17.2-62.8-3.1-118.5-33.2-155.8-79C19.1 25 15.4 38 15.4 51.8c0 26.2 13.3 49.4 33.6 62.9-12.4-.4-24-3.8-34.2-9.4v.9c0 36.6 26.1 67.2 60.6 74.1-6.3 1.7-13 2.7-19.9 2.7-4.9 0-9.6-.5-14.2-1.4 9.6 30 37.5 51.9 70.6 52.5C86 254.4 53.4 266.5 18 266.5c-6.1 0-12.1-.4-18-1.1 33.4 21.5 73.2 34 115.9 34 139 0 215.1-115.2 215.1-215.1 0-3.3-.1-6.5-.2-9.8 14.6-10.5 27.4-23.8 37.6-39z'
			/>
		</svg>
	);
};

export default Twitter;
