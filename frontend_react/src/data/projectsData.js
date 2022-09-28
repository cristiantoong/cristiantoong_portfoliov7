import cardImg1 from '../images/myrecipe.jpg';
import cardImg2 from '../images/beautiful-escape-stylescape.jpg';
import cardImg3 from '../images/feelthewavessurf.png';
import cardImg4 from '../images/html-email.PNG';
import cardImg5 from '../images/chatisfymockup.png';

import overlayMockImg1 from '../images/myrecipe-mockup.png';
import overlayMockImg2 from '../images/Beautiful-Escape-Resort-Device-Mockup.png';
import overlayMockImg3 from '../images/feelthewavessurf-mockup-min.png';
import overlayMockImg4 from '../images/Beautiful-Escape-Resort-Device-Mockup.png';
import overlayMockImg5 from '../images/chatisfy-mockup-final.png';

export const projectData = [
  {
    id: 1,
    cardImg: cardImg1,
    overlayMockImg: overlayMockImg1,
    overlayInfoTitle: "My Recipe Blog",
    skillSet: ['HMTL', 'CSS', 'Javascript', 'Django Python', 'Figma'],
    buttons: [
      {
        id:1,
        src: 'https://github.com/cristiantoong/myrecipeblogdjango',
        label: 'Code'
      },
      {
        id:2,
        src: 'http://cristiantoong01.pythonanywhere.com',
        label: 'Demo'
      }
    ]
  },
  {
    id: 2,
    cardImg: cardImg2,
    overlayMockImg: overlayMockImg2,
    overlayInfoTitle: "Beautiful Escape Resort",
    skillSet: ['HMTL', 'CSS', 'Javascript', 'Bootstrap', 'Figma', 'Moodboard/Stylescapes'],
    buttons: [
      {
        id:1,
        src: 'https://github.com/cristiantoong/beautifulescaperesort',
        label: 'Code'
      },
      {
        id:2,
        src: 'https://cristiantoong.github.io/beautifulescaperesort/',
        label: 'Demo'
      }
    ]
  },
  {
    id: 3,
    cardImg: cardImg3,
    overlayMockImg: overlayMockImg3,
    overlayInfoTitle: "Feel the Wave Surf",
    skillSet: ['HMTL', 'CSS', 'Javascript', 'Slick JS', 'Adobe JS'],
    buttons: [
      {
        id:1,
        src: 'https://github.com/cristiantoong/feelthewavessurf',
        label: 'Code'
      },
      {
        id:2,
        src: 'https://cristiantoong.github.io/feelthewavessurf/',
        label: 'Demo'
      }
    ]
  },
  {
    id: 4,
    cardImg: cardImg4,
    overlayMockImg: overlayMockImg4,
    overlayInfoTitle: "Html Email",
    skillSet: ['HMTL', 'CSS', 'Putsmail'],
    buttons: [
      {
        id:1,
        src: 'https://github.com/cristiantoong/html-email',
        label: 'Code'
      },
      {
        id:2,
        src: 'https://cristiantoong.github.io/html-email/',
        label: 'Demo'
      }
    ]
  },
  {
    id: 5,
    cardImg: cardImg5,
    overlayMockImg: overlayMockImg5,
    overlayInfoTitle: "Chatisfy",
    skillSet: ['Webflow', 'Figma'],
    buttons: [
      {
        id:1,
        src: 'https://chatisfy.webflow.io/',
        label: 'Demo'
      }
    ]
  },
  
]
