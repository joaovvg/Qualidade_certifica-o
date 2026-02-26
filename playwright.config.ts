import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  // ✅ Cria uma pasta única baseada no nome do teste e navegador
  // O Playwright já cria subpastas automaticamente aqui para cada execução
  outputDir: 'test-results/', 

  fullyParallel: true,
  // ... (restante das suas configurações de CI)

  reporter: 'html',

  use: {
    headless: false,
    actionTimeout: 10000,
    navigationTimeout: 15000,

    launchOptions: {
      slowMo: 2000, 
    },

    // ✅ Alteração importante: 'on' garante que o vídeo seja gerado sempre
    // e colocado na pasta específica do teste.
    video: 'on',      

    // ✅ Garante o print na pasta do teste em caso de erro
    screenshot: 'on', 

    // ✅ O Trace é essencial para debug profissional
    trace: 'retain-on-failure', 
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // ... outros devices
  ],
});