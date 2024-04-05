import { colors } from '@styles';

interface IMicrosoftProps {
	color?: string;
	width?: number;
	height?: number;
  small?: boolean
}

const Microsoft: React.FC<IMicrosoftProps> = ({
	color,
	width = 108,
	height = 40,
  small = false
}) => {
	return (
		<svg
      width={small ? width : width * 2}
      height={small ? height : height * 2}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 864 312'
			style={{ color: color ? color : colors.white }}
		>
			<path d='M2.3 2.3h859.5v307.5H2.3z' />
			<path fill='#D2D2D2' d='M4.5 4.5h855v303H4.5V4.5zM0 312h864V0H0v312z' />
			<defs>
				<path id='a' d='M0 0h864v312H0z' />
			</defs>
			<g>
				<path fill='#F25022' d='M70.5 68.6h83.8v83.8H70.5z' />
				<path fill='#7FBA00' d='M163 68.6h83.8v83.8H163z' />
				<path fill='#00A4EF' d='M70.5 161h83.8v83.8H70.5z' />
				<path fill='#FFB900' d='M163 161h83.8v83.8H163z' />
				<path
					fill='#FFF'
					d='M408.3 163c0-2.5.9-4.5 2.7-6.2 1.8-1.7 3.9-2.5 6.4-2.5 2.6 0 4.8.9 6.5 2.6 1.7 1.7 2.6 3.8 2.6 6.1 0 2.4-.9 4.5-2.7 6.1-1.8 1.7-3.9 2.5-6.5 2.5s-4.7-.8-6.5-2.5c-1.6-1.7-2.5-3.7-2.5-6.1m16.5 81.8h-14.9v-63.5h14.9v63.5zM470.2 233.9c2.2 0 4.7-.5 7.4-1.5s5.1-2.4 7.4-4.1v13.9c-2.4 1.4-5.1 2.4-8.1 3.1-3 .7-6.4 1.1-10 1.1-9.3 0-16.9-3-22.8-8.9-5.9-5.9-8.8-13.5-8.8-22.6 0-10.2 3-18.6 9-25.2 6-6.6 14.4-9.9 25.4-9.9 2.8 0 5.6.4 8.5 1.1 2.9.7 5.1 1.6 6.8 2.5v14.3c-2.3-1.7-4.7-3-7.1-3.9-2.4-.9-4.9-1.4-7.4-1.4-5.9 0-10.6 1.9-14.3 5.7-3.6 3.8-5.4 9-5.4 15.5 0 6.4 1.7 11.4 5.2 15 3.5 3.6 8.2 5.3 14.2 5.3M527.5 180.3c1.2 0 2.3.1 3.2.2.9.2 1.8.4 2.4.6v15.1c-.8-.6-1.9-1.1-3.4-1.6s-3.3-.8-5.5-.8c-3.7 0-6.8 1.5-9.3 4.6-2.5 3.1-3.8 7.8-3.8 14.3v32.1h-14.9v-63.5h14.9v10h.2c1.4-3.5 3.4-6.2 6.2-8.1 2.8-1.9 6.1-2.9 10-2.9M533.9 214c0-10.5 3-18.8 8.9-25 5.9-6.1 14.2-9.2 24.7-9.2 9.9 0 17.7 3 23.3 8.9 5.6 5.9 8.4 13.9 8.4 23.9 0 10.3-3 18.5-8.9 24.6-5.9 6.1-14 9.1-24.2 9.1-9.8 0-17.7-2.9-23.4-8.7-5.9-5.7-8.8-13.6-8.8-23.6m15.6-.5c0 6.6 1.5 11.7 4.5 15.2s7.3 5.2 12.9 5.2c5.4 0 9.6-1.7 12.4-5.2s4.3-8.7 4.3-15.6c0-6.8-1.5-12-4.4-15.5-2.9-3.5-7.1-5.2-12.4-5.2-5.5 0-9.7 1.8-12.8 5.5-3 3.7-4.5 8.8-4.5 15.6M621.4 198c0 2.1.7 3.8 2 5 1.4 1.2 4.4 2.7 9 4.6 6 2.4 10.2 5.1 12.6 8.1 2.4 3 3.6 6.6 3.6 10.8 0 6-2.3 10.8-6.9 14.4-4.6 3.6-10.8 5.4-18.6 5.4-2.6 0-5.5-.3-8.7-1-3.2-.6-5.9-1.5-8.1-2.4v-14.7c2.7 1.9 5.6 3.4 8.8 4.5 3.1 1.1 6 1.7 8.5 1.7 3.4 0 5.9-.5 7.5-1.4 1.6-.9 2.4-2.5 2.4-4.8 0-2.1-.8-3.8-2.5-5.2-1.7-1.4-4.8-3.1-9.5-4.9-5.5-2.3-9.4-4.9-11.7-7.8-2.3-2.9-3.5-6.6-3.5-11 0-5.7 2.3-10.4 6.8-14.1 4.5-3.7 10.4-5.5 17.7-5.5 2.2 0 4.7.2 7.5.7 2.8.5 5.1 1.1 6.9 1.9v14.2c-2-1.3-4.3-2.4-6.9-3.4-2.6-.9-5.3-1.4-7.8-1.4-2.8 0-5.1.6-6.6 1.7-1.7 1.1-2.5 2.7-2.5 4.6M655.2 214c0-10.5 3-18.8 8.9-25 5.9-6.1 14.2-9.2 24.7-9.2 9.9 0 17.7 3 23.3 8.9 5.6 5.9 8.4 13.9 8.4 23.9 0 10.3-3 18.5-8.9 24.6-5.9 6.1-14 9.1-24.2 9.1-9.8 0-17.7-2.9-23.4-8.7-5.9-5.7-8.8-13.6-8.8-23.6m15.5-.5c0 6.6 1.5 11.7 4.5 15.2s7.3 5.2 12.9 5.2c5.4 0 9.6-1.7 12.4-5.2s4.3-8.7 4.3-15.6c0-6.8-1.5-12-4.4-15.5s-7.1-5.2-12.4-5.2c-5.5 0-9.7 1.8-12.8 5.5-3 3.7-4.5 8.8-4.5 15.6M769.8 193.6v32.6c0 6.8 1.6 11.8 4.7 15.2 3.1 3.4 7.9 5 14.2 5 2.1 0 4.3-.2 6.5-.7 2.2-.5 3.8-.9 4.7-1.5v-12.4c-.9.6-2 1.1-3.2 1.5-1.2.4-2.3.6-3.1.6-3 0-5.3-.8-6.7-2.4-1.4-1.6-2.1-4.4-2.1-8.3v-29.7H800v-12.2h-15.1v-18.8l-15 4.6v14.3h-22.3v-7.7c0-3.8.8-6.7 2.5-8.7 1.7-2 4.1-2.9 7.2-2.9 1.6 0 3 .2 4.3.6 1.2.4 2.1.8 2.6 1.1v-12.9c-1.1-.4-2.3-.6-3.7-.8-1.4-.2-3-.3-4.8-.3-6.8 0-12.4 2.1-16.7 6.4-4.3 4.3-6.5 9.7-6.5 16.4v8.8h-10.6v12.2h10.6v51.3h15.1v-51.3h22.2zM395.5 156.2v88.6h-15.4v-69.4h-.2l-27.5 69.4h-10.2L314 175.4h-.2v69.4h-14.2v-88.6h22l25.5 65.7h.4l26.9-65.7zM340 117.9c-5.3 3-11.3 4.5-18 4.5-5.1 0-9.6-1.1-13.6-3.4-3.9-2.2-7-5.4-9.1-9.5-2.1-4.1-3.2-8.7-3.2-13.8 0-5.4 1.2-10.3 3.5-14.5s5.6-7.6 9.9-10c4.3-2.4 9.1-3.6 14.5-3.6 2.7 0 5.4.3 8.1.8 2.7.5 4.9 1.2 6.6 2v8c-4-2.7-9.1-4-15.3-4-3.7 0-7 .9-10 2.7-3 1.8-5.3 4.3-6.9 7.4-1.6 3.2-2.4 6.8-2.4 10.8 0 6.3 1.7 11.3 5 15 3.3 3.7 7.9 5.5 13.7 5.5 3.7 0 7-.7 9.8-2.2V99.9h-11.3v-6.6H340v24.6zM383.1 104.6h-26.2c.1 3.8 1.3 6.7 3.3 8.8 2.1 2 4.8 3.1 8.2 3.1 4.5 0 8.4-1.3 11.8-3.9v6.4c-1.5 1-3.4 1.9-5.7 2.5-2.3.6-4.7.9-7.1.9-5.7 0-10.2-1.7-13.3-5.1-3.1-3.4-4.7-8.2-4.7-14.4 0-3.8.8-7.3 2.3-10.3 1.5-3.1 3.7-5.5 6.4-7.2 2.7-1.7 5.8-2.6 9.1-2.6 4.9 0 8.8 1.6 11.6 4.8 2.8 3.2 4.2 7.6 4.2 13.3v3.7zm-7.3-5.7c0-3.3-.8-5.8-2.3-7.5-1.5-1.7-3.6-2.6-6.4-2.6-2.5 0-4.7.9-6.6 2.7s-3 4.3-3.6 7.4h18.9zM411.5 121.1c-.7.4-1.6.7-2.9.9-1.2.2-2.3.3-3.3.3-7 0-10.5-3.9-10.5-11.6v-21h-6.4v-6h6.4v-9l7.3-2.3v11.2h9.3v6h-9.3v19.8c0 2.5.4 4.3 1.2 5.3.8 1 2.2 1.5 4.3 1.5 1.4 0 2.7-.4 3.8-1.2v6.1zM447.7 70.3c0 1.2-.4 2.2-1.3 3.1-.9.9-2 1.3-3.3 1.3-1.3 0-2.4-.4-3.3-1.3-.9-.8-1.3-1.9-1.3-3.2 0-1.3.5-2.4 1.4-3.2.9-.8 2-1.3 3.2-1.3 1.2 0 2.3.4 3.2 1.3 1 1 1.4 2 1.4 3.3m-1 51.2h-7.3V83.7h7.3v37.8zM478.4 121.1c-.7.4-1.6.7-2.9.9-1.2.2-2.3.3-3.3.3-7 0-10.5-3.9-10.5-11.6v-21h-6.4v-6h6.4v-9l7.3-2.3v11.2h9.3v6H469v19.8c0 2.5.4 4.3 1.2 5.3.8 1 2.2 1.5 4.3 1.5 1.4 0 2.7-.4 3.8-1.2v6.1zM526.2 71.7c-1.2-.6-2.5-1-4-1-4.1 0-6.1 2.5-6.1 7.5v5.4h8.6v6h-8.6v31.8h-7.3V89.7h-6.4v-6h6.4v-5.8c0-4 1.1-7.2 3.4-9.6 2.3-2.4 5.4-3.6 9.4-3.6 2 0 3.5.2 4.7.7v6.3zM553.1 91c-.4-.3-1.2-.6-2.2-.9-1-.2-1.9-.4-2.6-.4-2.6 0-4.7 1.2-6.3 3.5-1.6 2.3-2.4 5.3-2.4 9v19.3h-7.3V83.7h7.3v7.6h.2c.8-2.6 2.1-4.6 3.8-6.1 1.7-1.5 3.7-2.2 5.9-2.2 1.5 0 2.7.2 3.5.5V91zM594.8 102.4c0 6.1-1.8 11-5.3 14.6-3.5 3.6-8.2 5.4-14 5.4-5.7 0-10.3-1.8-13.7-5.3-3.4-3.5-5.1-8.2-5.1-14.1 0-6.3 1.8-11.2 5.3-14.8 3.5-3.6 8.3-5.4 14.4-5.4 5.7 0 10.2 1.7 13.4 5.2 3.4 3.5 5 8.3 5 14.4m-7.5.2c0-4.5-1-7.9-2.9-10.2-2-2.3-4.7-3.5-8.3-3.5-3.6 0-6.5 1.2-8.6 3.7-2.1 2.4-3.1 5.9-3.1 10.3 0 4.3 1 7.6 3.1 10 2.1 2.4 4.9 3.6 8.6 3.6 3.7 0 6.5-1.2 8.4-3.5 1.8-2.5 2.8-5.9 2.8-10.4M660.1 121.5h-7.3V100c0-3.9-.6-6.7-1.8-8.5-1.2-1.8-3.3-2.6-6.2-2.6-2.4 0-4.5 1.1-6.1 3.3-1.7 2.2-2.5 4.9-2.5 7.9v21.4h-7.3V99.3c0-6.9-2.7-10.4-8-10.4-2.5 0-4.6 1.1-6.2 3.2s-2.4 4.8-2.4 8.1v21.4H605V83.7h7.3v5.9h.1c2.7-4.6 6.7-6.8 11.8-6.8 2.4 0 4.6.7 6.6 2 1.9 1.3 3.3 3.2 4.2 5.6 1.5-2.6 3.2-4.5 5.3-5.8 2.1-1.2 4.5-1.9 7.3-1.9 8.3 0 12.4 5.1 12.4 15.4v23.4z'
				/>
			</g>
		</svg>
	);
};

export default Microsoft;
