// src/app/dashboard/ProgressOverview.tsx
export default function ProgressOverview() {
  const tasksPerDay = [3, 5, 2, 6, 4, 7, 5]; // last 7 days
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const longestStreak = 5;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Weekly Summary</h1>
      <p className="text-gray-500">Tasks completed this week: {tasksPerDay.reduce((a,b)=>a+b,0)}</p>

      {/* Simple Bar Chart */}
      <div className="grid grid-cols-7 gap-2 mt-4 items-end h-40">
        {tasksPerDay.map((count, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-blue-500 w-6 rounded-t" style={{ height: `${count*10}px` }}></div>
            <span className="text-xs mt-1">{days[i]}</span>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-2 mt-4">
        <p>Longest streak: {longestStreak} days</p>
        <p>Most productive day: Thursday</p>
      </div>
    </div>
  );
}
