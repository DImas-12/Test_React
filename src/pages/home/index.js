import React from "react";
import "./index.css";
import { CiDollar } from "react-icons/ci";
const HomePages = () => {
  let data = [
    { id: 1, beli: "16.150,00", jual: "Rp 16.350,00" },
    { id: 2, beli: "11.985,00", jual: "Rp 12.185,00" },
    { id: 3, beli: "17.510,00", jual: "Rp 17.730,00" },
    { id: 4, beli: "10.575,00", jual: "Rp 10.760,00" },
  ];
  return (
    <>
      <h2 className="divCenter">Kurs Bank INA</h2>

      <div
        className="divCenter"
        style={{
          marginTop: "10px",
        }}
      >
        <span
          style={{
            width: "10%",
            border: "3px solid #105571",
          }}
        ></span>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label style={{ color: "#cc2224" }}>Bank INA Rate Curency</label>
          <label style={{ color: "#105571" }}>25/07/2024 - 11:21 WIB</label>
        </div>

        <div
          style={{
            marginTop: "10px",
            border: "0.3px solid gray",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20%",
          marginTop: "20px",
          padding: "10px",
        }}
      >
        {data.map((e) => {
          return (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
              key={e.id}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <CiDollar
                  style={{
                    color: "#105571",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                <label>USD</label>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <label>Beli</label>
                <label style={{ fontWeight: "bold" }}>{e.beli}</label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <label>Jual</label>
                <label style={{ fontWeight: "bold" }}>{e.jual}</label>
              </div>
            </div>
          );
        })}
      </div>
      <div className="divCenter">
        <button
          style={{
            width: "20%",
            height: "30px",
            backgroundColor: "#cc2224",
            color: "white",
            marginTop: "5%",
            border: "none",
            borderRadius: "10px",
          }}
        >
          Selengkapnya
        </button>
      </div>
    </>
  );
};

export default HomePages;
