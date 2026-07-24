import { useState } from "react";
import styled from "styled-components";
import { Menu, X, ChevronDown } from "lucide-react";

import imgLogo from "../assets/icons/navbar/logo.png";
import imgArrow from "../assets/icons/navbar/arrow.svg";
import imgLogin from "../assets/icons/navbar/login.svg";
import imgProfile from "../assets/icons/navbar/profile.svg";
import imgChevronSmall from "../assets/icons/navbar/chevron.svg";

/* ------------------------------------------------------------------ */
/*  Design tokens (pulled from the Figma variables)                    */
/* ------------------------------------------------------------------ */
const tokens = {
  primary900: "#082636",
  primary400: "#4a7e92",
  primary800: "#0d394d",
  primary100: "#c2d3db",
  logoText: "#002843",
  warningBg: "#faeeda",
  warningText: "#854f0b",
  neutralBorder: "#e2e6ea",
};

const cardShadow = "0px 1px 1.5px rgba(0,0,0,0.1), 0px 1px 1px rgba(0,0,0,0.06)";

const navItems = [
  { name: "Trade", hasDropdown: true },
  { name: "Analyse", hasDropdown: false },
  { name: "Watchlist", hasDropdown: false, isNew: true },
  { name: "Position", hasDropdown: false },
  { name: "Orders", hasDropdown: false },
];

/* ------------------------------------------------------------------ */
/*  Layout primitives                                                  */
/* ------------------------------------------------------------------ */
const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: white;
  box-shadow: ${cardShadow};
`;

const Bar = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 16px;

  @media (min-width: 640px) {
    padding: 0 24px;
  }
  @media (min-width: 1024px) {
    padding: 0 32px;
  }
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
`;

const LogoMark = styled.img`
  height: 32px;
  width: auto;
`;

const LogoText = styled.span`
  font-family: "Geist", "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.24px;
  color: ${tokens.logoText};
  white-space: nowrap;
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 23px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.6px;
  color: ${(p) => (p.$active ? tokens.primary900 : tokens.primary400)};
  white-space: nowrap;

  &::after {
    content: "";
    display: ${(p) => (p.$active ? "block" : "none")};
    position: absolute;
    left: 0;
    right: 0;
    bottom: -8px;
    height: 2px;
    background: ${tokens.primary900};
    border-radius: 2px 2px 0 0;
  }
`;

const DropdownIcon = styled.img`
  width: 13px;
  height: 12px;
  transform: rotate(90deg);
`;

const NewBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${tokens.warningBg};
  color: ${tokens.warningText};
  height: 17px;
  padding: 0 5px 1px 6px;
  border-radius: 3px;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.6px;
`;

const RightGroup = styled.div`
  display: none;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid ${tokens.primary800};
  border-radius: 4px;
  background: none;
  cursor: pointer;
  padding: 5px 12px;

  img {
    width: 16px;
    height: 16px;
  }

  span {
    font-family: "Geist", "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.24px;
    color: ${tokens.primary800};
  }
`;

const ProfileGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: none;
  background: ${tokens.primary100};
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const ChevronSmall = styled.img`
  width: 12px;
  height: 7.4px;
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 8px;
  cursor: pointer;
  color: ${tokens.primary800};

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  border-top: 1px solid ${tokens.neutralBorder};
  background: white;
  padding: 12px 16px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileLink = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: ${(p) => (p.$active ? "#eef4f6" : "transparent")};
  color: ${(p) => (p.$active ? tokens.primary900 : tokens.primary400)};
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

const MobileLinkLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MobileFooter = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${tokens.neutralBorder};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MobileActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border-radius: 6px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  cursor: pointer;
  border: ${(p) => (p.$outline ? `1px solid ${tokens.primary800}` : "none")};
  background: ${(p) => (p.$outline ? "white" : "#f1f5f7")};
  color: ${(p) => (p.$outline ? tokens.primary800 : tokens.primary900)};

  img {
    width: 16px;
    height: 16px;
  }
`;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function Navbar({ onLoginClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Trade");

  return (
    <Header>
      <Bar>
        <LogoGroup>
          <LogoMark src={imgLogo} alt="MachFinance" />
          <LogoText>MachFinance</LogoText>
        </LogoGroup>

        <DesktopNav>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              $active={activeTab === item.name}
              onClick={() => setActiveTab(item.name)}
            >
              {item.name}
              {item.hasDropdown && <DropdownIcon src={imgArrow} alt="" />}
              {item.isNew && <NewBadge>New</NewBadge>}
            </NavLink>
          ))}
        </DesktopNav>

        <RightGroup>
          <LoginButton onClick={onLoginClick}>
            <img src={imgLogin} alt="" />
            <span>Login</span>
          </LoginButton>
          <ProfileGroup>
            <Avatar>
              <img src={imgProfile} alt="" />
            </Avatar>
            <ChevronSmall src={imgChevronSmall} alt="" />
          </ProfileGroup>
        </RightGroup>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </Bar>

      {isOpen && (
        <MobileMenu>
          {navItems.map((item) => (
            <MobileLink
              key={item.name}
              $active={activeTab === item.name}
              onClick={() => {
                setActiveTab(item.name);
                setIsOpen(false);
              }}
            >
              <MobileLinkLabel>
                {item.name}
                {item.isNew && <NewBadge>New</NewBadge>}
              </MobileLinkLabel>
              {item.hasDropdown && <ChevronDown size={16} />}
            </MobileLink>
          ))}
          <MobileFooter>
            <MobileActionButton
              $outline
              onClick={() => {
                setIsOpen(false);
                onLoginClick?.();
              }}
            >
              <img src={imgLogin} alt="" />
              Login
            </MobileActionButton>
            <MobileActionButton>
              <img src={imgProfile} alt="" />
              Account
            </MobileActionButton>
          </MobileFooter>
        </MobileMenu>
      )}
    </Header>
  );
}
