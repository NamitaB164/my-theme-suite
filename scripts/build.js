const fs = require('fs');
const path = require('path');

// Color palette (you'll create this file)
const palette = {
  // Simplified version for now - expand with your full palette
  dark: {
    bg: '#0f172a',
    bgSecondary: '#1e293b',
    bgTertiary: '#334155',
    fg: '#f1f5f9',
    fgSecondary: '#cbd5e1',
    fgTertiary: '#94a3b8',
    accent: '#0ea5e9'
  },
  light: {
    bg: '#ffffff',
    bgSecondary: '#f8fafc',
    bgTertiary: '#f1f5f9',
    fg: '#0f172a',
    fgSecondary: '#334155',
    fgTertiary: '#64748b',
    accent: '#0ea5e9'
  },
  highContrast: {
    bg: '#000000',
    bgSecondary: '#1a1a1a',
    bgTertiary: '#333333',
    fg: '#ffffff',
    fgSecondary: '#e6e6e6',
    fgTertiary: '#cccccc',
    accent: '#00d4ff'
  }
};

// Comprehensive syntax highlighting rules
const getSyntaxHighlighting = (variant) => {
  const isLight = variant === 'light';
  const isHighContrast = variant === 'highContrast';
  
  return [
    // Keywords and Storage
    {
      "name": "Keywords",
      "scope": [
        "keyword",
        "storage.type",
        "storage.modifier",
        "keyword.control",
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.other.using",
        "keyword.other.import"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ff6eb3" : "#8b5cf6",
        "fontStyle": "bold"
      }
    },
    
    // Strings and Templates
    {
      "name": "Strings",
      "scope": [
        "string",
        "string.quoted",
        "string.template",
        "string.interpolated",
        "string.regexp"
      ],
      "settings": {
        "foreground": isHighContrast ? "#4dff88" : "#10b981"
      }
    },
    
    // Comments
    {
      "name": "Comments",
      "scope": [
        "comment",
        "punctuation.definition.comment"
      ],
      "settings": {
        "foreground": isLight ? "#6b7280" : (isHighContrast ? "#999999" : "#6b7280"),
        "fontStyle": "italic"
      }
    },
    
    // Functions and Methods
    {
      "name": "Functions",
      "scope": [
        "entity.name.function",
        "meta.function-call",
        "variable.function",
        "support.function",
        "keyword.other.special-method"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ffcc66" : "#f59e0b"
      }
    },
    
    // Variables and Parameters
    {
      "name": "Variables",
      "scope": [
        "variable",
        "variable.parameter",
        "variable.other",
        "variable.readwrite"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ff8080" : "#ef4444"
      }
    },
    
    // Types and Classes
    {
      "name": "Types and Classes",
      "scope": [
        "entity.name.type",
        "entity.name.class",
        "support.type",
        "storage.type.built-in",
        "entity.other.inherited-class"
      ],
      "settings": {
        "foreground": isHighContrast ? "#66ccff" : "#06b6d4",
        "fontStyle": "bold"
      }
    },
    
    // Constants and Enums
    {
      "name": "Constants",
      "scope": [
        "constant",
        "variable.other.constant",
        "support.constant",
        "constant.numeric",
        "constant.language"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ff99cc" : "#ec4899"
      }
    },
    
    // Numbers
    {
      "name": "Numbers",
      "scope": [
        "constant.numeric"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ffaa44" : "#f97316"
      }
    },
    
    // Operators
    {
      "name": "Operators",
      "scope": [
        "keyword.operator",
        "punctuation.separator",
        "punctuation.terminator"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ff6eb3" : "#8b5cf6"
      }
    },
    
    // Punctuation
    {
      "name": "Punctuation",
      "scope": [
        "punctuation",
        "meta.brace",
        "meta.bracket",
        "meta.delimiter"
      ],
      "settings": {
        "foreground": isLight ? "#9ca3af" : (isHighContrast ? "#cccccc" : "#9ca3af")
      }
    },
    
    // JavaScript/TypeScript specific
    {
      "name": "JavaScript Variables",
      "scope": [
        "variable.other.readwrite.js",
        "variable.other.object.js",
        "variable.other.property.js"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ff8080" : "#ef4444"
      }
    },
    
    // Python specific
    {
      "name": "Python Self",
      "scope": [
        "variable.language.special.self.python"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ff99cc" : "#ec4899",
        "fontStyle": "italic"
      }
    },
    
    // Java specific
    {
      "name": "Java Annotations",
      "scope": [
        "storage.type.annotation.java"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ffcc66" : "#f59e0b"
      }
    },
    
    // HTML/XML Tags
    {
      "name": "HTML Tags",
      "scope": [
        "entity.name.tag",
        "punctuation.definition.tag"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ff6eb3" : "#8b5cf6"
      }
    },
    
    // HTML Attributes
    {
      "name": "HTML Attributes",
      "scope": [
        "entity.other.attribute-name"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ffcc66" : "#f59e0b"
      }
    },
    
    // CSS Properties
    {
      "name": "CSS Properties",
      "scope": [
        "support.type.property-name.css"
      ],
      "settings": {
        "foreground": isHighContrast ? "#66ccff" : "#06b6d4"
      }
    },
    
    // CSS Values
    {
      "name": "CSS Values",
      "scope": [
        "support.constant.property-value.css",
        "constant.numeric.css"
      ],
      "settings": {
        "foreground": isHighContrast ? "#4dff88" : "#10b981"
      }
    },
    
    // JSON Keys
    {
      "name": "JSON Keys",
      "scope": [
        "support.type.property-name.json"
      ],
      "settings": {
        "foreground": isHighContrast ? "#66ccff" : "#06b6d4"
      }
    },
    
    // Markdown Headings
    {
      "name": "Markdown Headings",
      "scope": [
        "markup.heading",
        "entity.name.section.markdown"
      ],
      "settings": {
        "foreground": isHighContrast ? "#ff6eb3" : "#8b5cf6",
        "fontStyle": "bold"
      }
    },
    
    // Markdown Bold
    {
      "name": "Markdown Bold",
      "scope": [
        "markup.bold"
      ],
      "settings": {
        "fontStyle": "bold"
      }
    },
    
    // Markdown Italic
    {
      "name": "Markdown Italic",
      "scope": [
        "markup.italic"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    
    // Markdown Code
    {
      "name": "Markdown Code",
      "scope": [
        "markup.inline.raw",
        "markup.fenced_code"
      ],
      "settings": {
        "foreground": isHighContrast ? "#4dff88" : "#10b981"
      }
    },
    
    // YAML Keys
    {
      "name": "YAML Keys",
      "scope": [
        "entity.name.tag.yaml"
      ],
      "settings": {
        "foreground": isHighContrast ? "#66ccff" : "#06b6d4"
      }
    }
  ];
};

// Generate theme configuration
function generateTheme(variant) {
  const colors = palette[variant];
  const isLight = variant === 'light';
  const isHighContrast = variant === 'highContrast';
  
  const themeName = `Workspace ${variant.charAt(0).toUpperCase() + variant.slice(1).replace(/([A-Z])/g, ' $1')}`;
  
  return {
    name: themeName,
    type: isLight ? 'light' : 'dark',
    colors: {
      // Editor Colors
      "editor.background": colors.bg,
      "editor.foreground": colors.fg,
      "editorCursor.foreground": colors.accent,
      "editor.lineHighlightBackground": `${colors.bgSecondary}40`,
      "editor.selectionBackground": colors.bgTertiary,
      "editor.selectionHighlightBackground": `${colors.bgSecondary}80`,
      "editor.wordHighlightBackground": `${colors.bgSecondary}80`,
      "editor.wordHighlightStrongBackground": `${colors.bgTertiary}80`,
      "editor.findMatchBackground": `${colors.accent}80`,
      "editor.findMatchHighlightBackground": `${colors.accent}40`,
      
      // Sidebar
      "sideBar.background": colors.bgSecondary,
      "sideBar.foreground": colors.fgSecondary,
      "sideBar.border": colors.bgTertiary,
      "sideBarTitle.foreground": colors.fg,
      "sideBarSectionHeader.background": colors.bgTertiary,
      "sideBarSectionHeader.foreground": colors.fg,
      
      // Activity Bar
      "activityBar.background": colors.bgSecondary,
      "activityBar.foreground": colors.fgSecondary,
      "activityBar.activeBorder": colors.accent,
      "activityBar.activeBackground": colors.bgTertiary,
      "activityBarBadge.background": colors.accent,
      "activityBarBadge.foreground": isLight ? "#ffffff" : "#ffffff",
      
      // Status Bar
      "statusBar.background": colors.accent,
      "statusBar.foreground": "#ffffff",
      "statusBar.noFolderBackground": colors.bgTertiary,
      "statusBar.debuggingBackground": "#ef4444",
      
      // Terminal
      "terminal.background": colors.bg,
      "terminal.foreground": colors.fg,
      "terminal.ansiBlack": colors.bgSecondary,
      "terminal.ansiBlue": "#3b82f6",
      "terminal.ansiBrightBlue": "#60a5fa",
      "terminal.ansiBrightCyan": "#22d3ee",
      "terminal.ansiBrightGreen": "#4ade80",
      "terminal.ansiBrightMagenta": "#c084fc",
      "terminal.ansiBrightRed": "#f87171",
      "terminal.ansiBrightWhite": colors.fg,
      "terminal.ansiBrightYellow": "#fbbf24",
      "terminal.ansiCyan": "#06b6d4",
      "terminal.ansiGreen": "#10b981",
      "terminal.ansiMagenta": "#8b5cf6",
      "terminal.ansiRed": "#ef4444",
      "terminal.ansiWhite": colors.fgSecondary,
      "terminal.ansiYellow": "#f59e0b",
      
      // Add more UI colors as needed...
    },
    tokenColors: getSyntaxHighlighting(variant)
  };
}

// Build all theme variants
function buildThemes() {
  const variants = ['dark', 'light', 'highContrast'];
  
  // Ensure themes directory exists
  const themesDir = path.join(__dirname, '..', 'themes');
  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir, { recursive: true });
  }
  
  variants.forEach(variant => {
    const theme = generateTheme(variant);
    const filename = `workspace-${variant.replace(/([A-Z])/g, '-$1').toLowerCase()}-theme.json`;
    const filepath = path.join(themesDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(theme, null, 2));
    console.log(`✅ Generated ${filename}`);
  });
  
  console.log('\n🎉 All theme variants generated successfully!');
  console.log('\nNext steps:');
  console.log('1. Press F5 to test your themes in VS Code');
  console.log('2. Create icon theme (run: npm run build:icons)');
  console.log('3. Add screenshots to assets/ folder');
  console.log('4. Update README.md');
  console.log('5. Package and publish (run: npm run package)');
}

if (require.main === module) {
  buildThemes();
}

module.exports = { generateTheme, buildThemes };