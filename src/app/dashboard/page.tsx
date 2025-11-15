// src/app/dashboard/page.tsx
"use client";

import { useUser } from '@clerk/nextjs';
import React from 'react'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold">
        Welcome back
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-gray-500 dark:text-gray-400">Tasks Due Today</p>
          <h2 className="text-xl font-semibold mt-2">5</h2>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-gray-500 dark:text-gray-400">Tasks Completed This Week</p>
          <h2 className="text-xl font-semibold mt-2">12</h2>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-gray-500 dark:text-gray-400">Active Projects</p>
          <h2 className="text-xl font-semibold mt-2">3</h2>
        </div>
      </div>

      {/* Mini List of Upcoming Tasks */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 className="font-semibold mb-3">Upcoming Tasks</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Design new landing page</span>
            <span className="text-gray-400 text-sm">Due: Today</span>
          </li>
          <li className="flex justify-between">
            <span>Fix login bug</span>
            <span className="text-gray-400 text-sm">Due: Tomorrow</span>
          </li>
          <li className="flex justify-between">
            <span>Review PR #42</span>
            <span className="text-gray-400 text-sm">Due: Today</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
