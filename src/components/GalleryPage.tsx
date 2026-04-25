import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Maximize2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/upscaled/event-sore-photo-1.jpg', alt: 'Event store setup photo 1' },
  { id: 2, src: '/images/upscaled/event-store-photo-2.jpg', alt: 'Event store setup photo 2' },
  { id: 3, src: '/images/upscaled/organized-event.jpg', alt: 'Organized event view' },
  { id: 4, src: '/images/upscaled/organized-evetn-1.jpg', alt: 'Organized event view 2' },
  { id: 5, src: '/images/upscaled/picture-of-kite-1.jpg', alt: 'Kite showcase 1' },
  { id: 6, src: '/images/upscaled/picture-of-kite-2.jpg', alt: 'Kite showcase 2' },
  { id: 7, src: '/images/upscaled/image.jpg', alt: 'Client shared event image' },
  { id: 8, src: '/images/upscaled/logo.jpg', alt: 'About Kites logo image' },
];

export const GalleryPage = () => {
  const [selectedImageId, setSelectedImageId] = useState<number>(galleryImages[0].id);

  const selectedImage = useMemo(
    () => galleryImages.find((image) => image.id === selectedImageId) ?? galleryImages[0],
    [selectedImageId]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100">
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-600">About Kites</p>
            <h1 className="text-2xl font-bold text-sky-900">Gallery</h1>
          </div>
          <Button asChild variant="outline" className="border-sky-300 text-sky-800 hover:bg-sky-100">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <Dialog>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image) => (
              <DialogTrigger key={image.id} asChild>
                <button
                  type="button"
                  onClick={() => setSelectedImageId(image.id)}
                  className="group text-left"
                >
                  <Card className="overflow-hidden border-sky-200 bg-white/90 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <CardContent>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/65 via-sky-900/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="text-xs font-medium">View image</span>
                          <Maximize2 className="h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </button>
              </DialogTrigger>
            ))}
          </div>

          <DialogContent className="border-sky-200 bg-white p-3 sm:p-4">
            <DialogTitle className="text-sky-900">{selectedImage.alt}</DialogTitle>
            <DialogDescription className="sr-only">Image preview</DialogDescription>
            <div className="overflow-hidden rounded-md bg-sky-50">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[72vh] w-full object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};
