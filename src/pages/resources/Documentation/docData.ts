import { DocSection } from './types';

export const documentationSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: `Welcome to our documentation. This guide will help you get started with our AI solutions.
    
    ## Prerequisites
    - Node.js v16 or higher
    - API key (obtain from dashboard)
    - Basic understanding of machine learning concepts
    
    ## Quick Start
    1. Install our SDK using npm:
       \`\`\`bash
       npm install @ai-company/sdk
       \`\`\`
    2. Initialize the client:
       \`\`\`javascript
       const client = new AIClient({ apiKey: 'your-api-key' });
       \`\`\`
    3. Make your first API call:
       \`\`\`javascript
       const response = await client.predict({ input: 'Your text here' });
       \`\`\``,
    subsections: [
      {
        id: 'installation',
        title: 'Installation Guide',
        content: 'Detailed steps for installing and configuring our SDK...',
      },
      {
        id: 'authentication',
        title: 'Authentication',
        content:
          'Learn about our authentication methods and security best practices...',
      },
    ],
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    content: `Comprehensive API documentation for integrating our services.
    
    ## Core Endpoints
    
    ### Prediction API
    \`POST /v1/predict\`
    
    Make predictions using our trained models.
    
    ### Training API
    \`POST /v1/train\`
    
    Train custom models on your data.
    
    ### Management API
    \`GET /v1/models\`
    
    List and manage your deployed models.`,
    subsections: [
      {
        id: 'endpoints',
        title: 'Endpoints',
        content: 'Complete list of API endpoints and their specifications...',
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        content:
          'Guide to API error codes and recommended error handling strategies...',
      },
    ],
  },
  {
    id: 'tutorials',
    title: 'Tutorials',
    content: `Step-by-step guides for common implementation scenarios.
    
    ## Available Tutorials
    
    1. Building a Chatbot
    2. Image Classification System
    3. Sentiment Analysis Pipeline
    4. Custom Model Training
    5. Real-time Prediction Integration`,
    subsections: [
      {
        id: 'chatbot-tutorial',
        title: 'Building a Chatbot',
        content: 'Learn how to build a conversational AI using our platform...',
      },
      {
        id: 'image-classification',
        title: 'Image Classification',
        content: 'Step-by-step guide to implementing image classification...',
      },
    ],
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    content: `Recommended practices for optimal use of our AI systems.
    
    ## Performance Optimization
    - Batch predictions for better throughput
    - Implement proper caching strategies
    - Use appropriate model sizes
    
    ## Security Guidelines
    - Rotate API keys regularly
    - Implement rate limiting
    - Monitor API usage
    
    ## Data Management
    - Data preprocessing best practices
    - Storage and retention policies
    - Data privacy compliance`,
    subsections: [
      {
        id: 'performance',
        title: 'Performance Tips',
        content: 'Detailed guidance on optimizing performance and scaling...',
      },
      {
        id: 'security',
        title: 'Security Guidelines',
        content: 'Comprehensive security best practices and recommendations...',
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    content: `Common issues and their solutions.
    
    ## Common Issues
    
    ### Authentication Errors
    - Invalid API key format
    - Expired credentials
    - Missing permissions
    
    ### API Response Errors
    - Rate limiting
    - Invalid input format
    - Server timeouts
    
    ### Model-specific Issues
    - Input preprocessing errors
    - Version compatibility
    - Resource constraints`,
    subsections: [
      {
        id: 'common-errors',
        title: 'Common Errors',
        content: 'Solutions to frequently encountered errors and issues...',
      },
      {
        id: 'debugging',
        title: 'Debugging Guide',
        content: 'Tools and techniques for debugging API integrations...',
      },
    ],
  },
  {
    id: 'examples',
    title: 'Code Examples',
    content: `Ready-to-use code examples in various programming languages.
    
    ## Python Examples
    \`\`\`python
    import ai_company_sdk
    
    client = ai_company_sdk.Client('your-api-key')
    response = client.predict(text='Sample input')
    print(response.prediction)
    \`\`\`
    
    ## JavaScript Examples
    \`\`\`javascript
    const { AIClient } = require('@ai-company/sdk');
    
    const client = new AIClient({ apiKey: 'your-api-key' });
    const response = await client.predict({ input: 'Sample input' });
    console.log(response.prediction);
    \`\`\``,
    subsections: [
      {
        id: 'python-examples',
        title: 'Python Examples',
        content: 'Collection of Python code examples and snippets...',
      },
      {
        id: 'javascript-examples',
        title: 'JavaScript Examples',
        content: 'Collection of JavaScript code examples and snippets...',
      },
    ],
  },
];
