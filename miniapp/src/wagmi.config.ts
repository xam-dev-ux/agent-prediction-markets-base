import { http, createConfig } from 'wagmi';
import { base } from 'wagmi/chains';
import { farcasterMiniApp } from '@farcaster/miniapp-wagmi-connector';
import { Attribution } from 'ox/erc8021';

const DATA_SUFFIX = Attribution.toDataSuffix({
  codes: ['bc_mnix1gua'],
});

export const config = createConfig({
  chains: [base],
  connectors: [
    farcasterMiniApp(), // Farcaster Mini App connector - handles authorization properly
  ],
  ssr: false,
  transports: {
    [base.id]: http(),
  },
  dataSuffix: DATA_SUFFIX,
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
