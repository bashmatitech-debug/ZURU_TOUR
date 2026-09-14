import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main>
      <Navigation />
      <section className="py-16 sm:py-24 bg-light">
        <div className="container-max">
          <h1 className="section-title">About ZURU TOUR</h1>
          <p className="section-subtitle">Coming Soon - Our mission, vision, and team</p>
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-dashed border-primary">
            <p className="text-lg text-gray-600">Placeholder for About page content</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
