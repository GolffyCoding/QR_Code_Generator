/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import "./App.css";
import { QRCode } from "react-qrcode-logo";
function App() {
  const [value, setValue] = useState("Text to QR Code");
  const [getValue, setGetValue] = useState("");

  return (
    <>
      <div className="App">
        <center>
          <div
            style={{
              width: "80%",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
              fontWeight: "bold",
            }}
          >
            Enhance your business with QR Codes! Easily create QR Codes for your
            products, services, or links with just a few clicks. Whether it{`'`}
            s for online payments, sharing information, or promoting your
            business, QR Codes make everything faster and easier. Try creating
            QR Codes with us today and step into the modern age!
          </div>
          <br />
          <br />

          <input
            type="text"
            onChange={(e) => {
              setGetValue(e.target.value);
            }}
            
            placeholder="Text to QR Code"
            style={{
              width: "80%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              textAlign:"center"
            }}
          />
          <br />
          <br />
          <br />
          {value && (
            <QRCode
              value={value}
              size={256}
              logoImage="./assets/my.jpg"
              qrStyle="dots"
            />
          )}
          <br />
          <br />
          <br />
          <button
            type="button"
            style={{
              border: "2px",
              borderColor: "black",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={() => {
              if (getValue != "") {
                setValue(getValue);
              }
            }}
          >
            Generate QR Code
          </button>
          <br />
          <br />
        </center>
      </div>
    </>
  );
}

export default App;
