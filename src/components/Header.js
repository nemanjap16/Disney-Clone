import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { auth, provider } from "../firebase/firebase";
import {
  setUserLoginDetails,
  selectUserPhoto,
  selectUserName,
  setSignOutState,
} from "../app/features/userSlice";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const userPhoto = useSelector(selectUserPhoto);
  const userName = useSelector(selectUserName);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((res) => setUser(res.user))
        .catch((error) => alert(error.message));
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        userName: user.displayName,
        userEmail: user.email,
        userPhoto: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  return (
    <>
      <Nav>
        <Logo>
          <NavLink to="/home">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <p>
              <img src="/images/logo.svg" alt="Disney+" />
            </p>
          </NavLink>
        </Logo>
        {!userName ? (
          <Login onClick={handleAuth}>Login</Login>
        ) : (
          <>
            <NavMenu>
              <NavLink to="/home">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <p>
                  <img src="/images/home-icon.svg" alt="HOME" />
                  <span>HOME</span>
                </p>
              </NavLink>
              <NavLink to="/home">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <p>
                  <img src="/images/search-icon.svg" alt="SEARCH" />
                  <span>SEARCH</span>
                </p>
              </NavLink>
              <NavLink to="/home">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <p>
                  <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                  <span>WATCHLIST</span>
                </p>
              </NavLink>
              <NavLink to="/home">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <p>
                  <img src="/images/original-icon.svg" alt="ORIGINALS" />
                  <span>ORIGINALS</span>
                </p>
              </NavLink>
              <NavLink to="/home">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <p>
                  <img src="/images/movie-icon.svg" alt="MOVIES" />
                  <span>MOVIES</span>
                </p>
              </NavLink>
              <NavLink to="/home">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <p>
                  <img src="/images/series-icon.svg" alt="SERIES" />
                  <span>SERIES</span>
                </p>
              </NavLink>
            </NavMenu>
            <SignOut>
              <UserPhoto src={userPhoto} alt={userName} />
              <DropDown>
                <span onClick={handleAuth}>Sign out</span>
              </DropDown>
            </SignOut>
          </>
        )}
      </Nav>
    </>
  );
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.div`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  p {
    display: flex;
    align-items: center;
    padding: 0 16px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  color: #f9f9f9;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserPhoto = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserPhoto} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
