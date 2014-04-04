StandardLegends = new Meteor.Collection('standardlegends');

if (Meteor.isClient) {

  /* for meteor-autocomplete */
  Handlebars.registerHelper('standardLegends', function(){
    return {
      position: "bottom",
      limit: 10,
      replacing: 'full',
      rules: [
      {
        token: 'L',
        collection: StandardLegends,
        field: "code",
        matchAll: false,
        template: Template.standardLegends
      },
      {
        token: '',
        collection: StandardLegends,
        field: "legend",
        matchAll: true,
        template: Template.standardLegends
      }
      
      ]
    }
  });
}

if (Meteor.isServer) {
  StandardLegendsObj = [
  {
    legend: '110° HOT WATER RETURN',
    code: '355',
    year: '2007',
    color: 'White',
    bg: 'Green'
  },
  {
    legend: '110° HOT WATER RETURN',
    code: '360',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: '110° HOT WATER SUPPLY',
    code: '361',
    year: '2007',
    color: 'White',
    bg: 'Green'
  },
  {
    legend: '110° HOT WATER SUPPLY',
    code: '356',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: '140° HOT WATER RETURN',
    code: '357',
    year: '2007',
    color: 'White',
    bg: 'Green'
  },
  {
    legend: '140° HOT WATER RETURN',
    code: '362',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: '140° HOT WATER SUPPLY',
    code: '364',
    year: '2007',
    color: 'White',
    bg: 'Green'
  },
  {
    legend: '140° HOT WATER SUPPLY',
    code: '358',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: 'ACID',
    code: '100',
    year: '2007',
    color: 'Black',
    bg: 'Orange'
  },
  {
    legend: 'ACID',
    code: '108',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: 'ACID VENT',
    code: '102',
    year: '2007',
    color: 'Black',
    bg: 'Orange'
  },
  {
    legend: 'ACID VENT',
    code: '106',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: 'ACID WASTE',
    code: '105',
    year: '2007',
    color: 'Black',
    bg: 'Orange'
  },
  {
    legend: 'ACID WASTE',
    code: '107',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: 'AIR',
    code: '111',
    year: '2007',
    color: 'White',
    bg: 'Blue'
  },
  {
    legend: 'AMMONIA',
    code: '115',
    year: '2007',
    color: 'Black',
    bg: 'Orange'
  },
  {
    legend: 'AMMONIA',
    code: '117',
    year: '1996',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: 'ARGON',
    code: '118',
    year: '2007',
    color: 'White',
    bg: 'Green'
  },
  {
    legend: 'ASBESTOS FREE',
    code: '119',
    year: '2007',
    color: 'White',
    bg: 'Blue'
  },
  {
    legend: 'BOILER BLOW DOWN',
    code: '120',
    year: '2007',
    color: 'White',
    bg: 'Green'
  },
  {
    legend: 'BOILER FEED WATER',
    code: '121',
    year: '2007',
    color: 'White',
    bg: 'Green'
  },
  {
    legend: 'CARBON DIOXIDE',
    code: '122',
    year: '2007',
    color: 'Black',
    bg: 'Yellow'
  },
  {
    legend: 'CARBON DIOXIDE',
    code: '124',
    year: '2007',
    color: 'White',
    bg: 'Silver'
  },
  {
    legend: '',
    code: '',
    year: '',
    color: '',
    bg: ''
  },

  ];
  Meteor.startup(function () {
    StandardLegends.remove({}, function(){
      for(var i=0, il=StandardLegendsObj.length; i<il; i++){
        StandardLegends.insert(StandardLegendsObj[i]);
      }
    });
  });
}
