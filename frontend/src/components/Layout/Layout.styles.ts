import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #f8fafc;
`;

export const Header = styled.header`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 16px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 32px 20px;
`;

export const Footer = styled.footer`
  background-color: #1e293b;
  color: #cbd5e1;
  padding: 24px 20px;
  text-align: center;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  margin: 0 auto;
`;

export const FooterText = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;

export const Copyright = styled.span`
  font-size: 12px;
  color: #94a3b8;
  margin-top: 8px;
`;
