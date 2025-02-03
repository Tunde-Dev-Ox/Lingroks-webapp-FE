import React from "react";

interface VideoEmbedProps {
  src: string;
  title: string;
}


const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, title}) => {
    return (
      <div style={{ position: "relative", paddingBottom: "56.25%", height: "100%", overflow: "hidden" }}>
        <iframe
          src={src}
          title={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };
  
export default VideoEmbed;
  