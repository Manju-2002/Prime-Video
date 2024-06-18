// Write your code here
import {Popup} from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {details} = props
  const {videoUrl, thumbnailUrl} = details

  return (
    <div>
      <Popup
        modal
        trigger={
          <div>
            <img src={thumbnailUrl} alt="thumbnail" />
          </div>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="button-container">
              <button
                className="button"
                data-testid="closeButton"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="player">
              <ReactPlayer url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
