import { useState } from 'react';
import axios from 'axios';
import styles from './YouTubeDownloader.module.css';

const YouTubeDownloader = () => {
  const [url, setUrl] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const fetchVideoData = async () => {
    if (!url) {
      setError('Masukkan URL YouTube');
      return;
    }

    const videoId = extractVideoId(url);
    if (!videoId) {
      setError('URL YouTube tidak valid');
      return;
    }

    setLoading(true);
    setError('');
    setVideoData(null);

    try {
      const apiUrl = `https://api.luxzoffc.web.id/download/ytdl?url=${encodeURIComponent(url)}`;
      const response = await axios.get(apiUrl);
      
      if (response.data && response.data.result) {
        setVideoData(response.data.result);
      } else {
        setError('Tidak dapat mengambil data video');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Terjadi kesalahan saat mengambil data video');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVideoData();
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return 'Unknown';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getQualityLabel = (quality) => {
    const qualityMap = {
      '144p': '144p',
      '240p': '240p',
      '360p': '360p',
      '480p': '480p',
      '720p': '720p (HD)',
      '1080p': '1080p (FHD)',
      '1440p': '1440p (2K)',
      '2160p': '2160p (4K)'
    };
    return qualityMap[quality] || quality;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.youtubeRed}>YouTube</span> Video Downloader
        </h1>
        <p className={styles.subtitle}>
          Download video YouTube dengan kualitas terbaik
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Masukkan URL YouTube... Contoh: https://www.youtube.com/watch?v=..."
            className={styles.input}
          />
          <button 
            type="submit" 
            disabled={loading}
            className={`${styles.button} ${loading ? styles.loading : ''}`}
          >
            {loading ? (
              <>
                <span className={styles.spinner}></span>
                Loading...
              </>
            ) : (
              'Download'
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className={styles.error}>
          <span className={styles.errorIcon}>⚠️</span>
          {error}
        </div>
      )}

      {videoData && (
        <div className={styles.videoInfo}>
          {/* Thumbnail dan Info Video */}
          <div className={styles.videoHeader}>
            <div className={styles.thumbnailContainer}>
              <img 
                src={videoData.thumbnail} 
                alt="Thumbnail"
                className={styles.thumbnail}
              />
              <div className={styles.thumbnailOverlay}>
                <span>📹</span>
              </div>
            </div>
            <div className={styles.videoDetails}>
              <h2 className={styles.videoTitle}>{videoData.title}</h2>
              <div className={styles.videoMeta}>
                <span className={styles.metaItem}>
                  <span className={styles.metaIcon}>⏱️</span>
                  {videoData.duration}
                </span>
                <span className={styles.metaItem}>
                  <span className={styles.metaIcon}>👁️</span>
                  {videoData.viewCount?.toLocaleString() || 'N/A'} views
                </span>
              </div>
              <p className={styles.channel}>
                <span className={styles.channelIcon}>📺</span>
                {videoData.channel}
              </p>
            </div>
          </div>

          {/* Download Options */}
          <div className={styles.downloadOptions}>
            <h3 className={styles.sectionTitle}>Pilihan Download:</h3>
            
            {/* Video dengan Audio */}
            {videoData.video && videoData.video.length > 0 && (
              <div className={styles.optionSection}>
                <h4 className={styles.optionTitle}>
                  <span className={styles.optionIcon}>🎬</span>
                  Video dengan Audio
                </h4>
                <div className={styles.qualityGrid}>
                  {videoData.video.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      download={`${videoData.title} - ${item.quality}.${item.format}`}
                      className={styles.downloadCard}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={styles.cardHeader}>
                        <span className={styles.quality}>
                          {getQualityLabel(item.quality)}
                        </span>
                        <span className={styles.format}>
                          {item.format.toUpperCase()}
                        </span>
                      </div>
                      <div className={styles.cardBody}>
                        <span className={styles.size}>
                          📦 {formatFileSize(item.fileSize)}
                        </span>
                      </div>
                      <div className={styles.downloadBtn}>
                        ⬇️ Download
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Video tanpa Audio */}
            {videoData.videoOnly && videoData.videoOnly.length > 0 && (
              <div className={styles.optionSection}>
                <h4 className={styles.optionTitle}>
                  <span className={styles.optionIcon}>🎥</span>
                  Video Only (Tanpa Audio)
                </h4>
                <div className={styles.qualityGrid}>
                  {videoData.videoOnly.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      download={`${videoData.title} - ${item.quality}_video.${item.format}`}
                      className={styles.downloadCard}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={styles.cardHeader}>
                        <span className={styles.quality}>
                          {getQualityLabel(item.quality)}
                        </span>
                        <span className={styles.format}>
                          {item.format.toUpperCase()}
                        </span>
                      </div>
                      <div className={styles.cardBody}>
                        <span className={styles.size}>
                          📦 {formatFileSize(item.fileSize)}
                        </span>
                      </div>
                      <div className={styles.downloadBtn}>
                        ⬇️ Download
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Audio Only */}
            {videoData.audio && videoData.audio.length > 0 && (
              <div className={styles.optionSection}>
                <h4 className={styles.optionTitle}>
                  <span className={styles.optionIcon}>🎵</span>
                  Audio Only
                </h4>
                <div className={styles.qualityGrid}>
                  {videoData.audio.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      download={`${videoData.title} - audio.${item.format}`}
                      className={styles.downloadCard}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={styles.cardHeader}>
                        <span className={styles.quality}>
                          {item.quality || 'High Quality'}
                        </span>
                        <span className={styles.format}>
                          {item.format.toUpperCase()}
                        </span>
                      </div>
                      <div className={styles.cardBody}>
                        <span className={styles.size}>
                          📦 {formatFileSize(item.fileSize)}
                        </span>
                      </div>
                      <div className={styles.downloadBtn}>
                        ⬇️ Download
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className={styles.footerInfo}>
        <p>💡 <strong>Tips:</strong> Gunakan Wi-Fi untuk download file berukuran besar</p>
        <p>⚡ Download langsung tanpa iklan atau redirect</p>
      </div>
    </div>
  );
};

export default YouTubeDownloader;
