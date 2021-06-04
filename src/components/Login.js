import styled from "styled-components";

export default function Login() {
  return (
    <div>
      <Container>
        <Content>
          <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' alt='logo-one'/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
              Get Premier Access to Raya and the Last Dragon for an additional fee
              with a Disney+ subscription. As of 03/26/21, the price of Disney+
              and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="logo-two" />
          </CTA>
          <BgImage />
        </Content>
      </Container>
    </div>
  );
}


const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`

const Content = styled.div`
  margin-bottom: 10vh;
  position: relative;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`

const BgImage = styled.div`
  height: 100%;
  background-image: url('/images/login-background.jpg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
// const CTA = styled.div`
//   margin-bottom: 2vw;
//   max-width: 650px;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 0%;
//   text-align: center;
//   margin-right: auto;
//   margin-left: auto;
//   transition-timing-function: ease-out;
//   transition: opacity 0.2s;
//   width: 100%;
// `

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`

const SignUp = styled.div`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;