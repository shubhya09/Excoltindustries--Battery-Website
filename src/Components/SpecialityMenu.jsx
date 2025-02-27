import React from 'react';
import './SpecialityMenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCar, faIndustry, faWarehouse, faCarBattery, 
  faSolarPanel, faShip, faPersonBiking 
} from "@fortawesome/free-solid-svg-icons"; // Importing all required icons

const SpecialityMenu = () => {
  return (
    <div className="menuContainer">

      <div className="menu">
        <FontAwesomeIcon className='fa1' icon={faCar} />
        <h3>Automotive Batteries</h3>
      </div>

      <div className="menu">
        <FontAwesomeIcon className='fa1' icon={faIndustry} />
        <h3>Infrastructure Batteries</h3>
      </div>

      <div className="menu">
        <FontAwesomeIcon className='fa1' icon={faWarehouse} />
        <h3>Inverter Batteries</h3>
      </div>

      <div className="menu">
        <FontAwesomeIcon className='fa1' icon={faCarBattery} />
        <h3>Institutions UPS Batteries</h3>
      </div>

      <div className="menu">
        <FontAwesomeIcon className='fa1' icon={faSolarPanel} />
        <h3>Solar Batteries</h3>
      </div>

      <div className="menu">
        <FontAwesomeIcon className='fa1' icon={faIndustry} />
        <h3>Home UPS Systems</h3>
      </div>

      <div className="menu">
        <FontAwesomeIcon className='fa1' icon={faShip} />
        <h3>Submarine Batteries</h3>
      </div>

      <div className="menu">
        <FontAwesomeIcon className='fa1' icon={faPersonBiking} />
        <h3>E-Rickshaw</h3>
      </div>

    </div>
  );
};

export default SpecialityMenu;
