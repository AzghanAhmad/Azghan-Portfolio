// Predefined Styles
export const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  // Hero main heading (smaller + white)
  heroHeadText:
    "font-extrabold text-white lg:text-[56px] sm:text-[44px] xs:text-[38px] text-[32px] lg:leading-[72px] mt-2",

  // Hero subheading (medium gray tone)
  heroSubText:
    "text-gray-300 font-medium lg:text-[22px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[32px]",

  // Section headings (white)
  sectionHeadText:
    "text-white font-extrabold md:text-[36px] sm:text-[36px] xs:text-[30px] text-[26px]",

  // Section subheadings (dark gray accent)
  sectionSubText:
    "sm:text-[16px] text-[13px] text-gray-400 uppercase tracking-wider",
} as const;
