import { colors } from '@styles';

interface IHamburgerProps {
	color?: string;
}

const Hamburger: React.FC<IHamburgerProps> = ({ color }) => (
	<svg
		width='18'
		height='14'
		viewBox='0 0 18 14'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ color: color ? color : colors.white }}
	>
		<path
			d='M0.75 9.75V8.375H17.25V9.75H0.75ZM0.75 4.25H17.25V5.625H0.75V4.25ZM17.25 0.125V1.5H0.75V0.125H17.25ZM0.75 12.5V13.875H17.25V12.5H0.75Z'
			fill='currentColor'
		/>
	</svg>
);

export default Hamburger;
