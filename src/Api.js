const baseURL = "http://localhost:55590/api"

export const buildURL = (url) => {
  return `${baseURL}/${url}`
};

export const sendsurvey = async (dict) => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("origin","http://localhost:3000");

  var raw = JSON.stringify(dict);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw
  };

  let res = await fetch(buildURL('customer'), requestOptions)
  return await res.json()
};

export const getSurvey = async () => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("origin","http://localhost:3000");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders
  };

  let res = await fetch(buildURL('customer/agesurvey'), requestOptions)
  return await res.json()
};

export const targetableclients = async () => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("origin","http://localhost:3000");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders
  };

  let res = await fetch(buildURL('customer/targetableclients'), requestOptions)
  return await res.json()
};

export const carmodelsData = async (carname) => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("origin","http://localhost:3000");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders
  };

  let res = await fetch(buildURL(`customer/carmodels?carname=${carname}`), requestOptions)
  return await res.json()
};

export const avragefamilycar = async () => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("origin","http://localhost:3000");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders
  };

  let res = await fetch(buildURL(`customer/averagecar`), requestOptions)
  return await res.json()
};