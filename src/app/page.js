import Bento from "./components/Bento";
import { Divider } from "@nextui-org/react";
import Bento2 from "./components/Bento2";

export default function Home() {
  return (
    
    <>
      <Bento />
      <Divider className="mx-auto max-w-5xl my-8"/>
      <Bento2 />
    </>
  );
}
