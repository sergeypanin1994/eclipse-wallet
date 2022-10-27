const EXPLORERS = {
  SOLANA: {
    SOLSCAN: {
      name: 'Solscan',
      url: 'https://solscan.io',
    },
    SOLANA_FM: {
      name: 'Solana FM',
      url: 'https://solana.fm',
    },
    SOLANA_EXPLORER: {
      name: 'Solana Explorer',
      url: 'https://explorer.solana.com',
    },
    SOLANA_BEACH: {
      name: 'Solana Beach',
      url: 'https://solanabeach.io',
    },
  },
  NEAR: {
    NEAR_EXPLORER: {
      name: 'Near Explorer',
      url: 'https://explorer.near.org',
    },
  },
};

const DEFAULT_EXPLORERS = {
  SOLANA: 'SOLSCAN',
  NEAR: 'NEAR_EXPLORER',
};

export { EXPLORERS, DEFAULT_EXPLORERS };