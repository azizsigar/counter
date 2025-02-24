const image = document.getElementById("dynamicImage");
let currentImageIndex = 1; // Başlangıç resmi 1.jpg
const totalImages = 13; // Toplam resim sayısı

window.addEventListener("scroll", () => {
  // calculate scroll percentage (0 to 1)
  const scrollY = window.scrollY;
  // full screen page height
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // Scroll yüzdesini hesapla (0 ile 1 arasında)
  let scrollPercent = scrollY / maxScroll;

  // 1 ile 13 arasında bir resim numarası belirle
  let newImageIndex = Math.round(scrollPercent * (totalImages - 1)) + 1;

  // Aynı resimse değiştirme
  if (newImageIndex !== currentImageIndex) {
    currentImageIndex = newImageIndex;
    image.src = `img/${currentImageIndex}.jpg`;
  }
});
