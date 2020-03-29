export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "My Site",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/doc1",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "golang",
          "label": "golang",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/Clear2/code-life",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/doc1"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 My Project, Inc. Built with Docusaurus."
    }
  },
  "title": "fe blog",
  "tagline": "The tagline of my site",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/code-life/",
  "favicon": "img/favicon.ico",
  "organizationName": "sunny",
  "projectName": "code-life",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/zjx/Documents/code-life/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/zjx/Documents/code-life/src/css/custom.css"
        }
      }
    ]
  ]
};