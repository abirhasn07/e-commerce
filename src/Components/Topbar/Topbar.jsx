import { faExclamationTriangle, faHouseUser, faMobile, faQuestionCircle, faTruck, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Content, Wrapper } from './style'

const Topbar = () => {
    return (
        <Wrapper>
            <Content>
                <ul className="list row">
                    <li className="list-item">
                        <FontAwesomeIcon icon={faExclamationTriangle}/> Notice
                    </li>
                    <li className="list-item">
                    <FontAwesomeIcon icon={faQuestionCircle}/>Help
                        </li>
                    <li className="list-item">
                    <FontAwesomeIcon icon={faMobile}/>App
                        </li>
                    <li className="list-item"><FontAwesomeIcon icon={faHouseUser}/>My Oder</li>
                    <li className="list-item"><FontAwesomeIcon icon={faTruck}/>Track Oder</li>
                    <li className="list-item">Wishlist <span>0</span></li>
                    <li className="list-item"> <FontAwesomeIcon icon={faUserPlus}/>Merchant Account</li>
                </ul>
            </Content>
        </Wrapper>
    )
}

export default Topbar
