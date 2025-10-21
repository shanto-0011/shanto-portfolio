// import React from 'react';
// import Image from 'next/image';
// import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'; // Using react-icons for convenience

// interface ContactSectionProps {
//   contactImageUrl: string;
//   email: string;
//   phone: string;
//   linkedinUrl: string;
// }

// const ContactSection= ({
//   contactImageUrl,
//   email,
//   phone,
//   linkedinUrl,
// }:ContactSectionProps) => {
//   return (
//     <section className="w-full py-8  px-4 md:px-8 ">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-[24px] md:text-[28px] font-[700]  mb-12 text-center">
//           Get in Touch
//         </h2>

//         {/* Main Flex Container */}
//         <div className="flex flex-col sm:flex-row items-center sm:items-stretch bg-base-100 dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden">

//           {/* Image & Banner Container - Left on SM+, Profile-style on mobile */}
//           <div className="
//               relative // Needed for absolute positioning of image/banner on mobile
//               w-full sm:w-1/2 // Full width on mobile, half on sm+
//               flex-shrink-0 // Prevent from shrinking on desktop
//               mb-0 sm:mb-0 // No bottom margin for this whole block on mobile, as it contains banner/image
//               mx-auto sm:mx-0
//               rounded-lg sm:rounded-none // Rounded corners for the whole banner/image block on mobile
//               overflow-hidden // Crucial to contain the rounded image on mobile
//               sm:order-first // Ensure image is first on desktop
//               bg-white dark:bg-gray-900 // Background for the whole image/banner area
//             ">
//             {/* Mobile Banner Area (visible only on mobile) */}
//             <div className="
//                   block sm:hidden // Only show this div on small screens
//                   h-24 // Fixed height for the blue banner
//                   bg-blue-600 // The blue background color
//                 ">
//             </div>

//             {/* Circular Image Container (mobile-specific positioning) */}
//             <div className="
//                   absolute // Position relative to its closest relative parent (the div above)
//                   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 // Center image vertically and horizontally
//                   w-32 h-32 // Fixed size for the circular image
//                   rounded-full overflow-hidden border-4 border-white shadow-lg // Rounded, white border, shadow
//                   z-20 // Ensure it's above the blue banner
//                   block sm:hidden // Only show this circular image on small screens
//                 ">
//               <Image
//                 src={contactImageUrl}
//                 alt="Contact Person"
//                 layout="fill"
//                 objectFit="fill" // Cover to fill the circle
//               />
//             </div>

//             {/* Desktop Image (visible only on sm+) */}
//             <div className="
//                 hidden sm:block // Only show this div on sm+ screens
//                 relative w-full h-full // Take up full space of parent on desktop
//                 bg-white dark:bg-gray-900 // Ensure a consistent background
//               ">
//               <Image
//                 src={contactImageUrl}
//                 alt="Contact Person"
//                 layout="fill"
//                 objectFit="fill"
//                 className="rounded-none" // Ensure no rounding on desktop
//               />
//             </div>
//           </div>

//           {/* Contact Info - Right on SM+, Below image on mobile */}
//           <div className="
//               flex-1
//               flex-wrap flex-col justify-center items-center sm:items-start
//               px-4 py-4 sm:p-8
//               text-center sm:text-left
//               border-l border-amber-300
//               rounded-lg sm:rounded-none
//               // --- Mobile Specific Adjustments ---
//               -mt-12 sm:mt-0 // Pulls info card up on mobile to overlap the banner/image block slightly
//               pt-20 sm:pt-0 // Push text down to clear the image/banner on mobile
//               z-0 // Ensure it's behind the image/banner block on mobile
//             ">
//             <h3 className="text-[18px] font-bold  mb-6">
//               Contact Us
//             </h3>
//             <div className="space-y-4">
//               <p className="flex-wrap items-center text-lg ">
//                 <FaEnvelope className="mr-3 text-primary text-2xl" />
//                 <a href={`mailto:${email}`} className="flex-wrap link link-hover">
//                   {email}
//                 </a>
//               </p>
//               <p className="flex items-center text-lg text-gray-700 dark:text-gray-300">
//                 <FaPhone className="mr-3 text-primary text-2xl" />
//                 <a href={`tel:${phone}`} className="link link-hover">
//                   {phone}
//                 </a>
//               </p>
//               <p className="flex items-center text-lg text-gray-700 dark:text-gray-300">
//                 <FaLinkedin className="mr-3 text-primary text-2xl" />
//                 <a
//                   href={linkedinUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="link link-hover"
//                 >
//                   LinkedIn Profile
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaWhatsapp, FaDownload } from "react-icons/fa";

interface ContactSectionProps {
  contactImageUrl: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  //cvDownloadPath: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  contactImageUrl,
  email,
  phone,
  linkedinUrl,
  // cvDownloadPath,
}) => {
  return (
    <section className="w-full py-8  px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[24px] md:text-[28px] font-[700]  mb-6 text-center">
          Get in Touch
        </h2>
        {/* Main Flex Container */}
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
                objectFit="fill"
                className="rounded-none"
              />
            </div>
          </div>

          {/* Contact Info - Right on SM+, Below image on mobile */}
          <div
            className="
              flex-1
              flex flex-col justify-center items-center sm:items-start
              pb-4 sm:p-6
              text-center sm:text-left

              border-2 border-amber-300
              
              sm:border-l sm:border-amber-300
              sm:border-y-0 sm:border-r-0
              rounded-lg sm:rounded-none
               sm:mt-0
              px-8  mt-10   sm:pt-0
              pt-15
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
                  rounded-full overflow-hidden border-2 border-white 
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

            {/* <h3 className="text-[16px] font-[700] mx-auto  my-4 text-center">
              Contact
            </h3> */}
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
              {/* LinkedIn */}
              <p className="flex items-center text-[16px] font-[400]">
                <FaWhatsapp className="mr-2 text-[#be28ec] text-[22px] flex-shrink-0 text-center py-auto  my-auto" />
                <a
                  href={`tel:${phone}`}
                  className="link link-hover min-w-0 break-all"
                >
                  {" "}
                  {/* Also added for phone */}
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
