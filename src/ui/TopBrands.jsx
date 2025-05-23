import "./TopBrands.css";

const brands = [
  {
    name: "Samsung",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Microsoft",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "LG",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/LG_logo_%282014%29.svg",
  },
  {
    name: "Sony",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
];

const TopBrands = () => {
  return (
    <div className="brands-section">
      <div className="brands-header">
        <h2>Top brands</h2>
      </div>
      <div className="brands-list">
        {brands.map((brand, index) => (
          <div className="brand-logo" key={index}>
            <img src={brand.image} alt={brand.name} title={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
