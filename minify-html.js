// HTML Minifier Helper
// This script helps you minify HTML files for production

// Simple HTML Minifier Function
function minifyHTML(html) {
  // Remove comments (except conditional comments)
  html = html.replace(/<!--(?![\[\>])[\s\S]*?-->/g, '');
  
  // Remove whitespace between tags
  html = html.replace(/>\s+</g, '><');
  
  // Minify inline JavaScript
  html = html.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function(match, script) {
    return match.replace(script, minifyJS(script));
  });
  
  // Minify inline CSS
  html = html.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, function(match, style) {
    return match.replace(style, minifyCSS(style));
  });
  
  // Remove leading and trailing whitespace
  html = html.trim();
  
  return html;
}

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

// Simple JavaScript Minifier Function
function minifyJS(js) {
  // Remove comments (both single-line and multi-line)
  js = js.replace(/\/\/.*?(\r?\n|$)/g, '');
  js = js.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove whitespace
  js = js.replace(/\s+/g, ' ');
  
  // Remove spaces before and after certain characters
  js = js.replace(/\s*([=\+\-\*\/\(\)\{\}\[\]:;,])\s*/g, '$1');
  
  // Remove leading and trailing whitespace
  js = js.trim();
  
  return js;
}

// Usage Example
/*
const fs = require('fs');

// Read HTML file
fs.readFile('index.html', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  // Minify HTML
  const minified = minifyHTML(data);
  
  // Write minified HTML to new file
  fs.writeFile('index.min.html', minified, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('HTML minified successfully!');
  });
});
*/

console.log('HTML Minification functions ready to use!');
console.log('To minify an HTML file, use these functions in a Node.js script');
console.log('or copy and paste the HTML content into an online minifier tool.');
