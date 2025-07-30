const ProjectGallery = ({ galleryImages, title }) => {
    return (
        <div className="flex flex-col gap-10 mt-12">
            {galleryImages.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start gap-6">
                    <img
                        src={item.image}
                        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none w-full sm:w-1/3"
                        alt={`${title} Gallery ${index + 1}`}
                    />
                    <p className="text-lg text-primary-dark dark:text-ternary-light sm:w-2/3">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ProjectGallery;
