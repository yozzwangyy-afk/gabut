import { useState } from 'react';
import axios from 'axios';
import styles from './YouTubeDownloader.module.css';

const YouTubeDownloader = () => {
  const [url, setUrl] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 🔥 FIXED: Regex yang lebih baik untuk semua format YouTube
  const extractVideoId = (url) => {
    if (!url) return null;
    
    console.log('Processing URL:', url); // Debug log

    // Pattern untuk berbagai format URL YouTube
    const patterns = [
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
      /youtube\.com\/watch\?v=([^"&?\/\s]{11})/,
      /youtube\.com\/embed\/([^"&?\/\s]{11})/,
      /youtu\.be\/([^"&?\/\s]{11})/,
      /youtube\.com\/v\/([^"&?\/\s]{11})/,
      /youtube\.com\/watch\?.*v=([^"&?\/\s]{11})/,
      /youtube\.com\/\?v=([^"&?\/\s]{11})/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        console.log('Video ID found:', match[1]); // Debug log
        return match[1];
      }
    }

    // Fallback: cari 11 karakter video ID
    const fallbackMatch = url.match(/[0-9A-Za-z_-]{11}/);
    if (fallbackMatch) {
      console.log('Fallback Video ID:', fallbackMatch[0]); // Debug log
      return fallbackMatch[0];
    }

    return null;
  };

  const validateYouTubeUrl = (url) => {
    const videoId = extractVideoId(url);
    if (!videoId) {
      return {
        isValid: false,
        error: 'URL YouTube tidak valid. Contoh URL yang benar: https://www.youtube.com/watch?v=dQw4w9WgXcQ atau https://youtu.be/dQw4w9WgXcQ'
      };
    }

    if (videoId.length !== 11) {
      return {
        isValid: false,
        error: 'Video ID harus 11 karakter'
      };
    }

    return { isValid: true, videoId };
  };

  const fetchVideoData = async () => {
    if (!url.trim()) {
      setError('Masukkan URL YouTube');
      return;
    }

    const validation = validateYouTubeUrl(url);
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }

    setLoading(true);
    setError('');
    setVideoData(null);

    try {
      console.log('Fetching data for URL:', url); // Debug log
      
      const apiUrl = `https://api.luxzoffc.web.id/download/ytdl?url=${encodeURIComponent(url)}`;
      console.log('API URL:', apiUrl); // Debug log
      
      const response = await axios.get(apiUrl, {
        timeout: 30000, // 30 second timeout
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      console.log('API Response:', response.data); // Debug log
      
      if (response.data && response.data.result) {
        setVideoData(response.data.result);
      } else if (response.data && response.data.error) {
        setError(`API Error: ${response.data.error}`);
      } else {
        setError('Tidak dapat mengambil data video. Format respons tidak sesuai.');
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      
      if (err.response) {
        // Server responded with error status
        setError(`Server Error: ${err.response.status} - ${err.response.data?.message || 'Unknown error'}`);
      } else if (err.request) {
        // Request was made but no response received
        setError('Tidak dapat terhubung ke server. Periksa koneksi internet Anda.');
      } else {
        // Other errors
        setError(`Terjadi kesalahan: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVideoData();
  };

  const handleExampleClick = () => {
    setUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return 'Unknown';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getQualityLabel = (quality) => {
    const qualityMap = {
      'tiny': '144p',
      'small': '240p', 
      'medium': '360p',
      'large': '480p',
      'hd720': '720p (HD)',
      'hd1080': '1080p (FHD)',
      'hd1440': '1440p (2K)',
      'hd2160': '2160p (4K)',
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

  // Debug function untuk melihat struktur data
  const debugData = () => {
    if (videoData) {
      console.log('Video Data Structure:', videoData);
      console.log('Video array:', videoData.video);
      console.log('Audio array:', videoData.audio);
      console.log('VideoOnly array:', videoData.videoOnly);
    }
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
        
        <div className={styles.exampleSection}>
          <p className={styles.exampleText}>
            Contoh URL yang valid:{' '}
            <button 
              type="button" 
              onClick={handleExampleClick}
              className={styles.exampleLink}
            >
              https://www.youtube.com/watch?v=dQw4w9WgXcQ
            </button>
          </p>
        </div>
      </form>

      {error && (
        <div className={styles.error}>
          <span className={styles.errorIcon}>⚠️</span>
          <div className={styles.errorContent}>
            <strong>Error:</strong> {error}
          </div>
        </div>
      )}

      {videoData && (
        <div className={styles.videoInfo}>
          {/* Debug button - hapus di production */}
          <button 
            onClick={debugData} 
            className={styles.debugButton}
            style={{display: 'none'}} // Sembunyikan di production
          >
            Debug Data
          </button>

          {/* Thumbnail dan Info Video */}
          <div className={styles.videoHeader}>
            <div className={styles.thumbnailContainer}>
              <img 
                src={videoData.thumbnail} 
                alt="Thumbnail"
                className={styles.thumbnail}
                onError={(e) => {
                  e.target.src = 'https://i.ytimg.com/vi/' + extractVideoId(url) + '/hqdefault.jpg';
                }}
              />
            </div>
            <div className={styles.videoDetails}>
              <h2 className={styles.videoTitle}>{videoData.title || 'No Title'}</h2>
              <div className={styles.videoMeta}>
                <span className={styles.metaItem}>
                  <span className={styles.metaIcon}>⏱️</span>
                  {videoData.duration || 'N/A'}
                </span>
                <span className={styles.metaItem}>
                  <span className={styles.metaIcon}>👁️</span>
                  {videoData.viewCount ? videoData.viewCount.toLocaleString() + ' views' : 'N/A views'}
                </span>
              </div>
              <p className={styles.channel}>
                <span className={styles.channelIcon}>📺</span>
                {videoData.channel || 'Unknown Channel'}
              </p>
            </div>
          </div>

          {/* Download Options */}
          <div className={styles.downloadOptions}>
            <h3 className={styles.sectionTitle}>Pilihan Download:</h3>
            
            {/* Video dengan Audio */}
            {videoData.video && videoData.video.length > 0 ? (
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
                      download
                      className={styles.downloadCard}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!item.url || item.url === '#') {
                          e.preventDefault();
                          setError('Download link tidak tersedia');
                        }
                      }}
                    >
                      <div className={styles.cardHeader}>
                        <span className={styles.quality}>
                          {getQualityLabel(item.quality)}
                        </span>
                        <span className={styles.format}>
                          {item.format ? item.format.toUpperCase() : 'MP4'}
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
            ) : (
              <div className={styles.noOptions}>
                <p>❌ Tidak ada opsi video dengan audio tersedia</p>
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
                      download
                      className={styles.downloadCard}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={styles.cardHeader}>
                        <span className={styles.quality}>
                          {getQualityLabel(item.quality)}
                        </span>
                        <span className={styles.format}>
                          {item.format ? item.format.toUpperCase() : 'MP4'}
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
            {videoData.audio && videoData.audio.length > 0 ? (
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
                      download
                      className={styles.downloadCard}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={styles.cardHeader}>
                        <span className={styles.quality}>
                          {item.quality || 'High Quality'}
                        </span>
                        <span className={styles.format}>
                          {item.format ? item.format.toUpperCase() : 'MP3'}
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
            ) : (
              <div className={styles.noOptions}>
                <p>❌ Tidak ada opsi audio tersedia</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className={styles.footerInfo}>
        <p>💡 <strong>Tips:</strong> Gunakan Wi-Fi untuk download file berukuran besar</p>
        <p>⚡ Download langsung tanpa iklan atau redirect</p>
        <p>🔧 Jika ada masalah, coba gunakan URL YouTube yang berbeda</p>
      </div>
    </div>
  );
};

export default YouTubeDownloader;
