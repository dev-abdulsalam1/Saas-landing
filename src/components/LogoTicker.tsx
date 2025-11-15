import { FaGoogle } from "react-icons/fa";
import { SiSlack, SiShopify, SiZoom, SiAtlassian, SiTesla, SiMeta } from "react-icons/si";

export default function LogoTicker  ()  {
  const logos = [
    FaGoogle,
    SiSlack,
    SiShopify,
    SiZoom,
    SiAtlassian,
    SiMeta,
    SiTesla,
  ];

  return (
    <div className="relative w-full bg-gray-100 py-6 overflow-hidden">
      <div className="flex items-center animate-marquee">
        {logos.concat(logos).map((Icon, index) => (
          <Icon
            key={index}
            className="h-12 w-12 text-gray-600 mx-8 flex-shrink-0"
          />
        ))}
        {logos.concat(logos).map((Icon, index) => (
          <Icon
            key={index}
            className="h-12 w-12 text-gray-600 mx-8 flex-shrink-0"
          />
        ))}
      </div>

      {/* Gradient fade left/right for style */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none" />

      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
      
    </div>
  );
};
