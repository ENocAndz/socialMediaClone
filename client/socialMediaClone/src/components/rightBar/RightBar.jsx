import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="srightBar">
        <div className="container">
          <div className="item">
            <span>Suggestions For You</span>
            <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/206563/pexels-photo-206563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userPic" />
                <span>Jane Doe</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userPic" />
                <span>Jane Doe</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          </div>
          <div className="item">
            <span>Latest Activities</span>
            <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/206563/pexels-photo-206563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userPic" />
                <p>
                  <span>Jane Doe </span>
                  changed their cover picture
                </p>
                
              </div>
              <span>1 min ago</span>
              
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/206563/pexels-photo-206563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userPic" />
                <p>
                  <span>Jane Doe </span>
                  changed their cover picture
                </p>
                
              </div>
              <span>1 min ago</span>
              
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/206563/pexels-photo-206563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userPic" />
                <p>
                  <span>Jane Doe </span>
                  changed their cover picture
                </p>
                
              </div>
              <span>1 min ago</span>
              
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/206563/pexels-photo-206563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userPic" />
                <p>
                  <span>Jane Doe </span>
                  changed their cover picture
                </p>
                
              </div>
              <span>1 min ago</span>
              
            </div>
          </div>
          <div className="item">
            <span>Online Friends</span>
            <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/206563/pexels-photo-206563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userPic" />
                <div className="online"/>
                <span>Jane Doe</span>
              </div>
              
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userPic" />
                <div className="online"/>
                <span>Jane Doe</span>
                
              </div>
              
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default RightBar