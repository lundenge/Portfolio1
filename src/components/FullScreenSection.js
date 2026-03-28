import * as React from "react";
<<<<<<< HEAD
import { color, VStack } from "@chakra-ui/react";
=======
import { VStack } from "@chakra-ui/react";
>>>>>>> d6f30320e6dce08cb55c8db29fafda6a572a0770

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, backgroundImage, overlay, overlayColor = 'rgba(0,0,0,0.5)', ...boxProps }) => {
  // If backgroundImage is provided, apply sensible background styles on the outer container.
  // Accept either an imported asset (string URL) or a path string. The caller can pass
  // `backgroundImage={require('../images/background3.PNG')}` or a public URL.
  const bgProps = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  // Default style snippet to apply when a background image is present.
  // Do not override explicit props from callers: merge defaults first, then bgProps, then boxProps.
  const defaultStyle = backgroundImage
    ? {
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
<<<<<<< HEAD
       // backgroundColor: boxProps.backgroundColor || "#007BFF",
        textAlign: "center",
        position: "relative",
        color: isDarkBackground ? "white" : "black",
        
=======
        backgroundColor: boxProps.backgroundColor || "#007BFF",
        textAlign: "center",
        position: "relative",
>>>>>>> d6f30320e6dce08cb55c8db29fafda6a572a0770
      }
    : {};

  // If overlay prop is undefined, enable overlay automatically when a background image is present.
  const overlayEnabled = typeof overlay === 'undefined' ? !!backgroundImage : !!overlay;

  return (
    <VStack
      color={isDarkBackground ? "white" : "black"}
      {...defaultStyle}
      {...bgProps}
      {...boxProps}
    >
      {/* Overlay layer (absolute) to improve contrast when background images are used */}
      {overlayEnabled && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: overlayColor,
            zIndex: 0,
            borderRadius: boxProps.borderRadius || undefined,
          }}
        />
      )}

      <VStack maxWidth="1280px" minHeight="120vh" {...boxProps} style={{ zIndex: 1 }}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
