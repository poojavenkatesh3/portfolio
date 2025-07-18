import React, { useState } from 'react';

const MyJourney = () => {
	const [activeTab, setActiveTab] = useState(null);

	const toggleTab = (tab) => {
		setActiveTab((prevTab) => (prevTab === tab ? null : tab));
	};

	const tabStyle = (tab) =>
		`cursor-pointer text-indigo-700 dark:text-indigo-300 font-medium px-4 py-2 border-b-2 ${
			activeTab === tab
				? 'border-indigo-500'
				: 'border-transparent hover:border-indigo-300 transition-all duration-300'
		}`;

	return (
		<section className="mt-20 py-16 bg-primary-light dark:bg-ternary-dark">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold text-ternary-dark dark:text-ternary-light mb-10">
					My Journey
				</h2>

				{/* Tabs */}
				<div className="flex justify-center space-x-6 mb-10">
					<span onClick={() => toggleTab('learning')} className={tabStyle('learning')}>
						My Learning
					</span>
					<span onClick={() => toggleTab('accomplishments')} className={tabStyle('accomplishments')}>
						Accomplishments
					</span>
					<span onClick={() => toggleTab('techstack')} className={tabStyle('techstack')}>
						Tech Stack
					</span>
				</div>

				{/* Tab Content */}
				<div className="mt-6 text-left max-w-4xl mx-auto">
					{activeTab === 'learning' && (
						<div className="bg-white dark:bg-ternary-dark p-6 rounded-xl shadow-md transition duration-300">
							<h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
								Internships & Hackathons
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
								<li>Dr KALAM AWARDS</li>
								<li>TANCAM</li>
								<li>Python Internship</li>
								<li>UI/UX Internship</li>
							</ul>
						</div>
					)}

					{activeTab === 'accomplishments' && (
						<div className="bg-white dark:bg-ternary-dark p-6 rounded-xl shadow-md transition duration-300">
							<h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">Achievements</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
								<li>1st Place - PPT Competition (Tagore College, 2023)</li>
								<li>Group Discussion - Shanmuga Hospital, 2024</li>
								<li>Google Generative AI Certificate</li>
								<li>Python Course - Udemy</li>
							</ul>
						</div>
					)}

					{activeTab === 'techstack' && (
						<div className="bg-white dark:bg-ternary-dark p-6 rounded-xl shadow-md transition duration-300">
							<h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">Skills & Tools</h3>
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800 dark:text-gray-200">
								<div>
									<h4 className="font-semibold">Languages</h4>
									<ul className="list-disc list-inside text-sm">
										<li>HTML, CSS, JavaScript</li>
										<li>Python, Java</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold">Frameworks/Tools</h4>
									<ul className="list-disc list-inside text-sm">
										<li>React, Tailwind CSS</li>
										<li>Git, GitHub, Figma, Canva</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold">Databases</h4>
									<ul className="list-disc list-inside text-sm">
										<li>MongoDB, MySQL</li>
									</ul>
								</div>
							</div>
						</div>
					)}

					{!activeTab && (
						<p className="text-gray-600 dark:text-gray-400 text-center">
							Click a section above to explore my journey!
						</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default MyJourney;
