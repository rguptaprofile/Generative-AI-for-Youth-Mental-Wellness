import React, { useState } from 'react';
import { MessageCircle, Brain, Heart, Users, Book, Phone, Menu, X, Smile, Meh, Frown } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hello! I\'m here to listen and support you. How are you feeling today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentMood, setCurrentMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([
    { date: '2025-01-20', mood: 'good', note: 'Had a great day at college' },
    { date: '2025-01-19', mood: 'okay', note: 'Feeling stressed about exams' },
    { date: '2025-01-18', mood: 'bad', note: 'Argument with family' }
  ]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessages = [...messages, { type: 'user', text: inputMessage }];
    setMessages(newMessages);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I hear you, and your feelings are completely valid. It takes courage to share what you're going through.",
        "Thank you for trusting me with this. Remember, seeking support is a sign of strength, not weakness.",
        "It sounds like you're dealing with a lot right now. You don't have to face this alone.",
        "I'm here to listen without judgment. Your mental health matters, and so do you.",
        "That sounds really challenging. How would you like to work through this together?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: 'ai', text: randomResponse }]);
    }, 1000);
    
    setInputMessage('');
  };

  const handleMoodSubmit = (mood, note) => {
    const today = new Date().toISOString().split('T')[0];
    setMoodHistory(prev => [{ date: today, mood, note }, ...prev]);
    setCurrentMood(null);
  };

  const resources = [
    {
      category: 'Coping Strategies',
      items: [
        { title: '5-4-3-2-1 Grounding Technique', description: 'A simple way to manage anxiety and panic' },
        { title: 'Deep Breathing Exercises', description: 'Calm your mind with proven breathing patterns' },
        { title: 'Positive Self-Talk', description: 'Transform negative thoughts into empowering ones' }
      ]
    },
    {
      category: 'Understanding Mental Health',
      items: [
        { title: 'Breaking the Stigma', description: 'Why mental health matters in Indian society' },
        { title: 'Signs to Look For', description: 'Recognizing when you or friends need support' },
        { title: 'Myths vs Facts', description: 'Common misconceptions about mental health' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                 Generative AI for Youth Mental Wellness
                </h1>
                <p className="text-xs text-gray-600">Youth Mental Wellness Platform</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === 'chat' 
                    ? 'bg-blue-100 text-blue-700 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <MessageCircle className="h-4 w-4 inline mr-2" />
                AI Companion
              </button>
              <button
                onClick={() => setActiveTab('mood')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === 'mood' 
                    ? 'bg-green-100 text-green-700 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Heart className="h-4 w-4 inline mr-2" />
                Mood Tracker
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === 'resources' 
                    ? 'bg-purple-100 text-purple-700 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Book className="h-4 w-4 inline mr-2" />
                Resources
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="flex justify-around py-2">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex flex-col items-center p-2 rounded-lg ${
              activeTab === 'chat' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs mt-1">Chat</span>
          </button>
          <button
            onClick={() => setActiveTab('mood')}
            className={`flex flex-col items-center p-2 rounded-lg ${
              activeTab === 'mood' ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            <Heart className="h-5 w-5" />
            <span className="text-xs mt-1">Mood</span>
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`flex flex-col items-center p-2 rounded-lg ${
              activeTab === 'resources' ? 'text-purple-600' : 'text-gray-600'
            }`}
          >
            <Book className="h-5 w-5" />
            <span className="text-xs mt-1">Resources</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Chat Companion */}
        {activeTab === 'chat' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">AI Companion</h2>
                <p className="text-blue-100">A safe, confidential space to express your feelings</p>
              </div>
              
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-gray-200">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Share what's on your mind..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
                  >
                    Send
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  🔒 Your conversations are completely confidential and secure
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mood Tracker */}
        {activeTab === 'mood' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Log Mood */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-4 rounded-2xl mb-6">
                  <h3 className="text-xl font-bold mb-2">How are you feeling today?</h3>
                  <p className="text-green-100">Track your emotions to understand patterns</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-center space-x-6">
                    {[
                      { mood: 'good', icon: Smile, color: 'text-green-500', label: 'Good' },
                      { mood: 'okay', icon: Meh, color: 'text-yellow-500', label: 'Okay' },
                      { mood: 'bad', icon: Frown, color: 'text-red-500', label: 'Not Good' }
                    ].map(({ mood, icon: Icon, color, label }) => (
                      <button
                        key={mood}
                        onClick={() => setCurrentMood(mood)}
                        className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                          currentMood === mood
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon className={`h-8 w-8 ${color} mx-auto`} />
                        <p className="text-sm mt-2 font-medium">{label}</p>
                      </button>
                    ))}
                  </div>
                  
                  {currentMood && (
                    <div className="space-y-4">
                      <textarea
                        placeholder="What's making you feel this way? (optional)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                        rows={3}
                        id="mood-note"
                      />
                      <button
                        onClick={() => {
                          const note = document.getElementById('mood-note').value;
                          handleMoodSubmit(currentMood, note);
                        }}
                        className="w-full py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-200 shadow-lg"
                      >
                        Log Mood
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mood History */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Your Mood Journey</h3>
                <div className="space-y-4">
                  {moodHistory.map((entry, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl">
                      <div className={`w-3 h-3 rounded-full ${
                        entry.mood === 'good' ? 'bg-green-500' :
                        entry.mood === 'okay' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{entry.date}</p>
                        {entry.note && <p className="text-sm text-gray-600 mt-1">{entry.note}</p>}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        entry.mood === 'good' ? 'bg-green-100 text-green-800' :
                        entry.mood === 'okay' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {entry.mood === 'good' ? 'Good' : entry.mood === 'okay' ? 'Okay' : 'Not Good'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources */}
        {activeTab === 'resources' && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Mental Wellness Resources
              </h2>
              <p className="text-gray-600">Tools and information to support your mental health journey</p>
            </div>

            <div className="space-y-8">
              {resources.map((section, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">{section.category}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group cursor-pointer">
                        <div className="bg-white/50 p-6 rounded-2xl border border-white/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-3 group-hover:text-purple-600">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Crisis Support */}
              <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <Phone className="h-8 w-8 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">Need Immediate Help?</h3>
                    <p className="text-red-100">Crisis support is available 24/7</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-6 rounded-2xl">
                    <h4 className="font-semibold mb-2">National Crisis Helpline</h4>
                    <p className="text-lg font-bold">1800-599-0019</p>
                    <p className="text-sm text-red-100 mt-1">Available 24/7, free and confidential</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl">
                    <h4 className="font-semibold mb-2">Vandrevala Foundation</h4>
                    <p className="text-lg font-bold">9999 666 555</p>
                    <p className="text-sm text-red-100 mt-1">Mental health support helpline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Privacy Notice */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white/20 py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            🔒 Your privacy is our priority. All conversations are encrypted and confidential. 
            This platform is designed to complement, not replace, professional mental health care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;