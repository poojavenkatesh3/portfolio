import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
	const [projects] = useState(projectsData);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');

	const searchProjectsByTitle = projects.filter((item) =>
		item.title.toLowerCase().includes(searchProject.toLowerCase())
	);

	const selectProjectsByCategory = selectProject
		? projects.filter((item) => item.category === selectProject)
		: projects;

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
