import TiltedCard from "./TiltedCard";

interface TiltedCardWrapperProps {
  imageSrc: string;
  altText: string;
  captionText: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  [key: string]: any; // Allow any additional props for Astro directives
}

export default function TiltedCardWrapper({
  imageSrc,
  altText,
  captionText,
  containerHeight,
  containerWidth,
  imageHeight,
  imageWidth,
  rotateAmplitude,
  scaleOnHover,
  showMobileWarning,
  showTooltip,
  displayOverlayContent,
  ...otherProps
}: TiltedCardWrapperProps) {
  return (
    <TiltedCard
      imageSrc={imageSrc}
      altText={altText}
      captionText={captionText}
      containerHeight={containerHeight}
      containerWidth={containerWidth}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
      rotateAmplitude={rotateAmplitude}
      scaleOnHover={scaleOnHover}
      showMobileWarning={showMobileWarning}
      showTooltip={showTooltip}
      displayOverlayContent={displayOverlayContent}
    />
  );
}
