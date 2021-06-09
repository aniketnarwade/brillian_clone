import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import img1 from "../img/img1.png";
import card1 from "../img/Introduction_img1.png";
import card2 from "../img/Introduction_img2.png";
import card3 from "../img/Introduction_img3.png";
import card4 from "../img/brilliant_org/img (16).png";
import card5 from "../img/brilliant_org/img (24).png";
import card6 from "../img/brilliant_org/img (8).png";
import fcard1 from "../img/brilliant_org/img (7).png";
import fcard2 from "../img/brilliant_org/img (25).png";
import {cardData} from "./carddata";



let Logic = () => {
    /*const cardData = [
        {
            "id":"1",
            "type":"introduction",
            "image":[card1],
            "h4":"Warmup Puzzles",
            "p":"Get started with some logic warmup",
            "height":"w-25"
        },
        {
            "id":"2",
            "type":"introduction",
            "image":[card2],
            "h4":"Truth-Seeking",
            "p":"Who or what is telling the truth",
            "height":"w-75"
        }
    ];*/


    let [cards,setCards] = useState(cardData);
    let [locked,setLocked] = useState(false);
    let [date1,setDate1] =useState({
        hour:10,
        minute:10,
        second:10
    });

    let convertToSecond = (hour,minute,second) => {
        return second + minute * 60 + hour * 60 * 60;
    };

    let startTimer = () => {
        let timer = setInterval(countDown, 1000);
    };

    let countDown = () => {
      let {hour,minute,second} = date1;
      let c_second = convertToSecond(hour,minute,second);
      if (c_second){
          second ? setDate1({...date1,second: second -1}) : setDate1({second: 59});

          if(c_second % 60 === 0 && minute) {
              setDate1({...date1,minute: minute -1});
          }

          if(!minute && hour) {
              setDate1({...date1,minute: 59});
          }

          if(c_second % 3600 === 0 && hour) {
              date1({...date1,hour: hour-1});
          }
          else {
              clearInterval();
          }

      }

    };

    useEffect(()=>{
        setInterval(countDown,1000);
    },[]);

  return(
      <React.Fragment>
          {/*<pre>{JSON.stringify(date1)}</pre>*/}
          {/*<pre>{JSON.stringify(cards[0].introduction)}</pre>*/}
          <div className="bgteal">
              <div className="row">
                  <div className="col">
                      <div className="text-center ">
                          <p className="lead font-small p-2"><i className="fas fa-star"></i> Excel in match and science</p>
                          <p className="martop font-small">Subscribe in next 37m 56s and save 20% <a href="#" className="atag teal-text">Go premium</a></p>
                      </div>
                  </div>
              </div>
          </div>
            <div className="container-fluid bg-light p-5">
              <div className="container">
                  <div className="row ">
                      <div className="col-md-7">
                          <Link to='/' className="nav-link text-dark t-left"> <i className="fas fa-chevron-left text-muted"/> <span className="text-muted font-small">Back to all courses</span></Link>
                          <h6 className="display-4 mt-3 font-weight-bold">Logic</h6>
                          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus error laboriosam odit optio repellendus!</p>
                          <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consequuntur corporis cum earum excepturi expedita impedit ipsum, laudantium maiores nulla odio, optio provident sapiente sequi sit soluta tenetur voluptas voluptates.</p>
                          <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aperiam doloremque dolorum error excepturi iste itaque magnam magni nam necessitatibus pariatur perferendis quas, quod ut veritatis. <a
                              href="/" className="text-dark t-underline "><span className="text-muted">Read more</span> </a> </p>
                          <a href="/" className="text-dark t-underline "> <span className="text-muted">View prerequisites and next steps</span> </a>
                      </div>
                      <div className="col-md-5 ">
                          <div className="card bg-white1 ">
                              <img src={img1} className="w-100 img-thumbnail border-0" alt=""/>

                                  <div className="row p-2">
                                      <div className="col-md-6">
                                          <h2 >37</h2>
                                          <p className="text-muted">Interactive quizzes</p>
                                      </div>
                                      <div className="col-md-6 mb-3">
                                          <h2>265+</h2>
                                          <p className="text-muted">Concepts and exercises</p>

                                      </div>

                                          <button className="btn font-weight-bold m-auto w-75 btn-dark ">Coutinue Course</button>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="container mt-5">
              <div className="row">
                  <div className="col-md-1">
                      <p className="round-circle1  ">1</p>
                  </div>
                  <div className="col-md-11">
                      <h4 className="font-weight-bold">Introduction</h4>
                        <p className="text-muted">Put your logic to the test with these warmups!</p>
                  </div>
              </div>

              <div className="row">
                  {
                      cards.map((card,i)=>{
                          return(
                              <div className="col-md-4 mt-4" key={i}>
                                  {
                                      card.introduction ? <React.Fragment>
                                          <div className="card  bg-white1 p-2 pb-4 h-100 ">
                                              {/*<pre>{JSON.stringify(card.image[0])}</pre>*/}
                                              <img src={card.image[0]} className="w-100 img-thumbnail border-0 mb-2" alt="img"/>
                                              <h2 className="font-small font-weight-bold mt-4">{card.h4}</h2>
                                              <p className="text-muted font-small mt-3">{card.p}</p>
                                              <div className="progress height1 mt-4">
                                                  <div
                                                      className="progress-bar w-0 "
                                                      role="progressbar"

                                                      aria-valuenow="0"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100"/>
                                              </div>
                                          </div>
                                      </React.Fragment> : null
                                  }
                              </div>
                          )
                      })

                  }
              </div>

          </div>

          <div className="container  ">
              <div className="row ">
                  <div className="col-md-1">
                      <p className="round-circle1  ">2</p>
                  </div>
                  <div className="col-md-11">
                      <h4 className="font-weight-bold">The Rational Detective</h4>
                      <p className="text-muted">Eliminate the impossible and uncover the truth!</p>
                  </div>
              </div>
              <div className="row">
                  {
                      cards.map((card,i)=>{
                          return(
                              <div className="col-md-4 mt-4" key={i}>
                                  {
                                      card.rational ? <React.Fragment>
                                          <div className="card mt-5 bg-white1 p-2 pb-4 h-100">
                                              {/*<pre>{JSON.stringify(card.image[0])}</pre>*/}
                                              <img src={card.image[0]} className="w-100 img-thumbnail border-0 mb-2 wrapper" alt="img"/>

                                              <h2 className="font-small font-weight-bold mt-4">{card.h4}</h2>
                                              <p className="text-muted font-small mt-3">{card.p}</p>
                                              <div className="progress height1 mt-4">
                                                  <div
                                                      className="progress-bar w-0 "
                                                      role="progressbar"

                                                      aria-valuenow="0"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100"/>
                                              </div>
                                          </div>
                                      </React.Fragment> : null
                                  }
                              </div>
                          )
                      })

                  }
              </div>
          </div>

          <div className="container mrgt">
              <div className="row ">
                  <div className="col-md-1">
                      <p className="round-circle1  ">3</p>
                  </div>
                  <div className="col-md-11">
                      <h4 className="font-weight-bold">Puzzles and Riddles</h4>
                      <p className="text-muted">Even trickier puzzles and the tools you need to solve them.</p>
                  </div>
              </div>
              <div className="row">
                  {
                      cards.map((card,i)=>{
                          return(
                              <div className="col-md-4 mt-4" key={i}>
                                  {
                                      card.puzzle ? <React.Fragment>
                                          <div className="card mt-5 bg-white1 p-2 pb-4 h-100">
                                              {/*<pre>{JSON.stringify(card.image[0])}</pre>*/}
                                              <img src={card.image[0]} className="w-100 img-thumbnail border-0 mb-2 wrapper" alt="img"/>

                                              <h2 className="font-small font-weight-bold mt-4">{card.h4}</h2>
                                              <p className="text-muted font-small mt-3">{card.p}</p>
                                              <div className="progress height1 mt-4">
                                                  <div
                                                      className="progress-bar w-0 "
                                                      role="progressbar"

                                                      aria-valuenow="0"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100"/>
                                              </div>
                                          </div>
                                      </React.Fragment> : null
                                  }
                              </div>
                          )
                      })

                  }
              </div>
          </div>

          <div className="container mrgt">
              <div className="row ">
                  <div className="col-md-1">
                      <p className="round-circle1  ">4</p>
                  </div>
                  <div className="col-md-11">
                      <h4 className="font-weight-bold">Competitive Games</h4>
                      <p className="text-muted">What will your opponent do? Logic it out!</p>
                  </div>
              </div>
              <div className="row">
                  {
                      cards.map((card,i)=>{
                          return(
                              <div className="col-md-4 mt-4" key={i}>
                                  {
                                      card.multilevel ? <React.Fragment>
                                          <div className="card mt-5 bg-white1 p-2 pb-4 h-100">
                                              {/*<pre>{JSON.stringify(card.image[0])}</pre>*/}
                                              <img src={card.image[0]} className="w-100 img-thumbnail border-0 mb-2 wrapper" alt="img"/>

                                              <h2 className="font-small font-weight-bold mt-4">{card.h4}</h2>
                                              <p className="text-muted font-small mt-3">{card.p}</p>
                                              <div className="progress height1 mt-4">
                                                  <div
                                                      className="progress-bar w-0 "
                                                      role="progressbar"

                                                      aria-valuenow="0"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100"/>
                                              </div>
                                          </div>
                                      </React.Fragment> : null
                                  }
                              </div>
                          )
                      })

                  }
              </div>
          </div>

          <div className="container mrgt">
              <div className="row mt-5">
                  <div className="col-md-1">
                      <p className="round-circle1  ">5</p>
                  </div>
                  <div className="col-md-11">
                      <h4 className="font-weight-bold">Competitive Games</h4>
                      <p className="text-muted">What will your opponent do? Logic it out!</p>
                  </div>
              </div>
              <div className="row">
                  {
                      cards.map((card,i)=>{
                          return(
                              <div className="col-md-4 mt-4" key={i}>
                                  {
                                      card.competitive ? <React.Fragment>
                                          <div className="card mt-5 bg-white1 p-2 pb-4 h-100">
                                              {/*<pre>{JSON.stringify(card.image[0])}</pre>*/}
                                              <img src={card.image[0]} className="w-100 img-thumbnail border-0 mb-2 wrapper" alt="img"/>

                                              <h2 className="font-small font-weight-bold mt-4">{card.h4}</h2>
                                              <p className="text-muted font-small mt-3">{card.p}</p>
                                              <div className="progress height1 mt-4">
                                                  <div
                                                      className="progress-bar w-0 "
                                                      role="progressbar"

                                                      aria-valuenow="0"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100"/>
                                              </div>
                                          </div>
                                      </React.Fragment> : null
                                  }
                              </div>
                          )
                      })

                  }
              </div>
          </div>

          <div className="container mt-5 mrgt">
              <div className="row mt-5">
                  <div className="col-md-1">
                      <p className="round-circle1  ">6</p>
                  </div>
                  <div className="col-md-11">
                      <h4 className="font-weight-bold ">Logic Machines</h4>
                      <p className="text-muted">Turn logic into arithmetic machines.</p>
                  </div>
              </div>
              <div className="row">
                  {
                      cards.map((card,i)=>{
                          return(
                              <div className="col-md-4 mt-4" key={i}>
                                  {
                                      card.logic ? <React.Fragment>
                                          <div className="card mt-5 bg-white1 p-2 pb-4 h-100">
                                              {/*<pre>{JSON.stringify(card.image[0])}</pre>*/}
                                              <img src={card.image[0]} className="w-100 img-thumbnail border-0 mb-2 wrapper" alt="img"/>

                                              <h2 className="font-small font-weight-bold mt-4">{card.h4}</h2>
                                              <p className="text-muted font-small mt-3">{card.p}</p>
                                              <div className="progress height1 mt-4">
                                                  <div
                                                      className="progress-bar w-0 "
                                                      role="progressbar"

                                                      aria-valuenow="0"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100"/>
                                              </div>
                                          </div>
                                      </React.Fragment> : null
                                  }
                              </div>
                          )
                      })

                  }
              </div>
          </div>
          <div className="container cardtop">
              <div className="row ">
                  <div className="col-md-3"/>
                  <div className="col-md-6 ">
                      <p className="text-muted text-uppercase">next steps</p>
                      <hr className=""/>
                  </div>
                  <div className="col-md-3"/>
              </div>
              <div className="row">
                  <div className="col-md-3"/>
                  <div className="col-md-3">
                      <div className="">
                          <div className="row">
                              <div className="col-md-6">
                                  <img src={fcard1} alt=""/>
                              </div>
                              <div className="col-md-6">
                                  <p className="font-weight-bold font-small">Mathematical Fundamentals</p>
                                  <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, optio!</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="">
                          <div className="row">
                              <div className="col-md-6">
                                  <img src={fcard2} alt=""/>
                              </div>
                              <div className="col-md-6">
                                  <p className="font-weight-bold font-small">Computer Science Fundamentals</p>
                                  <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, optio!</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3"/>
              </div>
          </div>




      </React.Fragment>
  )
};

export default Logic;