// src/app/dashboard/Projects.tsx

export default function Projects() {
  const projects = [
    { id: 1, name: "Website Redesign", progress: 40, tasks: 10 },
    { id: 2, name: "Mobile App", progress: 70, tasks: 20 },
    { id: 3, name: "Marketing Campaign", progress: 25, tasks: 8 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map(p => (
          <div key={p.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-2">
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-gray-500 text-sm">{p.tasks} tasks</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded">
              <div className="bg-blue-500 h-3 rounded" style={{ width: `${p.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add New Project</button>
    </div>
  );
}
