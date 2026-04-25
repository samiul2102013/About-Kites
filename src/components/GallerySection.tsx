import { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export const GallerySection = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    { id: 1, src: '/images/upscaled/event-sore-photo-1.jpg', alt: 'Event setup photo 1' },
    { id: 2, src: '/images/upscaled/event-store-photo-2.jpg', alt: 'Event setup photo 2' },
    { id: 3, src: '/images/upscaled/organized-event.jpg', alt: 'Organized event' },
    { id: 4, src: '/images/upscaled/organized-evetn-1.jpg', alt: 'Organized event 2' },
    { id: 5, src: '/images/upscaled/picture-of-kite-1.jpg', alt: 'Kite display 1' },
    { id: 6, src: '/images/upscaled/picture-of-kite-2.jpg', alt: 'Kite display 2' },
  ];

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section
        id="gallery"
        className="relative py-20 md:py-32 bg-gradient-to-br from-sky-50 via-white to-sky-100 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">
              Client <span className="gradient-text">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300"
                style={{ transitionDelay: `${index * 60}ms` }}
                onClick={() => handleImageClick(image)}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-sky-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className={`absolute inset-0 bg-gradient-to-t from-sky-900/80 via-sky-900/20 to-transparent transition-opacity duration-300 ${
                    hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full transform transition-all duration-300 scale-0 group-hover:scale-100">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300 translate-y-full group-hover:translate-y-0">
                      <p className="text-white font-semibold">{image.alt}</p>
                    </div>
                  </div>

                  <div className={`absolute inset-0 border-2 border-sky-400 rounded-2xl transition-opacity duration-300 ${
                    hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in-up"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-10"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <p className="text-white text-xl font-semibold">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};