import Image from 'next/image';

// Define a reusable ImageTile component
const ImageTile = ({ src, alt }) => (
    <div>
        <Image
        src={src}
        width={100}
        height={100}
        className=" mx-auto"
        alt={alt}
        />
    </div>
);

// Use the ImageTile component within your grid
const ImageLanguages = () => {
  const images = [
    { src: '/languages/gitlab.png', alt: 'gitlab' },
    { src: '/languages/locust.png', alt: 'locust' },
    { src: '/languages/lodash.png', alt: 'lodash' },
    { src: '/languages/laravel.png', alt: 'laravel' },
    { src: '/languages/sass.png', alt: 'sass' },
    { src: '/languages/javascript.png', alt: 'javascript' },
    { src: '/languages/php.png', alt: 'php' },
    { src: '/languages/python.png', alt: 'python' },
  ];

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 m-8 text-center">
      {images.map((image) => (
        <ImageTile key={image.alt} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default ImageLanguages;
