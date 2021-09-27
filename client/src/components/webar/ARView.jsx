import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import './style.css';
import '@google/model-viewer/dist/model-viewer.min.js';
import QRCode from 'qrcode.react'
import hand from './assets/hand.png'

const ARView = ({ match }) => {
  const { product } = useSelector(state => state.getProductDetails);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id])

  // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser?noredirect=1&lq=1
  // https://stackoverflow.com/questions/6666907/how-to-detect-a-mobile-device-with-javascript

  if( navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) 
  {
    return (
      <div className={ARView}>
        {
          product && Object.keys(product).length &&
          <model-viewer src={ require(`./assets/${product.id}.glb`).default } /* "https://github.com/RiteshK-611/webxr-ar/blob/main/assets/sofa.gltf" */
            ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
            alt="A 3D model of an astronaut"
            ar
            auto-rotate
            camera-controls> 

            <button slot="ar-button" className="arbutton">
              View in your space
            </button>
            <div id="ar-prompt">
              <img src={hand} alt="ar_prompt"/>
            </div>
          </model-viewer> 
        }
      </div>
    );
  }
  else {
    return (
      <div className={ARView}>
        {
          product && Object.keys(product).length &&
          <model-viewer src={ require(`./assets/${product.id}.glb`).default }
            ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
            alt="A 3D model of an astronaut"
            ar
            auto-rotate
            camera-controls> 
          </model-viewer>
        }
        <div style={{display: 'flex', marginLeft: 50}}>
          <QRCode 
            id="1234"
            value={window.location.href}
            size={128}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'H'}
            includeMargin={true}
          />
          <h5 style={{marginTop: 50}}>QRCode URL: {window.location.href}</h5>
        </div>
      </div>
    );
  }

}

export default ARView;