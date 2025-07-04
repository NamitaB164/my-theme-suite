const fs = require('fs');
const path = require('path');

// Import your color palette
const palette = {
  // Colors from your workspace theme
  primary: '#0ea5e9',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  purple: '#8b5cf6',
  cyan: '#06b6d4',
  pink: '#ec4899',
  orange: '#f97316',
  gray: '#6b7280',
  darkGray: '#374151',
  lightGray: '#9ca3af'
};

// Icon templates with consistent styling
const iconTemplates = {
  // Basic file icon
  file: (color = palette.gray) => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 1H3.5C2.67 1 2 1.67 2 2.5v11c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V5.5L9.5 1z" 
            fill="${color}" opacity="0.8"/>
      <path d="M9.5 1v4h4" stroke="${color}" stroke-width="1" fill="none"/>
    </svg>`,

  // Basic folder icon
  folder: (color = palette.primary) => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 3C1.22 3 1 3.22 1 3.5v9c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-8c0-.28-.22-.5-.5-.5H8L7 3H1.5z" 
            fill="${color}"/>
    </svg>`,

  // Open folder icon
  folderOpen: (color = palette.primary) => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 3C1.22 3 1 3.22 1 3.5v9c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-8c0-.28-.22-.5-.5-.5H8L7 3H1.5z" 
            fill="${color}" opacity="0.7"/>
      <path d="M2 5h12v7H2z" fill="${color}"/>
    </svg>`,

  // Language-specific templates
  javascript: () => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill="#F7DF1E"/>
      <text x="8" y="11" font-family="Arial, sans-serif" font-size="8" font-weight="bold" 
            text-anchor="middle" fill="#000">JS</text>
    </svg>`,

  typescript: () => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill="#3178C6"/>
      <text x="8" y="11" font-family="Arial, sans-serif" font-size="8" font-weight="bold" 
            text-anchor="middle" fill="#fff">TS</text>
    </svg>`,

  python: () => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill="#306998"/>
      <rect x="0" y="8" width="16" height="8" rx="2" fill="#FFD43B"/>
      <text x="8" y="11" font-family="Arial, sans-serif" font-size="7" font-weight="bold" 
            text-anchor="middle" fill="#306998">PY</text>
    </svg>`,

  java: () => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill="#ED8B00"/>
      <text x="8" y="11" font-family="Arial, sans-serif" font-size="7" font-weight="bold" 
            text-anchor="middle" fill="#fff">JAVA</text>
    </svg>`,

  html: () => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill="#E34C26"/>
      <text x="8" y="11" font-family="Arial, sans-serif" font-size="6" font-weight="bold" 
            text-anchor="middle" fill="#fff">HTML</text>
    </svg>`,

  css: () => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill="#1572B6"/>
      <text x="8" y="11" font-family="Arial, sans-serif" font-size="7" font-weight="bold" 
            text-anchor="middle" fill="#fff">CSS</text>
    </svg>`,

  json: () => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill="${palette.warning}"/>
      <text x="8" y="11" font-family="Arial, sans-serif" font-size="6" font-weight="bold" 
            text-anchor="middle" fill="#fff">JSON</text>
    </svg>`,

  markdown: () => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill="#083FA1"/>
      <text x="8" y="11" font-family="Arial, sans-serif" font-size="7" font-weight="bold" 
            text-anchor="middle" fill="#fff">MD</text>
    </svg>`,

  // Special files
  readme: () => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill="${palette.success}"/>
      <circle cx="8" cy="6" r="2" fill="#fff"/>
      <rect x="6" y="9" width="4" height="1" fill="#fff"/>
      <rect x="5" y="11" width="6" height="1" fill="#fff"/>
    </svg>`,

  package: () => `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill="${palette.purple}"/>
      <rect x="3" y="5" width="10" height="6" rx="1" fill="#fff" opacity="0.8"/>
      <rect x="4" y="6" width="8" height="1" fill="${palette.purple}"/>
      <rect x="4" y="8" width="8" height="1" fill="${palette.purple}"/>
    </svg>`
};

// Icon definitions - what icons to generate
const iconsToGenerate = {
  // Basic files and folders
  'files/file.svg': () => iconTemplates.file(),
  'folders/folder.svg': () => iconTemplates.folder(),
  'folders/folder-open.svg': () => iconTemplates.folderOpen(),
  'folders/folder-root.svg': () => iconTemplates.folder(palette.orange),
  'folders/folder-root-open.svg': () => iconTemplates.folderOpen(palette.orange),

  // Programming languages
  'languages/javascript.svg': iconTemplates.javascript,
  'languages/typescript.svg': iconTemplates.typescript,
  'languages/python.svg': iconTemplates.python,
  'languages/java.svg': iconTemplates.java,
  'languages/html.svg': iconTemplates.html,
  'languages/css.svg': iconTemplates.css,
  'languages/scss.svg': () => iconTemplates.css().replace('#1572B6', '#CF649A'),
  'languages/vue.svg': () => iconTemplates.file('#4FC08D'),
  'languages/react.svg': () => iconTemplates.file('#61DAFB'),
  'languages/angular.svg': () => iconTemplates.file('#DD0031'),
  'languages/rust.svg': () => iconTemplates.file('#CE422B'),
  'languages/go.svg': () => iconTemplates.file('#00ADD8'),
  'languages/php.svg': () => iconTemplates.file('#777BB4'),
  'languages/cpp.svg': () => iconTemplates.file('#00599C'),
  'languages/csharp.svg': () => iconTemplates.file('#239120'),
  'languages/ruby.svg': () => iconTemplates.file('#CC342D'),

  // Data files
  'files/json.svg': iconTemplates.json,
  'files/xml.svg': () => iconTemplates.file(palette.orange),
  'files/yaml.svg': () => iconTemplates.file(palette.cyan),
  'files/toml.svg': () => iconTemplates.file(palette.gray),
  'files/config.svg': () => iconTemplates.file(palette.darkGray),

  // Documentation
  'files/markdown.svg': iconTemplates.markdown,
  'files/readme.svg': iconTemplates.readme,
  'files/license.svg': () => iconTemplates.file(palette.lightGray),
  'files/changelog.svg': () => iconTemplates.file(palette.success),

  // Build files
  'files/package.svg': iconTemplates.package,
  'files/npm.svg': () => iconTemplates.file('#CB3837'),
  'files/yarn.svg': () => iconTemplates.file('#2C8EBB'),
  'files/docker.svg': () => iconTemplates.file('#2496ED'),
  'files/makefile.svg': () => iconTemplates.file(palette.darkGray),

  // Git files
  'files/git.svg': () => iconTemplates.file('#F05032'),
  'files/gitignore.svg': () => iconTemplates.file('#F05032'),

  // Special folders
  'folders/folder-src.svg': () => iconTemplates.folder('#4CAF50'),
  'folders/folder-dist.svg': () => iconTemplates.folder('#FF9800'),
  'folders/folder-node.svg': () => iconTemplates.folder('#8BC34A'),
  'folders/folder-assets.svg': () => iconTemplates.folder('#9C27B0'),
  'folders/folder-images.svg': () => iconTemplates.folder('#E91E63'),
  'folders/folder-docs.svg': () => iconTemplates.folder('#2196F3'),
  'folders/folder-test.svg': () => iconTemplates.folder('#FFC107'),
  'folders/folder-git.svg': () => iconTemplates.folder('#F05032'),
  'folders/folder-vscode.svg': () => iconTemplates.folder('#007ACC')
};

// Generate all icons
function generateIcons() {
  console.log('🎨 Generating icon theme...');

  // Create directories
  const iconsDir = path.join(__dirname, '..', 'icons');
  const svgDir = path.join(iconsDir, 'svg');
  
  ['files', 'folders', 'languages'].forEach(subdir => {
    const dir = path.join(svgDir, subdir);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Generate each icon
  let generated = 0;
  for (const [filePath, generator] of Object.entries(iconsToGenerate)) {
    const fullPath = path.join(svgDir, filePath);
    const svgContent = generator();
    
    fs.writeFileSync(fullPath, svgContent.trim());
    generated++;
    console.log(`✅ Generated ${filePath}`);
  }

  console.log(`\n🎉 Generated ${generated} icons successfully!`);
  console.log('\nNext steps:');
  console.log('1. Test your icon theme in VS Code');
  console.log('2. Customize colors and designs as needed');
  console.log('3. Add more language icons if required');
  console.log('4. Update package.json to include the icon theme');
}

if (require.main === module) {
  generateIcons();
}

module.exports = { generateIcons, iconTemplates, iconsToGenerate };