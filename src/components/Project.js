import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Button, Text, color } from "@chakra-ui/react";
import Card from "./Card";
import "./Project.css";

const projects = [
  {
    title: "Food Delivery",
    description: "The purpose of this project is to simplify and improve the efficiency of the delivering process for both customer and restaurant, minimize manual data entry and ensure data accuracy and security during order and deliver placement process. This system enable customers to know food ingredients before ordering, reduce restaurant’s food wastage & correct placement of orders through visual confirmation. Improve efficiency of restaurant’s staff, eliminate paperwork and increase level of accuracy and increase speed of service, sales volume and customer satisfaction. ",
    getImageSrc: () => require("../images/food.png"),
  },
  {
    title: "RAICA",
    description: "RAICA, or Responsible AI for Computational Action, is an innovative, project-centered AI curriculum developed by the Massachusetts Institute of Technology (MIT). The program was executed by ADAI CIRCLE at the Dzaleka Refugee Camp in Malawi. This initiative aims to equip participants with the knowledge and skills to responsibly design and implement AI technologies that address real-world challenges. Through hands-on projects, participants learn about the ethical implications of AI and how to use computational tools to create positive social impact. The curriculum emphasizes critical thinking, ethical considerations, and practical applications, empowering refugees to leverage AI for community development and personal growth.",
    getImageSrc: () => require("../images/raica.JPG"),
  },
  {
    title: "Saint Ignace de Loyola Parish",
    description: " The Saint Ignace de Loyola Parish, located in the Dzaleka Refugee Camp within the Archdiocese of Lilongwe in Malawi, is a vibrant community of faith. The parish's web-based platform serves as an informational hub, providing detailed descriptions of its activities, history, and mission. The project was created to enhance communication within the parish and beyond, offering a central place for parishioners and the broader community to access important updates, announcements, and resources. The website includes sections on the parish's history, various ministries and services, upcoming events, and community outreach programs. It also features a platform for spiritual content, such as sermons and reflections, and provides a way for users to connect with parish leaders and participate in parish activities. This digital presence helps to foster a sense of unity and facilitates effective communication among the parish's members and the wider community.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Online Semester Registration Laws Campus",
    description: "A web-based application developed for the University of Livingstonia, allowing students to register for their courses remotely. The platform provides a seamless and convenient way for students to enroll in their classes, regardless of their location.s",
    getImageSrc: () => require("../images/reg.PNG"),
  },
  {
    title: "Smart Music",
    description: `Description: A web application designed to provide a platform for local singers and cineastes to sell their songs and movies. The project aims to empower talented individuals, particularly those in the Dzaleka Refugee Camp, by offering them a means to monetize their creative works and potentially reduce poverty within the community.
                   As the developer, I was responsible for the full-stack development of the application. This included designing the user interface, implementing the backend architecture, and integrating a secure payment gateway to facilitate transactions.
                   The primary goal of the Video Gallery project is to provide a marketplace for local artists to showcase and sell their content. By offering a secure and accessible platform, the application helps artists reach a broader audience, generate income, and gain financial independence. This initiative is especially significant in the Dzaleka Refugee Camp, where many talented individuals lack opportunities to commercialize their work. By enabling artists to sell their songs and movies, the app contributes to economic empowerment and community development.`,
    getImageSrc: () => require("../images/music.PNG"),
  },
  {
    title: "Donation Management",
    description: `A comprehensive platform designed to streamline the donation management process for the Dzaleka Refugee Camp. It includes both a web-based interface and an Android mobile application, facilitating seamless interaction between donors and refugees.
Key Features:
1. Dual Platform Accessibility: Available as a web application for broad access and an Android mobile app for on-the-go convenience, ensuring both donors and refugees can use the system effectively.
2. Real-Time Notifications: Sends timely alerts to refugees about available donations, reducing the need for long queues and minimizing time delays in distribution.
3. Donor Management: Allows donors to register, track, and manage their contributions, ensuring transparency and ease of monitoring their impact.
4. Resource Allocation: Efficiently allocates donated goods, such as food and other essentials, to ensure equitable distribution among refugees.
5. Queue Management System: Implements a digital queue system to organize and schedule pick-up times, thereby preventing overcrowding and ensuring orderly distribution.
6. Data Analytics: Provides insightful analytics and reporting features to track donation trends and refugee needs, helping to optimize future donation drives.
7. User-Friendly Interface: Designed with ease of use in mind, the application ensures that both tech-savvy and non-tech-savvy users can navigate the system with minimal difficulty.`,
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const toggleDescription = (index) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <FullScreenSection
      backgroundImage={require("../images/background3.PNG")}
      /*backgroundColor="#14532d"*/
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project, index) => (
          <Box key={project.title} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} >
            <Box>
              <img src={project.getImageSrc()} alt={project.title} style={{ width: '100%' }} />
            </Box>
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Heading as="h2" size="md" mb={2}>{project.title}</Heading>
              </Box>
              <Text>
                {visibleDescriptions[index]
                  ? project.description
                  : `${project.description.substring(0, 100)}...`}
              </Text>
              <Button onClick={() => toggleDescription(index)} mt={2} colorScheme="teal">
                {visibleDescriptions[index] ? "Show Less" : "See More"}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
