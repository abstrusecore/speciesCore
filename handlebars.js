const source = document.getElementById('speciesTemp').innerHTML;
const template = Handlebars.compile(source);
// Handlebars.registerHelper('is0', function (value) {
//     console.log(value);
//     return value === 0;
//   });
// Handlebars.registerHelper('is1', function (value) {
//     console.log(value);
//     return value === 1;
//   });
// Handlebars.registerHelper('is2', function (value) {
//     console.log(value);
//     return value === 2;
//   });
const context = {

  Carnivora: {
    'Canidae':
    {
      'Atelocynus':
        [
          'microtis, Short-Eared Dog, Western Amazon Rainforest'
        ],
        'Canis':
        [
          'anthus, African Golden Wolf, North/Northeast Africa',
          'mesomelas, Black-Backed Jackal, Southern/Eastern Africa',
          'latrans, Coyote, North America',
          'simensis, Ethiopian Wolf, Ethiopian Highlands',
          'aureus, Golden Jackal, Southern Asia/Middle East/Eastern Europe',
          'lupus, Wolf, Europe/Asia/North America',
          'adustus, Side-Striped Jackal, Central Africa',
          'lupus familiaris, Domestic Dog, Most Continents',
          'brachyurus, Maned Wolf, Central South America',
        ],
        'Cuon':
        [
          'alpinus, Dhole, Southeast Asia',
        ],
        'Lycaon':
        [
          'pictus, African Wild Dog, Various Regions of Africa',
        ],
        'Speothos':
        [
          'venaticus, Bush Dog, Northern South America',
        ],
        'Chrysocyon':
        [
          'brachyurus, Maned Wolf, Central South America',
        ],
        'Lycalopex':
        [
          'culpeaus, Culpeo, Western South America',
          "fulvipes, Darwin's fox, Southern Chile",
          'vetulus, Hoary Fox, South-Central Brazil',
          'gymnocercus, Pampas, Southern South America',
          'sechurae, Sechuran Fox, Sechura Desert',
          'griseus, South American Gray Fox, Southern South America'
        ],
        'Cerdocyon':
        [
          'thous, Crab-Eating Fox, Eastern/Northern South America',
        ],
        'Atelocynus':
        [
          'microtis, Short-Eared Dog, Western Amazon Rainforest',
        ],
        'Otocyon':
        [
          'megalotis, Bat-Eared Fox, Southern/Eastern Africa'
        ],
        'Nyctereutes':
        [
          'procyonoides, Raccoon Dog, East Asia and Central/Eastern Europe'
        ],
        'Vulpes':
        [
          'lagopus, Arctic Fox, Arctic North America/Eurasia',
          'bengalensis, Bengal Fox, India',
          "cana, Blanford's Fox, Middle East/Central Asia",
          'chama, Cape Fox, Southern Africa',
          'corsac, Corsac Fox, Central Asia',
          'zerda, Fennec Fox, Northern Africa',
          'macrotis, Kit Fox, Western North America',
          'pallida, Pale Fox, Upper Middle Africa',
          "rueppellii, Ruppell's Fox, Northern Africa/Middle East",
          'vulpes, Red Fox, North America/Europe/Asia/Australia',
          'velox, Swift Fox, Western Grasslands of North America',
          'ferrilata, Tibetan Sand Fox, Nepal/Western China Plateaus',
        ],
        'Urocyon':
        [
          'cinereoargenteus, Gray Fox, North/Central America',
          'littoralis, Islands Fox, California Channel Islands'
        ]
    },
    'Felidae':
    {
      'Neofelis':
        [
          'nebulosa, Clouded Leopard, East Asia',
          'diardi, Sunda Clouded Leopard, Southeast Asia'
        ],
        'Panthera':
        [
          'pardus, Leopard, Africa/Asia',
          'tigris, Tiger, South/East Asia',
          'uncia, Snow Leopard, Central/East Asia',
          'leo, Lion, Africa/Middle East/South Asia',
          'onca, Jaguar, Central/South America'
        ],
        'Pardofelis':
        [
          'marmorata, Marbled Cat, Southeast Asia'
        ],
        'Catopuma': 
        [
          'temminckii, Asian Golden Cat, South/East Asia',
          'badia, Bay Cat, Malaysia'
        ],
        'Leptailurus':
        [
          'serval, Serval, South/Central Africa'
        ],
        'Caracal':
        [
          'caracal, Caracal, Africa/Middle East/South Asia',
          'aurata, African Golden Cat, West Africa'
        ],
        'Leopardus':
        [
          'colocola, Pampas Cat, East/Central South America',
          'jacobitus, Andean Moutain Cat, Andes Mountains',
          'pardalis, Ocelot, Northern South America/Central America',
          'wiedii, Margay, Northern South America/Central America',
          'guigna, Kodkod, Chile',
          "geoffroyi, Geoffroy's Cat, Argentina",
          'tigrinus, Oncilla, Northern South America',
          'guttulus, Southern Tigrina, Southern Brazil',
        ],
        'Lynx':
        [
          'rufus, Bobcat, North America',
          'canadensis, Canada Lynx, Canada/Alaska',
          'lynx, Eurasian Lynx, Northern Asia/Europe',
          'pardinus, Iberian Lynx, Southern Spain',
        ],
        'Acinonyx':
        [
          'jabatus, Cheetah, South/East Africa',
        ],
        'Puma':
        [
          'concolor, Cougar, South America/Western North America',
        ],
        'Herpailurus':
        [
          'yagouaroundi, Jaguarundi, Northern/Central South America/Central America',
        ],
        'Otocolobus':
        [
          "manul, Pallas's Cat, Central Asia/Middle East",
        ],
        'Prionailurus':
        [
          'rubiginosus, Rusty-Spotted Cat, India',
          'bengalensis, Leopard Cat, South/East Asia',
          'viverrinus, Fishing Cat, South Asia',
          'planiceps, Flat-Headed Cat, Borneo/Sumatra/Malaysia',
          'javanensis, Sunda Leopard Cat, Southeast Asia',
        ],
        'Felis':
        [
          'chaus, Jungle Cat, India/Middle East',
          'nigripes, Black-Footed Cat, South Africa',
          'margarita, Sand Cat, North Africa/Middle East',
          'bieti, Chinese Mountain Cat, China',
          'lybica, African Wildcat, Africa/Middle East',
          'silvestris, European Wildcat, Europe/Turkey',
          'catus, Domestic Cat, Everywhere'
        ],
    },
    'Ursidae':
    {
      'Ursus':
      [
        'americanus, American Black Bear, North America',
        'thibetanus, Asian Black Bear, East Asia',
        'maritimus, Polar Bear, Arctic Circle',
        'arctos, Brown Bear, Eurasia/North America'
      ],
      'Melursus':
      [
        'ursinus, Sloth Bear, India'
      ],
      'Helarctos':
      [
        'malayanus, Sun Bear, Southeast Asia',
      ],
      'Ailuropoda':
      [
        'melanoleuca, Giant Panda, China',
      ],
      'Tremarctos':
      [
        'ornatus, Spectacled Bear, Northwest South America',
      ]
    },
    'Hyaenidae':
    {
      'Proteles':
      ['cristatus, Aardwolf, South/East Africa'],
      'Crocuta':
      ['crocuta, Spotted Hyena, Sub-Saharan Africa'],
      'Parahyaena':
      ['brunnea, Brown Hyena, Southern Africa'],
      'Hyaena':
      ['hyaena, Striped Hyena, Africa/Middle East/India']
    },
    'Procyonidae':
    {
      'Potos':
      ['flavus, Kinkajou, Central/South America'],
      'Procyon':
      [
        'cancrivorus, Crab Eating Raccoon, Central/South America',
        'lotor, Common Raccoon, North America'
      ],
      'Bassariscus':
      [
        'sumichrasti, Cacomistle, Mexico/Panama/Costa Rica',
        'astutus, Ringtail, North America',
      ],
      'Bassaricyon':
      [
        'medius, Western Lowland Olingo, Panama/Colombia/Ecuador',
        'alleni, Eastern Lowland Olingo, South America',
        'gabbii, Northern Olingo, Central America',
        'neblina, Olinguito, Colombia/Ecuador',
      ],
      'Nasua':
      [
        'nasua, Ring-Tailed Coati, South America',
        'narica, White-Nosed Coati, Central America/Mexico',
      ],
      'Nasuella':
      [
        'olivacea, Western Mountain Coati, Colombia/Ecuador',
        'meridensis, Eastern Mountain Coati, Venezuela',
      ]
    },
    'Herpestidae':
    {
      'Herpestes':
      [
        'ichneumon, Egyptian Mongoose, Mediterranean',
        'edwardsii, Indian Grey Mongoose, India/West Asia',
        'javanicus, Javan Mongoose, Asia',
        'vitticollis, Stripe-Necked Mongoose, India/Sri Lanka',
        'urva, Crab-Eating Mongoose, South/East Asia',
        'smithii, Ruddy Mongoose, India/Sri Lanka',
        'brachyurus, Short-Tailed Mongoose, Malaysia/Sumatra/Borneo',
        'fuscus, Indian Brown Mongoose, India/Sri Lanka',
        'semitorquatus, Collared Mongoose, Brunei/Indonesia/Malaysia',
        'naso, Long-Nosed Mongoose, Central Africa',
      ],
      'Atilax':
      [
        'paludinosus, Marsh Mongoose, Sub-Saharan Africa'
      ],
      'Cynictis':
      [
        'penicillata, Yellow Mongoose, Southern Africa'
      ],
      'Ichneumia':
      [
        'albicauda, White-Tailed Mongoose, Africa'
      ],
      'Bdeogale':
      [
        'crassicauda, Bushy-Tailed Mongoose, Central Africa',
        'nigripes, Black-Footed Mongoose, Central Africa',
        "jacksoni, Jackson's Mongoose, Kenya/Uganda/Tanzania",
        'omnivora, Sokoke Dog Mongoose, Kenya/Tanzania'
      ],
      'Galerella':
      [
        'sanguinea, Slender Mongoose, Sub-Saharan Africa',
        'pulverulenta, Cape Gray Mongoose, Southern Africa',
        'ochracea, Somalian Slender Mongoose, Somalia',
        'flavescens, Angolan Slender Mongoose, Angola/Namibia',
        'nigrata, Black Mongoose, Angola/Namibia',
      ],
      'Rhynchogale':
      [
        "melleri, Mellers's Mongoose, Central/Southern Africa"
      ],
      'Paracynictis':
      [
        "selousi, Selous's Mongoose, Southern Africa"
      ],
      'Mungos':
      [
        'mungo, Banded Mongoose, Africa',
        'gambianus, Gambian Mongoose, Gambia/Nigeria'
      ],
      'Suricata':
      [
        'suricatta, Meerkat, Southern Africa'
      ],
      'Crossarchus':
      [
        'obscurus, Common Kusimanse, West Africa',
        "alexandri, Alexander's Kusimanse, Central Africa",
        'angsorgei, Angolan Kusimanse, Angola',
        'platycephalus, Flat-Headed Kusimanse, West Africa'
      ],
      'Helogale':
      [
        'parvula, Common Dwarf Mongoose, Southern/East Africa',
        'hirtula, Ethiopian Dwarf Mongoose, Ethiopia/Somalia'
      ],
      'Dologale':
      [
        "dybowskii, Pousargues's Mongoose, Central Africa"
      ],
      'Liberiictis':
      [
        'kuhni, Liberian Mongoose, Liberia/Ivory Coast'
      ]
    }
  }
};
const compiledHtml = template(context);
const displayGoals = document.getElementById('part1-2');
displayGoals.innerHTML = compiledHtml;
