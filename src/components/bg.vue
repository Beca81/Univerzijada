<template>
  <div id="eventDetails">
    <h1>
      <img :src="myevent.img1" />
    </h1>
    <h1>{{myevent.txt}}</h1>
    <h3 align="left">{{myevent.note1}}</h3>
    <h3>
      <img :src="myevent.img2" hspace="50"  />  
      <img :src="myevent.img4" />
    </h3>
    <h3 align="left">{{myevent.note2}}</h3>
    <h3>
      <img :src="myevent.img3" />
    </h3>
    <h3 align="left">{{myevent.note3}}</h3>
  </div>
</template>

<script>
export default {
  name: "bg",
  data() {
    return {
      myevent: {},
      events: [
        {
          id: 1,
          img: require("../assets/svsava.jpg"),
          img1: require("../assets/svsava1.jpg"),
          img2: require("../assets/svsava2.jpg"),
          img3: require("../assets/svsava3.jpg"),
          img4: require("../assets/svsava4.jpg"),
          txt: "The Temple of Saint Sava",
          note1:
            "The Church of Saint Sava (Serbian: Храм светог Саве / Hram svetog Save, literal translation into English: The Temple of Saint Sava) is a Serbian Orthodox church which sits on the Vračar plateau in Belgrade, Serbia. It was planned as the bishopric seat and main cathedral of the Serbian Orthodox Church. The church is dedicated to Saint Sava, the founder of the Serbian Orthodox Church and an important figure in medieval Serbia. It is built on the presumed location of St. Sava's grave. His coffin had been moved from Mileševa Monastery to Belgrade. It was placed on a pyre and burnt in 1595 by Ottoman Grand Vizier Sinan Pasha. Bogdan Nestorović and Aleksandar Deroko were chosen to be the architects in 1932 after a second unsuccessful competition in 1926/27. This sudden decision instigated an important debate in interwar Yugoslavia which centred around the temple's size, design and symbolic national function. It was even thought to transform Belgrade into the centre of Orthodoxy. This was accompanied by a sizeable increase in the base area of the ambitiously conceived project. The new design departed from the competition guidelines issued in 1926, and was to replicate the dimensions and architecture of Hagia Sophia.",
          note2:
            "The first stone was laid in 1935. When Yugoslavia was under occupation in 1941, the construction was approximately ten metres high. The incomplete building was used as a depot by the German army and Tito's partisans. After the war, the Orthodox Church was unsuccessful in its attempt to secure permission to complete the building. Permission was granted in 1984, and the architect Branko Pešić was commissioned to adapt the project to new construction techniques. On May 12, 1985, a liturgy was held at the temple with 100,000 people in attendance. This marked a turning point in the then-communist country; the church had reinstated its position and the communist elite had to back down from a decade-long ban prohibiting the construction of the church. In June 1989, the concrete dome of the temple, weighing 4,000 tonnes and constructed entirely on the ground, was raised to its present position. This was a landmark achievement in construction.",
          note3:
            "It is the largest Orthodox church in Serbia, one of the largest Eastern Orthodox churches and it ranks among the largest churches in the world. It is the most recognisable building in Belgrade and a landmark, as its dominating dome resembles that of the Hagia Sophia, after which it had been modelled. The church contains a rigorous symmetrical layout with a great sensitivity to light due to its large dome and four apses. Its interior cladding with 12,000 m2 (130,000 sq ft) of gold mosaics is almost complete. "
        },
        {
          id: 2,
          img: require("../assets/kalis2.jpg"),
          img1: require("../assets/kalis3.jpg"),
          img2: require("../assets/kalis4.jpg"),
          img3: require("../assets/kalis5.jpg"),
          img4: require("../assets/kalis6.jpg"),
          txt: "Kalemegdan park and Belgrade fortress",
          note1:
            "Kalemegdan is Belgrade’s central park and fortress complex lying on a hill overlooking the Sava and Danube confluence, on the eastern side of the river Sava. This has been the sight of the ancient Roman city of Singidunum, the medieval and Turkish era Belgrade and was converted into a park in the mid 19th century. It is home to several galleries and museums, restaurants, sports courts, and the Belgrade Zoo.",
          note2:
            "Besides many kilometers of paths and numerous hideouts through the park, there’s also a few playgrounds for the kids, some chess boards from the elderly, and a great wall which is a favorite spot for teens & youth with spectacular and often romantic views of sunsets, storms or other beauties of nature. In winter, the younger population goes skiing and sleigh riding on the slopes near the Zoo, or ice-skating at the court near the Sahat (Clock) tower. The park is also home to squirrels and other smaller animals which from time to time like to hang around with people, specially if you have some food to offer them. If you don’t like walking, you can also get the mini train that runs through the park.",
          note3:
            "Being a preserved sight with two millennia of history, Kalemegdan is home to many monuments. There are four significant towers, the two most important being Nebojša tower and Sahat (clock) tower, numerous gates, the most important ones are Zindan Kapija, Inner Stambol Kapija (below the tower), and Charles VI gate. There are walls from Roman and medieval times, Turkish and Austrian. There are many ruins and archaeological sights, and a whole lot of statues, the most important being the statue to the Victor, aka Pobednik, and one dedicated to Despot Stefan, founder of Serbian medieval Belgrade. The Victor is one of the most important symbols of Belgrade."
        },
        {
          id: 3,
          img: require("../assets/skadarlija.jpg"),
          img1: require("../assets/skadarlija4.jpg"),
          img2: require("../assets/skadarlija2.jpg"),
          img3: require("../assets/skadarlija3.jpg"),
          img4: require("../assets/skadarlija1.jpg"),
          txt: "Skadarlija, the most beautifil story of old Belgrade",
          note1:
            "Skadarlija is one of the places that you shouldn’t miss on your Belgrade tour. There is a saying that if you haven’t visited Skadarlija you haven’t truly experienced Belgrade. Skadarlija is a vintage street in the capital of Serbia. It is located in the Belgrade municipality of Stari Grad (Old town) and generally considered the main bohemian quarter of Belgrade, similar to Paris' Montmartre. It is located in the heart of Belgrade, the old, romantic and bohemian, known in history and legend, and it lives more than a century in many songs, interesting stories and anecdotes as well as in many literary and journalistic writings. This magical part of Belgrade , beloved corner of poetry and romantic history, famous for its wooden cobbles , gas lanterns among the trees in bloom , the famous houses and taverns , where famous writers , journalists, actors, directors, musicians, singers , painters and other merry-makers spent many pleasant evenings. Today it mostly attracts curious tourists from all over the world, so Skadarlija remains inscribed in golden letters in the history of Belgrade.",
          note2:
            "The history of Skadarlija began in the 1830s with the settlement of Gypsies in the abandoned trenches in front of the ramparts. The 1854 town plan of Belgrade reveals that the Gypsy hovels had been replaced by brick buildings into which artisans, caterers, petty clerks and others moved. The whole locality was referred to as the Gypsy Quarter until 1872 when it was named Skadarlija and it kept that name until the present day. Skadarlija changed its name once in the meantime, during the Austro-Hungarian occupation, when it was changed to The Rose Street. And that's the only time the name of the street was changed for a short period of time. Skadarlija was dimly lit, paved with cobblestones, as was the custom in the Ottoman era. This antique look is kept today, only the space between the stones is set in concrete. In the beginning of its history, in addition to bumpy Turkey cobblestones and several fountains, the main characteristics of Skadarlija Street from that time were stretched floral gardens behind the fences with houses plastered with mud or half-timbered and several of them had roofs tiles. Skadarlija was renovated in 1966 and protected by law. The fountain is built at the top of the street, and the walls are painted with murals depicting Skadarlija in its historic days. Belgrade bohemians (actors, painters, writers ... ) have occupied the taverns in Skadarska Street when tavern-Dardanelles was demolished in 1901 which was located on the site of today's National Museum and until that time it was their favorite place for gatherings. Due to the proximity of the National Theatre, many actors have lived there in the late 19th and early 20th century, then other artists, poets, writers and painters followed. Some of them like Duro Jakšic (who now has a monument in Skadarlija ) were regular guests of the taverns and his presence and work left a permanent impression on Skadarlija’s cobblestone.",
          note3:
            "There are many poems and stories created on the napkins and tavern sheets, which was a payment currency for many writers of that time; they paid for their food and drinks with their art created on the spot. Described In many tourist brochures as an attractive place that is worth seeing, Skadarlija continues its merry life. The most significant cultural - historical monument in restored Skadarlija is definitely the house of the painter and poet Djura Jaksic , followed by two famous oldest tavern - Tri šešira ( three hats) and Dva jelena (two deer) in addition to a number of other facilities. Today Skadalija is one of the key tourist attractions of Belgrade. It is under state protection as a cultural monument. It has its own code and its own flag, with the symbols of walking stick, carnation and a hat. In this neighborhood there are a handful of restaurants where you'll be able to really experience the traditional Serbian cuisine. There are also galleries, antique shops and souvenir shops."
        },
        {
          id: 4,
          img: require("../assets/ada1.jpg"),
          img1: require("../assets/ada1.jpg"),
          img2: require("../assets/ada2.jpg"),
          img3: require("../assets/ada4.jpg"),
          img4: require("../assets/ada3.jpg"),
          txt: "Ada Ciganlija",
          note1:
            "Ada Ciganlija is elongated river island created on the fourth kilometer of the Sava River from the confluence of the Danube River. Name Ciganlija could come from Celtic words 'single' and 'lia', which mean island and underwater land. The name conjures up variability of Sava water level. When it is low level, it is the Singa, when high level, then Lia. 'Singalija' eventually turned into Ciganlija. Prince Milos Obrenovic has named the island the state and the national good in 1821, as it is today. The total area of Ada, with Ada Medjica, is 800 hectares. Covered with dense deciduous forest, interspersed with glades and meadows, Ada Ciganlija has become the largest, most beautiful and the most visited resort in Belgrade. This very popular attraction in Belgrade hosts over 1,000,000 visitors during the summer. Famous for its beaches, sports facilities, bars, restaurants and many activities it offers and due to its popularity it is often called the Belgrade Sea.",
          note2:
            "Ada is rich in wildlife, the largest communities are endangered small cormorants, wild ducks and gulls, as well as pheasants and quails. Also, this is one of the few places in the city where in the nature you can see a deer or rabbit. For fishermen, there is also the lake Ada Safari. Beach around the Sava Lake is fully furnished and equipped with infrastructural facilities, and is one of the largest and most beautiful beaches on the artificial lakes in Europe. The lake is ideal for swimming, boating, kayaking, water polo, diving, windsurfing and other sports. Over 50 different sports courts have been built outdoors, including a golf course and ski lift for skiing. For lovers of extreme sports, there is bungee jumping, wall-climbing and 'paintball'.",
          note3:
            "Ada Ciganlija is a cultural and entertainment center of Belgrade, especially in the summer. It organizes a number of events involving the most famous writers, entertainers and cultural clubs, choirs, orchestras. Dozens of restaurants in the rustic style, rafts-restaurants and homes on the water make a gastronomic offer at Ada. Those amenities preserve and foster the bohemian tradition of Belgrade. The Belgrade club and nightlife is enriched with opening the bars that are popular throughout the year. At the entrance to the lake there is a collection of stone sculptures, which attracts a lot of attention of tourists. The formation is called ‘Stone Town’ and it is a work of the sculptor Ratko Vulanovic. One of the trademarks of the Sava lake is water fountain, similar to the most famous fountain in Geneva. At night it is lit and it also represents one of the attractions of ‘Belgrade sea’."
        },
        {
          id: 5,
          img: require("../assets/square.jpg"),
          img1: require("../assets/square1.jpg"),
          img2: require("../assets/square2.jpg"),
          img3: require("../assets/square4.jpg"),
          img4: require("../assets/square3.jpg"),
          txt: "Republic square",
          note1:
            "The Republic square is the main city square in Belgrade. It occupies an area of 120m and is surrounded by important landmarks such as the National theatre, the 'Jadran' cinema, the Serbian Army Home, the monument to prince Mihailo and many others. The Republic square, in its form today, originated in 1866, after the Stambol-gate that had been in that location was torn down and built in its place the National Theatre. The gate was built at the beginning of the 18th century by the Austrians, in the spot between today’s prince Mihailo monument and the theatre. In its day that construction was considered one of the most grandiose and beautiful of that time, when Belgrade was still surrounded by a ditch. This is where the famous road leading to Constantinople (today Istanbul) which was how it got its name. Still, regardless of its beauty, the Stambol gate didn’t remain in pleasant memory for the Serbian people, but rather as the place where the Turks would execute their prisoners by goring them on the stakes.",
          note2:
            "After Serbian power was permanently recovered and the gate torn down, the area where the square is today had long remained unorganized and the only building standing there was the National theatre. The today’s landmark of the square, the prince Mihailo monument, was built in 1882 and signified the start of focused effort to gradually build this area. Where today stands the National museum used to be a single story building which, among other things, housed the then famous tavern ‘Dardaneli’, where the artist board convened. Later this building was torn down, and in 1903 the Fund management building was constructed where the National museum is located today. Next to the theatre there is a small park where up until WWII there was a tavern-cinema ‘Kolarac’ which had gotten its name from the building’s owner and benefactor Ilija Milosavljevic Kolarac. The palace ‘Riounione’ where today the ‘Jadran’ cinema is located was built in 1930.",
          note3:
            "In the place where today stands the Home of Press building up until WWII there were various aged, one-story buildings housing various businesses. Most of them were destroyed during the bombing on 6th of April 1941. After the war was over, there was a thorough reconstruction of the area, most notably resulting in the removal of tram tracks that had been there and relocation of the square where for a brief time stood the tomb and monument to the fallen fighters of the Red Army. Later their remains were moved to the Belgrade’s Liberator graveyard. In addition to its status as the most famous meeting place and various attractions location, the square also has a rich historical significance, as many historical events took place here. For example, there is an event from 1806, during the battles for the city’s liberation. It was said that before the final breach of the fort, one of the soldiers (Miliav Camdzija) promised to his comrades that he will sing from the top of the tallest Turkish cannon, signaling their victory. While the fiercest clash was still in progress, Camdzija kept his promise despite his heavy injuries. It is said that Karadjordje, the leader of the rebellion himself, after hearing his song ordered the all-out charge which finally took the fortress. During the same attack Vasa Carapic, famous national hero whom the people had dubbed ‘Dragon of Avala’, lost his life, so today the street leading up to the once-gate has his name. The demolition of the gate had been a symbolic decision made by prince Mihailo Obrenovic, who wanted to build the National theatre in that same place, replacing what was once a symbol of oppression with a symbol of progress. Unfortunately the prince didn’t live to see the end result of his efforts as he was assassinated two months after the gate had been torn down, in May 1868."
        },
        {
          id: 6,
          img: require("../assets/avala.jpg"),
          img1: require("../assets/avala3.jpg"),
          img2: require("../assets/avala1.jpg"),
          img3: require("../assets/avala4.jpg"),
          img4: require("../assets/avala2.jpg"),
          txt: "Avala tower",
          note1:
            "The Avala TV tower is a telecommunication and observation tower located at mount Avala in the southern suburbs of Belgrade. With a height of 205 meters it is currently the tallest tower in Belgrade, Serbia and the Balkans. On a sunny day the views stretch up to 100 kilometers offering breathtaking panoramas of the city, the surrounding hills, towns, roads and rivers, as well as to the Pannonian plain in the north. The Avala Tower was a symbol of pride and a famous landmark, not only of Belgrade and Serbia, but of the former Yugoslavia too.",
          note2:
            "The tower was designed by architects Uglješa Bogdanović and Slobodan Janjić, and engineer Milan Krstić. Construction started on 14 October 1961 and was completed four years later in 1965. The tower weighed 4,000 tons. It was the only tower in the world to have an equilateral triangle as its cross section, and one of very few towers not perched directly into the ground, but standing on its legs. The legs formed a tripod, the symbol of Serbian tripod chair. It is one of the small number of towers to be constructed in that manner. The Avala Tower was destroyed on 29 April 1999 in the NATO bombings. The tower was one of the last buildings to be destroyed before the end of the NATO operation. A special bomb was used to destroy the tower. The blast was one of the loudest explosions heard throughout Belgrade during the bombings.",
          note3:
            "In 2004, Serbian Radio Television commenced a series of fund-raising events in order to collect money to construct the building once again at the same place where it stood before destruction. In 2005, clearing of the site where the tower was destroyed began and on 21 December 2006 the construction of a new Avala Tower commenced. Initially, completion of the new tower was expected in August 2008, but construction works were severely delayed. The opening date was pushed back to 29 April 2009, the tenth anniversary of its destruction. Radio Television Serbia reported on 23 October 2009 that the tower had been completed."
        }
      ]
    };
  },
  created() {
    var id = Number(this.$route.params.id);
    var event = this.events.find(event => event.id == id);
    this.myevent = event;
  }
};
</script>



<style lang="scss">
</style>