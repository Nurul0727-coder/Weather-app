"use client";
import { useState, useEffect } from "react";
import React from "react";
import WeatherCard from "./components/WeatherCard";
import { Search } from "./components/Decoration";
import Circle from "./components/Circle";
import { YellowCircle, BlueCircle, Icons } from "./components/Decoration";
import { CiLocationOn } from "react-icons/ci";
import Logo from "./components/Logo";

const API_KEY = "5bf8f7f6f1ac4ed1ae772612241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayWeather, setDayWeather] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cities = [
    "Ulaanbaatar",
    "Darkhan",
    "Erdenet",
    "Tokyo",
    "New York",
    "London",
    "Seoul",
    "Berlin",
    "Paris",
    "Beijing",
    "Moscow",
    "Los Angeles",
    "San Francisco",
    "Sydney",
    "Dubai",
    "Bangkok",
    "Singapore",
    "Hong Kong",
    "Kuala Lumpur",
    "Istanbul",
    "Madrid",
    "Rome",
    "Barcelona",
    "Amsterdam",
    "Toronto",
    "Vancouver",
    "Montreal",
    "Chicago",
    "Houston",
    "Miami",
  ];

  const onChangeText = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 0) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const onSelectSuggestion = (selectedCity) => {
    setCity(selectedCity);
    setSearch(selectedCity);
    setShowSuggestions(false);
  };

  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDayWeather({
          temperature: data.forecast.forecastday[0].day.maxtemp_c,
          nightTemp: data.forecast.forecastday[0].day.mintemp_c,
          condition: data.forecast.forecastday[0].day.condition.text,
          date: data.forecast.forecastday[0].date,
        });
      });
  }, [city]);

  return (
    <main>
      <div className="flex h-screen w-full bg-white justify-center relative ">
        <div className="w-[1200px] h-full flex relative font-semibold">
          <div className="w-1/2 h-full bg-[#F3F4F6] relative backdrop-">
            <YellowCircle />
            <Search
              visible={true}
              search={search}
              onChangeText={onChangeText}
              onPressEnter={onPressEnter}
              suggestions={suggestions}
              showSuggestions={showSuggestions}
              onSelectSuggestion={onSelectSuggestion}
            />
            <WeatherCard
              bgcolor="white"
              backdropColor="blur-xl"
              date={dayWeather.date}
              cityName={city}
              temperature={`${dayWeather.temperature}°`}
              stat={dayWeather.condition}
              weatherType="day"
              textColor="black"
              temperatureColor="black"
            />
            <Icons iconColor="#D1D5DB" />
            <CiLocationOn className="absolute text-xl text-black z-40 ml-[405px] my-[200px]" />
          </div>

          <div className="w-1/2 h-full bg-[#0F141E] relative">
            <BlueCircle className="mb-10" />
            <Search visible={false} />
            <WeatherCard
              bgcolor="black"
              date={dayWeather.date}
              cityName={city}
              temperature={`${dayWeather.nightTemp}°`}
              stat={dayWeather.condition}
              weatherType="night"
              textColor="white"
              statColor="green"
            />
            <Icons iconColor="white" />
            <CiLocationOn className="absolute text-xl text-white z-40 ml-[405px] my-[200px]" />
          </div>

          <Circle size={140} />
          <Circle size={340} />
          <Circle size={540} />
          <Circle size={940} />
        </div>
        <Logo />
      </div>
    </main>
  );
}
