import { Check } from "lucide-react";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 200 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export default function Pricing  ()  {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001E80] leading-relaxed">
          Pricing
        </h1>

        <p className="mt-4 text-[#010D3E] text-lg">
          Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative rounded-4xl shadow-lg p-6 flex flex-col transition transform 
                
        order ${tier.popular
                  ? "bg-gray-900 text-white border-4 border-white"
                  : tier.inverse
                  ? "bg-gray-900 text-white border-4 border-white"
                  : "bg-white text-gray-900 border-gray-200"
              }
              
              ${tier.title === "Free" ? "lg:scale-80" : tier.title === "Pro" ? "lg:scale-100" : "lg:scale-90"}
              ` }
            >
              {/* Popular badge */}
              {tier.popular && (
                <span className="absolute -top-[-12] right-[-40px] border-2 -translate-x-1/2  text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}

              <h2 className="text-2xl font-bold mb-4">{tier.title}</h2>
              <p className="text-2xl font-bold mb-6">
                {tier.monthlyPrice === 0 ? "$0/month" : `$${tier.monthlyPrice}/month`}
              </p>

               {/* Button */}
              <button
                className={`mt-auto py-3 px-5 rounded-lg font-semibold transition-colors duration-300 ${
                  tier.popular || tier.inverse
                    ? "bg-white text-black hover:bg-gray-300"
                    : "bg-black text-white hover:bg-gray-700"
                }`}
              >
                {tier.buttonText}
              </button>

              {/* Features */}
              <ul className="my-6 space-y-2 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                  <Check 
                      className={`w-5 h-5 mr-2 flex-shrink-0 ${
                        tier.popular || tier.inverse
                          ? "text-white"
                          : "text-black"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
