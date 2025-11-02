import React from "react";

const CustomBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="bottom flex justify-end">
        <p>©SHANTA,{currentYear} . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default CustomBottom;
