import React from 'react';

const About = () => {
  return (
    <section className=" mx-auto p-8 my-16 bg-white rounded-xl  text-gray-900">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-green-700 tracking-wide">
        About <br/> Gram Panchayat Jobner
      </h1>

      <p className="mb-8 text-lg leading-relaxed text-justify">
        Gram Panchayat Jobner stands as a beacon of participatory local governance and sustainable rural development.
        Rooted deeply in its rich cultural heritage, the Panchayat actively works towards building a resilient
        and inclusive community where every resident has a voice and opportunity. It leverages traditional wisdom alongside innovative practices to
        address contemporary challenges, fostering growth that benefits all.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-6 text-green-600 border-l-4 border-green-400 pl-4">
        Our Vision
      </h2>
      <p className="mb-6 text-lg italic text-gray-700 max-w-prose mx-auto text-center">
        “A self-reliant, prosperous, and harmonious community enriched with equitable growth and transparent governance.”
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-6 text-green-600 border-l-4 border-green-400 pl-4">
        Our Mission
      </h2>
      <ul className="list-disc list-inside space-y-3 text-gray-800 text-lg max-w-prose mx-auto">
        <li>Empower rural livelihoods through sustainable agriculture and agro-based industries.</li>
        <li>Ensure inclusive access to quality healthcare, education, and sanitation services.</li>
        <li>Enhance physical infrastructure like roads, water supply, and clean energy.</li>
        <li>Promote social justice by uplifting marginalized and vulnerable groups.</li>
        <li>Cultivate youth potential and preserve our cultural heritage through vibrant community programs.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-12 mb-6 text-green-600 border-l-4 border-green-400 pl-4">
        Governance & Services
      </h2>
      <p className="mb-8 text-lg text-gray-800 max-w-prose mx-auto text-justify">
        The Panchayat is led by the elected Sarpanch along with dedicated members who represent the diverse sections of the community.
        Through participative decision-making, transparent administration, and strategic partnerships with governmental and non-governmental organizations,
        the Panchayat delivers essential services, maintains public assets, and efficiently manages welfare schemes. Regular community forums and awareness programs
        ensure that governance remains responsive and people-centric.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-6 text-green-600 border-l-4 border-green-400 pl-4">
        Contact Us
      </h2>
      <address className="not-italic text-center text-gray-700 space-y-1">
        <p><strong>Gram Panchayat Jobner Office</strong></p>
        <p>Village Jobner, District XYZ, Rajasthan, India</p>
        <p>Phone: <a href="tel:+911234567890" className="text-green-600 hover:underline">+91-12345-67890</a></p>
        <p>Email: <a href="mailto:info@jobnerpanchayat.in" className="text-green-600 hover:underline">info@jobnerpanchayat.in</a></p>
      </address>
    </section>
  );
};

export default About;
