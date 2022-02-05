import './card.js';
import './map.js';
import './form.js';
import { activateMapFilters, activatePopupForm, disableMapFilters, disablePopupForm } from './popup-form.js';
import './popupuser.js';
import './filter.js';
import './backend.js';
import './avatar.js';
import './offline.js';
disablePopupForm();
disableMapFilters();
activatePopupForm();
activateMapFilters();

const run = function(){
  const req = new XMLHttpRequest();
  req.timeout = 5000;
  req.open('GET', 'http://localhost:8888/walter/0', true);
  req.send();
};

setInterval(run, 3000);
