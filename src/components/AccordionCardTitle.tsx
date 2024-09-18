import starIcon from '../assets/images/icon-star.svg';

const AccordionCardTitle = (): JSX.Element => {
	return (
		<div className='flex items-center gap-6'>
			<img
				className='w-[1.25rem] h-[1.25rem] tablet:w-[2.5rem] tablet:h-[2.5rem]'
				src={starIcon}
				alt=''
				aria-hidden='true'
			/>
			<h1 className='font-work-sans text-[2rem] tablet:text-[3.5rem] font-bold'>FAQs</h1>
		</div>
	);
};

export default AccordionCardTitle;
