
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/code-life/',
  component: ComponentCreator('/code-life/'),
  exact: true,
  
},
{
  path: '/code-life/blog',
  component: ComponentCreator('/code-life/blog'),
  exact: true,
  
},
{
  path: '/code-life/blog/hello-world',
  component: ComponentCreator('/code-life/blog/hello-world'),
  exact: true,
  
},
{
  path: '/code-life/blog/hola',
  component: ComponentCreator('/code-life/blog/hola'),
  exact: true,
  
},
{
  path: '/code-life/blog/tags',
  component: ComponentCreator('/code-life/blog/tags'),
  exact: true,
  
},
{
  path: '/code-life/blog/tags/docusaurus',
  component: ComponentCreator('/code-life/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/code-life/blog/tags/facebook',
  component: ComponentCreator('/code-life/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/code-life/blog/tags/hello',
  component: ComponentCreator('/code-life/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/code-life/blog/tags/hola',
  component: ComponentCreator('/code-life/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/code-life/blog/welcome',
  component: ComponentCreator('/code-life/blog/welcome'),
  exact: true,
  
},
{
  path: '/code-life/docs/:route',
  component: ComponentCreator('/code-life/docs/:route'),
  
  routes: [
{
  path: '/code-life/docs/doc1',
  component: ComponentCreator('/code-life/docs/doc1'),
  exact: true,
  
},
{
  path: '/code-life/docs/doc2',
  component: ComponentCreator('/code-life/docs/doc2'),
  exact: true,
  
},
{
  path: '/code-life/docs/doc3',
  component: ComponentCreator('/code-life/docs/doc3'),
  exact: true,
  
},
{
  path: '/code-life/docs/mdx',
  component: ComponentCreator('/code-life/docs/mdx'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
