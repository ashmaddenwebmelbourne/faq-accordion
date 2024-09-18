import { useState } from 'react';
import AccordionCardTitle from './components/AccordionCardTitle';
import Faq from './components/Faq';
import faqData from './data';

import './App.css';

function App() {
	const [selectedAccordion, setSelectedAccordion] = useState<number | null>(1);

	const handleAccordionClick = (id: number) => {
		setSelectedAccordion((prevId) => (prevId === id ? null : id));
	};

	return (
		<>
			<div className='absolute top-0 left-0 w-full h-[14.5rem] tablet:h-[20rem] bg-background-pattern-mobile tablet:bg-background-pattern-desktop bg-no-repeat bg-cover bg-center'></div>
			<main className='bg-white z-10 relative rounded-2xl shadow-purple p-6 tablet:p-10 flex flex-col gap-6 tablet:gap-8 max-w-[37.5rem]'>
				<AccordionCardTitle />
				{faqData.map((currentFaq) => {
					return (
						<Faq
							key={currentFaq.id}
							id={currentFaq.id}
							question={currentFaq.question}
							answer={currentFaq.answer}
							isOpen={currentFaq.id === selectedAccordion}
							handleAccordionClick={handleAccordionClick}
						/>
					);
				})}
			</main>
		</>
	);
}

export default App;
