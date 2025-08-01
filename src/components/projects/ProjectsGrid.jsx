import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './Projectdetails';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
    const {
        projects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
    } = useContext(ProjectsContext);

    return (
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
            {/* 🔹 Section Title */}
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Projects Portfolio
                </p>
            </div>

            {/* 🔹 Search and Filter */}
            <div className="mt-10 sm:mt-16">
                <h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
                    Search projects by title or filter by category
                </h3>

                <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
                    {/* Search Input */}
                    <div className="flex justify-between gap-2 w-full sm:w-auto">
                        <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
                            <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
                        </span>
                        <input
                            onChange={(e) => setSearchProject(e.target.value)}
                            value={searchProject}
                            className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light w-full sm:w-64"
                            type="search"
                            placeholder="Search Projects"
                            aria-label="Search Projects"
                        />
                    </div>

                    {/* Filter Component */}
                    <ProjectsFilter setSelectProject={setSelectProject} />
                </div>
            </div>

            {/* 🔹 Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                {(selectProject ? selectProjectsByCategory
                    : searchProject ? searchProjectsByTitle
                    : projects
                ).map((project) => (
                    <ProjectSingle
                        key={project.id}
                        title={project.title}
                        category={project.category}
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsGrid;

