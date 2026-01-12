import { http, createConfig } from 'wagmi';
import { base } from 'wagmi/chains';
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors';

export const config = createConfig({
  chains: [base],
  connectors: [
    injected({
      target: 'metaMask', // Specify target to avoid auto-detection issues in preview
    }),
    walletConnect({
      projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Get from https://cloud.walletconnect.com
      metadata: {
        name: 'Agent Prediction Markets',
        description: 'AI-Powered Predictions on Base',
        url: 'https://agent-prediction-markets-base.vercel.app',
        icons: ['https://agent-prediction-markets-base.vercel.app/images/icon-1024.png']
      },
      showQrModal: true,
    }),
    coinbaseWallet({
      appName: 'Agent Prediction Markets',
      appLogoUrl: 'https://agent-prediction-markets-base.vercel.app/images/icon-1024.png',
      preference: 'smartWalletOnly', // Optimize for smart wallet in Base environment
    }),
  ],
  ssr: false,
  transports: {
    [base.id]: http(),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
