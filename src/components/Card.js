import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack 
    bg="white"
    boxShadow="lg"
    rounded="lg"
    overflow="hidden"
    p={4}
    spacing={4}
    >
      <Image src={imageSrc} alt={title} maxH="200px" objectFit="cover" />
      <Heading as="h2" size="md" textAlign="center ">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
      <HStack justifyContent="center">
        <Text>Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1" />
      </HStack>
    </VStack>
  )
};

export default Card;

