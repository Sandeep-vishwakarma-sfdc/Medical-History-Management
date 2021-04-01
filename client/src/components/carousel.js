import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel' ;
export class BootstrapCarousel extends Component {  
        render() {  
  
                return (  
                        <div>  
                         <div>  
                          <div className="row title" style={{ marginBottom: "0px" }} >  
                          
                         </div>  
                         </div>  
                         <div>  
                         <Carousel>  
                         <Carousel.Item style={{'height':"600px"}} >  
                         <img style={{'height':"600px"}}  
                         className="d-block w-100"
                         alt="1"  
                         src = {'http://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-6.jpg'}/>
                           <Carousel.Caption>  
                             <h3>First Demo </h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item>  
                                 <Carousel.Item style={{'height':"600px"}}>  
                                 <img style={{'height':"600px"}}  
                                   className="d-block w-100"  

                                   alt="2" 


                                    src={'https://wallpaperaccess.com/full/677939.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3>Second Demo</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"6 00px"}}>  
                                       <img style={{'height':"600px"}}  

                                        className="d-block w-100" 
                                        alt="3"  

                                         src={'https://martechtoday.com/wp-content/uploads/2018/08/ss-health-life-medical_isu6fh.jpg'}   />  
                                        <Carousel.Caption>  
                                          <h3>Third Demo</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
  

export default BootstrapCarousel;

