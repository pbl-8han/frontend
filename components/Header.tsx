import type { NextComponentType } from "next";
import { Box, Heading } from "@chakra-ui/react";

const Header: NextComponentType = () => {
  return (
    <>
      <Box as="nav" bg="teal.500" padding={6}>
        <Heading as="h1" size="md" textColor="white">食堂人数カウントシステム</Heading>
      </Box>
    </>
  )
}

export default Header
