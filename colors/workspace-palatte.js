// Workspace Theme Color Palette
// Professional, modern colors designed for productivity

const workspacePalette = {
  // Primary Brand Colors - Professional blues and grays
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe', 
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Main brand color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  
  // Neutral grays for UI elements
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617'
  },
  
  // Semantic Colors for feedback
  success: {
    DEFAULT: '#10b981',
    light: '#34d399',
    dark: '#059669'
  },
  warning: {
    DEFAULT: '#f59e0b',
    light: '#fbbf24',
    dark: '#d97706'
  },
  error: {
    DEFAULT: '#ef4444',
    light: '#f87171',
    dark: '#dc2626'
  },
  info: {
    DEFAULT: '#3b82f6',
    light: '#60a5fa',
    dark: '#2563eb'
  },
  
  // Syntax highlighting colors - carefully chosen for readability
  syntax: {
    keyword: '#8b5cf6',      // Purple - keywords, storage
    string: '#10b981',       // Green - strings, templates
    comment: '#6b7280',      // Gray - comments
    function: '#f59e0b',     // Orange - functions, methods
    variable: '#ef4444',     // Red - variables
    type: '#06b6d4',         // Cyan - types, classes
    constant: '#ec4899',     // Pink - constants, enums
    operator: '#8b5cf6',     // Purple - operators
    punctuation: '#9ca3af',  // Light gray - punctuation
    number: '#f97316',       // Orange - numbers
    boolean: '#ec4899',      // Pink - booleans
    property: '#06b6d4',     // Cyan - object properties
    tag: '#8b5cf6',          // Purple - HTML/XML tags
    attribute: '#f59e0b'     // Orange - HTML attributes
  },
  
  // Theme-specific color mappings
  themes: {
    dark: {
      // Backgrounds
      bg: '#0f172a',           // Main background
      bgSecondary: '#1e293b',  // Sidebar, panels
      bgTertiary: '#334155',   // Hover states, selections
      bgQuaternary: '#475569', // Borders, dividers
      
      // Foregrounds
      fg: '#f1f5f9',           // Primary text
      fgSecondary: '#cbd5e1',  // Secondary text
      fgTertiary: '#94a3b8',   // Muted text
      fgQuaternary: '#64748b', // Disabled text
      
      // Accents
      accent: '#0ea5e9',       // Primary accent
      accentHover: '#0284c7',  // Accent hover
      accentActive: '#0369a1'  // Accent active
    },
    
    light: {
      // Backgrounds
      bg: '#ffffff',           // Main background
      bgSecondary: '#f8fafc',  // Sidebar, panels
      bgTertiary: '#f1f5f9',   // Hover states, selections
      bgQuaternary: '#e2e8f0', // Borders, dividers
      
      // Foregrounds
      fg: '#0f172a',           // Primary text
      fgSecondary: '#334155',  // Secondary text
      fgTertiary: '#64748b',   // Muted text
      fgQuaternary: '#94a3b8', // Disabled text
      
      // Accents
      accent: '#0ea5e9',       // Primary accent
      accentHover: '#0284c7',  // Accent hover
      accentActive: '#0369a1'  // Accent active
    },
    
    highContrast: {
      // Backgrounds
      bg: '#000000',           // Main background
      bgSecondary: '#1a1a1a',  // Sidebar, panels
      bgTertiary: '#333333',   // Hover states, selections
      bgQuaternary: '#4d4d4d', // Borders, dividers
      
      // Foregrounds
      fg: '#ffffff',           // Primary text
      fgSecondary: '#e6e6e6',  // Secondary text
      fgTertiary: '#cccccc',   // Muted text
      fgQuaternary: '#b3b3b3', // Disabled text
      
      // Accents
      accent: '#00d4ff',       // High contrast blue
      accentHover: '#0099cc',  // Accent hover
      accentActive: '#007399'  // Accent active
    }
  }
};

module.exports = workspacePalette;