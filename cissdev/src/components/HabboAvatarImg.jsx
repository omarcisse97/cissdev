// src/components/HabboAvatarImg.jsx
import { useState, useEffect, useRef } from 'react';

export const HabboAvatarImg = ({
    srcHabbo = "",
    imgClass = "img-fluid avatar-about",
    altHabbo = "Avatar",
    loadingTime = 2000 // Max time to wait before showing image
}) => {
    const [imageState, setImageState] = useState({
        loading: true,
        loaded: false,
        error: false,
        showImage: false
    });
    
    const imgRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (!srcHabbo) {
            setImageState({ loading: false, loaded: false, error: false, showImage: false });
            return;
        }

        // Reset state when src changes
        setImageState({ loading: true, loaded: false, error: false, showImage: false });

        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Fallback timeout - show image even if onLoad doesn't fire
        timeoutRef.current = setTimeout(() => {
            console.log("⏰ Fallback timeout - showing image");
            setImageState(prev => ({ 
                ...prev, 
                loading: false, 
                loaded: true, 
                showImage: true 
            }));
        }, loadingTime);

        // Check if image is already loaded/cached
        const checkIfCached = () => {
            if (imgRef.current) {
                const img = imgRef.current;
                if (img.complete && img.naturalWidth > 0) {
                    console.log("✅ Image was already cached");
                    clearTimeout(timeoutRef.current);
                    setImageState({ 
                        loading: false, 
                        loaded: true, 
                        error: false, 
                        showImage: true 
                    });
                }
            }
        };

        // Small delay to allow image to potentially load from cache
        const checkTimeout = setTimeout(checkIfCached, 50);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (checkTimeout) clearTimeout(checkTimeout);
        };
    }, [srcHabbo, loadingTime]);

    const handleLoad = () => {
        console.log("✅ Image loaded via onLoad event");
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        setImageState({ 
            loading: false, 
            loaded: true, 
            error: false, 
            showImage: false // Don't show immediately
        });

        // Small delay for smooth transition
        setTimeout(() => {
            setImageState(prev => ({ ...prev, showImage: true }));
        }, 100);
    };

    const handleError = () => {
        console.log("❌ Image failed to load");
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        setImageState({ 
            loading: false, 
            loaded: false, 
            error: true, 
            showImage: false 
        });
    };

    if (!srcHabbo) return null;

    return (
        <div className="habbo-avatar-wrapper">
            {/* Smooth CSS Loader */}
            {imageState.loading && (
                <div className="avatar-loading-container">
                    <div className="avatar-css-spinner"></div>
                </div>
            )}

            {/* Error State */}
            {imageState.error && (
                <div className="avatar-error-container">
                    <div className="avatar-error-icon">🖼️</div>
                    <div className="avatar-error-text">Avatar unavailable</div>
                </div>
            )}

            {/* The Image */}
            <img
                ref={imgRef}
                src={srcHabbo}
                className={`${imgClass} ${imageState.showImage ? 'avatar-fade-in' : 'avatar-hidden'}`}
                alt={altHabbo}
                onLoad={handleLoad}
                onError={handleError}
                style={{
                    height: '100%'
                }}
            />
        </div>
    );
};

export default HabboAvatarImg;