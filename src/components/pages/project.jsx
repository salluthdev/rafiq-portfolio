import Image from "next/image";
import Link from "next/link";

const PROJECT = [
  {
    name: "petai",
    link: "https://petai.org/",
  },
  {
    name: "agency",
    link: "https://codedesign.dev/",
  },
];

export default function Project() {
  return (
    <div className="wrapper">
      <div className="flex flex-col gap-4 my-20">
        {PROJECT.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            data-aos="flip-right"
          >
            <div className="w-full relative aspect-[632/324]">
              <Image
                src={`/svg/project/${item.name}.svg`}
                fill
                alt=""
                className="rounded active:scale-95 transition cursor-pointer"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
