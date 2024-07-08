import Image from "next/image";
import { Inter } from "next/font/google";
import Categories from "@/categories/categories"
import Recomended from "@/categories/recomended"
import Footer from "@/categories/footer"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`relative flex items-center min-h-screen flex-col items-center justify-between w-[414px] ${inter.className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center filter-blur"
        style={{
          backgroundImage: "url('/background (4).jpg')",
          filter: 'blur(100px)',
          zIndex: -1,
        }}
      ></div>
      <div className="relative z-10 w-full ">
        <section 
        className="w-full h-[35svh] rounded-lg"
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
        >
          <div
        className="absolute inset-0 bg-cover bg-center filter-blur"
        style={{
          backgroundImage: "url('/background (4).jpg')",
          filter: 'blur(10px)',
          zIndex: 1,
        }}
      ></div>
        <div className="relative z-10 w-full flex">
            <div className="mx-2">
              <h1 className="mt-6 mb-10 font-bold text-md"><span className="text-red-500 font-bolder text-xl">P</span>ius Das</h1>
              <h2 className="font-semibold text-lg">Rule your world</h2>
              <p className="italic text-sm font-sm text-yellow-500 typewriter-text">Beauty beyound borders</p>
              <p className="text-sm font-sm text-gray-200">Enhancing your natural beauty with a touch of elegance and sophistication</p>
            </div>
            <div className="w-full h-full">
              <img src="/model (5a).png" />
            </div>
        </div>
        </section>
        <section className="w-full p-2">
          <Categories />
          <Recomended />
        </section>
      </div>
      <Footer />
    </main>
  );
}
