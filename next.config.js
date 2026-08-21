import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  webpack: (config) => {
    // Beberapa file .ts di project ini meng-import modul lain dengan akhiran
    // ".js" walaupun file aslinya ".ts" (gaya penulisan ESM/TypeScript yang valid).
    // Webpack secara default tidak otomatis me-resolve ".js" -> ".ts",
    // sehingga menyebabkan error "Module not found" saat `next build --webpack`.
    // extensionAlias di bawah ini membuat Webpack mencoba ".ts"/".tsx" lebih dulu
    // setiap kali menemukan import yang berakhiran ".js"/".jsx".
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.jsx': ['.tsx', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
      '.cjs': ['.cts', '.cjs'],
    };
    return config;
  },
};

export default nextConfig;
