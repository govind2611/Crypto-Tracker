import React, { useEffect } from "react";
import "./style.css";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";

const BackToTop = () => {
  useEffect(() => {
    let mybutton = document.getElementById("myBtn");

    function scrollFunction() {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }

    scrollFunction();

    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="back-to-top-btn" id="myBtn" onClick={() => topFunction()}>
      <KeyboardDoubleArrowUpRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
};

export default BackToTop;
