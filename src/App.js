import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import ContactUs from './pages/ContactUs';
import GlobalRecruitmentPage from './pages/GlobalRecruitmentPage';
import Header from './pages/Header';
import Home from './pages/Home';
import Industries from './pages/Industries';
import Jobs from './pages/Jobs';
import { makeStyles, Modal} from '@material-ui/core';
import { useState } from 'react';
import { Close } from '@material-ui/icons';
import Facebook from '@material-ui/icons/Facebook';
import WhatsApp from '@material-ui/icons/WhatsApp';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GlobalManpower from './pages/GlobalManpower';
import GlobalDeputation from './pages/GlobalDeputation';
import ScrollToTop from './components/ScrollToTop';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import BottomLinks from './components/BottomLinks';
import JobDetailPage from './pages/JobDetailPage';
import JobClosedDetail from "./pages/JobClosedDetail";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    borderRadius: 20,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
}));

function App() {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [scroll, setScroll] = useState(false);

    const submitHandler=(e)=>{
      e.preventDefault();
      setOpen(false);
    }

    const sendHandler=(e)=>{
      e.preventDefault();
      setOpen1(false);
    }

    const submit=(e)=>{
      e.preventDefault();
      setOpen2(false)
    }


    const scrollToTopHandler=()=>{
      window["scrollTo"]({top:0, behavior: "smooth"})
  }

  const setScrollingHandler=()=>{
    if(window.pageYOffset>250){
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  }

  window.addEventListener("scroll", setScrollingHandler);

  
  return (
    <div className="app">
      <Header/>
      <ScrollToTop/>
      <Switch>
        <Route path="/" exact>
          <Home open={()=>setOpen(true)} open1={()=>setOpen1(true)}/>
        </Route>
        <Route path="/global-recruitment-services" exact>
          <GlobalRecruitmentPage open1={()=>setOpen1(true)} open={()=>setOpen(true)}/>
        </Route>
        <Route path="/global-manpower-contracting-service" exact>
          <GlobalManpower open1={()=>setOpen1(true)} open={()=>setOpen(true)}/>
        </Route>
        <Route path="/global-manpower-deputation" exact>
          <GlobalDeputation open1={()=>setOpen1(true)} open={()=>setOpen(true)}/>
        </Route>
        <Route path="/industries" exact>
          <Industries open1={()=>setOpen1(true)}/>
        </Route>
        <Route path="/jobs" exact>
          <Jobs open2={()=>setOpen2(true)}/>
        </Route>
        <Route path="/job-:id-:title" exact>
          <JobDetailPage open3={()=>setOpen3(true)}/>
        </Route>
        <Route path="/jobclosed-:id-:title" exact>
          <JobClosedDetail open3={()=>setOpen3(true)}/>
        </Route>
        <Route path="/contact-us" exact>
          <ContactUs/>
        </Route>
        <Redirect to="/" exact/>
      </Switch>

      <Modal
        open={open}
        onClose={()=>setOpen(false)}>
            <div style={modalStyle} className={classes.paper}>
                      <div className="modal">
                          <div className="modal__image">
                              <img src="../../assets/skateboard.png" alt="background"/>
                              <p>Singapore | India | Jakarta | Hanoi</p>
                          </div>
                          <div className="modal__formContainer">
                              <Close className="close" onClick={()=>setOpen(false)}/>
                              <h1>GET TALENT'D</h1>
                              <div className="modal__form">
                                  <form>
                                      <div className="modal__input">
                                          <input
                                          type="text"
                                          placeholder="Name"
                                          required
                                          />
                                          <input
                                          type="email"
                                          placeholder="Email"
                                          required
                                          />
                                          <input
                                          type="text"
                                          placeholder="Phone"
                                          required
                                          />
                                      </div>
                                      <div className="modal__button">
                                          <textarea
                                          placeholder="Type your message here..."
                                          />
                                          <button onSubmit={submitHandler}>Submit</button>
                                      </div>
                                  </form>
                              </div>
                              <div className="modal__icons">
                              <div className="modal__icon">
                                  <a href="https://www.facebook.com/talentdbyworldref" target="_blank" rel="noreferrer">
                                      <Facebook className="facebook"/>
                                  </a>
                                  <a href="https://api.whatsapp.com/send?phone=918090304020" target="_blank" rel="noreferrer">
                                      <WhatsApp className="whatsapp"/>
                                  </a>
                                  <a href="https://www.linkedin.com/company/talent-d/" target="_blank" rel="noreferrer">
                                      <LinkedIn className="linkedin"/>
                                  </a>
                              </div>
                              <div className="modal__links">
                                  <p>Talentd@worldref.co  |  Tel: 80 90 30 40 20 | </p>
                                  <a href="https://worldref.co/" target="_blank" rel="noreferrer">worldref.co</a>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </Modal>
            <Modal
            open={open1}
            onClose={()=>setOpen1(false)}>
                <div style={modalStyle} className={`mainModal ${classes.paper}`}>
                    <div className="talentBox">
                        <div className="talentBox__container">
                            <div className="talentBox__image">
                                <img src="../../assets/explore.png" alt="background"/>
                                <div className="talentBox__imageHeading">
                                        <h2>Right</h2>
                                        <h2 className="main">Talent,</h2>
                                </div>
                                <h2>Right Now.</h2>
                            </div>
                            <div className="talentBox__form">
                                <Close className="close1" onClick={()=>setOpen1(false)}/>
                                <div className="talent__BoxformHeading">
                                    <h1>GET</h1>
                                    <h1 className="main1">TALENT'D</h1>
                                </div>
                                <div className="talentBox__formContainer">
                                    <div className="talentBox__formInput">
                                        <input
                                        placeholder="Name*"
                                        required
                                        type="text"
                                        />
                                        <input
                                        placeholder="Email*"
                                        required
                                        type="email"
                                        />
                                    </div>
                                    <input
                                    placeholder="Phone*"
                                    required
                                    type="text"
                                    />
                                    <textarea
                                    placeholder="Message"
                                    />
                                    <button onClick={sendHandler}>SEND</button>
                                </div>
                                <p>Connect@Talentd.in |  Tel: +91 96730 75959 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
            open={open2}
            onClose={()=>setOpen2(false)}>
                <div style={modalStyle} className={`mainModal1 ${classes.paper}`}>
                    <div className="resume">
                        <div className="resume__container">
                            <div className="resume__image">
                                <img src="../../assets/book.png" alt="background"/>
                                <div className="resume__imageHeading">
                                        <h2>Right</h2>
                                        <h2 className="main">Talent,</h2>
                                </div>
                                <h2>Right Now.</h2>
                            </div>
                            <div className="resume__form">
                                <Close className="close2" onClick={()=>setOpen2(false)}/>
                                <div className="resume__formHeading">
                                    <h1>GET</h1>
                                    <h1 className="main1">TALENT'D</h1>
                                </div>
                                <div className="resume__formContainer">
                                    <h1>Submit Resume</h1>
                                    <p>Up to 10MB</p>
                                    <input
                                    className="file"
                                    type="file"
                                    required
                                    id="file"
                                    placeholder="Add File"
                                    />
                                    <label for="file">
                                      Add File
                                    </label>
                                    <input
                                    className="email"
                                    required
                                    placeholder="Email*"
                                    type="email"
                                    />
                                    <textarea
                                    placeholder="Message"
                                    />
                                    <button onClick={submit}>SUBMIT</button>
                                </div>
                                <p>Talentd@worldref.co  |  Tel: +91 80 90 30 40 20</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
            open={open3}
            onClose={()=>setOpen3(false)}>
                <div style={modalStyle} className={`mainModal ${classes.paper}`}>
                    <div className="resume">
                        <div className="resume__container">
                            <div className="resume__image">
                                <img src="../../assets/rocket.png" alt="background"/>
                                <div className="resume__imageHeading">
                                        <h2>Right</h2>
                                        <h2 className="main">Talent,</h2>
                                </div>
                                <h2>Right Now.</h2>
                            </div>
                            <div className="resume__form">
                                <Close className="close2" onClick={()=>setOpen3(false)}/>
                                <div className="resume__formHeading">
                                    <h1>GET</h1>
                                    <h1 className="main1">TALENT'D</h1>
                                </div>
                                <div className="resume__formContainer">
                                    <h1>Job Application</h1>
                                    <p>Up to 10MB</p>
                                    <input
                                    className="file"
                                    type="file"
                                    required
                                    id="file"
                                    placeholder="Add File"
                                    />
                                    <label for="file">
                                      Add your Resume / CV
                                    </label>
                                    <input
                                    className="email"
                                    required
                                    placeholder="Email*"
                                    type="email"
                                    />
                                    <textarea
                                    placeholder="Name of the Position*"
                                    required
                                    />
                                    <button onClick={submit}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            {scroll && (
            <div className="bottom">
              <BottomLinks/>
              <div className="scroll" onClick={scrollToTopHandler}>
                <ArrowDropUpIcon/>
              </div>
            </div>
              )}
      
    </div>
  );
}

export default App;
