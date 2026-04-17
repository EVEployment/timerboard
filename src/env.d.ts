/// <reference types="@rsbuild/core/types" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // biome-ignore lint/complexity/noBannedTypes: reason
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly PUBLIC_TIMERS_API_URL?: string;
  readonly PUBLIC_TIMERS_SSE_URL?: string;
  readonly PUBLIC_DISABLE_PASTE_TIMERS?: string;
  readonly PUBLIC_TIMERS_POLL_MS?: string;
  readonly PUBLIC_TIMERS_POLL_INTERVAL_MS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
