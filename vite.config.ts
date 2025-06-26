import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    coverage: {
      enabled: true,
      reportsDirectory: './coverage',
      reporter: ['lcov'],
      include: ['src/*'],
    },
  },
});
