import { BsTrophy } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import image1 from "../assets/images/Rectangle 22.png";
import image2 from "../assets/images/Rectangle 24.png";
import image3 from "../assets/images/Rectangle 27.png";
import image28 from "../assets/images/Rectangle 28.png";
import image30 from "../assets/images/Rectangle 30.png";
const Home = () => {
  return (
    <section className="">
      {/* Hero */}
      <img
        className="w-full"
        src="https://media.istockphoto.com/photos/group-of-elementary-students-having-computer-class-with-their-teacher-picture-id1358014313?b=1&k=20&m=1358014313&s=170667a&w=0&h=t_bvZVk1eQhR1SiiuRphbJ3kljcJJ46QAsOQ8EnuLbA="
        alt=""
      />

      {/* Mission */}
      <div className="p-[4rem] mission-img text-white">
        <h1 className="text-center font-bold text-2xl my-5">Mission</h1>
        <p className="text-center">
          The mission of Amberschool is to develop intellectually curious and
          capable young people who are selfless contributors to both local and
          global communities, and who aspire to be ethical and compassionate
          leaders. Through a rigorous and innovative academic program in math,
          science, and technology, in combination with commerce and arts.
          Amberschool affords its diverse student population those experiences,
          skills, and values that will prepare them for purposeful contributions
          in higher education and STEM-related fields.
        </p>
      </div>
      <div className="sm:flex justify-between bg-[#F0F0F0] px-[6rem] py-[8rem] text-black text-5xl">
        <div className="flex flex-col items-center my-[3rem]">
          <FaGraduationCap className="text-orange-500" />
          <h1 className="text-orange-500 text-2xl my-3">#5</h1>
          <p className="text-lg">Ranked</p>
        </div>
        <div className="flex flex-col items-center my-[3rem]">
          <BsTrophy className="text-orange-500" />

          <h1 className="text-orange-500 text-2xl my-3">15+</h1>
          <p className="text-lg">School Programs</p>
        </div>
        <div className="flex flex-col items-center my-[3rem]">
          <GiBrain className="text-orange-500" />

          <h1 className="text-orange-500 text-2xl my-3">#5</h1>
          <p className="text-lg">Students</p>
        </div>
      </div>

      {/* Programs */}
      <div className="md:grid grid-cols-3  gap-8 px-[4rem] py-[8rem] text-white">
        <div className="bg-[#0F3876] text-center p-[3rem] my-8 rounded-md flex flex-col items-center ">
          <h1 className="text-2xl font-bold p-4">Nursery</h1>
          <h1 className="text-lg">Nursery 1 & 2</h1>
        </div>
        <div className="bg-[#0F3876] text-center p-[3rem] my-8 rounded-md flex flex-col items-center ">
          <h1 className="text-2xl font-bold p-4">Primary</h1>
          <h1 className="text-lg">Primary 1 & 2</h1>
          <h1 className="text-lg ">
            Amber school offers classes from primary 1-6. students with
            exceptional and impressive performance will be graduated from
            primary 5.
          </h1>
        </div>
        <div className="bg-[#0F3876] text-center p-[3rem] my-8 rounded-md flex flex-col items-center ">
          <h1 className="text-2xl font-bold p-4">Secondary</h1>
          <h1 className="text-lg">JSS1-SS3</h1>
        </div>
      </div>

      {/* Gallery & News */}
      <div className="flex mx-[3.5rem] gap-6 text-black">
        <div className="">
          <h1 className="font-semibold text-2xl mb-8 capitalize">
            graduation class galleria
          </h1>
          <div className="grid grid-rows-2">
            <img src={image1} className="row-span-full" alt="" />
            <img src={image2} className="row-start-1 " alt="" />
            <img src={image3} className="" alt="" />
          </div>
          <div className="grid grid-rows-2">
            <img src={image28} className="" alt="" />
            <img src={image30} className=" col-start-2" alt="" />
          </div>
        </div>
        <div className="w-[40%] mx-auto">
          <h1 className="font-semibold text-2xl mb-8 capitalize text-left">
            newsroom
          </h1>
          <div>
            <hr className="mb-4 bg-black h-[2px]" />
            <h1 className="font-bold capitalize">
              amberschool school of 2022 graduation list
            </h1>
            <p className="font-semibold mb-8">12/03/2023</p>
            <hr className="mb-4 bg-black h-[2px]" />
            <h1 className="font-bold capitalize">
              amberschool school of 2022 graduation list
            </h1>
            <p className="font-semibold mb-8">12/03/2023</p>
            <hr className="mb-4 bg-black h-[2px]" />
            <h1 className="font-bold capitalize">
              amberschool school of 2022 graduation list
            </h1>
            <p className="font-semibold mb-8">12/03/2023</p>
            <hr className="mb-4 bg-black h-[2px]" />
            <h1 className="font-bold capitalize">
              amberschool school of 2022 graduation list
            </h1>
            <p className="font-semibold mb-8">12/03/2023</p>
          </div>
          <button className="px-4 py-1 border-orange-500 border-2 border-solid text-orange-500 rounded-sm">More News</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
