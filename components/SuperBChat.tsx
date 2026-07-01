'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Zap, TrendingUp, AlertCircle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'superb';
  content: string;
  timestamp: Date;
  isTradeSignal?: boolean;
}

export default function SuperBChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'superb',
      content: 'Hey! I\'m superB, your AI trading assistant. 💪 Ask me anything about trading, market analysis, or strategies. I can execute trades autonomously on Base!',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      // Simulate AI response
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const responses = [
        '📊 Market Analysis: BRETT is showing strong momentum. Recommendation: BUY $50 with 78% confidence.',
        '💡 Based on current data, I recommend taking profits on your positions. Consider selling half.',
        '⚡ DEGEN/USDC pair shows bullish divergence. This could be a good entry point.',
        '🎯 Risk/reward ratio is favorable. I\'m setting up a trade with 2:1 potential return.',
        '📈 Your portfolio is performing well. Maintaining current positions is optimal.',
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const superBMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'superb',
        content: randomResponse,
        timestamp: new Date(),
        isTradeSignal: true,
      };

      setMessages((prev) => [...prev, superBMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: 'superb',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-gradient-to-r from-zinc-900 to-blue-900/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">AI</span>
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm">superB</h3>
            <p className="text-xs text-green-400">● Online</p>
          </div>
        </div>
        <Zap className="w-4 h-4 text-yellow-500" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-2xl ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-zinc-800 text-zinc-100 rounded-bl-none'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>

              {/* Trade Signal */}
              {message.isTradeSignal && message.role === 'superb' && (
                <div className="mt-2 pt-2 border-t border-zinc-700 flex gap-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs py-1 rounded transition-all">
                    ✓ Execute
                  </button>
                  <button className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white text-xs py-1 rounded transition-all">
                    ✗ Skip
                  </button>
                </div>
              )}

              <p className="text-xs text-zinc-500 mt-2 opacity-70">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-zinc-800 text-zinc-100 px-4 py-3 rounded-2xl rounded-bl-none">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-zinc-600 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-zinc-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-zinc-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 border-t border-zinc-800 flex gap-3 bg-zinc-900"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask superB anything..."
          className="flex-1 bg-zinc-800 border border-zinc-700 text-white px-4 py-2 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-sm"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !inputValue.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-700 text-white px-4 py-2 rounded-xl transition-all flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Info Banner */}
      <div className="p-3 bg-blue-900/20 border-t border-blue-500/20 flex items-start gap-2 text-xs text-blue-300">
        <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />
        <p>
          superB learns from your trades. Chat naturally to get AI-powered recommendations.
        </p>
      </div>
    </div>
  );
}