if (Meteor.isClient) {

  Meteor.call('checkWx', function (err, res) {
  // if (err) {
    console.log(res);
  // }
    //var parser = new DOMParser();
    //var weatherXml = parser.parseFromString(res.content, "text/xml");
    //Session.set('weather', weatherXml);
    Session.set('weather', res.content);

  });

  Template.wx.helpers({
    metar: Session.get('weather')
  });

}

if (Meteor.isServer) {
  Meteor.methods({
    checkWx: function () {
      url = "http://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=KCLT&hoursBeforeNow=1";
      return Meteor.http.get(url);
    }
  });
}
