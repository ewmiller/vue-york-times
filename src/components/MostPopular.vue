<template>
  <div id="most-popular">
    <TitleHeading title="Most Popular" subtitle="Today's most-shared stories."></TitleHeading>

    <div class="section">
      <div class="container">
        <div class="columns" v-for="articles in chunkedArticles">
          <div class="column" v-for="article in articles">
            <ArticleCard v-bind:article="article"></ArticleCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleHeading from './TitleHeading.vue';
import ArticleCard from './ArticleCard.vue';

const request = require('request');
const chunk = require('chunk');

export default {
  name: 'MostPopular',
  methods: {

  },
  components: {
    TitleHeading, ArticleCard
  },
  computed: {
    chunkedArticles: function() {
      return chunk(this.articles.results, 3);
    }
  },
  data () {
    return {
      articles: {
        "status": "OK",
        "copyright": "Copyright (c) 2018 The New York Times Company.  All Rights Reserved.",
        "num_results": 3,
        "results": [
        {
          "url": "https:\/\/www.nytimes.com\/2018\/04\/16\/science\/friendship-brain-health.html",
          "count_type": "EMAILED",
          "column": "Basics",
          "section": "Science",
          "byline": "By NATALIE ANGIER",
          "title": "You Share Everything With Your Bestie. Even Brain Waves.",
          "abstract": "Scientists have made astonishing discoveries about the nature and evolution of friendship. Without it, humans suffer significant physical and emotional damage.",
          "published_date": "2018-04-16",
          "source": "The New York Times",
          "des_facet": [
            "FRIENDSHIP",
            "BRAIN"
          ],
          "org_facet": [
            "DARTMOUTH COLLEGE",
            "NATURE COMMUNICATIONS (JOURNAL)",
            "RESEARCH"
          ],
          "per_facet": "",
          "geo_facet": "",
          "media": [
            {
              "type": "image",
              "subtype": "photo",
              "caption": "",
              "copyright": "Keith Negley",
              "approved_for_syndication": 1,
              "media-metadata": [
                {
                  "url": "https:\/\/static01.nyt.com\/images\/2018\/04\/17\/science\/17FRIENDSHIP\/17FRIENDSHIP-thumbStandard.jpg",
                  "format": "Standard Thumbnail",
                  "height": 75,
                  "width": 75
                },
                {
                  "url": "https:\/\/static01.nyt.com\/images\/2018\/04\/17\/science\/17FRIENDSHIP\/17FRIENDSHIP-mediumThreeByTwo210.jpg",
                  "format": "mediumThreeByTwo210",
                  "height": 140,
                  "width": 210
                },
                {
                  "url": "https:\/\/static01.nyt.com\/images\/2018\/04\/17\/science\/17FRIENDSHIP\/17FRIENDSHIP-mediumThreeByTwo440.jpg",
                  "format": "mediumThreeByTwo440",
                  "height": 293,
                  "width": 440
                }
              ]
            }
          ]
        },
        {
          "url": "https:\/\/www.nytimes.com\/interactive\/2018\/04\/17\/us\/san-francisco-earthquake-seismic-gamble.html",
          "count_type": "EMAILED",
          "column": "",
          "section": "U.S.",
          "byline": "By THOMAS FULLER, ANJALI SINGHVI and JOSH WILLIAMS",
          "title": "San Francisco’s Big Seismic Gamble",
          "abstract": "The city’s building code does not protect its people from earthquakes nearly as much as you might think.",
          "published_date": "2018-04-17",
          "source": "The New York Times",
          "des_facet": [
            "EARTHQUAKES",
            "ACCIDENTS AND SAFETY",
            "BUILDINGS (STRUCTURES)",
            "BUILDING (CONSTRUCTION)"
          ],
          "org_facet": [
            "AREA PLANNING AND RENEWAL"
          ],
          "per_facet": "",
          "geo_facet": [
            "SAN FRANCISCO (CALIF)",
            "CALIFORNIA"
          ],
          "media": [
            {
              "type": "image",
              "subtype": "photo",
              "caption": null,
              "copyright": null,
              "approved_for_syndication": 0,
              "media-metadata": [
                {
                  "url": "https:\/\/static01.nyt.com\/images\/2018\/04\/17\/us\/san-francisco-earthquake-seismic-gamble-promo-1523979132825\/san-francisco-earthquake-seismic-gamble-promo-1523979132825-thumbStandard.jpg",
                  "format": "Standard Thumbnail",
                  "height": 75,
                  "width": 75
                },
                {
                  "url": "https:\/\/static01.nyt.com\/images\/2018\/04\/17\/us\/san-francisco-earthquake-seismic-gamble-promo-1523979132825\/san-francisco-earthquake-seismic-gamble-promo-1523979132825-mediumThreeByTwo210.jpg",
                  "format": "mediumThreeByTwo210",
                  "height": 140,
                  "width": 210
                },
                {
                  "url": "https:\/\/static01.nyt.com\/images\/2018\/04\/17\/us\/san-francisco-earthquake-seismic-gamble-promo-1523979132825\/san-francisco-earthquake-seismic-gamble-promo-1523979132825-mediumThreeByTwo440.jpg",
                  "format": "mediumThreeByTwo440",
                  "height": 293,
                  "width": 440
                }
              ]
            }
          ]
        },
        {
          "url": "https:\/\/www.nytimes.com\/2018\/04\/16\/health\/lung-cancer-immunotherapy.html",
          "count_type": "EMAILED",
          "column": null,
          "section": "Health",
          "byline": "By DENISE GRADY",
          "title": "Lung Cancer Patients Live Longer With Immune Therapy",
          "abstract": "Adding immunotherapy to standard chemo treatments can halve the risk of death for people with the most common type of lung cancer, a new study shows.",
          "published_date": "2018-04-16",
          "source": "The New York Times",
          "des_facet": [
            "IMMUNE SYSTEM",
            "LUNG CANCER",
            "IMMUNOTHERAPY"
          ],
          "org_facet": [
            "CHEMOTHERAPY",
            "CANCER",
            "AMERICAN ASSN FOR CANCER RESEARCH",
            "MERCK & COMPANY INC"
          ],
          "per_facet": "",
          "geo_facet": "",
          "media": [
            {
              "type": "image",
              "subtype": "photo",
              "caption": "A colored magnetic resonance imaging scan of a cancerous tumor in the lung, in orange, upper right. A study suggests “that chemotherapy alone is no longer a standard of care,” its lead author said.",
              "copyright": "Zephyr\/Science Source",
              "approved_for_syndication": 0,
              "media-metadata": [
                {
                  "url": "https:\/\/static01.nyt.com\/images\/2018\/04\/17\/science\/17LUNGsub\/merlin_136928253_3723383a-1096-4d57-ab16-3676a296920b-thumbStandard.jpg",
                  "format": "Standard Thumbnail",
                  "height": 75,
                  "width": 75
                },
                {
                  "url": "https:\/\/static01.nyt.com\/images\/2018\/04\/17\/science\/17LUNGsub\/17LUNGsub-mediumThreeByTwo210.jpg",
                  "format": "mediumThreeByTwo210",
                  "height": 140,
                  "width": 210
                },
                {
                  "url": "https:\/\/static01.nyt.com\/images\/2018\/04\/17\/science\/17LUNGsub\/17LUNGsub-mediumThreeByTwo440.jpg",
                  "format": "mediumThreeByTwo440",
                  "height": 293,
                  "width": 440
                }
              ]
            }
          ]
        }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>