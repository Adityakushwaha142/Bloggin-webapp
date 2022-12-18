import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles" style={{marginBottom : "5px"}}>
        <span style={{fontSize :"50px"}} className="headerTitleSm">THE FASHION GUITAR</span>
      </div>
      
      <img
        className="headerImg"
        src="https://fashion-blogging-aditya.herokuapp.com/images/1654606279938Trend.jpg"
        alt=""
      />
    </div>
  );
}
