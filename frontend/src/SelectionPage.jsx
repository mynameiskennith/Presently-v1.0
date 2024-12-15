import { Link } from 'react-router-dom';

const SelectionPage = ()=>{
    return (
        <>
        <div className="mcontent">
        <div className="mheading">
            <h1 className="mtitle">Selection Page</h1>
            <h3 className="mtagline">
              <span className="mtagline-primary">Start Your Creative Journey With Presently</span>
              <br /><br /> <br />
              <span className="mtagline-secondary">Choose Your Path:</span>
            </h3>
        </div>
        <div className="mpage-container">
          <div className="mcard-container">
          <Link to="/generate">
            <div className="mcard" >
              <h3>Presentation Generation</h3>
              <p>Create slides from basic prompts, making presentation design easy.</p>
            </div> </Link>

            <Link to="/rating">
            <div className="mcard">
              <h3>Presentation Rating</h3>
              <p>Get feedback on your slides to improve clarity and impact.</p>
            </div> </Link>

            <Link to="/training">
            <div className="mcard">
              <h3>Presentation Training</h3>
              <p>Practice your delivery with tips to boost confidence.</p>
            </div> </Link>
          </div>
        </div>
        <div className="mtagline-end">“Master Every Stage of Your Presentation Journey”</div>
        </div>
        </>
      );
    };


export default SelectionPage;