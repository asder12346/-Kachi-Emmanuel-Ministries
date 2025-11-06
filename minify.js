// Simple CSS Minifier Function
function minifyCSS(css) {
  // Remove comments
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove whitespace
  css = css.replace(/\s+/g, ' ');
  
  // Remove spaces before and after brackets
  css = css.replace(/\s*{\s*/g, '{');
  css = css.replace(/\s*}\s*/g, '}');
  
  // Remove spaces before and after colons and semicolons
  css = css.replace(/\s*:\s*/g, ':');
  css = css.replace(/\s*;\s*/g, ';');
  
  // Remove trailing semicolons
  css = css.replace(/;\}/g, '}');
  
  // Remove unnecessary semicolons
  css = css.replace(/;;/g, ';');
  
  // Remove leading and trailing whitespace
  css = css.trim();
  
  return css;
}

// Simple HTML Minifier Function
function minifyHTML(html) {
  // Remove comments (except conditional comments)
  html = html.replace(/<!--(?![\[\>])[\s\S]*?-->/g, '');
  
  // Remove whitespace between tags
  html = html.replace(/>\s+</g, '><');
  
  // Remove leading and trailing whitespace
  html = html.trim();
  
  return html;
}

// Usage example:
// const minifiedCSS = minifyCSS(originalCSS);
// const minifiedHTML = minifyHTML(originalHTML);

console.log('Minification functions ready to use!');
