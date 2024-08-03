import React, { useState } from "react";
import pic1 from "../assets/data_glove/pic1.png";
import pic2 from "../assets/data_glove/pic2.png";
import pic3 from "../assets/data_glove/pic3.png";
import pic4 from "../assets/data_glove/pic4.png";
import Slide1 from "../assets/data_glove/Slide1.JPG";

const images = [pic1, pic2, pic3, pic4, Slide1];

const Projects = () => {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="Projects">
      <div className="projects-section">
        {selected !== -1 ? (
          <div className="image_pop">
            <img
              src={images[selected]}
              alt="pop"
              onClick={() => {
                setSelected(-1);
              }}
            />
          </div>
        ) : null}
        <div className="capsule">
          <div className="description">
            <div className="label">Data Glove</div>
            <p>
              In an era of advancing technology and immersive simulations, the
              demand for intuitive and natural interfaces in virtual
              environments has reached unprecedented levels. This project meets
              this demand by introducing a groundbreaking data glove capable of
              capturing real-time hand movements, offering a transformative
              solution for interactive experiences within virtual
              representations. Current virtual interaction methods often fall
              short in replicating the natural nuances of hand gestures.
              Traditional input devices, such as controllers and keyboards,
              constrain users to predefined actions, lacking the subtlety
              required for nuanced interactions. This innovation is particularly
              crucial for applications where precision and realism are strongly
              required. In healthcare, for instance, realistic simulations play
              a pivotal role in training medical professionals. Similarly, in
              educational simulations, hands-on learning in virtual environments
              has the potential to revolutionize classroom experiences. This
              technology extends its impact to diverse fields, including virtual
              training and gaming experiences. The data glove is equipped with
              all circuits and sensors directly embedded within the glove,
              either soldered onto the glove or sewn using conductive threads
              and other materials. The signal from the flex sensors,
              accelerometer, gyroscope, and magnetometer is seamlessly processed
              by the mainboard, an ESP32, situated on the glove and powered by a
              Li-Po battery. The mainboard transmits this rich dataset through a
              Wi-Fi connection to the hosting laptop. On the laptop, a Unity
              simulation actively runs, ready to connect, receive, and process
              the incoming data. The integration of advanced sensors and
              real-time data transmission enables the Unity simulation to
              compute the new position of the hand and fingers with remarkable
              precision in a matter of milliseconds.
            </p>
          </div>
          <div className="images">
            {images.map((image, index) => (
              <img
                src={image}
                alt="something"
                key={index}
                onClick={() => setSelected(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
