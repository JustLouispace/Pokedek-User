import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { MdCollectionsBookmark, MdSettings } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GoRequestChanges } from "react-icons/go";
import { CgPokemon } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <p className="text-white mb-0">PokeDek For eve</p>
            </div>
            <div className="col-7 text-end">
              <p className="text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+91 8264954234">
                  +91 8264954234
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-3 col-6 d-flex align-items-center">
              <h2>
                <Link to="/" className="text-white fs-2 d-flex align-items-center">
                  <img src="images/LogowhiteNobg.png" className="LogoLandingpage" alt="Logo" />
                  <span>PokeDek</span>
                </Link>
              </h2>
            </div>
            <div className="col-lg-4 col-md-5 col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BiSearchAlt className="fs-8" />
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-9 col-12 text-lg-end">
              <div className="row justify-content-lg-end">
                <div className="col-auto">
                  <Link
                    to="/PokemonCollection"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <CgPokemon size={30} alt="All Card" />
                    <p className="align-center">My Collection</p>
                  </Link>
                </div>
                <div className="col-auto">
                  <Link
                    to="/my-collection"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <MdCollectionsBookmark size={30} alt="My Collection" />
                    <p className="align-center">My Collection</p>
                  </Link>
                </div>
                <div className="col-auto">
                  <Link
                    to="/Request"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <GoRequestChanges size={30} alt="Request" />
                    <p className="align-center">Request</p>
                  </Link>
                </div>
                <div className="col-auto">
                  <Link
                    to="/setting"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <MdSettings size={30} alt="setting" />
                    <p className="align-center">Setting</p>
                  </Link>
                </div>
                <div className="col-auto">
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <AiOutlineUser size={30} alt="user" />
                    <p className="align-center">Log in</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
