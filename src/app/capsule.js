import React from "react";
import Image from "next/image";
export default function Capsule(props) {
  const { imageInfo1, imageInfo2 } = props;
  return (
    <div className="mx-4 my-4">
      <div className="relative w-200 h-[100px]">
        <Image
          src={imageInfo2}
          layout="fill"
          objectFit="cover"
          alt="company image"
          className="rounded-lg"
          loading="lazy"
        />
        <span className="absolute top-2 left-2 bg-slate-950 text-slate-100 -ml-6 text-xs py-1 px-2 rounded-r-xl">
          20 APR
        </span>
        <p className="absolute bottom-2 left-2 text-white text-xs px-2 py-1 rounded">
          The Covid-19 Epidemic In 2022 Is Back
        </p>
      </div>
      <div className="relative w-250 h-[300px] my-4">
        <Image
          src={imageInfo1}
          layout="fill"
          objectFit="cover"
          alt="company image"
          className="rounded-lg"
          loading="lazy"
        />
        <span className="absolute top-2 left-2 bg-slate-950 text-slate-100 -ml-6 text-xs py-1 px-2 rounded-r-xl">
          20 APR
        </span>
        <p className="absolute top-12 left-2 text-white text-sm  px-2 py-1 rounded">
          The Covid-19 Epidemic In 2023 Is Back
        </p>
      </div>
    </div>
  );
}
