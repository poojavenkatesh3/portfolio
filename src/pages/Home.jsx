import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsSwiper from '../components/projects/ProjectsSwiper';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';

const Home = () => {
  return (
    <div className="container mx-auto">
      <AppBanner />

      {/* ✅ Swipable Projects */}
      <ProjectsProvider>
  <ProjectsSwiper useHomeLive={true} />   {/* ✅ Pass the prop here */}
</ProjectsProvider>

      {/* ✅ Button moved downward slightly */}
      <div className="mt-16 sm:mt-20 flex justify-center">  
        <Link
          to="/projects"
          className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <Button title="View All Projects" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
