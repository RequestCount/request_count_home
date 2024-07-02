// src/components/Features.jsx

const features = [
  {
    title: 'Feature 1',
    description: 'Description of feature 1.',
  },
  {
    title: 'Feature 2',
    description: 'Description of feature 2.',
  },
  {
    title: 'Feature 3',
    description: 'Description of feature 3.',
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-custom1">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-custom4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-bold mb-2 text-custom3">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
