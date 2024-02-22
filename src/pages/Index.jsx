import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaSpotify, FaYoutube, FaFilm, FaShoppingCart } from "react-icons/fa";

const SubscriptionCard = ({ service, icon, description, price }) => {
  return (
    <Stack borderWidth="1px" borderRadius="lg" w={{ sm: "100%", md: "340px" }} height={{ sm: "476px", md: "20rem" }} direction={{ base: "column", md: "column" }} bg={useColorModeValue("white", "gray.900")} boxShadow={"2xl"} padding={4}>
      <Flex flexGrow={1} alignItems="center" justifyContent="center">
        {icon}
      </Flex>
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {service}
      </Heading>
      <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
        {description}
      </Text>
      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        <Text fontWeight={800} fontSize={"xl"}>
          {price}
        </Text>
        <Text textDecoration={"line-through"} color={"gray.600"}>
          {parseInt(price.replace("$", "")) * 1.5}
        </Text>
      </Stack>
      <Button
        w={"full"}
        mt={8}
        bg={useColorModeValue("#151f21", "gray.900")}
        color={"white"}
        rounded={"md"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
      >
        <FaShoppingCart />
        <Text marginLeft={2}>Purchase</Text>
      </Button>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" mb={4}>
        Premium Subscription Marketplace
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <SubscriptionCard service="Spotify Premium" icon={<FaSpotify size={50} color="#1DB954" />} description="Unlimited music streaming" price="$5.99/month" />
        <SubscriptionCard service="YouTube Premium" icon={<FaYoutube size={50} color="#FF0000" />} description="Ad-free & offline videos" price="$6.99/month" />
        <SubscriptionCard service="Netflix Standard" icon={<FaFilm size={50} color="#E50914" />} description="Watch movies & series" price="$8.99/month" />
      </SimpleGrid>
    </Container>
  );
};

export default Index;
