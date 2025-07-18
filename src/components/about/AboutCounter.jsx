import React, { useRef, useState } from 'react';
import { useCountUp } from 'react-countup';

const AboutCounter = () => {
	const [showDetail, setShowDetail] = useState([false, false, false, false]);
	const leetcodeRef = useRef(null);

	
	useCountUp({ ref: leetcodeRef, end: 10, duration: 2 });


	const toggleDetail = (index) => {
		const updated = [...showDetail];
		updated[index] = !updated[index];
		setShowDetail(updated);
	};

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 grid sm:grid-cols-4 gap-8 text-center">
				{/* LeetCode */}
				<div>
					<p className="text-4xl text-indigo-600 dark:text-indigo-400 font-bold">
						<span ref={leetcodeRef} />
					</p>
					<p className="text-lg text-ternary-dark dark:text-ternary-light mt-2 font-medium">
						Problems Solved on LeetCode
					</p>
					<button
						onClick={() => toggleDetail(2)}
						className="mt-3 block w-full text-center text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:text-indigo-700 transition duration-300"
					>
						{showDetail[2] ? 'Hide Details' : 'View Details'}
					</button>
					{showDetail[2] && (
						<ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside text-left sm:px-4">
							<li>110+ problems solved</li>
							<li>Focused on Arrays, DP, Recursion</li>
							<li>Active 5 days a week</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default AboutCounter;
