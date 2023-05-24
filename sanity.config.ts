import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: 'g2wi3s2l',
    dataset: 'production',
    title: 'David Baxter',
    apiVersion: '2023-05-23',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;