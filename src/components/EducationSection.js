import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import livingstonia from "../images/livingstonia.jpg";
//import "./style-LandingSection.css";
import "./style_components/style_education.css";

const greeting = "EDUCATION";
const bio1 = "Bachelor of Science in Computer Engineering";
const bio2 = "University of Livingstonia, September 2019 - November 2023.";
const bio3 = "Rhumpi, Malawi.";

const imageStyle = {
  borderRadius: '130px',
  width: '300px',
  height: '300px'
};

const EducationSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundImage={require("../images/background3.PNG")}
    // backgroundColor="#2A4365"
    
   
  >
    
    <div className="content-container">
      <div className="text-container">
        <VStack spacing={2} alignItems="flex-start">
          <Heading as="h1" size="2xl" className="headin_name">
            {greeting}
          </Heading>
          <Heading as="h2" size="lg" className="heading-title">
            {bio1}
          </Heading>
          <Heading as="p" size="md" className="heading-text1">
            {bio2}
          </Heading>
          <Heading as="p" size="md" className="heading-text2">
            {bio3}
          </Heading>
        </VStack>
      </div>
      <div className="image-container">
        <img src={livingstonia} alt="Profile" style={imageStyle} />
      </div>
    </div>
   
  </FullScreenSection>
);

export default EducationSection;
