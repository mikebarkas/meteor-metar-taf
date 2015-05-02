if (Meteor.isClient) {
}

if (Meteor.isServer) {
  url = "http://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=KDEN&hoursBeforeNow=1";

  wx = Meteor.http.get(url);
  console.log(wx);

}
