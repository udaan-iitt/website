import React, { useState, useLayoutEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'Layout/layout';
import FadeIn from 'react-fade-in';
import SEO from 'Components/seo';
import PostGrid from 'Components/postGrid/postGrid';
// import CategoryFilter from 'components/categoryFilter';
import EditionFilter from 'Components/editionFilter';
import useSiteMetadata from 'Hooks/useSiteMetadata';
import SearchBar from "material-ui-search-bar";
import Collapsible from 'react-collapsible';
import "./custom_styles/collapsible.css";


function naturalSort(ary, fullNumbers) {
  var re = fullNumbers ? /[\d.-]+|\D+/g : /\d+|\D+/g;

  // Perform a Schwartzian transform, breaking each entry into pieces first
  for (var i = ary.length; i--;)
    ary[i] = [ary[i]].concat((ary[i] + "").match(re).map(function (s) {
      return isNaN(s) ? [s, false, s] : [s * 1, true, s];
    }));

  // Perform a cascading sort down the pieces
  ary.sort(function (a, b) {
    var al = a.length, bl = b.length, e = al > bl ? al : bl;
    for (var i = 1; i < e; ++i) {
      // Sort "a" before "a1"
      if (i >= al) return -1; else if (i >= bl) return 1;
      else if (a[i][0] !== b[i][0])
        return (a[i][1] && b[i][1]) ?        // Are we comparing numbers?
          (a[i][0] - b[i][0]) :         // Then diff them.
          (a[i][2] < b[i][2]) ? -1 : 1; // Otherwise, lexicographic sort
    }
    return 0;
  });

  // Restore the original values into the array
  for (var k = ary.length; k--;) ary[k] = ary[k][0];
  return ary.reverse();
}

const Home = ({ pageContext, data }) => {

  // const arr1 = data.allMdx.edges;
  const arr2 = data.allMarkdownRemark.edges;
  const unfiltered = arr2;
  var postData = unfiltered.filter(function ({ node }) { return node.fields.slug.includes("_") });

  var editions = postData.map(function (el) { return el.node.fields.slug.split('/')[2]; });
  editions = editions.filter(e => !e.endsWith("Test"));
  // Convert editions to unique values
  let unique_editions = [...new Set(editions)];
  // unique editions contains strings of the form YYYY_Season wher Season contains Winter Summer Autumn
  // Sort the unique_editions array
  let reversedList = unique_editions.sort((a, b) => {
    const [yearA, seasonA] = a.split('_');
    const [yearB, seasonB] = b.split('_');

    if (yearA !== yearB) {
      return yearA - yearB;
    }

    const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    return seasons.indexOf(seasonA) - seasons.indexOf(seasonB);
  });


  let alleditions = reversedList.reverse();

  alleditions.indexOf("All") === -1 ? alleditions.push("All") : console.log("Unexpected mod to alleditions");
  const [posts, setPosts] = useState([]);
  const [old_posts, setOldPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [bindex, upIndex] = useState(0);
  // const [textFilter, doSomethingWith] = useState("");
  const currentCategory = pageContext.category || "All";
  var currentEdition;
  if (pageContext.edition)
    currentEdition = pageContext.edition;
  else
    currentEdition = alleditions[0];
  // alleditions.length - 1
  // const alleditions = pageContext.alleds;


  function doSomethingWith(search) {
    if (search == null || search.trim() === '') {
      setPosts(old_posts);
    } else {
      const filtPost =
        old_posts.filter(post => {
          let checkString = post.title + " " + post.desc + " " + post.authors;
          return checkString.toLowerCase().includes(search.toLowerCase())
        })
      setPosts(filtPost);
    }
    upIndex(bindex + 1);
  }

  useLayoutEffect(() => {

    let filteredPostData = currentCategory
      ? postData.filter(
        ({ node }) => { return (node.frontmatter.category === currentCategory || currentCategory === "All") && (node.fields.slug.split('/')[2] == currentEdition || currentEdition === "All") }
      )
      : postData;
    filteredPostData.sort((a, b) => {
      return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
    });
    filteredPostData.forEach(({ node }) => {
      const {
        id,
        fields: { slug },
        frontmatter: {
          title,
          desc,
          date,
          category,
          thumbnail: { childImageSharp },
          authors,
          starred,
          alt,
        },
      } = node;

      setPosts((prevPost) => [
        ...prevPost,
        {
          id,
          slug,
          title,
          desc,
          date,
          category,
          thumbnail: childImageSharp.id,
          authors,
          starred,
          alt,
        },
      ]);
      setOldPosts((prevPost) => [
        ...prevPost,
        {
          id,
          slug,
          title,
          desc,
          date,
          category,
          thumbnail: childImageSharp.id,
          authors,
          starred,
          alt,
        },
      ]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory, arr2]);

  const site = useSiteMetadata();
  const postTitle = currentCategory || site.siteMetadata.postTitle;
  return (
    <Layout>
      <Main>
        <Content>
          <EditionFilter editionList={alleditions} categoryList={data.allMarkdownRemark.group} currented={currentEdition} />
          {currentEdition == "2024_Summer" &&
            <Collapsible trigger="Editor's Note">
             <p>Welcome to our ‘Summer 2024’ edition! We understand that it’s been quite a long wait - but better late than never (and apologies for the same).</p>
              <p>To start things off, we have ‘Behind the Editors’ - a collection of windows peeping into the minds of our beloved editors. To ease your attention slowly, enjoy the hilarious exchange between Hostel-G and Hostel-H in our incredibly whimsy ‘DES-Track’.</p>
              <p>Not in the mood for unserious talk? No problem, we have really got you covered. Dishing out interviews as if there is no tomorrow, we have - ‘Professor Daniel Raveh’ with his experience in learning about Indian philosophy; ‘Mr. R. Muralidharan’ with his exciting projects on defence systems; and ‘Professor C. N. R. Rao’, a renowned chemist with a medley of his awards, recognition, and hardwork.</p>
              <p>Too heavy, too soon? Relax, ‘Fairytale or Fairyhell’ and ‘हाल-ए-दिल तो पूछो’ (At least ask how my heart is) are here to provide you with a sense of familiarity. Love poems never go out of fashion - you keep them sending, and we keep them releasing. Talking about poems, we also have ‘Whispers from the Rudraksha Grove’ - full of rhyme, rhythm, and release of emotions.</p>
              <p>And before we leave it behind, we have ‘Uncharted’ - will the spaceship ever escape? Now, back to something more relevant - what’s the one thing you go through more than your books? Baring it all, we have ‘The Confessions Tale’ - sourced directly from the admin of the famous confession-posting Instagram page! Going on a slight tangent: if you really want to collect your thoughts, calm your mind, and the rest of the sort - check out ‘Stuck in the Middle?’ to regain some semblance of neutrality.</p>
              <p>Going back to our regular offerings, we have - ‘After class activities: Student-clubs and the year gone by’ with the condensed report of all our bustling groups and their events; and ‘Chapter 4: Resources for help - YourDOST’, a continuation of our ‘It’s the Climb’ series.</p>
              <p>There’s even more to discuss (physical magazines) but until next time - peace out!</p>
            </Collapsible>
          }
          {currentEdition == "2024_Winter" &&
            <Collapsible trigger="Editor's Note">
              <p>Get ready for some cosy vibes with our Winter 2024 edition – a heartwarming celebration four years in the making!</p>
              <p>In Campus News, join us for an insightful interview with Prof. Pramod Nayar, UNESCO's chair of Vulnerability Studies. Dive into the recap of our campus's Wisdom Wednesdays, and buckle up for the rollercoaster ride that was IITT's first alumni reunion – we're spilling the tea on the good, the bad, and the ugly. </p>
              <p>But what's winter without a touch of poetry? This season's lyrical lineup urges you to wake from the dream of reality, offers a solution to rewriting your past, appreciates the eternity of nature, and insists you take a break and rest for a while. We've even got two gorgeous takes on rain and nature that'll make your heart sing.</p>
              <p>Op-Eds? Oh yes! Explore the origins of quarrels, the paradox of breaking down tasks, and the insider's story of the Inter IIT Tech Meet – a true techie courtroom drama. We've also got an article on open-source gaming – how a few tweaks can improve your gaming experience.</p>
              <p>Oh, and how could we forget a good dose of curling up against a cosy sofa with a good story in hand? Presenting “Nanna!” a heartwarming tale of a father-daughter duo. We’ve also got you on the edge of your seats with “A Face is Enough,” combining human behaviour with a gripping murder narrative, and "Family Sticks Together," which pits you against your doppelgänger demons in a murder horror story. Chills, spills, and family drama – winter nights sorted! </p>
              <p>Slide into the reviews section for a culinary critique of the food court, sprinkled with a bit of Udaan sass. And cosy up for a Tea Time Chat with TripuWrites, a conversation that'll warm your literary soul. And to wrap it up all up on a very welcoming and relatable note, flip through Chapter 2 of "It's the Climb." It's like a warm, fuzzy blanket for your soul, featuring raw, authentic stories that make us all beautifully human. </p>
              <p>So grab a cup of cocoa, snuggle up in your favourite blanket, and glide into this Winter 2024 edition!</p>
            </Collapsible>
          }
          {currentEdition == "2024_Spring" &&
            <Collapsible trigger="Editor's Note">
              <p>Welcome back to another vibrant edition of Udaan! Spring has sprung, and with it comes a burst of creativity and inspiration in the pages of Udaan. We're thrilled to present a collection of stories, experiences, and insights that encapsulate the essence of our college community.</p>

              <p>This season is nothing short of its author’s enterprise with beautiful stories and crafted poems. Step into the realm of storytelling with "A Cup Without Tea for Tea Without a Cup," where the eternal battle between tea and coffee enthusiasts brews into a delightful storm of flavour or find solace in the reflective verses of "Free Bird," written during the pandemic, expressing the longing for freedom amidst confinement.</p>

              <p>As a tribute to the Graduating Batch of 2020, we have Back to the Future, a narration that takes you through twists and turns of college life with nostalgic reflections and cherished memories. We also have Chapter 3 of our mental health series, It’s the Climb. “Embracing Hope" invites you to explore the dynamics of resilience and mental well-being, reminiscent of the hope that springs forth with the new season. Of course, our fan-favourite Puppet Show is back as a friendly tribute to all the coordinators and secretaries of the year 2023-24.</p>

              <p>To make campus news a little more spontaneous and easy, we introduce Beats, a short read that covers some of the main happenings on the campus. We have “The Can Chronicles,” highlighting the water issues, convocation tales, “Fighting God must be easier,” a budgeting rant, GBM, Mess, and many more! This edition also features an exclusive glimpse into the wisdom and experiences of Dr. Girish Kumar Rajan, a fluid mechanics and applied mathematics specialist who is more known for his more than 1-hour lectures.</p>

              <p>Well, these are just a glimpse into the content awaiting you within these pages, we invite you to immerse yourself fully in the diverse array of poetry, stories, experiences, and insights in this edition of Udaan.</p>

              <p>As the chief editors of this edition in our final year, this is our last actively involved edition in Udaan, and we’re incredibly grateful to the community, the team, and all the people who have worked together to create such pretty editions each season. Udaan has come a long way since its inception, and we thank all the readers and contributors. Please continue to give us your feedback, contribute and add your own little bit to the magazine. This edition is dedicated to us, you guys, and the entire student community. Thank you for being a part of our journey.</p>
            </Collapsible>
          }
          {currentEdition == "2023_Autumn" &&
            <Collapsible trigger="Editor's Note">
              <p>Welcome to our 10th edition, where the autumn spirit infuses our pages. This edition brims with vibrant internship stories from our 3rd and 4th-year students, spanning agritech, cobotics, construction, aerospace, and semiconductors. Amidst the falling autumn leaves, we invite you to an article that pays homage to the "Summer of Nothing," a delightful ode to those unhurried summers.</p>

              <p>We embark on a journey through the enigmatic realm of Lambert W functions and the cosmic mysteries whispered by the universe. A physicist's insights rustle like leaves in the breeze.</p>

              <p>We're excited to bring you the second instalment of "Tea Time Chat with the Author," where another budding writer shares their literary voyage. Next, a review captures the essence of autumn romance set against the backdrop of a train journey from Bhalpaw to Kadhal. It's like sipping hot cocoa on a crisp autumn day.</p>

              <p>Our poetry section reveals the subtle emotions of unspoken love and the longing for the comforts of home, all wrapped in the beauty of autumn moments. Lastly, our campus news section delves into placements and internships as autumn winds carry the stories of students navigating their academic journey.</p>

              <p>Like Ghalib's depiction of autumn as a mark of pride on Kashi's forehead, this edition is our emblem of honour. The largest edition yet, it stands as a testament to our dedication and the evolving seasons of our literary journey. Embrace the autumn spirit and immerse yourself in our tenth edition.</p>

            </Collapsible>
          }
          {currentEdition == "2023_Summer" &&
            <Collapsible trigger="Editor's Note">
              <p>In this delayed summer edition, as we toil from our abodes amidst the warmth of our families, we unveil a captivating array of tales that delve into the realms of love and kinship. Both stories, resilient in nature, cast a spotlight on profound themes. One unearths the horrors of colonisation and the underlying coloniality, underscoring the significance of safeguarding one's heritage and pursuing justice. The other serves as a testament to love's fortitude, triumphing over adversity and reminding us of the unwavering importance of championing righteousness amidst corruption and cruelty.</p>

              <p>Within our poetic realm, Ariadne graciously bestows upon us the crimson threads that guide us through the labyrinthine depths of her mind - an intricate tapestry of unspoken desires. Ah, who among us does not possess such bittersweet memories? Furthermore, within our Op-Ed section, an extraordinary article elucidates the conjunctions and disjunctions of safety, while another seeks to decipher the cryptic musings of the enigmatic scriptwriter, chatGPT.</p>

              <p>Our literary ensemble proudly presents two compelling reviews. The first beckons you to embark on a journey that promises transformation, though one that may lead to unexpected desolation. The second invites you to grapple with the intricate shades of good and evil in a tangible realm populated by characters lost in the vast expanse of a galaxy far, far away.</p>

              <p>In the realm of campus news, we proudly present two cherished compilations. The first is our customary endeavour - &quot;Outlets of Expression&rdquo;, a report on the activities of our campus clubs. The second pays homage to our precursors in the online magazine domain&mdash;the revered newspaper where our team undertakes the whimsical task of offering an unfiltered yet affectionate portrayal of the academic year 22-23, aptly titled &quot;Our Take.&quot;</p>

              <p>And lo and behold, as promised, we present another enthralling edition of &quot;Puppet Show.&quot; Within its enchanting embrace lies a captivating tribute, exquisitely capturing the untold narratives of the wondrous student body of 2022-23.</p>

              <p>Embrace this journey, dear readers, and immerse yourselves in the wondrous realm of our Summer Edition.</p>
            </Collapsible>
          }
          {currentEdition == "2023_Spring" &&
            <Collapsible trigger="Editor's Note">
              <p>We like to think of this edition as a stroll through a luscious green park where the birds chirp, hailing the arrival of spring and flowers bloom, chasing away the winter gloom. In our first-ever Spring edition, we present &ldquo;Battling the Blues&rdquo;, easing into Chapter 1 of our mental health series &ldquo;It&rsquo;s the Climb&rdquo;. We also bring you a gentle stroll through academic affairs at IIT-T, consolidating a variety of surveys and inputs from students and faculty - like an exploratory morning walk where you&rsquo;re sure to discover some very interesting sights!</p>
              <p>This season of hope, we take you on a trip to Abhaya Kshetram, a home of hope for the destitute. Next, we whisk you away to Wattpad world with a first-of-its-kind book-review-cum-author-interview with Eashaani Chettri about her two bold and fascinating books, and then we walk you through the arduous journey of creating a resume for the first time! One of our edition specials is something very close to our hearts - a nostalgic walk around our beautiful campus - through breathtaking pictures and romantic verse.</p>
              <p>The eclectic poetry collection this edition is, well, poetic - bordering on themes of ancient goddesses, park benches, daydreams, nostalgia, love and spring. We bring you a particularly other-worldly short story and an incredibly delightful discourse on Technomancy. If you&rsquo;ve never heard of this term, this is your sign from the universe to dive right in and read the Op-Ed on it! We wish you rejuvenation, faith and joy this spring, and we hope you enjoy walking with us through Udaan&rsquo;s Spring-2023 Edition!</p>
            </Collapsible>
          }
          {currentEdition == "2023_Winter" &&
            <Collapsible trigger="Editor's Note">
              <p>Every long, arduous journey begins with a first step - sometimes it&rsquo;s a simple one with a little skip in the beat, and sometimes you&rsquo;ll have to drag your feet - at Udaan, we&rsquo;re all about taking new initiatives and giving them wings! In this edition, we launch a series tackling the uphill battles of mental health, &ldquo;It&rsquo;s the Climb&rdquo;, with an interview with Dr Neeraja, counselling psychologist at the Guidance and Counselling Unit of IIT Tirupati.</p>
              <p>Speaking of paving the path for change and taking flight, one of our edition specials is a unique interview with Dr. Padma Bandhopadhyay, the first female Air Marshall of India, &lt;insert long list of astonishing accomplishments&gt;! This edition also brings you an eclectic array of poems, some unconventional in spirit, rhythm and punctuation, and some that bring music to words while transporting you to war-torn ancient Greece or warm-yellow afternoons of frolicking with friends&#8230;</p>
              <p>While we have you daydreaming about the good old days of friendship, we also urge you to check out a short story on sinister dreams and a singular experience of an unconventional winter break. Under the Review section, we have an anonymous and absurdly marvellous discourse on putting clowns on the moon! Saving some of the best for last, the Op-Eds in this edition are an eclectic read, ranging from some questions about social media that are sure to get your gears whirring to an animated discussion on why there's a global shortage of silicon chips.</p>
              <p>With the change of the seasons, we&rsquo;ve decided to rename our editions to be named after - you guessed it - the seasons! With much love and without further ado, we present to you our Winter 2023 Edition.</p>
            </Collapsible>
          }
          {currentEdition == "2022_Autumn" &&
            <Collapsible trigger="Editor's Note">
              <p>Internship season is here again! And again! And again. No surprise there, it comes every year! And every year, we have a fresh batch of anxious and eager students with a truckload of questions - What is an internship? How do you get one? What do you even do in an internship? Does my branch matter? Wait, there are different types of internships?!</p>
              <p>Don&rsquo;t fear when we are here! Team Udaan brings you this special edition detailing a diverse set of summer internship experiences, both 2nd years and 3rd years, all the branches, industry, academic and research opportunities, overseas and in India, online and offline, you name it, and we probably have it covered! Read on to learn more about a multitude of interesting experiences spanning cutting-edge technology, construction sites, treks and breathtaking scenery, exhilarating playground swings, the emotional and professional takeaways, and much more!</p>
              <p>Summer is also a great time to contemplate options about the future which is when competitive exams like to enter the scene unannounced&#55357;&#56898;. We present an incredibly detailed article on the GRE so that you almost get a first-row ticket to the experience!</p>
              <p>The highlight of this edition, however, is an interview with our beloved Director, Prof. K.N. Satyanarayana, where we investigate the less talked about aspects of the pillar and visionary of our institute - from taking morning walks and making your own coffee, to some stellar advice on networking, excelling at work, and balancing mental health - here is a piece you don&rsquo;t want to miss!</p>
            </Collapsible>
          }
          {currentEdition == "2022_Summer" &&
            <Collapsible trigger="Editor's Note">
              <p>Welcome to our humble abode! We are proud to present to you the fifth edition of Udaan, the student-run magazine of IIT Tirupati.</p>
              <p><em>Jupiter and Venus. How unjust their fates&#8230;</em></p>
              <p>In this edition, we bring you poetry bigger than most hearts can hold, heart-wrenching, deeply moving, yet delightful stories, and interesting musings on &lsquo;illegal numbers&rsquo;, &lsquo;taking to the kitchen&rsquo;, and &lsquo;chilling advertisements&rsquo;. We also bring you colourful testimonies of the student and club activities from the previous academic year, that you can find in the <em>Campus News</em> section, along with a very <em>interesting</em> faculty interview that you definitely want to check out!</p>
              <p>Starred as edition specials are three exquisite pieces. In &lsquo;The Puppet Show&rsquo;, you will find a heartfelt token of appreciation and recognition for the student secretaries and club coordinators of the 2021-22 academic year, but with a complementary comical take, courtesy of the creative team at Udaan! We also went investigating deep into the momentous phenomenon of <em>Tirutsava</em>, the annual techno-cultural fest of IIT Tirupati, and put together an uncut and authentic correspondence of what exactly happens &lsquo;behind the scenes&rsquo;, directly from the heads of the organising committees. And finally, in what is one of our most significant initiatives, is a &lsquo;<em>Pride</em> 101&rsquo; guide that should be a 10-minute, intriguing, informative, and &lsquo;aha!-moment&rsquo; read, on Pride, what we should know about it, and why we need it.</p>
              <p>A special word of thanks goes out to all those who contributed to this edition. We wouldn&rsquo;t be here without you. We hope you enjoy reading this edition!</p>
            </Collapsible>
          }
          {currentEdition == "2022_Winter" &&
            <Collapsible trigger="Editor's Note">
              <p>Team Udaan brings to you yet another vibrant edition, the January 2022 edition of Udaan, the student-run online campus magazine, with a variety of content that we hope you’ll love. This edition marks 1 year of the inception of Udaan, and we are extremely grateful for all your support in making the student magazine a success!</p>
              <p>Here’s a quick overview of the content in the magazine. This edition features more exciting <b>poems</b> and <b>stories</b> than any of our previous editions! We have beautiful poetry that makes you ponder life’s dilemmas, question the world, daydream about love, and appreciate the irreplaceable bond between mother and child. You can also find stories; one inspired by real-life, one situated on a battlefield, and one narrated by the non-human entity that we’re all too familiar with. In addition, there’s also a satirical but homely letter that you would enjoy reading!</p>
              <p>Irrespective of what kind of content you prefer, you will certainly find the <b>Opinions and Editorial (Op-eds)</b> section interesting. An article talks about the pain of growing up, while another attempts to offer the student reader advice on understanding and dealing with quarter-life crises. We also have an article questioning the popular opinion on the concept of darkness and light, and an informative piece about Uranium in India.</p>
              <p>As always, we have specially prepared exclusive pieces for this edition as well! Some 1st and 2nd years were keen on talking about the college experiences in the previous year, which we put together and prepared a compilation called <b>College Experiences</b>.</p>
              <p>Some freshers had burning questions that they wanted answers to, and so we gave them. Presenting <b>Freshers’ Asked Questions (FAQ)</b>, a compilation that contains some vague, some elaborate, but all helpful answers to their questions.</p>
              <p>We also had an intriguing idea of asking the final year students this question, “If I could go back in time and get a chance to do my B.Tech again, what would I change?”. We received more responses than we expected, and more elaborate responses than we imagined! We put those responses into <b>“A Second Chance?”</b>, a narrative by yet another fourth year.  </p>
              <p>We at Team Udaan hope you all enjoy this edition. Happy reading!</p>
            </Collapsible>
          }
          {currentEdition == "2021_Summer" &&
            <Collapsible trigger="Editor's Note">
              <p>
                We are extremely delighted to present to you the second edition of Udaan!
              </p><p>
                This edition contains dedicated <em>Campus News</em> articles that highlight various activities and events organized by the institute, along with a variety of opinion pieces, poems and experience pieces, all passionately written and submitted by fellow students. We have also added a new <em>Faculty Interviews</em> section in this edition.
              </p><p>
                The Covid-19 pandemic and its impact has been overwhelming, and we decided to try and bring different perspectives to light while still having an overall positive impact. As a result, we have prepared two articles: <em>Busting Misinformation on Covid-19</em> to address a problem prevalent in the Indian context, and <em>Voices of the Locked Down</em> to help reconnect with our IITT family.
              </p><p>
                It still surprises me how primitive alphabets which we were taught in our childhood days, when put together in the right combination, can make us think and recollect. They can make you feel happy, sad, angry, sometimes all of these things at once. Writing isn’t that different from a melody really; music has 12 notes while English has 26, and all the composers who have contributed to Udaan have done a marvelous job. We hope you enjoy the arrangement of alphabets given below, that we put together for you!
              </p>
            </Collapsible>
          }
          {currentEdition == "2021_Autumn" &&
            <Collapsible trigger="Editor's Note">
              <p>
                Internship - an arrangement where you are mentored by and learn from experienced professionals in your field, while sometimes even being paid for it. Imagine experiencing your field of work, getting to test yourself, discovering what skills you need to succeed, all before you even graduate college! This is what internships are all about. It’s no surprise then that every engineering student works hard to get into an internship that they desire. This is the time of the year when the internship fever is palpable, with the third years giving it their best shot.
                While there is plenty of excitement around this topic, there is also an abundance of doubt. A frequent question that students ask about internships is, “What exactly do I do there?”. All that’s clearly visible in the internship offer is the company’s/institution’s name, the nature of the work and the package, while the particulars of the work required for the internship is seldom obvious.
              </p>
              <p>
                We set out to try and address that issue. Who better to answer that question than those who have just completed their internships? With the help of a few generous final year students talking about their experiences, Team Udaan is back with a new edition with a special focus on internship experiences. We believe that the third years will find this edition useful, and hope everyone would enjoy reading it and learn something new!
              </p><p>
                Note that this edition of Udaan is a rolling edition, so more articles will be published in the near future. Stay tuned for updates!
              </p>
            </Collapsible>
          }
          <FadeIn>
            <PostTitle>{postTitle}</PostTitle>
            <SearchBar
              style={{ backgroundColor: "var(--color-card)", marginBottom: "30px" }}
              value={search}
              onChange={(newValue) => setSearch(newValue)}
              onRequestSearch={() => doSomethingWith(search)}
            />
            <PostGrid key={bindex} posts={posts} />
          </FadeIn>
        </Content>
      </Main>
    </Layout>
  );
};

const Main = styled.main`
  min-width: var(--min-width);
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  background-color: var(--color-background);
`;

const Content = styled.div`
  box-sizing: content-box;
  width: 87.5%;
  max-width: var(--width);
  padding-top: var(--sizing-lg);
  padding-bottom: var(--sizing-lg);
  margin: 0 auto;
  .MuiInputBase-input{
    color:var(--color-text);
  }
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding-top: var(--grid-gap-lg);
    width: 87.5%;
  }
`;

const PostTitle = styled.h2`
  font-size: 2rem;
  font-weight: var(--font-weight-extra-bold);
  margin-bottom: var(--sizing-md);
  line-height: 1.21875;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.75rem;
  }
`;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(posts/editions)/"}}
      limit: 2000
      sort: {frontmatter: {date: DESC}}
    ) {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            date(formatString: "YYYY-MM-DD")
            desc
            authors
            starred
            thumbnail {
              childImageSharp {
                id
              }
              base
            }
            alt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export const Head = () => {
  return <SEO title="Home" />;
};

export default Home;
