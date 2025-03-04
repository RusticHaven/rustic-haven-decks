import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>Rustic Haven Decks</title>
        <meta name="description" content="Professional Deck Construction and Repairs" />
      </Head>
      <header className="text-4xl font-bold text-gray-800">Welcome to Rustic Haven Decks</header>
      <p className="mt-4 text-gray-600">Your trusted partner for deck repairs, replacements, and maintenance.</p>
    </div>
  );
}