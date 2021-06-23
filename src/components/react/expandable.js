import React from 'react';
import Collapsible from 'react-collapsible';
import './collapsible.css'

class Expandable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      {this.props.version == 1 &&
        <Collapsible trigger="🔮 Reveal your secrets... (answers) 🔮">
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://en.wikipedia.org/wiki/National_Sports_Day">DHYANCHAND</a>:  His birth anniversary is celebrated as India’s National Sports Day</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://en.wikiquote.org/wiki/Talk:Isaac_Newton#We_build_too_many_walls">BRIDGES</a>:  We build too many walls and not enough ____- Isaac Newton</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://en.wikipedia.org/wiki/Premchand">PREMCHAND</a>:  Indian writer who first wrote under the pen name Nawab Rai</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://en.wikipedia.org/wiki/Crew_Dragon_Resilience">RESILIENCE</a>:  The Age of Commercial Spaceflight Begins</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://en.wikipedia.org/wiki/Protostar">PROTOSTAR</a>:  A contracting cloud of gas and dust with enough mass to form a star</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://en.wikipedia.org/wiki/Virender_Sehwag">SEHWAG</a>:  Only Indian with two triple-centuries in Test cricket</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://www.merriam-webster.com/dictionary/abstemious">ABSTEMIOUS</a>:  One of the only words to have all vowels in order</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://www.goodreads.com/book/show/2578021-the-wreck">WRECK</a>:  Book by Rabindranath Tagore, “The ____” (~destruction)</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="http://fearof.net/fear-of-feathers-or-being-tickled-by-feathers-phobia-pteronophobia">PTERONOPHOBIA</a>:  Birds of a feather flock together, But the question is whether you fear being tickled by a feather</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://en.wikipedia.org/wiki/Malgudi_Days_(short_story_collection)">MALGUDI</a>:  A town supposedly located on the banks of Sarayu river near the Mempi forest</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://www.nature.com/articles/srep37665">MPEMBA</a>:  Hot water appears to freeze faster than cold water</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://en.wikipedia.org/wiki/Douglas_Engelbart">MOUSE</a>:  X-Y position indicator for a display system</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://scoobydoo.fandom.com/wiki/Scooby-Doo">BERT</a>:  Scoo___ Doo, Where Are You!.. Wait who ?</p>
        <p><a target="_blank" referrerPolicy="no-referrer" href="https://en.wikipedia.org/wiki/Transformers_(film_series)">TRANSFORMERS</a>:  Name of a popular film series. Works on Faraday's law of electromagnetic induction</p>
      </Collapsible>
      }
      {this.props.version == 2 &&
        <Collapsible trigger="🔮 Reveal your secrets... (answers) 🔮">
        <p>This cartoon series about a group of kids who called themselves &lsquo;Gulab Nagar Junglees&rsquo;, quickly gained popularity leading the producers to launch a game for Android mobile phones.</p>

        <p>Howzzattt</p>

        <p>Who composed the Shiva Tandav Stotra, which is perhaps the first Sanskrit rap song?</p>

        <p>Raavana</p>

        <p>This island in India is considered as one of the last places untouched by the outside world.</p>

        <p>Sentinel</p>

        <p>This board game was first created to teach morals and lessons about karma in a way that young children would understand and remember.</p>

        <p>Snakes and Ladders</p>

        <p>The author of the book that contains the longest sentence having 823 words shares his first name with the protagonist in Mary Shelly&rsquo;s famous novel. What&rsquo;s the author&rsquo;s surname?</p>

        <p>Hugo</p>

        <p>The highest rail bridge in the world spans over this river.</p>

        <p>Chenab</p>

        <p>This everyday item which was used across the country (before lockdown) is made from trillions of microscopic plankton fossils.</p>

        <p>Chalk</p>

        <p>Old technique from Orissa that uses palm leaves for the portrayal of epics and folklore.</p>

        <p>Pattachitra</p>

        <p>The first book that was written using a typewriter is the story of this orphan who lives in the fictional town of St Petersburg.</p>

        <p>Tom Sawyer</p>

        <p>This stepwell that adorns the new 100-rupee note became a UNESCO world heritage Site in 2014.</p>

        <p>Rani Ki Vav</p>

        <p>Mark Twain has described this city as &lsquo;older than history, older than tradition, older even than legend and looks twice as old as all of them put together.&rsquo;</p>

        <p>Varanasi</p>

        <p>All the professors in pokemon are named after _____</p>

        <p>Trees</p>

        <p>Over which water body is the only floating post office of the world situated?</p>

        <p>Dal Lake</p>

        <p>At very low temperatures, this gas can flow up against gravity.</p>

        <p>Helium</p>

        <p>What was Doremon's original paint colour?</p>

        <p>Yellow</p>
      </Collapsible>      
      }
      </>
    );
  }
}
 
export default Expandable;