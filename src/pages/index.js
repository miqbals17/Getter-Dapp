import Head from "next/head";
import Form from "../components/Form";
import { Contract, ethers } from "ethers";
import { useState } from "react";
import { GETTER_CONTRACT_ADDRESS, abi } from "@/constants";

export default function Home() {
  const [setterLoading, setSetterLoading] = useState(false);
  const [address, setAddress] = useState(null);
  const [valueContract, setValueContract] = useState();

  const connectWallet = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      const address = await signer.getAddress();
      setAddress(address);
    } catch (err) {
      console.error(err);
      window.alert(err.message);
      setConnectLoading(false);
    }
  };

  const Getter = async () => {
    try {
      console.log("Getting... ");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      const getterContract = new Contract(GETTER_CONTRACT_ADDRESS, abi, signer);
      const tx = await getterContract.getValue();

      console.log("Value:", tx.toString());
      setValueContract(tx.toString());
      console.log("valueContract:", valueContract);
    } catch (err) {
      console.error(err);
    }
  };

  const Setter = async (_value) => {
    try {
      setSetterLoading(true);
      console.log("Setting... ");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      const getterContract = new Contract(GETTER_CONTRACT_ADDRESS, abi, signer);
      const tx = await getterContract.setValue(_value);
      tx.wait().then(() => {
        console.log("Value Set to:", tx);
        setSetterLoading(false);

        Getter();
      });
    } catch (err) {
      setSetterLoading(false);
      console.error(err);
      window.alert(err);
    }
  };

  return (
    <div>
      <Head>
        <title>Dapps | Simple Getter Setter</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-screen">
        <Form
          connect={connectWallet}
          address={address}
          getter={Getter}
          setter={Setter}
          valueContract={valueContract}
          setterLoading={setterLoading}
        />
        <footer className="mt-2">
          Made with &#10084; and &#9749; by @muhammadiqbals17
        </footer>
      </div>
    </div>
  );
}
