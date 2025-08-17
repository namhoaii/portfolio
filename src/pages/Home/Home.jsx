import React from "react";
import { useTranslation } from "react-i18next";

import { Mail, Phone, MapPin } from "lucide-react";

import { Network } from "@components/Network";
import { Skill } from "@components/Skill";
import { GlowLine } from "@components/GlowLine";

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <div className="bg-[#f8fafc]">
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                {t("greeting")}{" "}
                <span className="text-blue-600">{t("name")}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                {t("title")}
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">{t("description")}</p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105"
                >
                  {t("buttons.contact")}
                </a>
                <a
                  href="#projects"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105"
                >
                  {t("buttons.portfolio")}
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center fade-in">
              <div className="hero-image relative">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Developer"
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-blue-100 shadow-xl"
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-full shadow-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-code text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center tracking-wide">
          {t("social.title")}
        </h2>
        <Network />
      </section>
      <section className="pt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center tracking-wide">
          {t("skills.title")}
        </h2>
        <Skill />
      </section>
      <section className="pt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center tracking-wide">
          {t("contact.title")}
        </h2>
        <div className="container mx-auto space-y-6 px-6 lg:px-4 py-4 ">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Mail className="text-blue-600" />
            </div>
            <div>
              <h4 className="text-gray-700 font-medium">
                {t("contact.Email")}
              </h4>
              <a
                href="mailto:alex@example.com"
                className="text-gray-600 hover:text-blue-600"
              >
                hoainamsmurf@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Phone className="text-blue-600" />
            </div>
            <div>
              <h4 className="text-gray-700 font-medium">
                {t("contact.Phone")}
              </h4>
              <a
                href="tel:+1234567890"
                className="text-gray-600 hover:text-blue-600"
              >
                0375 466 695
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <MapPin className="text-blue-600" />
            </div>
            <div>
              <h4 className="text-gray-700 font-medium">
                {t("contact.Location")}
              </h4>
              <p className="text-gray-600">Việt Nam</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
