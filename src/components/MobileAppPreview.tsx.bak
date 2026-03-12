"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  MessageSquare, 
  Bell, 
  Settings, 
  User, 
  TrendingUp, 
  FileText, 
  Calendar, 
  Search,
  Home,
  BarChart3,
  Plus,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Send,
  Camera,
  Mic,
  Paperclip
} from 'lucide-react';

interface Screen {
  id: string;
  name: string;
  description: string;
  component: React.ReactNode;
}

interface ChatMessage {
  id: number;
  sender: 'user' | 'ai';
  message: string;
  time: string;
  avatar?: string;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'message' | 'alert' | 'update';
  read: boolean;
}

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  status: 'active' | 'inactive' | 'pending';
  policies: number;
  lastContact: string;
}

const mockChatMessages: ChatMessage[] = [
  { id: 1, sender: 'user', message: "I need help with my auto insurance quote", time: "2:34 PM" },
  { id: 2, sender: 'ai', message: "I'd be happy to help you with that! Can you tell me what type of vehicle you're looking to insure?", time: "2:35 PM" },
  { id: 3, sender: 'user', message: "2022 Honda Civic, I'm looking for full coverage", time: "2:36 PM" },
  { id: 4, sender: 'ai', message: "Perfect! I can get you a quote right away. I'll need your ZIP code and driving history. Let me pull up our quote form.", time: "2:37 PM" },
  { id: 5, sender: 'user', message: "Sounds great! My ZIP is 12345", time: "2:38 PM" }
];

const mockNotifications: Notification[] = [
  { id: 1, title: "New Client Message", message: "Sarah Johnson sent a message about her policy renewal", time: "5 min ago", type: "message", read: false },
  { id: 2, title: "Quote Request", message: "Auto insurance quote ready for John Davis", time: "12 min ago", type: "alert", read: false },
  { id: 3, title: "Policy Renewal", message: "3 policies due for renewal this week", time: "1 hour ago", type: "update", read: true },
  { id: 4, title: "Commission Update", message: "Monthly commission report is available", time: "2 hours ago", type: "update", read: true }
];

const mockClients: Client[] = [
  { id: 1, name: "Sarah Johnson", email: "sarah.j@email.com", phone: "(555) 123-4567", avatar: "SJ", status: "active", policies: 3, lastContact: "2 days ago" },
  { id: 2, name: "Mike Chen", email: "m.chen@business.com", phone: "(555) 234-5678", avatar: "MC", status: "active", policies: 1, lastContact: "5 days ago" },
  { id: 3, name: "Lisa Rodriguez", email: "lisa.r@company.org", phone: "(555) 345-6789", avatar: "LR", status: "pending", policies: 0, lastContact: "1 week ago" },
  { id: 4, name: "David Park", email: "d.park@firm.net", phone: "(555) 456-7890", avatar: "DP", status: "inactive", policies: 2, lastContact: "3 weeks ago" }
];

export default function MobileAppPreview() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');

  const HomeScreen = () => (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Status Bar */}
      <div className="flex items-center justify-between text-xs font-medium mb-6">
        <span>9:41</span>
        <span>NexomateAI Mobile</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
          <span>100%</span>
        </div>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Good morning, Alex!</h1>
        <p className="text-gray-600">Here's your agency overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-blue-600">47</div>
          <div className="text-sm text-gray-600">Active Clients</div>
          <div className="text-xs text-green-600">+5 this week</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-green-600">$12.3k</div>
          <div className="text-sm text-gray-600">This Month</div>
          <div className="text-xs text-green-600">+18% vs last</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-orange-600">8</div>
          <div className="text-sm text-gray-600">Pending Tasks</div>
          <div className="text-xs text-gray-500">2 urgent</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-bold text-purple-600">94%</div>
          <div className="text-sm text-gray-600">AI Automation</div>
          <div className="text-xs text-green-600">+12% efficiency</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">New chat message</p>
              <p className="text-xs text-gray-500">Sarah Johnson - 2 min ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Quote generated</p>
              <p className="text-xs text-gray-500">Auto insurance - 15 min ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ChatScreen = () => (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">AI</span>
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-gray-900">NexomateAI Assistant</h2>
          <p className="text-xs text-green-600">Online • Responding instantly</p>
        </div>
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {mockChatMessages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs rounded-2xl px-4 py-3 ${
              msg.sender === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-900 shadow-sm'
            }`}>
              <p className="text-sm">{msg.message}</p>
              <p className={`text-xs mt-1 ${
                msg.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
              }`}>{msg.time}</p>
            </div>
          </div>
        ))}
        
        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-600">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="flex-1 bg-gray-100 rounded-full flex items-center px-4 py-2">
            <input 
              type="text" 
              placeholder="Type your message..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none"
            />
            <button className="ml-2 text-gray-600">
              <Mic className="w-4 h-4" />
            </button>
          </div>
          <button className="p-2 bg-blue-600 rounded-full text-white">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const ClientsScreen = () => (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-900">Clients</h1>
          <button className="p-2 bg-blue-600 rounded-lg text-white">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search clients..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Client List */}
      <div className="p-4 space-y-3">
        {mockClients.map((client) => (
          <div key={client.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">{client.avatar}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{client.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    client.status === 'active' ? 'bg-green-100 text-green-600' :
                    client.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {client.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-gray-500">{client.policies} policies</span>
                  <span className="text-sm text-gray-500">Last: {client.lastContact}</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <button className="flex items-center gap-1 text-blue-600">
                    <Phone className="w-3 h-3" />
                    <span className="text-xs">Call</span>
                  </button>
                  <button className="flex items-center gap-1 text-blue-600">
                    <Mail className="w-3 h-3" />
                    <span className="text-xs">Email</span>
                  </button>
                  <button className="flex items-center gap-1 text-blue-600">
                    <MessageSquare className="w-3 h-3" />
                    <span className="text-xs">Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DashboardScreen = () => (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-600">Your performance overview</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">Revenue Trend</h3>
          <div className="h-32 bg-gradient-to-t from-blue-100 to-blue-50 rounded-lg flex items-end justify-between p-3">
            {[65, 80, 45, 90, 75, 95, 85].map((height, index) => (
              <div 
                key={index}
                className="w-6 bg-blue-600 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-900">Conversion</span>
            </div>
            <div className="text-2xl font-bold text-green-600">34.2%</div>
            <div className="text-xs text-gray-500">+4.7% vs last month</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">Response</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">2.3min</div>
            <div className="text-xs text-gray-500">-67% improvement</div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">Recent Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Top Performer</p>
                <p className="text-xs text-gray-500">Highest sales this month</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">100% Automation</p>
                <p className="text-xs text-gray-500">All quotes now automated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const NotificationsScreen = () => (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Notifications</h1>
          <button className="text-sm text-blue-600 font-medium">Mark all read</button>
        </div>
      </div>

      {/* Notifications */}
      <div className="p-4 space-y-2">
        {mockNotifications.map((notification) => (
          <div key={notification.id} className={`bg-white rounded-xl p-4 shadow-sm ${!notification.read ? 'border-l-4 border-blue-600' : ''}`}>
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                notification.type === 'message' ? 'bg-blue-100' :
                notification.type === 'alert' ? 'bg-orange-100' :
                'bg-green-100'
              }`}>
                {notification.type === 'message' && <MessageSquare className="w-4 h-4 text-blue-600" />}
                {notification.type === 'alert' && <Bell className="w-4 h-4 text-orange-600" />}
                {notification.type === 'update' && <TrendingUp className="w-4 h-4 text-green-600" />}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">{notification.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
              </div>
              {!notification.read && (
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const screens: Screen[] = [
    {
      id: 'home',
      name: 'Dashboard',
      description: 'Main dashboard with key metrics and recent activity',
      component: <HomeScreen />
    },
    {
      id: 'chat',
      name: 'AI Chat',
      description: 'Real-time AI assistance for you and your clients',
      component: <ChatScreen />
    },
    {
      id: 'clients',
      name: 'Clients',
      description: 'Comprehensive client management and communication',
      component: <ClientsScreen />
    },
    {
      id: 'analytics',
      name: 'Analytics',
      description: 'Performance metrics and business insights',
      component: <DashboardScreen />
    },
    {
      id: 'notifications',
      name: 'Notifications',
      description: 'Stay updated with important alerts and messages',
      component: <NotificationsScreen />
    }
  ];

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <section id="mobile-preview" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4 text-text-primary">
            Mobile App Experience
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Take your insurance agency with you anywhere. Manage clients, respond to inquiries, and track performance on the go.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-8">
              <div className="relative mx-auto w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Phone Frame */}
                <div className="w-full h-full bg-black rounded-[2.5rem] relative overflow-hidden">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentScreen}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        {screens[currentScreen].component}
                      </motion.div>
                    </AnimatePresence>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
                      <div className="flex items-center justify-around">
                        <button 
                          onClick={() => setCurrentScreen(0)}
                          className={`p-3 rounded-lg ${currentScreen === 0 ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                        >
                          <Home className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => setCurrentScreen(1)}
                          className={`p-3 rounded-lg relative ${currentScreen === 1 ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                        >
                          <MessageSquare className="w-5 h-5" />
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                        </button>
                        <button 
                          onClick={() => setCurrentScreen(2)}
                          className={`p-3 rounded-lg ${currentScreen === 2 ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                        >
                          <User className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => setCurrentScreen(3)}
                          className={`p-3 rounded-lg ${currentScreen === 3 ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                        >
                          <BarChart3 className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => setCurrentScreen(4)}
                          className={`p-3 rounded-lg relative ${currentScreen === 4 ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                        >
                          <Bell className="w-5 h-5" />
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
                  <button
                    onClick={prevScreen}
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextScreen}
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Screen Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Current Screen Info */}
            <div className="card-light rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">{screens[currentScreen].name}</h3>
                  <p className="text-text-secondary">{screens[currentScreen].description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-secondary">Real-time synchronization with desktop</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-secondary">Offline functionality for critical features</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-secondary">Push notifications for urgent matters</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-secondary">Biometric authentication and security</span>
                </div>
              </div>
            </div>

            {/* Screen Navigation */}
            <div className="card-light rounded-2xl p-6">
              <h4 className="font-semibold text-text-primary mb-4">Explore All Screens</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {screens.map((screen, index) => (
                  <button
                    key={screen.id}
                    onClick={() => setCurrentScreen(index)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      currentScreen === index
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-medium text-text-primary">{screen.name}</div>
                    <div className="text-sm text-text-muted mt-1">{screen.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="card-light rounded-2xl p-6">
              <h4 className="font-semibold text-text-primary mb-4">Mobile-First Features</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-text-secondary">Instant client messaging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-text-secondary">Smart notifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-text-secondary">Document scanning</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-text-secondary">Location-based services</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mic className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-text-secondary">Voice commands</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm text-text-secondary">Appointment scheduling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-flex gap-4">
                <button className="btn-primary px-8 py-3 rounded-xl font-medium">
                  Request Mobile Demo
                </button>
                <button className="btn-secondary px-8 py-3 rounded-xl font-medium">
                  Download App Guide
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}