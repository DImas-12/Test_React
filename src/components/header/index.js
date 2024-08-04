import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import img from "../../images/logo_bank_ina.png";
import { RiSearchLine } from "react-icons/ri";

const HeaderComponent = () => {
  const navigate = useNavigate();
  //   let menuProfil = false;
  const [menuProfil, setMenuProfil] = useState(false);
  return (
    <>
      <div>
        <div className="bg">
          <div
            style={{ cursor: "pointer" }}
            className="logo2"
            onClick={() => {
              navigate("/home");
            }}
          >
            <img src={img} className="logo"></img>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              width: "80%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "flex-end",
                marginBottom: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaPhoneAlt className="symbol" />
                <label className="l1">1500738</label>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaMapMarkedAlt className="symbol" />
                <label className="l1">Lokasi</label>
              </div>

              <label className="boxLogin">Login Internet Banking</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label className="l1">ID</label>
                <IoIosArrowDown className="symbol" />
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", overflow: "scroll" }}>
              <label
                className="l2"
                onClick={() => setMenuProfil(!menuProfil)}
                style={{ cursor: "pointer" }}
              >
                PROFIL KAMI
              </label>
              <label className="l2">PRODUK & LAYANAN</label>
              <label className="l2">HUBUNGAN INVESTOR</label>
              <label className="l2">BANK INA DIGITAL</label>
              <label className="l2">HUBUNGI KAMI</label>
              <label className="l2">KARIR</label>
              <RiSearchLine
                style={{
                  color: "#105571",
                  marginRight: "3px",
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            border: "3px solid red",
          }}
        ></div>
      </div>
      {menuProfil ? (
        <div
          className="divCenter"
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label className="l2">PROFIL BANK INA</label>
                <label
                  className="l3"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  Sekilas Bank ina
                </label>
                <label className="l3">Struktur Organisasi</label>
                <label className="l3">Manajemen</label>
                <label className="l3">Penghargaan dan Sertifikat</label>
                <label className="l3">Anggaran Dasar</label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label className="l2">LAIN-LAIN</label>
                <label className="l3">CSR</label>
                <label className="l3">Lembaga dan Profesi Penunjang</label>
                <label className="l3">Pedoman Bank</label>
                <label className="l3">Piagam Audit</label>
                <label className="l3">Komite Audit</label>
                <label className="l3">Komite Pemantau Risiko</label>
                <label className="l3">Komite Anti Korupsi</label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HeaderComponent;
