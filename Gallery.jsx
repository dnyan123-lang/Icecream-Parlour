import './Gallery.css';

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop", title: "Fresh Strawberries" },
  { id: 2, src: "https://images.unsplash.com/photo-1558500662-811cce4011ce?w=600&auto=format&fit=crop", title: "Belgian Chocolate" },
  { id: 3, src: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?w=600&auto=format&fit=crop", title: "Classic Vanilla" },
  { id: 4, src: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop", title: "Coffee House" },
  { id: 5, src: "https://images.unsplash.com/photo-1501747315-124a0eaca060?w=600&auto=format&fit=crop", title: "Mango Sorbet" },
  { id: 6, src: "https://images.unsplash.com/photo-1570197781417-0a5237600537?w=600&auto=format&fit=crop", title: "Italian Gelato" },
  { id: 7, src: "https://images.unsplash.com/photo-1511381939415-e1f6e28254b0?w=600&auto=format&fit=crop", title: "Dark Truffle" },
  { id: 8, src: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&auto=format&fit=crop", title: "Mint Chip" },
  { id: 9, src: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop", title: "Tropical Mix" },
  { id: 10, src: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=600&auto=format&fit=crop", title: "Nutty Crunch" },
  { id: 11, src: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=600&auto=format&fit=crop", title: "Sugar-Free Options" },
  { id: 12, src: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=600&auto=format&fit=crop", title: "Made with Love" }
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>Sweet <span>Moments</span></h2>
        <p>A visual taste of our handcrafted creations.</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img src={image.src} alt={image.title} />
            <div className="gallery-overlay">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;