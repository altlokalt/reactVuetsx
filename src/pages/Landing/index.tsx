import React from "react";

import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import {
  postLogin,
  PostLoginRequestType,
  PostLoginResponseType,
} from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage: React.FC = () => {
  const [apiData, setapiData] = React.useState<PostLoginResponseType>();
  const navigate = useNavigate();

  function callApi() {
    const req = {};

    postLogin(req)
      .then((res) => {
        setapiData(res?.data);

        localStorage.setItem("apisucces", JSON.stringify(res?.data?.message));

        toast.success("success api");
      })
      .catch((err) => {
        console.error(err);
        toast.error("not succesf");
      });
  }

  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="h-[1080px] md:px-[20px] relative w-[100%]">
          <Img
            src="images/img_jasperlakejpg.png"
            className="h-[1080px] m-[auto] object-cover w-[100%]"
            alt="jasperlakejpg"
          />
          <div className="absolute bg-gradient  flex h-[100%] inset-[0] items-start justify-center m-[auto] sm:px-[20px] px-[376px] md:px-[40px] w-[100%]">
            <div className="flex flex-col items-start justify-start py-[136px] md:w-[100%] w-[48%]">
              <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Find Your Calm
                </Text>
                <Text
                  className="leading-[32.00px] md:max-w-[100%] max-w-[491px] not-italic text-left text-white_A700"
                  as="h2"
                  variant="h2"
                >
                  Our goal is to help you improve your health and happiness.
                </Text>
              </div>
              <Text
                className="mt-[28px] text-left text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                What can we help with today?
              </Text>
              <div className="flex flex-col gap-[8px] items-center justify-start mt-[16px] pb-[8px] w-[100%]">
                <div className="bg-gradient1  p-[2px] rounded-[30px] w-[auto] ">
                  <Text
                    className="common-pointer bg-white_A700 border-solid h-[60px] justify-center sm:px-[20px] px-[35px] py-[19px] rounded-[30px] text-black_900 text-center"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/landing")}
                  >
                    Improve sleep quality
                  </Text>
                </div>
                <div className="bg-gradient2  p-[2px] rounded-[30px] w-[auto] ">
                  <Text
                    className="common-pointer bg-white_A700 border-solid font-medium h-[60px] justify-center sm:px-[20px] px-[35px] py-[19px] rounded-[30px] text-black_900 text-center"
                    as="h6"
                    variant="h6"
                    onClick={() => navigate(-1)}
                  >
                    Reduce stress or anxiety
                  </Text>
                </div>
                <Input
                  className="font-medium p-[0] text-[17px] text-center placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="bg-gradient3  border-[2px] border-solid flex pl-[21px] pr-[35px] py-[19px] rounded-[30px] sm:px-[20px] w-[100%]"
                  name="button Two"
                  placeholder="Improve focus"
                  prefix={
                    <Img
                      src="images/img_signal.svg"
                      className="mr-[16px] my-[auto]"
                      alt="signal"
                    />
                  }
                ></Input>
                <div className="bg-gradient4  p-[2px] rounded-[30px] w-[auto] ">
                  <Text
                    className="common-pointer bg-white_A700 border-solid h-[60px] justify-center sm:px-[20px] px-[35px] py-[19px] rounded-[30px] text-black_900 text-center"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/landing")}
                  >
                    Self-improvement
                  </Text>
                </div>
                <div className="bg-gradient5  p-[2px] rounded-[30px] w-[auto] ">
                  <Text
                    className="common-pointer bg-white_A700 border-solid h-[60px] justify-center sm:px-[20px] px-[35px] py-[19px] rounded-[30px] text-black_900 text-center"
                    as="h5"
                    variant="h5"
                    onClick={() => {
                      callApi();
                    }}
                  >
                    Something else
                  </Text>
                </div>
              </div>
              <Button className="bg-white_A700 border-[1px] border-gray_700 border-solid cursor-pointer font-medium mb-[154px] sm:min-w-[100%] min-w-[560px] mt-[40px] py-[18px] rounded-[29px] text-[17px] text-center text-gray_700 w-[auto]">
                Continue
              </Button>
            </div>
          </div>
        </div>
        <footer className="bg-bluegray_900 flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-center mx-[auto] my-[48px] w-[61%]">
            <div className="gap-[48px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-[100%]">
              <div className="flex flex-1 flex-col gap-[12px] items-start justify-start py-[14px] w-[100%]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Company
                </Text>
                <div className="flex items-center justify-start mb-[45px] w-[100%]">
                  <ul className="flex flex-col items-start justify-start pr-[4px] py-[4px] w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-left text-white_A700_a2"
                        as="h6"
                        variant="h6"
                      >
                        About
                      </Text>
                    </li>
                    <li className="mt-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="mt-[12px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Press
                      </a>
                    </li>
                    <li className="mt-[12px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="mt-[9px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Meet our Instructor
                      </a>
                    </li>
                    <li className="mt-[10px] mb-[1px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Calm Science
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[13px] items-start justify-start py-[13px] w-[100%]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Offers
                </Text>
                <div className="flex items-center justify-start mb-[76px] w-[100%]">
                  <ul className="flex flex-col items-start justify-end pr-[6px] py-[6px] w-[100%] common-column-list">
                    <li className="mt-[1px] w-[auto]">
                      <Text
                        className="cursor-pointer not-italic text-left text-white_A700_a2"
                        variant="body1"
                      >
                        Buy a Gift
                      </Text>
                    </li>
                    <li className="mt-[9px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Redeem a Gift
                      </a>
                    </li>
                    <li className="mt-[12px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Family Plan
                      </a>
                    </li>
                    <li className="mt-[9px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Calm Health
                      </a>
                    </li>
                    <li className="mt-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Calm Business
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[11px] items-start justify-end pt-[14px] w-[100%]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Help
                </Text>
                <div className="flex items-center justify-start w-[100%]">
                  <ul className="flex flex-col items-start justify-start pr-[4px] py-[4px] w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-left text-white_A700_a2"
                        as="h6"
                        variant="h6"
                      >
                        FAQ
                      </Text>
                    </li>
                    <li className="mt-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="mt-[11px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Terms
                      </a>
                    </li>
                    <li className="mt-[13px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="mt-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        CCPA Notice
                      </a>
                    </li>
                    <li className="mt-[12px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Accessibility Statement
                      </a>
                    </li>
                    <li className="mt-[11px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Opt Out of Targeted Ads
                      </a>
                    </li>
                    <li className="mt-[9px] mb-[1px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700_a2"
                        href="javascript:"
                      >
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Img
                src="images/img_ul.svg"
                className="flex-1 h-[288px] w-[100%]"
                alt="ul"
              />
            </div>
            <Text
              className="not-italic text-center text-white_A700_87 w-[auto]"
              variant="body2"
            >
              Copyright © 2023 Calm. All rights reserved
            </Text>
          </div>
        </footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default LandingPage;
