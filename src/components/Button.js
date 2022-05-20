
export default function Button() {
    return(
      <div className="button">
        <button className="button--container_light">
          <img src={require("../images/Email_Icon.png")}/>
          <p>Email</p>
        </button>
        <button className="button--container_blue">
          <img src={require("../images/Email_Icon.png")}/>
          {/* <img src={require("../images/linkedin_icon.png")}/> */}
          <p>Linkedin</p>
        </button>
      </div>
    )
}
