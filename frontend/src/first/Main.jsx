import React from "react";
import "./Main.css";
import middle from "../images/MIDDLE.png";
import first from "../images/first.png";
import logo from "../images/logo.jpg";
import CustomWheel2 from "../customwheel2/CustomWheel2";

const main = () => {
  return (
    <div className="main_div">
      {/* top */}
      <div className="flex justify-around pt-4">
        <div className="pt-1 pb-1 flex justify-center align-center bg-black rounded rounded-full w-72 h-[56px]">
          <p className="w-full text-center bg-yellow-400 text-black rounded rounded-full font-bold">
            PLAY LIVE DRAW ON <span className="text-red-700">YOUTUBE</span>{" "}
            <br />
            SINGAPORE LOTTERIES{" "}
          </p>
        </div>
        <div className="">
          <img className="lottery" src={middle} alt="middle" />
        </div>
        <div className="pt-1 pb-1 flex justify-center align-center bg-black rounded rounded-full w-56 h-[56px]">
          <p className="w-full flex justify-center items-center bg-yellow-400 text-black rounded rounded-full font-bold">
            LIVE FROM SINGAPORE
          </p>
        </div>
      </div>
      {/* middle */}
      <div className="mt-4 w-[96%] h-[73%] mx-auto flex justify-between ">
        <div className="w-[50px] h-[100%] flex justify-between items-center mr-2 ">
          <div className="w-full h-[90%] flex flex-col justify-evenly items-center text-black text-5xl rounded rounded-full font-bold">
            <p className="pxwell font-extrabold">P</p>
            <p className="pxwell font-extrabold">X</p>
            <p className="pxwell font-extrabold">W</p>
            <p className="pxwell font-extrabold">E</p>
            <p className="pxwell font-extrabold">L</p>
            <p className="pxwell font-extrabold">L</p>
          </div>
        </div>
        <div className="w-9/12 border border-2 h-[100%]">
          <CustomWheel2 />
        </div>

        <div className="curve w-2/12 bg-red-600 ml-1 flex flex-col justify-center items-center">
          <img src={first} className="h-16 w-16" alt="first" />
          <p className="text-teal-200 font-extrabold text-5xl">prize</p>
          <p className="prize font-bold text-3xl ">ON</p>
          <p className="prize font-bold text-3xl ">5</p>
          <p className="prize font-bold text-3xl ">DIGITS</p>
          <p className="prize font-bold text-3xl ">WITH</p>
          <p className="prize font-bold text-3xl ">SERIES</p>
        </div>
        <div className="w-[50px] h-[100%] flex justify-between items-center ml-2 ">
          <div className="w-full h-[90%] flex flex-col justify-evenly items-center text-black text-5xl rounded rounded-full font-bold">
            <p className="pxwell font-extrabold">P</p>
            <p className="pxwell font-extrabold">X</p>
            <p className="pxwell font-extrabold">W</p>
            <p className="pxwell font-extrabold">E</p>
            <p className="pxwell font-extrabold">L</p>
            <p className="pxwell font-extrabold">L</p>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-around pt-4">
        <div className="pt-1 pb-1 flex justify-center align-center bg-black rounded rounded-full w-64 h-12">
          <p className="w-full flex justify-center items-center bg-red-700 text-white rounded rounded-full font-bold">
            DRAW DATE - 11.08.2024
          </p>
        </div>
        <div className="">
          <img className="logo" src={logo} alt="middle" />
        </div>
        <div className="pt-1 pb-1 flex justify-center align-center bg-black rounded rounded-full w-56 h-12">
          <p className="w-full flex justify-center items-center bg-red-700 text-white rounded rounded-full font-bold">
            DRAW TIME - 10.00PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default main;
