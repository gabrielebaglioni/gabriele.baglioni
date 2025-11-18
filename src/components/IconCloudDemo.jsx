import { IconCloud } from "./IconCloud.tsx";

const Icons = {
  ethereum: () => (
    <svg width="100" height="100" viewBox="0 0 784.37 1277.39" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="#343434" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"/>
      <polygon fill="#8C8C8C" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"/>
      <polygon fill="#3C3C3B" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"/>
      <polygon fill="#8C8C8C" points="392.07,1277.38 392.07,956.52 -0,724.89"/>
      <polygon fill="#141414" points="392.07,882.29 784.13,650.54 392.07,472.33"/>
      <polygon fill="#393939" points="0,650.54 392.07,882.29 392.07,472.33"/>
    </svg>
  ),
  solidity: () => (
    <svg width="100" height="100" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path fill="#AA6746" d="M128 0L0 64v128l128 64 128-64V64L128 0z"/>
      <path fill="#FFFFFF" d="M128 32L32 80v96l96 48 96-48V80l-96-48z"/>
      <path fill="#AA6746" d="M128 48L48 88v80l80 40 80-40V88l-80-40z"/>
    </svg>
  ),
  web3: () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#627EEA" opacity="0.2"/>
      <path d="M50 20L30 35v30l20 15 20-15V35L50 20z" fill="#627EEA"/>
      <path d="M50 50L30 65v15l20 15 20-15V65L50 50z" fill="#627EEA" opacity="0.7"/>
      <circle cx="50" cy="50" r="8" fill="#FFFFFF"/>
    </svg>
  ),
  hardhat: () => (
    <svg width="100" height="100" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" fill="#F9A825"/>
      <path fill="#FFFFFF" d="M128 40L40 80v96l88 40 88-40V80l-88-40z"/>
      <path fill="#F9A825" d="M128 60L60 92v72l68 32 68-32V92l-68-32z"/>
    </svg>
  ),
  metamask: () => (
    <svg width="100" height="100" viewBox="0 0 318.6 318.6" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="#E2761B" points="274.1,35.5 174.6,109.4 193,65.8"/>
      <polygon fill="#E4761B" points="44.4,35.5 143.1,110.1 125.6,65.8"/>
      <polygon fill="#E4761B" points="238.3,206.8 211.8,247.4 268.5,263 284.8,207.7"/>
      <polygon fill="#E4761B" points="33.9,207.7 50.1,263 106.8,247.4 80.3,206.8"/>
      <polygon fill="#E4761B" points="103.6,138.2 87.8,162.1 144.1,164.6 142.1,104.1"/>
      <polygon fill="#E4761B" points="214.9,138.2 175.9,103.4 174.6,164.6 230.8,162.1"/>
      <polygon fill="#D7C1B3" points="106.8,247.4 140.6,230.9 111.4,208.1"/>
      <polygon fill="#D7C1B3" points="211.8,247.4 207.1,208.1 178,230.9"/>
      <polygon fill="#233447" points="211.8,247.4 238.3,206.8 207.1,208.1"/>
      <polygon fill="#233447" points="80.3,206.8 111.4,208.1 106.8,247.4"/>
      <polygon fill="#CD6116" points="144.1,164.6 142.1,104.1 174.6,110.1"/>
      <polygon fill="#CD6116" points="174.6,164.6 193,110.1 175.9,103.4"/>
      <polygon fill="#E4751F" points="87.8,162.1 111.4,208.1 80.3,206.8"/>
      <polygon fill="#E4751F" points="230.8,162.1 238.3,206.8 207.1,208.1"/>
      <polygon fill="#F6851B" points="144.1,164.6 174.6,164.6 207.1,208.1 178,230.9 140.6,230.9 111.4,208.1"/>
    </svg>
  ),
  ipfs: () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#65C2CB"/>
      <path fill="#FFFFFF" d="M50 25L30 40v20l20 15 20-15V40L50 25z"/>
      <circle cx="50" cy="50" r="10" fill="#65C2CB"/>
    </svg>
  ),
  polygon: () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#8247E5"/>
      <path fill="#FFFFFF" d="M50 20L20 35v30l30 15 30-15V35L50 20z"/>
      <circle cx="50" cy="50" r="12" fill="#8247E5"/>
    </svg>
  ),
  chainlink: () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#375BD2"/>
      <path fill="#FFFFFF" d="M50 30L35 40v20l15 10 15-10V40L50 30z"/>
      <circle cx="50" cy="50" r="8" fill="#375BD2"/>
    </svg>
  ),
};

export function IconCloudDemo() {
  return (
    <div className="relative size-full max-w-lg items-center overflow-hidden rounded-lg bg-background">
      <div className="absolute -bottom-8 ">
        <IconCloud
          icons={[
            <Icons.ethereum key="ethereum" />,
            <Icons.solidity key="solidity" />,
            <Icons.web3 key="web3" />,
            <Icons.hardhat key="hardhat" />,
            <Icons.metamask key="metamask" />,
            <Icons.ipfs key="ipfs" />,
            <Icons.polygon key="polygon" />,
            <Icons.chainlink key="chainlink" />,
            <Icons.ethereum key="ethereum2" />,
            <Icons.solidity key="solidity2" />,
            <Icons.web3 key="web3-2" />,
            <Icons.hardhat key="hardhat2" />,
            <Icons.metamask key="metamask2" />,
            <Icons.ipfs key="ipfs2" />,
            <Icons.polygon key="polygon2" />,
            <Icons.chainlink key="chainlink2" />,
            <Icons.ethereum key="ethereum3" />,
            <Icons.solidity key="solidity3" />,
            <Icons.web3 key="web3-3" />,
            <Icons.hardhat key="hardhat3" />,
            <Icons.metamask key="metamask3" />,
            <Icons.ipfs key="ipfs3" />,
            <Icons.polygon key="polygon3" />,
            <Icons.chainlink key="chainlink3" />,
          ]}
        />
      </div>
    </div>
  );
}
