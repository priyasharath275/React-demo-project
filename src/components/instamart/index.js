import { useState } from "react";
import "./index.css";

const Section = ({ sectitle, secDescription, isVisible ,setVisible}) => {
  return (
    <div className="sec_div">
      <h1>{sectitle}</h1>
      {isVisible ? (
        <>
          <button onClick={(e) => setVisible(false)}>Hide</button> <p>{secDescription}</p>
        </>
      ) : (
        <button onClick={() => setVisible(true)}>Show</button>
      )}
    </div>
  );
};

const Instamart = () => {
    const[isVisibleSec ,setIsVisibleSec] = useState("about")
  return (
    <>
      <Section
        sectitle={"About US"}
        secDescription={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={isVisibleSec === "about"}
        setVisible ={() => setIsVisibleSec("about")}
      ></Section>
      <Section
        sectitle={"Teams"}
        secDescription={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by acciden"
        }
        isVisible={isVisibleSec === "team"}
        setVisible ={() => setIsVisibleSec("team")}
      ></Section>
      <Section
        sectitle={"Carrer"}
        secDescription={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={isVisibleSec === "career"}
        setVisible ={() => setIsVisibleSec("career")}
      ></Section>
    </>
  );
};

export default Instamart;
