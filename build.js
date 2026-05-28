const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const distDir = path.join(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Assets to copy directly (images, etc.)
const binaryFiles = [
    'profile.jpg.jpg',
    'qr_code.jpg'
];

// Text files that need environment variable replacement
const textFiles = [
    'index.html',
    'login.html',
    'style.css',
    'script.js',
    'firebase_config.js',
    'firebase_sync.js'
];

const viteApiUrl = process.env.VITE_API_URL || 'https://emitra-sathi-backend.onrender.com';
console.log(`Building frontend... Injecting VITE_API_URL: "${viteApiUrl}"`);

// Process text files
textFiles.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const distPath = path.join(distDir, file);

    if (fs.existsSync(srcPath)) {
        let content = fs.readFileSync(srcPath, 'utf8');

        // Replace process.env.VITE_API_URL and __VITE_API_URL__ placeholder
        content = content.replace(/process\.env\.VITE_API_URL/g, `"${viteApiUrl}"`);
        content = content.replace(/__VITE_API_URL__/g, viteApiUrl);

        fs.writeFileSync(distPath, content, 'utf8');
        console.log(`✓ Optimized & Copied: ${file}`);
    } else {
        console.warn(`⚠ Text file not found: ${file}`);
    }
});

// Process binary files
binaryFiles.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const distPath = path.join(distDir, file);

    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, distPath);
        console.log(`✓ Copied binary asset: ${file}`);
    } else {
        console.warn(`⚠ Binary file not found: ${file}`);
    }
});

console.log('\n==================================================');
console.log('       FRONTEND BUILD COMPLETED SUCCESSFULLY       ');
console.log('==================================================\n');
