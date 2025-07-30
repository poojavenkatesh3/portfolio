import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.15,
            }}
        >
            <Link to={`/projects/${title}`} aria-label={`View details about ${title}`}>
                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    
                    {/* ✅ Dynamic Image Alt */}
                    <div className="w-full min-h-[250px] max-h-[250px] overflow-hidden rounded-t-xl">
                        <img
                            src={image}
                            alt={`${title} Project`}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* ✅ Project Title */}
                    <div className="text-center px-4 py-6">
                        <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                            {title}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectSingle;

