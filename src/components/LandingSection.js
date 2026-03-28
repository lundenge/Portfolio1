import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import picProfile1 from "../images/picProfile1.jpg";
import "./style-LandingSection.css";

const greeting = "Ir.Theophile Lundenge Lelu";
const bio1 = "Software Engineer | Crafting Innovative Solutions to Drive Technological Progress";
const bio2 = "As a dedicated and passionate software engineer, I thrive on designing and implementing robust software systems that streamline processes and enhance user experiences. I have successfully led projects that resulted in a 20% increase in operational efficiency and have developed applications that are currently being used by thousands of users worldwide. In addition to my strong coding skills, I excel in project management, problem-solving, and team collaboration.";
const bio3 = "My expertise includes proficiency in multiple programming languages, database management, and cloud computing.";

const imageStyle = {
<<<<<<< HEAD
  borderRadius: '130px',
  width: '300px',
  height: '300px'
=======
  borderRadius: '50px',
  width: '500px',
  height: '500px'
>>>>>>> d6f30320e6dce08cb55c8db29fafda6a572a0770
};

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
<<<<<<< HEAD
    backgroundImage={require("../images/picProfile1.jpg")}
   // backgroundColor="#2A4365"
   
=======
    backgroundImage={require("../images/background3.PNG")}
    backgroundColor="#2A4365"
>>>>>>> d6f30320e6dce08cb55c8db29fafda6a572a0770
    
   
  >
    
    <div className="content-container">
      <div className="text-containers">
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
<<<<<<< HEAD
      
=======
        <img src={picProfile1} alt="Profile" style={imageStyle} />
>>>>>>> d6f30320e6dce08cb55c8db29fafda6a572a0770
      </div>
    </div>
   
  </FullScreenSection>
);

export default LandingSection;
