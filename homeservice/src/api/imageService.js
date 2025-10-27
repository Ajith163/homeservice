
import staticImages from '../data/staticImages.json';

const getRandomImageUrl = (width = 600, height = 400, seed = 1) => {
  const totalImages = staticImages.images.length;
  const index = seed % totalImages;
  return staticImages.images[Math.max(0, index)];
};

const getMultipleRandomImages = (count = 10, width = 600, height = 400) => {
  return Array.from({ length: count }, (_, i) => {
    const index = (i + 100) % staticImages.images.length;
    return staticImages.images[index];
  });
};

const getImageByCategory = (category = 'general', width = 600, height = 400) => {
  const categoryOffsets = { nature: 0, business: 5, technology: 10, people: 15, general: 0 };
  const offset = categoryOffsets[category] || 0;
  const index = (offset + Math.floor(Math.random() * 5)) % staticImages.images.length;
  return staticImages.images[index];
};

export { getRandomImageUrl, getMultipleRandomImages, getImageByCategory };
export default getRandomImageUrl;
