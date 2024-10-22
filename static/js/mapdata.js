
var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "triangle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    NPBA: {
      name: "Bagmati"
    },
    NPBH: {
      name: "Bheri"
    },
    NPDH: {
      name: "Dhawalagiri"
    },
    NPGA: {
      name: "Gandaki"
    },
    NPJA: {
      name: "Janakpur"
    },
    NPKA: {
      name: "Karnali"
    },
    NPKO: {
      name: "Bhojpur"
    },
    NPLU: {
      name: "Lumbini"
    },
    NPMA: {
      name: "Mahakali"
    },
    NPME: {
      name: "Mechi"
    },
    NPNA: {
      name: "Narayani"
    },
    NPRA: {
      name: "Rapti"
    },
    NPSA: {
      name: "Sagarmatha"
    },
    NPSE: {
      name: "Seti"
    }
  },
  locations: {
    "0": {
      lat: "27.9881",
      lng: "86.9250",
      name: "Everest",
      type: "triangle"
    },
    "1": {
      name: "Annapurna I",
      lat: "28.5955556",
      lng: "83.8225",
      type: "triangle"
    },
    "2": {
      lat: "27.7025",
      lng: "88.1472",
      name: "Kenchenjunga",
      type: "triangle"
    },
    "3": {
      name: "Makalu",
      lat: "27.8897",
      lng: "87.0885",
      type: "triangle"
    },
    "4": {
      name: "Helambu",
      lat: "28.1222",
      lng: "85.5806",
      type: "triangle"
    },
    "5": {
      name: "Langtang",
      lat: "28.3130",
      lng: "85.6055",
      type: "triangle"
    },
    "6": {
      name: "Manaslu",
      lat: "28.5499",
      lng: "54.5594",
      type: "triangle"
    },
    "7": {
      name: "Mustang",
      lat: "28.7030",
      lng: "83.8440",
      type: "star"
    },
    "8": {
      name: "Dhaulagiri",
      lat: "28.6967",
      lng: "83.4922",
      type: "triangle"
    },
    "9": {
      name: "Lhotse",
      lat: "27.9617",
      lng: "86.9330",
      type: "triangle"
    },
    "10": {
      name: "Cho Oyu",
      lat: "28.0944",
      lng: "86.6608",
      type: "triangle"
    },
    "11": {
      name: "Kathmandu",
      lat: "27.7172",
      lng: "85.3240",
      type: "star"
    },
    "12": {
      name: "Pokhara",
      lat: "28.2096",
      lng: "83.9856",
      type: "star"
    },
    "13": {
      name: "Biratnagar",
      lat: "26.4525",
      lng: "87.2718",
      type: "star"
    },
    "14": {
      name: "Birjung",
      lat: "27.0000",
      lng: "84.8670",
      type: "star"
    },
    "15": {
      name: "Janakpur",
      lat: "26.7280",
      lng: "85.9263",
      type: "star"
    },
    "16": {
      name: "Dharan",
      lat: "26.8128",
      lng: "87.2836",
      type: "star"
    },
    "17": {
      lat: "28.0587",
      lng: "81.6176",
      name: "Nepalgunj",
      type: "star"
    },
    "18": {
      lat: "27.6957",
      lng: "83.4482",
      name: "Butwal",
      type: "star"
    },
    "19": {
      name: "Hetauda",
      lat: "27.4287",
      lng: "85.0322",
      type: "star"
    },
    "20": {
      name: "Dhangadi",
      lat: "28.6948",
      lng: "80.5930",
      type: "star"
    },
    "21": {
      type: "circle",
      name: "Gosaikunda Lake",
      lat: "28.0833",
      lng: "85.4167"
    },
    "22": {
      type: "circle",
      name: "Rara Lake",
      lat: "29.5330",
      lng: "82.1950"
    },
    "23": {
      type: "circle",
      name: "Phewa Lake",
      lat: "28.2097",
      lng: "83.9597"
    },
    "24": {
      type: "circle",
      name: "Tilicho Lake",
      lat: "28.6833",
      lng: "83.8167"
    },
    "25": {
      name: "Ilam",
      lat: "26.9110",
      lng: "87.9265",
      type: "star"
    },
    "26": {
      name: "Dhulikhel",
      lat: "27.6180",
      lng: "85.5474",
      type: "star"
    },
    "27": {
      name: "Simikot",
      lat: "29.9674",
      lng: "81.8176",
      type: "star"
    },
    "28": {
      name: "Machhapuchhare",
      lat: "28.4851",
      lng: "83.9489",
      type: "triangle"
    },
    "29": {
      name: "Api Saipal",
      lat: "29.8716",
      lng: "81.2952",
      type: "triangle"
    },
    "30": {
      lat: "28.3490",
      lng: "85.1167",
      name: "Ganesh",
      type: "triangle"
    },
    "31": {
      name: "Gorkha",
      lat: "28.0006",
      lng: "84.6295",
      type: "star"
    },
    "32": {
      name: "Birendra Nagar",
      lat: "84.6295",
      lng: "81.6342",
      type: "star"
    },
    "33": {
      name: "Baruntse",
      lat: "27.8722",
      lng: "86.9808",
      type: "triangle"
    },
    "34": {
      name: "Dadeldhura",
      lat: "29.2985",
      lng: "80.5856",
      type: "star"
    },
    "35": {
      lat: "28.6948",
      lng: "80.5930",
      name: "Dhangadhi",
      type: "star"
    },
    "36": {
      lat: "29.2682",
      lng: "80.9502",
      name: "Dipayal",
      type: "star"
    },
    "37": {
      name: "Dunai",
      lat: "28.9616",
      lng: "82.8727",
      type: "star"
    },
    "38": {
      name: "Shey Phoksundo Lake",
      lat: "29.1275",
      lng: "82.9346",
      type: "circle"
    },
    "39": {
      name: "Lumbini",
      lat: "27.4820",
      lng: "27.4820",
      type: "star"
    },
    "40": {
      name: "Lukla",
      lat: "27.6869",
      lng: "86.7291",
      type: "triangle"
    },
    "41": {
      name: "Taplejung",
      lat: "27.3549",
      lng: "87.6663",
      type: "star"
    },
    "42": {
      name: "Tulsipur",
      lat: "28.1328",
      lng: "82.2975",
      type: "star"
    },
    "43": {
      lat: "28.0000",
      lng: "82.4000",
      name: "Dang",
      type: "star"
    },
    "44": {
      lat: "28.3853",
      lng: "82.1615",
      name: "Salyan",
      type: "star"
    },
    "45": {
      name: "Surkhet",
      lat: "28.6000",
      lng: "81.6333",
      type: "star"
    },
    "46": {
      name: "Jajarkot",
      lat: "28.7000",
      lng: "82.2000",
      type: "star"
    },
    "47": {
      name: "Bardiya",
      lat: "28.2667",
      lng: "81.3333",
      description: "National Park",
      type: "diamond"
    },
    "48": {
      name: "Dhorpatan",
      lat: "28.7000",
      lng: "82.9000",
      description: "Hunting Reserve",
      type: "diamond"
    },
    "49": {
      name: "Chitwan",
      lat: "27.5291",
      lng: "84.3542",
      description: "National Park",
      type: "diamond"
    },
    "50": {
      name: "Gaurishankar",
      lat: "27.9000",
      lng: "86.0833",
      description: "Conservation Area",
      type: "diamond"
    },
    "51": {
      name: "Khaptad",
      lat: "29.2500",
      lng: "81.3333",
      description: "National Park",
      type: "diamond"
    },
    "52": {
      name: "Koshi Tappu",
      lng: "87.0167",
      lat: "26.6333",
      description: "Wildlife Reserve",
      type: "diamond"
    },
    "53": {
      name: "Parsa",
      lat: "27.4167",
      lng: "84.4167",
      description: "Wildlife Reserve",
      type: "diamond"
    },
    "54": {
      name: "Suklaphanta",
      lng: "80.1670",
      lat: "28.8500",
      description: "Wildlife Reserve",
      type: "diamond"
    }
  },
  labels: {
    NPBA: {
      name: "Bagmati",
      parent_id: "NPBA"
    },
    NPBH: {
      name: "Bheri",
      parent_id: "NPBH"
    },
    NPDH: {
      name: "Dhawalagiri",
      parent_id: "NPDH"
    },
    NPGA: {
      name: "Gandaki",
      parent_id: "NPGA"
    },
    NPJA: {
      name: "Janakpur",
      parent_id: "NPJA"
    },
    NPKA: {
      name: "Karnali",
      parent_id: "NPKA"
    },
    NPKO: {
      name: "Bhojpur",
      parent_id: "NPKO"
    },
    NPLU: {
      name: "Lumbini",
      parent_id: "NPLU"
    },
    NPMA: {
      name: "Mahakali",
      parent_id: "NPMA"
    },
    NPME: {
      name: "Mechi",
      parent_id: "NPME"
    },
    NPNA: {
      name: "Narayani",
      parent_id: "NPNA"
    },
    NPRA: {
      name: "Rapti",
      parent_id: "NPRA"
    },
    NPSA: {
      name: "Sagarmatha",
      parent_id: "NPSA"
    },
    NPSE: {
      name: "Seti",
      parent_id: "NPSE"
    }
  },
  legend: {
    entries: [
      {
        name: "Mountains",
        color: "#000000",
        type: "location",
        shape: "triangle",
        ids: ""
      },
      {
        name: "Districts",
        color: "#808080",
        type: "state",
        shape: "star",
        ids: ""
      },
      {
        name: "Lakes",
        color: "#0000ff",
        type: "location",
        shape: "circle",
        ids: ""
      },
      {
        name: "Sites",
        color: "#ffff00",
        type: "location",
        shape: "diamond",
        ids: ""
      }
    ]
  },
  regions: {
    "0": {
      states: [
        "Mechi",
        "Bhojpur",
        "Sagarmatha"
      ],
      name: "Koshi"
    },
    "1": {
      states: [],
      name: "Madhesh"
    },
    "2": {
      states: [],
      name: "Bagmati"
    },
    "3": {
      states: [],
      name: "Gandaki"
    },
    "4": {
      states: [],
      name: "Lumbini"
    },
    "5": {
      states: [],
      name: "Karnali"
    },
    "6": {
      states: [],
      name: "Sudurpashchim"
    }
  }
};