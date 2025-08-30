import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                coder: 'coder.html',
                company: 'company.html'
            }
        }
    }
});