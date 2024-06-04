import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { JsonRpcSigner } from "ethers";

const Layout: FC = () => {
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  return (
    <Flex maxW={768} mx="auto" bgColor={"red"} minH={"100vh"} flexDir="column">
      <Header signer={signer} setSigner={setSigner} />
      <Flex bgColor="green.100" flexGrow={1}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
