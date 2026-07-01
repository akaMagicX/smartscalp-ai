# SmartScalp AI

AI Crypto Scalping Mini App for Base blockchain

## Features

- 🤖 AI-powered trade signals
- ⚡ Quick token scalping
- 💰 USDC balance tracking
- ⚙️ Risk level settings (Low, Medium, High)
- 📊 Active position tracking
- 🔐 Base wallet integration

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/akaMagicX/smartscalp-ai.git
cd smartscalp-ai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## How to Test

1. Connect your Base wallet
2. View AI trade signals
3. Set your risk level
4. Execute trades
5. Monitor active positions
6. Check USDC balance updates

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## License

MIT

## Author

akaMagicX
