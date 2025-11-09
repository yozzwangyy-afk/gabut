import Head from 'next/head';
import YouTubeDownloader from '../components/YouTubeDownloader';

export default function Home() {
  return (
    <>
      <Head>
        <title>YouTube Video Downloader - Download Gratis</title>
        <meta name="description" content="Download video YouTube dengan kualitas HD, FHD, 4K. Gratis tanpa iklan dan cepat." />
        <meta name="keywords" content="youtube downloader, download video youtube, youtube to mp4, youtube to mp3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="YouTube Video Downloader" />
        <meta property="og:description" content="Download video YouTube dengan kualitas terbaik secara gratis" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Video Downloader" />
        <meta name="twitter:description" content="Download video YouTube dengan kualitas terbaik" />
      </Head>
      
      <main>
        <YouTubeDownloader />
      </main>
    </>
  );
}
