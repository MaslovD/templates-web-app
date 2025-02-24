/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_USE_MOCK: string
    // Add other env variables here
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
