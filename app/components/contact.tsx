import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaWhatsapp, FaDownload } from "react-icons/fa";

interface ContactSectionProps {
  contactImageUrl: string;
  email: string;
  phone: string;
  whatsapp: string;
  //cvDownloadPath: string;
}

const ContactSection = ({
  contactImageUrl,
  email,
  phone,
  whatsapp,
}: // cvDownloadPath,
ContactSectionProps) => {
  return (
    <section id="contact" className="w-full py-8  px-4 md:px-8 ">
      <div className="text-center mb-12  flex justify-center  md:justify-end w-full">
        <Image
          src="/images/communication.png"
          alt="Contact Header"
          width={310}
          height={18}
          className=" max-h-20  max-w-[400] md:w-[40%]  rounded-[12px] shadow-2xs shadow-amber-300"
          priority
        />
      </div>
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch   ">
          <div
            className="
              relative
              w-full sm:w-1/2
              flex-shrink-0
              mb-0 sm:mb-0
              mx-auto sm:mx-0
              rounded-lg sm:rounded-none
              overflow-hidden
              sm:order-first
            "
          >
            <div
              className="
                hidden sm:block
                relative w-full h-full
                
              "
            >
              <Image
                src={contactImageUrl}
                alt="Contact Person"
                layout="fill"
                objectFit="contain"
                className="rounded-none"
              />
            </div>
          </div>

          <div
            className="
              flex-1
              flex flex-col justify-center items-start sm:items-center
              pb-4 sm:p-6
              text-left sm:text-center

              border-2 border-amber-300
              
              sm:border-l sm:border-amber-300
              sm:border-y-0 sm:border-r-0
              rounded-lg sm:rounded-none
               sm:mt-0
              px-8  mt-10   sm:pt-6
              pt-22
              z-0
              relative
            "
          >
            <div
              className="
                  absolute 
                  top-[64px] 
                  left-1/2 transform -translate-x-1/2 -translate-y-[100%] 
                  w-32 h-32 
                  rounded-full  
                  z-100%
                  block sm:hidden 
                "
            >
              <Image
                src={contactImageUrl}
                alt="Contact Person"
                layout="fill"
                objectFit="fill"
              />
            </div>

            <div className="space-y-[10px] mb-6 w-full max-w-xs sm:max-w-none">
              <p className="flex items-start text-[16px] font-[400]">
                <FaEnvelope className="mr-4 text-[#be28ec] text-[18px] flex-shrink-0 text-center py-auto  my-auto" />

                <a
                  href={`mailto:${email}`}
                  className="link link-hover min-w-0 break-all"
                >
                  {email}
                </a>
              </p>
              <p className="flex items-center text-[16px] font-[400]">
                <FaPhone className="mr-3 text-[#be28ec] text-[18px] flex-shrink-0 text-center py-auto  my-auto" />
                <a
                  href={`tel:${phone}`}
                  className="link link-hover min-w-0 break-all"
                >
                  {phone}
                </a>
              </p>
              <p className="flex items-center text-[16px] font-[400]">
                <FaWhatsapp className="mr-2 text-[#be28ec] text-[22px] flex-shrink-0 text-center py-auto  my-auto" />
                <a
                  href={`tel:${phone}`}
                  className="link link-hover min-w-0 break-all"
                >
                  {phone}
                </a>
              </p>
            </div>

            {/* CV Download Button */}
            {/* <a href={cvDownloadPath} download className="btn btn-primary btn-md">
              <FaDownload className="mr-2" /> Download CV
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
