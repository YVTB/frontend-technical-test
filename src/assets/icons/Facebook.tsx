import { colors } from '@styles';

interface IFacebookProps {
	color?: string;
	width?: number;
	height?: number;
}

const Facebook: React.FC<IFacebookProps> = ({
	color,
	width = 12,
	height = 20
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height={height}
			width={width}
			viewBox='0 0 166.1 299'
			style={{ color: color ? color : colors.white }}
		>
			<path
				fill='#FFF'
				d='M166.1 52h-47.4c-5.6 0-11.9 7.4-11.9 17.2v34.3h59.3v48.8h-59.3V299h-56V152.3H0v-48.8h50.8V74.7C50.8 33.5 79.4 0 118.6 0H166v52z'
			/>
		</svg>
	);
};

export default Facebook;
