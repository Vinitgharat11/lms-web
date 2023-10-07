import Image from "next/image";

export default function Logo() {
  return (
    <div className="">
      <Image
        src="/logo.svg"
        alt="logo"
        width={128}
        height={128}
        priority={true}
      />
    </div>
  );
}
