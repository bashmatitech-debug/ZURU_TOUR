export default function Features() {
  const features = [
    {
      icon: '🗺️',
      title: 'Explore Destinations',
      description: 'Discover stunning locations and hidden gems across Nigeria',
    },
    {
      icon: '🏢',
      title: 'Connect with Businesses',
      description: 'Find and support local hotels, restaurants, and tour operators',
    },
    {
      icon: '🎉',
      title: 'Discover Events',
      description: 'Experience cultural festivals, concerts, and local celebrations',
    },
    {
      icon: '⭐',
      title: 'Premium Experiences',
      description: 'Access exclusive packages and personalized travel recommendations',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-light">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose ZURU TOUR?</h2>
          <p className="section-subtitle">Your gateway to authentic Nigerian experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
