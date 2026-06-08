'use client';

import { useState } from 'react';
import { Wallet, TrendingUp, AlertTriangle, Settings } from 'lucide-react';

export default function SmartScalpAI() {
  const [connected, setConnected] = useState(false);
  const [usdcBalance, setUsdcBalance] = useState(5.23);
  const [riskLevel, setRiskLevel] = useState<'low' | 'medium' | 'high'>('medium');
  const [activePositions, setActivePositions] = useState<any[]>([]);
  const [selectedSignal, setSelectedSignal] = useState<any>(null);

  const mockSignals = [
    {
      token: "BRETT",
      action: "BUY",
      price: 0.085,
      confidence: 82,
      reason: "Strong momentum, good liquidity, no honeypot flags",
      potential: "+18%",
      size: 1.5
    },
    {
      token: "DEGEN",
      action: "SELL",
      price: 0.0124,
      confidence: 67,
      reason: "Profit target reached, minor resistance",
      potential: "+12%",
      size: 2.8
    }
  ];

  const handleConnect = () => {
    setConnected(true);
    alert("✅ Wallet connected (Base App simulation)");
  };

  const executeTrade = (signal: any) => {
    if (usdcBalance < 1) {
      alert("Not enough USDC. Minimum $1");
      return;
    }

    const tradeAmount = Math.max(1, signal.size);
    const newBalance = usdcBalance - tradeAmount * 0.8;

    const position = {
      ...signal,
      entryPrice: signal.price,
      amount: tradeAmount,
      timestamp: new Date().toLocaleTimeString()
    };

    setActivePositions([position, ...activePositions]);
    setUsdcBalance(Math.max(0.5, newBalance));

    // Simulate fee on profitable sells
    if (signal.action === "SELL") {
      const fee = (tradeAmount * 0.0075).toFixed(4);
      alert(`✅ Trade executed!\nFee collected: ${fee} USDC → 0xB5DC24ca30f2c9aD9C14415717222e56b98Ce9F3`);
    } else {
      alert(`✅ ${signal.action} order placed for ${tradeAmount} USDC of ${signal.token}`);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">SmartScalp AI</h1>
            <p className="text-zinc-400 text-sm">Base • USDC Scalper</p>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-sm">{connected ? 'Connected' : 'Disconnected'}</span>
          </div>
        </div>

        {/* Wallet Connect */}
        {!connected ? (
          <button
            onClick={handleConnect}
            className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 mb-6"
          >
            <Wallet className="w-5 h-5" />
            Connect Base Wallet
          </button>
        ) : (
          <div className="bg-zinc-900 rounded-2xl p-4 mb-6">
            <div className="flex justify-between">
              <div>
                <p className="text-zinc-400">USDC Balance</p>
                <p className="text-3xl font-mono">${usdcBalance.toFixed(2)}</p>
              </div>
              <button className="text-blue-400 text-sm">Refresh</button>
            </div>
          </div>
        )}

        {/* Risk Settings */}
        <div className="bg-zinc-900 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Settings className="w-5 h-5" />
            <p className="font-medium">Risk Level</p>
          </div>
          <div className="flex gap-2">
            {(['low', 'medium', 'high'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setRiskLevel(level)}
                className={`flex-1 py-2 rounded-xl text-sm capitalize transition-all ${
                  riskLevel === level 
                    ? 'bg-white text-black font-semibold' 
                    : 'bg-zinc-800 hover:bg-zinc-700'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* AI Signals */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            AI Trade Signals
          </h2>
          
          {mockSignals.map((signal, i) => (
            <div 
              key={i}
              onClick={() => setSelectedSignal(signal)}
              className="bg-zinc-900 rounded-2xl p-4 mb-3 cursor-pointer hover:bg-zinc-800 border border-zinc-800"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-mono font-bold">{signal.token}</span>
                    <span className={`px-3 py-0.5 rounded-full text-xs font-medium ${
                      signal.action === 'BUY' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {signal.action}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mt-1">{signal.reason}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-mono">+{signal.potential}</p>
                  <p className="text-xs text-zinc-500">Conf: {signal.confidence}%</p>
                </div>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); executeTrade(signal); }}
                className="mt-4 w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200"
              >
                {signal.action} NOW — ${signal.size} USDC
              </button>
            </div>
          ))}
        </div>

        {/* Active Positions */}
        {activePositions.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Active Positions</h2>
            {activePositions.map((pos, i) => (
              <div key={i} className="bg-zinc-900 rounded-2xl p-4 mb-3">
                <div className="flex justify-between">
                  <div>
                    <span className="font-mono">{pos.token}</span>
                    <span className="ml-2 text-xs text-zinc-500">{pos.timestamp}</span>
                  </div>
                  <div className="text-green-400 text-sm">Open</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center text-xs text-zinc-500 mt-8">
          0.75% fee on profitable sells • Test with $1+ USDC
        </div>
      </div>
    </div>
  );
}
