import sharp from 'sharp';
import path from 'path';

const currentDir = process.cwd();
// Image 1: Sunglasses and car (great for about section)
const image1 = 'C:\\Users\\hadee\\.gemini\\antigravity\\brain\\17de3c25-052d-4400-a34c-fdd613a44584\\media__1774449009813.jpg';
// Image 2: Closer portrait shot (great for Hero/Pro section)
const image2 = 'C:\\Users\\hadee\\.gemini\\antigravity\\brain\\17de3c25-052d-4400-a34c-fdd613a44584\\media__1774449015263.jpg';

const publicImgsDir = path.join(currentDir, 'public', 'assets', 'imgs');

async function processImages() {
  console.log('🖼️ Starting image optimization with both new photos...');

  try {
    // 1. Process about.jpg using Image 1 (sunglasses/car)
    console.log('Processing About section image...');
    await sharp(image1)
      .resize({
        width: 800,
        height: 800,
        fit: sharp.fit.cover,
        position: 'top' // Focus on the upper body/face
      })
      .jpeg({ quality: 85 })
      .toFile(path.join(publicImgsDir, 'about.jpg'));
    console.log('✅ about.jpg updated successfully!');

    // 2. Process Pro.webp  using Image 2 (closer portrait)
    console.log('\nProcessing Hero section image (Pro.webp)...');
    await sharp(image2)
      .resize({
        width: 1000,
        height: 1000,
        fit: sharp.fit.contain,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({ quality: 90 })
      .toFile(path.join(publicImgsDir, 'Pro.webp'));
    console.log('✅ Pro.webp updated successfully!');

    // 3. Update Pro.png backup
    await sharp(image2)
      .resize({
        width: 1000,
        height: 1000,
        fit: sharp.fit.contain,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ quality: 90 })
      .toFile(path.join(publicImgsDir, 'Pro.png'));
    console.log('✅ Pro.png backup updated successfully!');

    console.log('\n✨ All images successfully resized and optimized!');
  } catch (err) {
    console.error('❌ Error processing images:', err);
  }
}

processImages();
