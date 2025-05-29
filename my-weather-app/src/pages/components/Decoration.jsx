"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { CiHome, CiLocationOn, CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

export function Search({
  visible = true,
  search,
  onChangeText,
  onPressEnter,
  suggestions = [],
  showSuggestions = false,
  onSelectSuggestion, // нэмэлт функц
}) {
  return (
    <div
      className={`${
        visible ? "block" : "invisible"
      } w-[400px] bg-white rounded-3xl ml-10 mt-9 z-40 absolute shadow-lg`}
    >
      <div className="flex items-center h-[55px] rounded-3xl px-4">
        <AiOutlineSearch className="text-2xl mr-2" />
        <input
          className="p-3 text-xl text-black border-none focus:outline-none w-full"
          placeholder="Search"
          value={search}
          onChange={onChangeText}
          onKeyDown={onPressEnter}
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="max-h-60 overflow-y-auto bg-white border-t border-gray-200 rounded-b-3xl">
          {suggestions.map((city, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
              onClick={() => onSelectSuggestion(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Icons({ iconColor = "black" }) {
  const iconClass =
    iconColor === "white"
      ? "text-white hover:text-gray-500"
      : "text-black hover:text-gray-500";
  return (
    <div
      className={`absolute ml-[157px] my-[720px] h-32 w-[290px] flex justify-around z-40 overflow-visible`}
    >
      <CiHome className={`text-2xl ${iconClass}`} />
      <IoLocationOutline className={`text-xl ${iconClass}`} />

      <CiHeart className={`text-2xl ${iconClass}`} />
      <IoPersonOutline className={`text-xl ${iconClass}`} />
    </div>
  );
}

export function YellowCircle() {
  return (
    <div className="absolute ml-[80px] mt-[60px]">
      <svg
        width="150"
        height="150"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 176 176"
      >
        <circle cx="88" cy="88" r="88" fill="#FF8E27" />
        <circle
          cx="88"
          cy="88"
          r="88"
          fill="url(#paint0_radial)"
          fillOpacity="0.35"
          style={{ mixBlendMode: "overlay" }}
        />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="50%"
            cy="50%"
            r="50%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export function BlueCircle() {
  return (
    <div className="absolute ml-[380px] mt-[710px]">
      <svg
        width="128"
        height="128"
        marginBottom="100"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="64" cy="64" r="64" fill="#6E72C9" />
        <circle
          cx="64"
          cy="64"
          r="64"
          fill="url(#paint0_radial_139_563)"
          fillOpacity="0.35"
          style={{ mixBlendMode: "overlay" }}
        />
        <defs>
          <radialGradient
            id="paint0_radial_139_563"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(64 64) rotate(90) scale(64)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
