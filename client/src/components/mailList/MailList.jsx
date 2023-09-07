import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
      <span className="mailDesc">Want to List Your Property ?</span>
      <a className="mailDesc" href="mailto:rguktbasar123@gmail.com">rguktbasar123@gmail.com</a>
    </div>
  )
}

export default MailList