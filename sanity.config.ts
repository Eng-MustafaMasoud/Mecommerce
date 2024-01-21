/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { schemaTypes } from '@/sanity/schemas'
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import StudioHeader from './components/studio/StudioHeader'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  name: "MCOMMERCE_Shopping",
  title: "MCOMMERCE online shopping",
  // Add and edit the content schema in the './sanity/schema' folder
  schema:{types:schemaTypes},
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  studio:{
    components:{
      navbar:StudioHeader
    }
  }
})
