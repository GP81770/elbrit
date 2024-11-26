import Image from "next/image";
const Plus = (props) => {
  const { imageTag, firstOne, secondOne } = props;
  return (
    <div className=" text-slate-900 relative rounded-xl overflow-hidden">
      <div className="relative">
        <Image
          src={imageTag}
          height={300}
          width={300}
          alt="vitamin c"
          className="object-cover rounded-2xl"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div>
            <h5 className=" text-xs sm:text-xl font-bold">{firstOne}</h5>
            <p className="text-xs  sm:text-sm pr-6">{secondOne}</p>
          </div>
          <button className="text-xs underline sm:pt-2 flex justify-start">
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Plus;
