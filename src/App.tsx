import React, { useState } from 'react';
import { Dumbbell, Users, Trophy, Search, Heart, Share2, MessageCircle } from 'lucide-react';

interface Stream {
  id: string;
  username: string;
  title: string;
  viewers: number;
  category: string;
  thumbnail: string;
  isLive: boolean;
}

function App() {
  const [activeTab, setActiveTab] = useState<'trending' | 'following'>('trending');
  
  const streams: Stream[] = [
    {
      id: '1',
      username: 'FitnessWarrior',
      title: '90 Days Transformation - Day 45 💪',
      viewers: 234,
      category: 'Weight Training',
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      isLive: true,
    },
    {
      id: '2',
      username: 'YogaWithSarah',
      title: 'Morning Yoga Flow - Join Me!',
      viewers: 156,
      category: 'Yoga',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      isLive: true,
    },
    {
      id: '3',
      username: 'RunnerJohn',
      title: 'Marathon Training - Week 8',
      viewers: 89,
      category: 'Cardio',
      thumbnail: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
      isLive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold">FitStream</span>
            </div>
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search streams..."
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Go Live
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-600"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-400">Active Streamers</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-400">Goals Achieved</p>
                <p className="text-2xl font-bold">45.2K</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-400">Total Workouts</p>
                <p className="text-2xl font-bold">89.7K</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('trending')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'trending'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Trending
          </button>
          <button
            onClick={() => setActiveTab('following')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'following'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Following
          </button>
        </div>

        {/* Streams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream) => (
            <div key={stream.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-48 object-cover"
                />
                {stream.isLive && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-lg text-sm">
                    LIVE
                  </span>
                )}
                <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-lg text-sm">
                  {stream.viewers} watching
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{stream.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{stream.username}</p>
                <p className="text-purple-400 text-sm mb-4">{stream.category}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-white">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <MessageCircle className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <button className="bg-purple-600 px-4 py-1 rounded-lg hover:bg-purple-700 transition">
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;