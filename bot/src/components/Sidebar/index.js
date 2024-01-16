import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, register }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={() => {
              register ? window.location.href = "/#competitions" : toggle()
              }} to="competitions" smooth={true}>
            Provas
          </SidebarLink>
          <SidebarLink onClick={() => {
              register ? window.location.href = "/#sponsors" : toggle()
              }} to="sponsors" smooth={true}>
            Apoios
          </SidebarLink>
          <SidebarLink onClick={() => {
              register ? window.location.href = "/#team" : toggle()
              }} to="team" smooth={true}>
            Equipa
          </SidebarLink>
          <SidebarLink onClick={() => {
              register ? window.location.href = "/#faq" : toggle()
              }} to="faq" smooth={true}>
            FAQ
          </SidebarLink>
        </SidebarMenu>
        {register ? (
          ""
        ) : (
          <SideBtnWrap>
            <SidebarRoute onClick={toggle} to="registration">
              Inscrições
            </SidebarRoute>
          </SideBtnWrap>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
