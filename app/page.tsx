import Button from '@/components/Button';

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Next.js Starter Template
          </h1>
          
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            A production-ready starter template with Next.js App Router, TypeScript, and Tailwind CSS
          </p>

          <div className="flex gap-4 items-center flex-wrap justify-center">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Next.js 15</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built with the latest Next.js App Router for optimal performance
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fully typed with strict TypeScript configuration
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
