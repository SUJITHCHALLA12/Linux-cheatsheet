/**
 * Vercel Speed Insights initialization
 * This file imports and initializes the @vercel/speed-insights package
 */
import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
// The function will automatically detect the environment and start tracking
injectSpeedInsights({
  debug: true, // Enable debug logging in development
  // You can add additional configuration here if needed:
  // sampleRate: 1, // 1 = 100% of events are sent (default)
  // beforeSend: (event) => event, // Modify events before sending
});
