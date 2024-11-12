import Offer from '../offer/offer'
import Invite from '../invite/invite'
import Header from '../header/header'
import Training from '../training/training'
import PlanSection from '../plan-section/plan-section'
import AcceptDemand from '../accept/accept-demand'
import Digest from '../digest/digest'
import InstructionDetails from '../instruction/instruction-details'
import ChooseDetails from '../choose/choose-details'
import Partners from '../partners/partners'
import Footer from '../footer/footer'
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Offer></Offer>
      <Invite></Invite>
      <PlanSection></PlanSection>
      <Digest></Digest>
      <AcceptDemand></AcceptDemand>
      <InstructionDetails></InstructionDetails>
      <ChooseDetails></ChooseDetails>
      <Training></Training>
      <Partners></Partners>
      <Footer></Footer>


    </div>
  )
}

export default Home