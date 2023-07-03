import React from "react";
import "../styles/section2.css";
import hikers from "../assets/hikers.png";

const Section2 = () => {
  return (
    <div className="one">
      <section>
        <div className="two">
          <div className="Making">
            <div className="Makingchild">
              <h3>
                Making adventures tours, <br /> activities affordable.
              </h3>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                cursus <br /> tortor tempus ac. Purus amet risus amet sagittis. Enim
                nulla a sapien <br /> lectus tellus mauris integer ut. Magna viverra
                sit rhoncus convallis id. <br /> Aenean egestas turpis aenean feugiat
                pharetra sed sed morbi <br /> faucibus.
              </p>
            </div>
          </div>
          <div className="picture">
            <img src={hikers} alt="hikers" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
