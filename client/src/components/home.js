import BootstrapCarousel from './carousel';
import OurClient from './ourClient';
import Team from './team';
import OurServices from './ourServices';
import Address from './address';

function Home() {
return(
    <div>
    <BootstrapCarousel></BootstrapCarousel>
    <div className="container-fluid">
    <h3 className="row justify-content-center subheader p-2">Our client</h3>
    <div className="row justify-content-center">
      <div className="col-xs-6 col-sm-6 col-md-3">
        <OurClient imagesrc="https://media.istockphoto.com/vectors/medical-team-wearing-face-masks-vector-id1214206519" title="Clinic" caption="We would like to work with you ."></OurClient>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-3">
        <OurClient imagesrc="https://i.kym-cdn.com/entries/icons/original/000/033/734/cover12.jpg" title="Doctors" caption="lets work together ."></OurClient>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-3">
        <OurClient imagesrc="https://graphicriver.img.customer.envatousercontent.com/files/239125793/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=b6df449d85f629db918a15fe94a31c02" title="Guest" caption="hey join us ."></OurClient>
      </div>
    </div>
    </div>
    <Team></Team>
    <OurServices></OurServices>
    <Address></Address>
 
  </div>
);
}

export default Home;