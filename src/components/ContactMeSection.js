import React, { useEffect } from "react";
import { useFormik } from "formik";
import './ContactMeSection.css';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import axios from 'axios';

const ContactMeSection = () => {
  const { isLoading, response, setResponse, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: ""
    },
    onSubmit: async (values) => {
      try {
        setResponse(null); // Reset response before new request
        const result = await axios.post('http://localhost:5000/send', values);
        setResponse(result.data);
      } catch (error) {
        setResponse({ type: 'error', message: 'An error occurred. Please try again later.' });
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required")
    })
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") formik.resetForm();
    }
  }, [response, onOpen]);

  return (
    <FullScreenSection
      backgroundImage={require("../images/background3.PNG")}
      isDarkBackground
      backgroundColor="transparent"
      py={16}
      spacing={8}
      className="contact-section"
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" color="white">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%" className="contact-form-container">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName" color="white">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  bg="white"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email" color="white">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  bg="white"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type" color="white">Type of enquiry</FormLabel>
                <Select 
                  id="type" 
                  name="type"
                  bg="white"
                  {...formik.getFieldProps("type")}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment" color="white">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  bg="white"
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
