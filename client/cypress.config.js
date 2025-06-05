import { defineConfig } from 'cypress';
import { createHero, deleteHero } from './cypress/support/data.js';

export default defineConfig({
  projectId: 'nd8nd1',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        createHero,
        deleteHero,
      });
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
