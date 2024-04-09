import locationSearchBox from './form';

function successCb(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  locationSearchBox.value = `${lat} ${long}`;
}

function errCb(err) {
  locationSearchBox.value = `Error on GPS api`;
}

export default function returnLocation() {
  navigator.geolocation.getCurrentPosition(successCb, errCb);
}
