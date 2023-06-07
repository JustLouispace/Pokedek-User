import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdCollectionsBookmark, MdSettings } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GoRequestChanges } from "react-icons/go";
import { CgPokemon } from "react-icons/cg";
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const userId = localStorage.getItem("userId");

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUser();
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('MyCollection');
    window.location.reload();
  };

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <p className="text-white mb-0">PokeDek For everyone</p>
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
                  <img src="https://res.cloudinary.com/dbq8yjojg/image/upload/v1686137364/LogowhiteNobg_bh4nik.png" className="LogoLandingpage" alt="Logo" />
                  <span>PokeDek</span>
                </Link>
              </h2>
            </div>
            <div className="col-lg-4 col-md-5 col-6">
              <div className="input-group">
              </div>
            </div>
            <div className="col-lg-6 col-md-9 col-12 text-lg-end">
              <div className="row justify-content-lg-end">
                <div className="col-auto mt-auto mb-auto">
                  <Link
                    to="/trainer"
                    className="d-flex align-items-center gap-10 text-white"
                    onClick={scrollToTop}
                  >
                    <FiUsers size={30} alt="All Card" />
                    <p className="align-center">Trainer</p>
                  </Link>
                </div>
                <div className="col-auto mt-auto mb-auto">
                  <Link
                    to="/PokemonCollection"
                    className="d-flex align-items-center gap-10 text-white"
                    onClick={scrollToTop}
                  >
                    <CgPokemon size={30} alt="All Card" />
                    <p className="align-center">Pokemon Collection</p>
                  </Link>
                </div>
                <div className="col-auto mt-auto mb-auto">
                  <Link
                    to={`/my-collection/${userId}`}
                    className="d-flex align-items-center gap-10 text-white"
                    onClick={scrollToTop}
                  >
                    <MdCollectionsBookmark size={30} alt="My Collection" />
                    <p className="align-center">My Collection</p>
                  </Link>
                </div>
                <div className="col-auto mt-auto mb-auto">
                  <Link
                    to="/Request"
                    className="d-flex align-items-center gap-10 text-white"
                    onClick={scrollToTop}
                  >
                    <GoRequestChanges size={30} alt="Request" />
                    <p className="align-center">Request</p>
                  </Link>
                </div>
                <div className="col-auto mt-auto mb-auto ml-2">
                  {localStorage.getItem('token') ? (
                    <button
                      onClick={handleLogout}
                      className="logout-button d-flex align-items-center gap-10 text-white"
                    >
                      <AiOutlineUser size={30} alt="user" />
                      <div className="">
                        <p className="align-center">Welcome</p>
                        <p className="align-center">Log out</p>
                      </div>
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="d-flex align-items-center gap-10 text-white"
                    >
                      <AiOutlineUser size={30} alt="user" />
                      <p className="align-center">Log in</p>
                    </Link>
                  )}
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
