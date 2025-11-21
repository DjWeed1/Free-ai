import React from 'react';
import { BarChart, Users, Activity, Settings, CreditCard, Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
    const { user } = useAuth();

    const stats = [
        { label: 'Total Prompts', value: '1,234', change: '+12%', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: 'Active Users', value: '856', change: '+5%', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
        { label: 'API Usage', value: '45k', change: '+23%', icon: BarChart, color: 'text-green-600', bg: 'bg-green-100' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
                <div className="p-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Telefon KI
                    </h2>
                </div>
                <nav className="mt-6 px-4 space-y-2">
                    <a href="#" className="flex items-center px-4 py-3 text-gray-700 bg-gray-100 rounded-lg">
                        <Activity size={20} className="mr-3" />
                        Overview
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                        <Settings size={20} className="mr-3" />
                        Settings
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                        <CreditCard size={20} className="mr-3" />
                        Billing
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                        <Bell size={20} className="mr-3" />
                        Notifications
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.displayName || 'User'}!</h1>
                        <p className="text-gray-600">Here's what's happening with your AI tools today.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            src={user?.photoURL || 'https://via.placeholder.com/40'}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border border-gray-200"
                        />
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-lg ${stat.bg}`}>
                                    <stat.icon size={24} className={stat.color} />
                                </div>
                                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.label}</h3>
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Recent Activity Placeholder */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Generated new image with DALL-E 3</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">Completed</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
