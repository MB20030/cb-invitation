/* Researched 17 October 2026. Dates are shortlist constraints plus published hours,
   not a claim of live table availability. See research.md for evidence. */
window.DateNight = (() => {
  const dates = ['21', '22', '23'];
  const restaurants = [
  {
    "id": "boon-nam",
    "name": "Boon Nam",
    "family": "bold",
    "food": "thai",
    "cuisine": "Modern Thai",
    "days": [
      "21",
      "23"
    ],
    "moods": [
      "occasion",
      "lively"
    ],
    "styles": [
      "sharing",
      "tasting"
    ],
    "description": "Fragrant curries, bright herbs and a table full of Thai flavours. A little heat for our November evening.",
    "fact": "Boon Nam lives inside Hotel St. George, and its dishes are designed to be shared family style.",
    "address": "Lönnrotinkatu 4",
    "instagram": "boonnamrestaurant",
    "url": "https://www.boonnam.fi/",
    "menu": "https://www.boonnam.fi/menu-eng",
    "note": "Closed Sunday. Monday opening is listed on the official website.",
    "photos": [
      {
        "src": "assets/restaurants/boon-nam-food.webp",
        "alt": "A dish served at Boon Nam",
        "label": "On the plate",
        "credit": "Boon Nam",
        "source": "https://www.boonnam.fi/galleria"
      },
      {
        "src": "assets/restaurants/boon-nam-venue.webp",
        "alt": "Inside Boon Nam in Helsinki",
        "label": "The atmosphere",
        "credit": "Boon Nam",
        "source": "https://www.boonnam.fi/galleria"
      }
    ]
  },
  {
    "id": "flor",
    "name": "Flor",
    "family": "seasonal",
    "food": "modern",
    "cuisine": "Seasonal Nordic · wine bar",
    "days": [
      "21",
      "22"
    ],
    "moods": [
      "lively",
      "cozy"
    ],
    "styles": [
      "sharing",
      "tasting"
    ],
    "description": "Seasonal plates, organic wines and an unhurried evening in the Design District. The sort of place where one more little bite feels right.",
    "fact": "Flor is the little sister of Natura, the restaurant just across the street.",
    "address": "Iso Roobertinkatu 16",
    "instagram": "flor_helsinki",
    "url": "https://www.restaurantflor.com/",
    "menu": "https://www.restaurantflor.com/",
    "note": "Wednesday–Sunday; closed Monday.",
    "photos": [
      {
        "src": "assets/restaurants/flor-food.webp",
        "alt": "A dish served at Flor",
        "label": "On the plate",
        "credit": "Flor",
        "source": "https://www.restaurantflor.com/photo"
      },
      {
        "src": "assets/restaurants/flor-venue.webp",
        "alt": "Inside Flor in Helsinki",
        "label": "The atmosphere",
        "credit": "Flor",
        "source": "https://www.restaurantflor.com/photo"
      }
    ]
  },
  {
    "id": "shelter",
    "name": "Shelter",
    "family": "seasonal",
    "food": "finnish",
    "cuisine": "Modern Finnish · harbour-side",
    "days": [
      "21",
      "23"
    ],
    "moods": [
      "cozy",
      "occasion"
    ],
    "styles": [
      "tasting"
    ],
    "description": "A cosy harbour hideaway, seasonal cooking and a rather lovely excuse to dress up a little.",
    "fact": "Dinner is served in a converted warehouse on Katajanokka harbour. Shelter has been here since 2016.",
    "address": "Kanavaranta 7",
    "instagram": "shelterhki",
    "url": "https://www.shelter.fi/",
    "menu": "https://www.shelter.fi/menu-en",
    "note": "Our shortlist: 21 or 23 November only.",
    "photos": [
      {
        "src": "assets/restaurants/shelter-food.webp",
        "alt": "A dish served at Shelter",
        "label": "On the plate",
        "credit": "Shelter",
        "source": "https://www.shelter.fi/private-parties"
      },
      {
        "src": "assets/restaurants/shelter-venue.webp",
        "alt": "Shelter’s upstairs dining room",
        "label": "The upstairs dining room",
        "credit": "Shelter",
        "source": "https://www.shelter.fi/private-parties"
      }
    ]
  },
  {
    "id": "aoi",
    "name": "Aoi",
    "family": "seasonal",
    "food": "modern",
    "cuisine": "Contemporary craft cooking",
    "days": [
      "21",
      "22"
    ],
    "moods": [
      "cozy"
    ],
    "styles": [
      "tasting"
    ],
    "description": "A small, thoughtful restaurant in Ullanlinna. A seasonal menu, a little curiosity, and plenty of time for us.",
    "fact": "Aoi changes its seasonal menu every six weeks, so the kitchen always has a new story to tell.",
    "address": "Neitsytpolku 10",
    "instagram": "restaurantaoi",
    "url": "https://www.restaurantaoi.com/",
    "menu": "https://www.restaurantaoi.com/",
    "note": "Thursday–Sunday; Sunday service 14:00–21:00. Closed Monday.",
    "photos": [
      {
        "src": "assets/restaurants/aoi-food.webp",
        "alt": "Golden roasted potatoes being prepared in Aoi’s kitchen",
        "label": "From the kitchen",
        "credit": "Henri Vogt / Aoi",
        "source": "https://tpr.hel.fi/TPRalusta/en/notification/info/10992/"
      },
      {
        "src": "assets/restaurants/aoi-venue.webp",
        "alt": "The Aoi restaurant sign outside its Helsinki entrance",
        "label": "The restaurant",
        "credit": "Henri Vogt / Aoi",
        "source": "https://tpr.hel.fi/TPRalusta/en/notification/info/10992/"
      }
    ]
  },
  {
    "id": "farouge",
    "name": "Farouge",
    "family": "bold",
    "food": "mezze",
    "cuisine": "Lebanese · mezze to share",
    "days": [
      "21"
    ],
    "moods": [
      "cozy",
      "lively"
    ],
    "styles": [
      "sharing"
    ],
    "description": "Hummus, warm spices, a generous mezze spread. An evening made for trying a bit of everything together.",
    "fact": "Farouge means “little rooster” in Lebanese, a nod to its founder’s childhood family feasts.",
    "address": "Fabianinkatu 9",
    "instagram": "farougehelsinki",
    "url": "https://www.farouge.fi/en/restaurant-farouge/",
    "menu": "https://www.farouge.fi/wp-content/uploads/2026/08/Farouge-menu-September-2026.pdf",
    "note": "Our shortlist: 21 November only.",
    "photos": [
      {
        "src": "assets/restaurants/farouge-food.webp",
        "alt": "A dish served at Farouge",
        "label": "On the plate",
        "credit": "Farouge",
        "source": "https://www.farouge.fi/en/restaurant-farouge/"
      },
      {
        "src": "assets/restaurants/farouge-venue.webp",
        "alt": "Inside Farouge in Helsinki",
        "label": "The atmosphere",
        "credit": "Farouge",
        "source": "https://www.farouge.fi/en/restaurant-farouge/"
      }
    ]
  },
  {
    "id": "farang",
    "name": "Farang",
    "family": "bold",
    "food": "asian",
    "cuisine": "Southeast Asian · sharing plates",
    "days": [
      "21",
      "23"
    ],
    "moods": [
      "lively",
      "occasion"
    ],
    "styles": [
      "sharing"
    ],
    "description": "Big Southeast Asian flavours, caramelised pork and plates that keep finding their way to the middle of the table.",
    "fact": "Farang skips the traditional starter-and-main split: the menu is meant for building your own shared feast.",
    "address": "Arkadiankatu 6",
    "instagram": "farang_helsinki",
    "url": "https://www.farang.fi/",
    "menu": "https://www.farang.fi/menu/illallinen/a-la-carte",
    "note": "Our shortlist: 21 or 23 November only.",
    "photos": [
      {
        "src": "assets/restaurants/farang-food.webp",
        "alt": "A dish served at Farang",
        "label": "On the plate",
        "credit": "Farang",
        "source": "https://tpr.hel.fi/TPRalusta/en/notification/info/11272/"
      },
      {
        "src": "assets/restaurants/farang-venue.webp",
        "alt": "Inside Farang in Helsinki",
        "label": "The atmosphere",
        "credit": "Farang",
        "source": "https://tpr.hel.fi/TPRalusta/en/notification/info/11272/"
      }
    ]
  },
  {
    "id": "finnjavel",
    "name": "Finnjävel Sali",
    "family": "seasonal",
    "food": "finnish",
    "cuisine": "Finnish classics, reimagined",
    "days": [
      "21"
    ],
    "moods": [
      "occasion",
      "cozy"
    ],
    "styles": [
      "tasting",
      "comfort"
    ],
    "description": "Finnish comfort food with a little ceremony. A warm, elegant way to celebrate one whole year of us.",
    "fact": "Finnjävel is inside Helsinki’s Kunsthalle art exhibition building. Art and dinner, under one roof.",
    "address": "Ainonkatu 3",
    "instagram": "finnjavelhelsinki",
    "url": "https://finnjavel.fi/en/sali/",
    "menu": "https://finnjavel.fi/en/sali/",
    "note": "Our shortlist: 21 November only. Sali is distinct from Salonki.",
    "photos": [
      {
        "src": "assets/restaurants/finnjavel-food.webp",
        "alt": "A dish served at Finnjävel Sali",
        "label": "On the plate",
        "credit": "Finnjävel",
        "source": "https://finnjavel.fi/en/sali/"
      },
      {
        "src": "assets/restaurants/finnjavel-venue.webp",
        "alt": "Inside Finnjävel Sali in Helsinki",
        "label": "The atmosphere",
        "credit": "Finnjävel",
        "source": "https://finnjavel.fi/en/sali/"
      }
    ]
  },
  {
    "id": "la-galleria",
    "name": "La Galleria",
    "family": "comfort",
    "food": "italian",
    "cuisine": "Italian · pasta & pizza",
    "days": [
      "21",
      "22",
      "23"
    ],
    "moods": [
      "cozy"
    ],
    "styles": [
      "comfort",
      "sharing"
    ],
    "description": "A little Italian escape: pasta, pizza and a long conversation across the table. Tiramisu is very much encouraged.",
    "fact": "This little Italian spot sits on Unioninkatu, in the streets around Helsinki’s Senate Square.",
    "address": "Unioninkatu 30",
    "instagram": "lagalleriahelsinki",
    "url": "https://www.lagalleria.fi/",
    "menu": "https://www.lagalleria.fi/",
    "note": "Published listings show all three days open; recheck with the restaurant.",
    "photos": [
      {
        "src": "assets/restaurants/la-galleria-food.webp",
        "alt": "A dish served at La Galleria",
        "label": "On the plate",
        "credit": "La Galleria",
        "source": "https://www.lagalleria.fi/gallery"
      },
      {
        "src": "assets/restaurants/la-galleria-venue.webp",
        "alt": "Inside La Galleria in Helsinki",
        "label": "The atmosphere",
        "credit": "La Galleria",
        "source": "https://www.lagalleria.fi/gallery"
      }
    ]
  },
  {
    "id": "nolla",
    "name": "Nolla",
    "family": "seasonal",
    "food": "modern",
    "cuisine": "Seasonal · zero-waste philosophy",
    "days": [
      "21"
    ],
    "moods": [
      "occasion"
    ],
    "styles": [
      "tasting"
    ],
    "added": true,
    "description": "Clever seasonal cooking with a thoughtful heart. A tasting menu for an evening that feels a little special.",
    "fact": "Nolla means “zero” in Finnish: the kitchen treats food waste as a design problem and uses ingredients to their full potential.",
    "address": "Fredrikinkatu 22",
    "instagram": "restaurantnolla",
    "url": "https://restaurantnolla.com/",
    "menu": "https://restaurantnolla.com/fi/menu/",
    "note": "Tuesday–Saturday; only 21 November fits this weekend.",
    "photos": [
      {
        "src": "assets/restaurants/nolla-food.webp",
        "alt": "A dish served at Nolla",
        "label": "On the plate",
        "credit": "Emma Ranne / Nolla",
        "source": "https://restaurantnolla.com/"
      },
      {
        "src": "assets/restaurants/nolla-venue.webp",
        "alt": "Inside Nolla in Helsinki",
        "label": "The atmosphere",
        "credit": "Emma Ranne / Nolla",
        "source": "https://restaurantnolla.com/"
      }
    ]
  },
  {
    "id": "yes-yes-yes",
    "name": "Yes Yes Yes",
    "family": "seasonal",
    "food": "veggie",
    "cuisine": "Vegetarian · colourful sharing plates",
    "days": [
      "21",
      "22",
      "23"
    ],
    "moods": [
      "lively"
    ],
    "styles": [
      "sharing",
      "tasting"
    ],
    "added": true,
    "description": "Colourful plates, a lively room and vegetables taking the spotlight. The answer to this date invitation, in restaurant form.",
    "fact": "The food here is vegetarian and crosses cuisines; the kitchen makes all its components from scratch.",
    "address": "Iso Roobertinkatu 1",
    "instagram": "yesyesyeshelsinki",
    "url": "https://yesyesyes.fi/",
    "menu": "https://yesyesyes.fi/wp-content/uploads/2026/10/YES-YES-YES-12.10.pdf",
    "note": "Open daily; Sunday service 16:00–21:00.",
    "photos": [
      {
        "src": "assets/restaurants/yes-yes-yes-food.webp",
        "alt": "A dish served at Yes Yes Yes",
        "label": "On the plate",
        "credit": "Yes Yes Yes",
        "source": "https://yesyesyes.fi/"
      },
      {
        "src": "assets/restaurants/yes-yes-yes-venue.webp",
        "alt": "Inside Yes Yes Yes in Helsinki",
        "label": "The atmosphere",
        "credit": "Yes Yes Yes",
        "source": "https://yesyesyes.fi/"
      }
    ]
  },
  {
    "id": "brasa",
    "name": "Brasa",
    "family": "seasonal",
    "food": "modern",
    "cuisine": "Fire cooking · modern grill",
    "days": [
      "21",
      "23"
    ],
    "moods": [
      "occasion",
      "lively"
    ],
    "styles": [
      "tasting",
      "comfort"
    ],
    "added": true,
    "description": "Fire-kissed cooking and a proper occasion kind of feeling. A warm, glowing dinner for a cold Helsinki night.",
    "fact": "Brasa’s kitchen cooks over fire, and its Menu Fire includes house bread and filtered water.",
    "address": "Aleksanterinkatu 22",
    "instagram": "restaurantbrasa",
    "url": "https://brasa.fi/",
    "menu": "https://brasa.fi/brasa-ravintola-menu/",
    "note": "Monday–Saturday; closed Sunday.",
    "photos": [
      {
        "src": "assets/restaurants/brasa-food.webp",
        "alt": "A dish served at Brasa",
        "label": "On the plate",
        "credit": "Brasa",
        "source": "https://brasa.fi/kuvagalleria/"
      },
      {
        "src": "assets/restaurants/brasa-venue.webp",
        "alt": "Inside Brasa in Helsinki",
        "label": "The atmosphere",
        "credit": "Brasa",
        "source": "https://brasa.fi/kuvagalleria/"
      }
    ]
  },
  {
    "id": "kuurna",
    "name": "Kuurna",
    "family": "seasonal",
    "food": "finnish",
    "cuisine": "Intimate seasonal bistro",
    "days": [
      "21",
      "23"
    ],
    "moods": [
      "cozy"
    ],
    "styles": [
      "comfort",
      "tasting"
    ],
    "added": true,
    "description": "An intimate neighbourhood bistro, seasonal ingredients and nowhere we need to rush off to. Just us, and something delicious.",
    "fact": "Kuurna has been part of Helsinki’s bistro scene since 2005, and its menu changes every three weeks.",
    "address": "Meritullinkatu 6",
    "instagram": "restaurantkuurna",
    "url": "https://www.kuurna.fi/",
    "menu": "https://www.kuurna.fi/#menu",
    "note": "Monday–Saturday; closed Sunday.",
    "photos": [
      {
        "src": "assets/restaurants/kuurna-food.webp",
        "alt": "A dish served at Kuurna",
        "label": "On the plate",
        "credit": "Vessi Hämäläinen / Kuurna",
        "source": "https://tpr.hel.fi/TPRalusta/en/notification/info/2001/"
      },
      {
        "src": "assets/restaurants/kuurna-venue.webp",
        "alt": "Inside Kuurna in Helsinki",
        "label": "The atmosphere",
        "credit": "Sanna Lehto / Kuurna",
        "source": "https://tpr.hel.fi/TPRalusta/en/notification/info/2001/"
      }
    ]
  },
  {
    "id": "forza",
    "name": "Forza",
    "family": "comfort",
    "food": "pizza",
    "cuisine": "Artisan pizza · Italian",
    "days": [
      "21",
      "22"
    ],
    "moods": [
      "lively",
      "cozy"
    ],
    "styles": [
      "comfort",
      "sharing"
    ],
    "added": true,
    "description": "Excellent pizza, a little Italian energy and absolutely no judgment if we eat the crusts first.",
    "fact": "Forza makes both airy Neapolitan pizza and Roman-style pizza, whose dough rises for up to 48 hours.",
    "address": "Pursimiehenkatu 29–31",
    "instagram": "forza_helsinki",
    "url": "https://forzahelsinki.fi/en/",
    "menu": "https://forzahelsinki.fi/en/menu/",
    "note": "Tuesday–Sunday; closed Monday. Sunday has a shorter menu.",
    "photos": [
      {
        "src": "assets/restaurants/forza-food.webp",
        "alt": "A dish served at Forza",
        "label": "On the plate",
        "credit": "Forza",
        "source": "https://forzahelsinki.fi/en/"
      },
      {
        "src": "assets/restaurants/forza-venue.webp",
        "alt": "Inside Forza in Helsinki",
        "label": "The atmosphere",
        "credit": "Forza",
        "source": "https://forzahelsinki.fi/en/"
      }
    ]
  }
];
  const dayLabel = day => ({any:'Any evening, 21–23 November',21:'Saturday, 21 November',22:'Sunday, 22 November',23:'Monday, 23 November'})[day];
  function rank(answers) {
    return restaurants.filter(r => (answers.date==='any'||r.days.includes(answers.date)) && r.family === answers.family)
      .map(r => ({...r,score:(r.food===answers.food?10:0)+(r.moods.includes(answers.mood)?4:0)+(r.moods[0]===answers.mood?1:0)+(r.styles.includes(answers.style)?3:0)}))
      .sort((a,b)=>b.score-a.score || restaurants.findIndex(r=>r.id===a.id)-restaurants.findIndex(r=>r.id===b.id));
  }
  return {restaurants,dates,dayLabel,rank};
})();
