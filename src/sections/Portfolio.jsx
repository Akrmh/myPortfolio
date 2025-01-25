const Portfolio = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      pcImage: "../../src/assets/portfolio-pc.png",
      mobileImage: "../../src/assets/portfolio-mobile.png",
      description: `A responsive portfolio website showcasing my skills, projects, and contact information. Built using modern web technologies.`,
    },
    {
      title: "Calculator",
      pcImage: "../../src/assets/pc-calc.png",
      mobileImage: "../../src/assets/mobile-calc.png",
      description: `A simple and functional calculator application that performs basic arithmetic operations with a clean and user-friendly interface.`,
    },
    {
      title: "Task Tracker",
      pcImage: "../../src/assets/pc-task-tracker.png",
      mobileImage: "../../src/assets/mobile-task-tracker.png",
      description: `An intuitive task management app to create, track, and organize daily tasks. Features include adding, editing, and deleting tasks.`,
    },
    {
      title: "Bookmarks",
      pcImage: "../../src/assets/bc-bookmarks.png",
      mobileImage: "../../src/assets/mobile-bookmarks.png",
      description: `A web application to save, manage, and organize your favorite websites in one place. Includes features like categorization and quick search.`,
    },
  ];

  return (
    <main id="portfolio" className="bg-[#1f242d] text-white min-h-screen">
      <div className="text-center pt-[10vh] pb-8">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="text-gray-400 mt-4">A showcase of my projects</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#292d36] p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <div className="flex gap-4">
              <div className="w-1/2">
                <img
                  src={project.pcImage}
                  alt={`${project.title} PC view`}
                  className="w-full rounded-lg"
                />
                <p className="text-center mt-2 text-gray-400">PC View</p>
                <p className="pt-5 text-justify">{project.description}</p>
              </div>
              <div className="w-1/2">
                <img
                  src={project.mobileImage}
                  alt={`${project.title} Mobile view`}
                  className="w-full rounded-lg"
                />
                <p className="text-center mt-2 text-gray-400">Mobile View</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
