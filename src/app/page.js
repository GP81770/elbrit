import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeightScale,
  faCapsules,
  faWheatAwn,
  faFlask,
  faLeaf,
  faSnowflake,
  faCartFlatbed,
  faCube,
  faRecycle,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Three from "./three";
import Four from "./four";
import Plus from "./plus";
import Turmeric from "./turmeric";
import Capsule from "./capsule";

export default function Home() {
  return (
    <div className="sm:text-sm">
      <section className="ml-36 text-gray-800 " id="header">
        <Image
          src={"/company.png"}
          width={150}
          height={150}
          alt="company image"
          loading="lazy"
        />{" "}
      </section>
      <section className="essential m-5 text-cyan-950 p-3 flex flex-col justify-center items-center rounded bg-sky-200">
        <div className="text-3xl md:text-5xl py-10 ">
          <b>Essential&nbsp;Vitamins</b>
        </div>
        <div className="essential1 flex flex-col text-xs md:text-sm md:flex-row gap-10 ">
          <div>
            <p>Online Medical Supplies</p>
            <p>Get your vitamins &amp; minerals</p>
            <button className="bg-cyan-950 text-zinc-200 p-3 my-2 rounded-2xl">
              Explore
            </button>
          </div>
          <div>
            <Image
              src={"/f2-1.png.png"}
              width={170}
              height={170}
              alt="not available"
              loading="lazy"
            />
          </div>
          <div>
            <Three
              data={faCapsules}
              label="Vitamins"
              description="Increased vitamins and minerals in your diet"
            />
            <Three
              data={faWeightScale}
              label="Weight Loss"
              description="Weight Loss find scientifically proven solutions"
            />
            <Three
              data={faWheatAwn}
              label="Functional Foods"
              description="Functional Foods from protein powers to baby formula"
            />
          </div>
        </div>

        <div className=" bg-cyan-950 rounded-3xl pt-16 pb-24 mt-12 px-16  md:px-28 md:mx-36 -mb-36 ">
          <div className="grid text-xs md:grid-cols-3 -my-24 gap-4 pb-8 ">
            <Four
              data={faFlask}
              label="Clinicaly studied"
              description="All product that we offer have undergone lab and safety tests"
            />
            <Four
              data={faLeaf}
              label="Vegetarian friendly"
              description="We have a wide selection of vegetarian products to meet your needs"
            />
            <Four
              data={faSnowflake}
              label="Made in India"
              description="Shop local and explore health products made right here in India"
            />
            <Four
              data={faCartFlatbed}
              label="Free Shipping"
              description="We deliver to your door with no shipping costs on your orders"
            />
            <Four
              data={faCube}
              label="No Risk"
              description="We ensure that all products are safe and within their use-by date"
            />
            <Four
              data={faRecycle}
              label="GMO Free"
              description="Natural, no modified products and derivatives for those who need it"
            />
          </div>
        </div>
      </section>
      <section className=" mt-52 ">
        <div className="grid grid-rows-1 md:grid-cols-3 gap-4 mx-20">
          <div className="bg-white text-slate-950 p-6 auto-cols-fr">
            <h6 className="text-sm">Ingredients</h6>
            <h2 className="text-xl pb-2 font-bold">Better Ingredients</h2>
            <p className="text-xs">
              Only the best when you choose products offered on our platform -
              high-quality ingredients for high quality products!
            </p>
          </div>

          <Plus
            imageTag={"/h2-b1.jpg.png"}
            firstOne="Vitamin C"
            secondOne="Vitamin C as ascorbic acid"
          />

          <Plus
            imageTag={"/bn2-2.jpg.png"}
            firstOne="Vitamin B3"
            secondOne="Niacin for healthy gut and skin"
          />
        </div>
        <div className="grid grid-rows-1 md:grid-cols-2 gap-4 lg:grid-flow-col-dense py-4 mx-20 sm:mx-24">
          <Plus
            imageTag={"/bn2-3.jpg.png"}
            firstOne="Magnesium"
            secondOne="Boost energy and support muscle function"
          />
          <Plus
            imageTag={"/bn2-4.jpg.png"}
            firstOne="Hyaluronic Acid"
            secondOne="For smooth, &#13;&#10;supple and soft skin!"
          />
          <Plus
            imageTag={"/bn2-5.jpg.png"}
            firstOne="Lactobacillus"
            secondOne="Invigorate your gut microbiome"
          />
          <Image
            src={"/last.png"}
            width={97}
            height={97}
            alt={"last image"}
            className=""
            loading="lazy"
          />
        </div>
      </section>
      <section className="mx-12 grid grid-rows-1">
        <div className="flex flex-col justify-center text-center">
          <h6 className="text-sm">Our Blog</h6>
          <h1 className="text-3xl font-bold">Latest News</h1>
        </div>
        <div className="grid mx-8 md:grid-cols-2 lg:grid-cols-4 sm:mx-32">
          <Turmeric
            imageInfo1={"/blog1-450x580.jpg.png"}
            imageInfo2={"/blog2-450x580.jpg.png"}
          />
          <Capsule
            imageInfo1={"/blog2-450x580.jpg.png"}
            imageInfo2={"/blog1-450x580.jpg.png"}
          />
          <Turmeric
            imageInfo1={"/blog1-450x580.jpg.png"}
            imageInfo2={"/blog2-450x580.jpg.png"}
          />
          <Capsule
            imageInfo1={"/blog2-450x580.jpg.png"}
            imageInfo2={"/blog1-450x580.jpg.png"}
          />
        </div>
      </section>
      <footer className="flex flex-col text-xs px-20 md:pl-44 bg-teal-950">
        <div className="flex flex-col  lg:flex-row py-5 md:pl-2 gap-10 ">
          <div className="flex flex-col sm:flex-row bg-teal-800 text-slate-100 rounded-2xl py-3 px-7 gap-6 justify-center items-center">
            <FontAwesomeIcon icon={faPhone} />
            <div>
              <p className="sm:text-xl">Phone Number</p>
              <p className=" text-xs sm:text-sm">+974 3118 1843</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-teal-800 text-slate-100 rounded-2xl py-3 px-7 gap-3 md:gap-6 justify-center items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <p className=" flex sm:text-xl">Email Address</p>
              <p className=" text-xs sm:text-sm">Elbrithcqhr@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-teal-800 text-slate-100 rounded-2xl py-3 px-7 gap-6 justify-center items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            <div>
              <p className="sm:text-xl">Office Location</p>
              <p className=" text-xs sm:text-sm">Ambassador Street, Zone 61,</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 p-3  text-slate-100">
          <Image
            src={"/company.png"}
            width={150}
            height={150}
            alt="company image"
            loading="lazy"
          />
          <div className="sm:w-80">
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </div>
        </div>
        <div className="flex flex-row  text-slate-100 rounded-2xl py-7 px-3 items-center gap-3 ">
          <FontAwesomeIcon icon={faLocationDot} />
          Elbrit Life Sciences Private Limited.C20, BKC, G Block, Mumbai 400051
        </div>
      </footer>
    </div>
  );
}
