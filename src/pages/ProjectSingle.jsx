import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import ProjectGallery from '../components/projects/ProjectGallery';

const ProjectSingle = () => {
	const { id } = useParams();

	const project = projectsData.find((project) => project.title === id);

	if (!project) {
		return <h1 className="text-center mt-20 text-2xl">Project Not Found</h1>;
	}

	return (
		<div className="container mx-auto py-10">
			<h1 className="text-4xl text-center mb-6">{project.title}</h1>

			{/* Project Gallery */}
			<ProjectGallery galleryImages={project.galleryImages} title={project.title} />

			{/* Project Description */}
			<p className="text-center text-md text-gray-500 mb-6">{project.description}</p>
		</div>
	);
};

export default ProjectSingle;
