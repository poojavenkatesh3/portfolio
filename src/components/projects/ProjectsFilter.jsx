const selectOptions = [
    { label: 'All', value: '' },
    { label: 'Web Application', value: 'Web Application' },
    { label: 'Mobile Application', value: 'Mobile Application' },
    { label: 'UI/UX Design', value: 'UI/UX Design' },
];

const ProjectsFilter = ({ setSelectProject }) => {
    return (
        <select
            onChange={(e) => setSelectProject(e.target.value)}
            className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
        >
            {selectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default ProjectsFilter;
