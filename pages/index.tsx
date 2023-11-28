import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import  {Container , Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";
import Stake from "../components/Stake";
const Home: NextPage = () => {
  const address = useAddress();
  if (!address) {
    return (
      <Container>
        <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
          <Heading>Connect Wallet</Heading>
        </Flex>
      </Container>
    )
  }
  return (
    <Container maxW={"1200px"}>
      <SimpleGrid columns={2} spacing={4}>
      <StakeToken/>
      <RewardToken/>
      </SimpleGrid>
      <Stake/>
    </Container>
  );
};

export default Home;


<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc20.html?contract=0xe5727049F8dBe251F783443EEC38EbD693305227&chain=%7B%22name%22%3A%22BNB+Smart+Chain+Mainnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22BNB+Chain+Native+Token%22%2C%22symbol%22%3A%22BNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnb%22%2C%22chainId%22%3A56%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22binance%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fbinance-coin%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=&theme=light&primaryColor=purple"
    width="600px"
    height="600px"
    style="max-width:100%;"
    frameborder="0"
></iframe>
