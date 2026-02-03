import {
  LayoutContainer,
  Header,
  HeaderContent,
  Logo,
  Main,
  Footer,
  FooterContent,
  FooterText,
  Copyright,
} from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <LayoutContainer>
      <Header>
        <HeaderContent>
          <Logo>TESTBANK</Logo>
        </HeaderContent>
      </Header>

      <Main>
        {children}
      </Main>

      <Footer>
        <FooterContent>
          <FooterText>
            Калькулятор депозитов с поддержкой сложных процентов
          </FooterText>
          <Copyright>
            © TESTBANK {currentYear}. Все расчеты носят ознакомительный характер.
          </Copyright>
        </FooterContent>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
