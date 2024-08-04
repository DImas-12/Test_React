import React from "react";
import award from "../../images/award.png";
import statistick from "../../images/statistic.png";
import img from "../../images/bank_ina.png";

const ProfilePages = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div style={{ width: "50%" }}>
          <div>
            <h2>VISI & MISI</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "10px",
              marginBottom: "8%",
            }}
          >
            <span
              style={{
                width: "7%",
                border: "2px solid red",
              }}
            ></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "7%" }}>
            <img src={award} style={{ width: "10%", height: "10%" }}></img>
            <label>Menjadi Bank nasional pilihan utama masyarakat</label>
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "flex-start",
              gap: "7%",
            }}
          >
            <img src={statistick} style={{ width: "10%", height: "10%" }}></img>
            <ol style={{ width: "70%", textAlign: "justify" }}>
              <li>
                Menunjang perekonomian Indonesia, melalui penyediaan produk dan
                layanan perbankan umum serta digital yang mendukung keberhasilan
                nasabah individu, UMKM dan Korporasi.
              </li>
              <li>Memberikan solusi keuangan yang cepat, aman dan nyaman.</li>
              <li>
                Membangun SDM yang kompeten serta menjunjung tinggi nilai dasar
                perusahaan.
              </li>
              <li>
                Meningkatkan nilai tambah bagi pemegang saham dan pemangku
                kepentingan lainya.
              </li>
            </ol>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <img src={img} style={{ width: "100%", height: "100%" }}></img>
        </div>
      </div>
    </>
  );
};

export default ProfilePages;
