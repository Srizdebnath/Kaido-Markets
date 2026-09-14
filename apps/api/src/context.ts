import type { ICache } from '@kaido-markets/cache';
import type { ApiConfig } from '@kaido-markets/config';
import type { Database } from '@kaido-markets/database';
import type { IntelligenceEngine } from '@kaido-markets/intelligence-engine';
import type { X402PaymentService } from '@kaido-markets/payments';
import type { ApiProviderRegistry } from '@kaido-markets/providers';
import type { McpSessionBudgetStore } from './services/mcp-session-budget.js';
import type { RateLimiterService } from './services/rate-limiter.js';

/**
 * Composition root passed into every route/middleware factory. Nothing in
 * routes/ or middleware/ reaches for a global singleton — everything is
 * constructor/parameter injected via this context, which keeps the whole
 * app trivially testable with fakes (see test/helpers/build-test-context.ts).
 */
export interface AppContext {
  config: ApiConfig;
  db: Database;
  cache: ICache;
  providerRegistry: ApiProviderRegistry;
  intelligenceEngine: IntelligenceEngine;
  paymentService: X402PaymentService;
  rateLimiter: RateLimiterService;
  mcpSessionBudgets: McpSessionBudgetStore;
}
