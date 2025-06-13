// src/components/loaders/LoaderComponents.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faSpinner } from '@fortawesome/free-solid-svg-icons';

// Main Page Loader (full screen)
export const PageLoader = ({ message = "Loading..." }) => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-animation">
          <div className="code-loader">
            <FontAwesomeIcon icon={faCode} className="code-icon" />
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <p className="loader-message">{message}</p>
      </div>
      <div className="loader-background"></div>
    </div>
  );
};

// Spinning Loader (for buttons and small components)
export const SpinLoader = ({ size = "md", color = "accent" }) => {
  return (
    <div className={`spin-loader spin-loader-${size} spin-loader-${color}`}>
      <FontAwesomeIcon icon={faSpinner} className="spinner-icon" />
    </div>
  );
};

// Pulse Loader (for content loading)
export const PulseLoader = ({ className = "" }) => {
  return (
    <div className={`pulse-loader ${className}`}>
      <div className="pulse-circle pulse-1"></div>
      <div className="pulse-circle pulse-2"></div>
      <div className="pulse-circle pulse-3"></div>
    </div>
  );
};

// Progress Bar Loader
export const ProgressLoader = ({ progress = 0, message = "Loading..." }) => {
  return (
    <div className="progress-loader">
      <div className="progress-info">
        <span className="progress-message">{message}</span>
        <span className="progress-percentage">{Math.round(progress)}%</span>
      </div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

// Skeleton Loader (for content placeholders)
export const SkeletonLoader = ({ type = "text", lines = 3, className = "" }) => {
  if (type === "text") {
    return (
      <div className={`skeleton-loader ${className}`}>
        {[...Array(lines)].map((_, i) => (
          <div 
            key={i} 
            className="skeleton-line"
            style={{ width: i === lines - 1 ? '70%' : '100%' }}
          ></div>
        ))}
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className={`skeleton-card ${className}`}>
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-line skeleton-title"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line" style={{ width: '60%' }}></div>
        </div>
      </div>
    );
  }

  if (type === "avatar") {
    return <div className={`skeleton-avatar ${className}`}></div>;
  }

  return <div className={`skeleton-block ${className}`}></div>;
};

// Dots Loader (minimalist)
export const DotsLoader = ({ size = "md" }) => {
  return (
    <div className={`dots-loader dots-loader-${size}`}>
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="dot dot-3"></div>
    </div>
  );
};

// Loading Overlay (for covering components)
export const LoadingOverlay = ({ children, isLoading, message = "Loading..." }) => {
  return (
    <div className="loading-overlay-container">
      {children}
      {isLoading && (
        <div className="loading-overlay">
          <div className="overlay-content">
            <PulseLoader />
            <p className="overlay-message">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Image Loader Component with built-in loading states
export const ImageLoader = ({ 
  src, 
  alt, 
  className = "", 
  skeletonType = "block",
  showError = true,
  errorContent = "Failed to load image",
  onLoad = () => {},
  onError = () => {},
  ...props 
}) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!src) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setLoaded(false);
    setError(false);

    const img = new Image();
    
    img.onload = () => {
      setLoaded(true);
      setLoading(false);
      setError(false);
      onLoad();
    };
    
    img.onerror = () => {
      setError(true);
      setLoading(false);
      setLoaded(false);
      onError();
    };
    
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  return (
    <div className={`image-loader-container ${className}`}>
      {loading && (
        <SkeletonLoader type={skeletonType} className="image-skeleton" />
      )}
      
      {error && showError && (
        <div className="image-error">
          <span>{errorContent}</span>
        </div>
      )}
      
      {src && (
        <img
          src={src}
          alt={alt}
          onLoad={() => {
            setLoaded(true);
            setLoading(false);
            onLoad();
          }}
          onError={() => {
            setError(true);
            setLoading(false);
            onError();
          }}
          style={{ 
            display: loaded ? 'block' : 'none',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
          {...props}
        />
      )}
    </div>
  );
};

// Multiple Images Loader Component
export const MultiImageLoader = ({ 
  images = [], 
  onAllLoaded = () => {},
  onProgress = () => {},
  showProgress = false,
  progressMessage = "Loading images..."
}) => {
  const [loadedCount, setLoadedCount] = React.useState(0);
  const [errorCount, setErrorCount] = React.useState(0);
  const [loadingStates, setLoadingStates] = React.useState({});

  const totalImages = images.length;
  const allLoaded = loadedCount === totalImages;
  const isLoading = loadedCount + errorCount < totalImages;
  const progress = totalImages > 0 ? (loadedCount / totalImages) * 100 : 0;

  React.useEffect(() => {
    if (totalImages === 0) return;

    setLoadedCount(0);
    setErrorCount(0);
    setLoadingStates({});

    const loadImage = (src, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          setLoadedCount(prev => prev + 1);
          setLoadingStates(prev => ({ ...prev, [index]: 'loaded' }));
          resolve({ success: true, index, src });
        };
        
        img.onerror = () => {
          setErrorCount(prev => prev + 1);
          setLoadingStates(prev => ({ ...prev, [index]: 'error' }));
          resolve({ success: false, index, src });
        };
        
        img.src = src;
      });
    };

    // Load all images concurrently
    Promise.all(
      images.map((src, index) => loadImage(src, index))
    ).then(() => {
      onAllLoaded();
    });
  }, [images, totalImages, onAllLoaded]);

  React.useEffect(() => {
    onProgress(progress, loadedCount, totalImages);
  }, [progress, loadedCount, totalImages, onProgress]);

  if (showProgress && isLoading) {
    return (
      <ProgressLoader 
        progress={progress}
        message={`${progressMessage} ${loadedCount}/${totalImages}`}
      />
    );
  }

  return (
    <div className="multi-image-loader">
      {images.map((src, index) => (
        <ImageLoader
          key={`${src}-${index}`}
          src={src}
          alt={`Image ${index + 1}`}
          className="multi-image-item"
        />
      ))}
    </div>
  );
};