import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';

type FaqProps = {
	id: number;
	question: string;
	answer: string;
	isOpen: boolean;
	handleAccordionClick: (id: number) => void;
};

const Faq = ({ id, question, answer, isOpen, handleAccordionClick }: FaqProps): JSX.Element => {
	return (
		<div className='flex flex-col gap-6'>
			<div onClick={() => handleAccordionClick(id)} className='flex justify-between items-center gap-6 cursor-pointer'>
				<strong className='text-dark-purple font-semibold font-work-sans text-base tablet:text-lg hover:text-pink'>
					{question}
				</strong>
				<div>
					<img
						className='w-[1.875rem] h-[1.875rem] min-w-[1.875rem] min-h-[1.875rem]'
						src={isOpen ? minusIcon : plusIcon}
						alt='Show the answer to this question'
					/>
				</div>
			</div>
			{isOpen && (
				<div>
					<p className='text-pale-purple font-work-sans text-sm tablet:text-base'>{answer}</p>
				</div>
			)}
		</div>
	);
};

export default Faq;
