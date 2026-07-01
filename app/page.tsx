'use client';

import { useState } from 'react';
import { Wallet, Settings, LogOut } from 'lucide-react';
import SuperBLogo from '@/components/SuperBLogo';
import SuperBChat from '@/components/SuperBChat';

export default function SuperBApp() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('0.00');
  const [showSettings, setShowSettings] = useState(false);

  const handleConnectWallet = async () => {
    setConnected(true);
    setWalletAddress('0x1234...5678');
    setBalance('150.00');
  };

  const handleDisconnect = () => {
    setConnected(false);
    setWalletAddress('');
    setBalance('0.00');
    setShowSettings(false);
  };

  if (!connected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-950 text-white flex items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-sm">
          <div className="flex justify-center">
            <SuperBLogo />
          </div>

          <div>
            <h1 className="text-4xl font-black mb-2">
              super<span className="text-blue-400">B</span>
            </h1>
            <p className="text-zinc-400 text-lg">Your AI Trading Assistant</p>
          </div>

          <div className="space-y-3 text-sm text-zinc-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                🤖
              </div>
              <span>Powered by Groq AI</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center text-green-400 font-bold">
                ⚡
              </div>
              <span>Autonomous Trading</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 font-bold">
                💬
              </div>
              <span>Natural Chat</span>
            </div>
          </div>

          <button
            onClick={handleConnectWallet}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            <Wallet className="w-6 h-6" />
            Connect Base Wallet
          </button>

          <div className="text-xs text-zinc-500 space-y-1">
            <p>🧪 Base Sepolia Testnet</p>
            <p>Get testnet ETH from faucet first</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-950 text-white p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <SuperBLogo />
            <div>
              <h1 className="text-2xl font-black">
                super<span className="text-blue-400">B</span>
              </h1>
              <p className="text-xs text-zinc-400">AI Trading Bot</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-all"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={handleDisconnect}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-all"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
            <p className="text-xs text-zinc-500 mb-1">Wallet</p>
            <p className="font-mono text-sm text-green-400 truncate">{walletAddress}</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
            <p className="text-xs text-zinc-500 mb-1">Balance</p>
            <p className="text-2xl font-bold text-blue-400">${balance}</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
            <p className="text-xs text-zinc-500 mb-1">Status</p>
            <p className="font-semibold">🟢 Ready</p>
          </div>
        </div>

        {/* Chat Section - Full Width */}
        <div className="mb-6">
          <div className="h-[500px] md:h-[600px]">
            <SuperBChat />
          </div>
        </div>

        {/* Performance & Positions - Below Chat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Performance */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <h3 className="font-bold text-sm mb-4">Performance</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-zinc-500">Total Trades</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500">Daily P&L</p>
                <p className="text-2xl font-bold text-green-400">+$0.00</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500">Win Rate</p>
                <p className="text-2xl font-bold">-</p>
              </div>
            </div>
          </div>

          {/* Positions */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <h3 className="font-bold text-sm mb-4">Active Positions</h3>
            <p className="text-xs text-zinc-400 text-center py-8">No active trades yet</p>
          </div>
        </div>

        {/* Settings Modal */}
        {showSettings && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-sm w-full space-y-4">
              <h2 className="font-bold text-lg">Settings</h2>
              
              <div>
                <label className="text-xs text-zinc-500 block mb-2">Risk Level</label>
                <select className="w-full bg-zinc-800 border border-zinc-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-blue-500">
                  <option>Low (2% per trade)</option>
                  <option selected>Medium (5% per trade)</option>
                  <option>High (10% per trade)</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-zinc-500 block mb-2">Max Trade Size (USDC)</label>
                <input
                  type="number"
                  defaultValue="100"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-500 block mb-2">Auto-Trading</label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Enable automatic trades</span>
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-lg transition-all"
                >
                  Close
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-zinc-500">
          <p>superB v1.0 • Base Sepolia • No real money</p>
        </div>
      </div>
    </div>
  );
}
