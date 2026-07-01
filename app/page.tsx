'use client';

import { useState } from 'react';
import { Wallet, Settings, BarChart3, LogOut } from 'lucide-react';
import SuperBLogo from '@/components/SuperBLogo';
import SuperBChat from '@/components/SuperBChat';

export default function SuperBApp() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('0.00');
  const [showSettings, setShowSettings] = useState(false);
  const [autoTrading, setAutoTrading] = useState(false);

  const handleConnectWallet = async () => {
    // Simulated wallet connection
    // In production, use wagmi or ethers.js
    setConnected(true);
    setWalletAddress('0x1234...5678');
    setBalance('150.00');
  };

  const handleDisconnect = () => {
    setConnected(false);
    setWalletAddress('');
    setBalance('0.00');
  };

  if (!connected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-950 text-white flex items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-md">
          {/* Logo */}
          <div className="flex justify-center">
            <SuperBLogo />
          </div>

          {/* Title */}
          <div>
            <h1 className="text-4xl font-black mb-2">super<span className="text-blue-400">B</span></h1>
            <p className="text-zinc-400 text-lg">Your AI Trading Assistant</p>
          </div>

          {/* Features */}
          <div className="space-y-3 text-sm text-zinc-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400">🤖</div>
              <span>Powered by Groq AI</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center text-green-400">⚡</div>
              <span>Autonomous Trading</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">💬</div>
              <span>Natural Chat Interface</span>
            </div>
          </div>

          {/* Connect Button */}
          <button
            onClick={handleConnectWallet}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
          >
            <Wallet className="w-6 h-6" />
            Connect Base Wallet
          </button>

          {/* Info */}
          <div className="text-xs text-zinc-500 space-y-2">
            <p>🧪 Testing on Base Sepolia Testnet</p>
            <p>Get testnet ETH from the faucet first</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-950 text-white p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <SuperBLogo />
            <div>
              <h1 className="text-2xl font-black">super<span className="text-blue-400">B</span></h1>
              <p className="text-xs text-zinc-400">AI Trading Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-all"
            >
              <Settings className="w-5 h-5 text-zinc-400" />
            </button>
            <button
              onClick={handleDisconnect}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-all"
            >
              <LogOut className="w-5 h-5 text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Connected Status & Balance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Wallet Info */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
            <p className="text-xs text-zinc-500 mb-1">Connected Wallet</p>
            <p className="font-mono text-sm text-green-400">{walletAddress}</p>
            <p className="text-xs text-zinc-500 mt-2">Base Sepolia Testnet</p>
          </div>

          {/* Balance */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
            <p className="text-xs text-zinc-500 mb-1">superB Balance</p>
            <p className="text-2xl font-bold text-blue-400">${balance}</p>
            <p className="text-xs text-zinc-500 mt-2">USDC</p>
          </div>

          {/* Status */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
            <p className="text-xs text-zinc-500 mb-1">Trading Status</p>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${autoTrading ? 'bg-green-500' : 'bg-zinc-600'}`} />
              <p className="font-semibold">{autoTrading ? 'Active' : 'Inactive'}</p>
            </div>
            <p className="text-xs text-zinc-500 mt-2">Auto-Trading</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <SuperBChat />
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Performance */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold">Performance</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-zinc-500">Total Trades</p>
                  <p className="text-2xl font-bold text-blue-400">0</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Daily P&L</p>
                  <p className="text-2xl font-bold text-green-400">+$0.00</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Win Rate</p>
                  <p className="text-2xl font-bold text-yellow-400">0%</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
              <h3 className="font-semibold mb-3">Active Positions</h3>
              <p className="text-sm text-zinc-400 text-center py-8">No active positions</p>
            </div>

            {/* Settings Panel */}
            {showSettings && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 space-y-4">
                <h3 className="font-semibold">Settings</h3>
                
                <div>
                  <label className="text-xs text-zinc-500 block mb-2">Auto-Trading</label>
                  <button
                    onClick={() => setAutoTrading(!autoTrading)}
                    className={`w-full py-2 rounded-lg font-semibold transition-all ${
                      autoTrading
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-zinc-800 hover:bg-zinc-700'
                    }`}
                  >
                    {autoTrading ? 'Turn OFF' : 'Turn ON'}
                  </button>
                </div>

                <div>
                  <label className="text-xs text-zinc-500 block mb-2">Max Trade Size</label>
                  <input
                    type="number"
                    defaultValue="100"
                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-500 block mb-2">Risk Level</label>
                  <select className="w-full bg-zinc-800 border border-zinc-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-blue-500">
                    <option>Low</option>
                    <option selected>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/20 rounded-2xl text-center text-xs text-blue-300">
          <p>💡 superB is learning and improving. Chat naturally to make trades.</p>
        </div>
      </div>
    </div>
  );
}
