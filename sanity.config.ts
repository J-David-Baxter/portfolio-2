import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: 'g2wi3s2l',
    dataset: 'production',
    title: 'My Portfolio Website',
    apiVersion: '2023-05-23',
    basePath: '/admin',
    plugins: [deskTool()]
});

export default config;