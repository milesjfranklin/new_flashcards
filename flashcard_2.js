document.addEventListener('DOMContentLoaded', function() {
    // Array of flashcards
    const flashcards = [
        {
            front: "Sacque or Sack-back gown n.",
            back: "The sack-back gown or robe à la française was a women's fashion of the 18th century. At the beginning of the century, the sack-back gown was a very informal style of dress. At its most informal, it was unfitted both front and back and called a sacque, contouche, or robe battante. By the 1770s the sack-back gown was second only to court dress in its formality. This style of gown had fabric at the back arranged in box pleats which fell loose from the shoulder to the floor with a slight train. In front, the gown was open, showing off a decorative stomacher and petticoat. It would have been worn with a wide square hoop or panniers under the petticoat. Scalloped ruffles often trimmed elbow-length sleeves, which were worn with separate frills called engageantes. <br><br> The casaquin (popularly known from the 1740s onwards as a pet-en-l'air) was an abbreviated version of the robe à la française worn as a jacket for informal wear with a matching or contrasting petticoat. The skirt of the casaquin was knee-length but gradually shortened until by the 1780s it resembled a peplum.<br><br> The loose box pleats which are a feature of this style are sometimes called Watteau pleats from their appearance in the paintings of Antoine Watteau. The various Watteau terms, such as Watteau pleat, Watteau back, Watteau gown etc., date from the mid-19th century rather than reflecting authentic 18th century terminology, and normally describe 19th and 20th century revivals of the sack-back.<br><br> <img src='https://tiwyt.com/vocab-flashcards/sacque-preview-web.jpg'>"
        },
        {
            front: "nom de plume n.",
            back: "a name that a writer uses instead of his or her real name; A pen name"
        },
        {
            front: "Jehu n.",
            back: "Jehu (Hebrew: יֵהוּא‎ Yehu, meaning 'Yahu is He'; Akkadian: Ia-ú-a; Latin: Iehu) was the tenth king of the northern Kingdom of Israel since Jeroboam I, noted for exterminating the house of Ahab. He was the son of Jehoshaphat, grandson of Nimshi, and possibly great-grandson of Omri. His reign lasted for 28 years."
        },
        {
            front: "Lexical adj.",
            back: "of or relating to words or the vocabulary of a language as distinguished from its grammar and construction. Synonyms include linguistic (also linguistical), rhetorical (also rhetoric), verbal, vocabular, wordy. <br><br>Antonyms are nonlexical, nonlinguistic, nonverbal."
        },
        {
            front: "Limpid adj.",
            back: "(of a liquid) free of anything that darkens; completely clear. (of a person's eyes) unclouded; clear. (especially of writing or music) clear and accessible or melodious. Synonyms include clear, crystal, crystal clear, crystalline, liquid, lucent, pellucid, see-through, transparent. <br><br>Antonyms are cloudy, opaque."
        },
        {
            front: "sine qua non n.",
            back: "An essential condition; a thing that is absolutely necessary. Sentence: grammar and usage are the sine qua non of language teaching and learning."
        },
        {
            front: "Piffle n.",
            back: "Nonsense. <br><br>Sentence: It's absolute piffle to say that violence is ok. <br><br>Synonyms include applesauce [slang], balderdash, baloney (also boloney), beans, bilge, blah (also blah-blah), blarney, blather, blatherskite, blither, bosh, bull [slang], bunk, bunkum (or buncombe), claptrap, codswallop [British], crapola [slang], crock, drivel, drool, fiddle, fiddle-faddle, fiddlesticks, flannel [British], flapdoodle, folderol (also falderal), folly, foolishness, fudge, garbage, guff, hogwash, hokeypokey, hokum, hoodoo, hooey, horsefeathers [slang], humbug, humbuggery, jazz, malarkey (also malarky), moonshine, muck, nerts [slang], nonsense, nuts, poppycock, punk, rot, rubbish, senselessness, silliness, slush, stupidity, taradiddle (or tarradiddle), tommyrot, tosh, trash, trumpery, twaddle."
        },
        {
            front: "Folderol n.",
            back: "Trivial or nonsensical fuss. <br><br>Sentence: All the folderol of the athletic contests and the cheerleaders. <br><br>Synonyms include applesauce [slang], balderdash, baloney (also boloney), beans, bilge, blah (also blah-blah), blarney, blather, blatherskite, blither, bosh, bull [slang], bunk, bunkum (or buncombe), claptrap, codswallop [British], crapola [slang], crock, drivel, drool, fiddle, fiddle-faddle, fiddlesticks, flannel [British], flapdoodle, folly, foolishness, fudge, garbage, guff, hogwash, hokeypokey, hokum, hoodoo, hooey, horsefeathers [slang], humbug, humbuggery, jazz, malarkey (also malarky), moonshine, muck, nerts [slang], nonsense, nuts, piffle, poppycock, punk, rot, rubbish, senselessness, silliness, slush, stupidity, taradiddle (or tarradiddle), tommyrot, tosh, trash, trumpery, twaddle."
        },
        {
            front: "a priori adj. and adv.",
            back: "<strong>Adj.</strong> Relating to or denoting reasoning or knowledge which proceeds from theoretical deduction rather than from observation or experience. <br><br><strong>Sentence:</strong> a priori assumptions about human nature. <br><br><strong>Adv.</strong> In a way based on theoretical deduction rather than empirical observation. <br><br><strong>Sentence:</strong> Sexuality may be a factor but it cannot be assumed a priori."
        },
        {
            front: "Inchoate adj.",
            back: "Just begun and so not fully formed or developed; rudimentary. <br><br><strong>Law:</strong> (of an offense,) anticipating or preparatory to a further criminal act. <br><br><strong>Synonyms:</strong> aborning, budding, inceptive, incipient, nascent."
        },
        {
            front: "Moribund adj.",
            back: "(of a person) at the point of death. (of a thing) in terminal decline; lacking vitality or vigor."
        },
        {
            front: "Theodicy n.",
            back: "The vindication of divine goodness and providence in view of the existence of evil. Defense of God's goodness and omnipotence in view of the existence of evil."
        },
        {
            front: "Penumbra n.",
            back: "The partially shaded outer region of the shadow cast by an opaque object. <img src='https://tiwyt.com/vocab-flashcards/penumbra-2.jpg'> <img src='https://tiwyt.com/vocab-flashcards/penumbra.png'>"
        },
        {
            front: "menage a trois n.",
            back: "An arrangement in which three people share a sexual relationship, typically a domestic situation involving a married couple and the lover of one of them."
        },
        {
            front: "Neologism n.",
            back: "A newly coined word or expression. The coining or use of new words."
        },
        {
            front: "bête noire n.",
            back: "A person or thing that one particularly dislikes. <br><br>Sentence: Great-uncle Edward was my father's bête noire."
          },
          {
            front: "Churlish adj.",
            back: "Rude in a mean-spirited and surly way. <br><br>Sentence: It seems churlish to complain. Marked by a lack of civility or graciousness; difficult to work with or deal with. <br><br>Synonyms: boorish, classless, cloddish, clownish, loutish, uncouth."
          },
          {
            front: "Mercurial adj. and n.",
            back: "Adj: (of a person) subject to sudden or unpredictable changes of mood or mind. Sentence: His mercurial temperament. <br><br>Synonyms: capricious, changeable, changeful, fickle, flickery, fluctuating, fluid, inconsistent, inconstant, mutable, skittish, temperamental, uncertain, unpredictable, unsettled, unstable, unsteady, variable, volatile. Adj: Of or containing the element mercury. <br><br>Sentence: Gels containing organic mercurial compounds. N: A drug or other compound containing mercury. Sentence: For twenty years organic mercurials were the most potent diuretics in clinical use."
          },
          {
            front: "August adj.",
            back: "Marked by majestic dignity or grandeur. <br><br>Synonyms: dignified, distingué, distinguished, imposing, portly, solemn, staid, stately. Antonyms: flighty, frivolous, giddy, goofy, silly, undignified."
          },
          {
            front: "Overwrought adj.",
            back: "In a state of nervous excitement or anxiety. Elaborated to excess. Synonyms: agitated, excited, feverish, frenzied, heated, hectic, hyperactive, overactive. Sentence: The witness became overwrought as she described the crime."
          },
          {
            front: "Jejune adj.",
            back: "Devoid of significance or interest: DULL. JUVENILE, PUERILE. <br><br>Synonyms: arid, boring, colorless, drab, dreary, drudging, dry, dull, dusty, flat, heavy, ho-hum, humdrum, jading, leaden, mind-numbing, monochromatic, monotonous, numbing, old, pedestrian, ponderous, slow, stale, stodgy, stuffy, stupid, tame, tedious, tiresome, tiring, uninteresting, wearisome, weary, wearying. Antonyms: absorbing, engaging, engrossing, gripping, interesting, intriguing, involving, riveting."
          },
          {
            front: "Chthonic adj.",
            back: "Of or relating to the underworld: INFERNAL. <br><br>Sentence: Chthonic deities."
          },
          {
            front: "Nominalism n.",
            back: "The doctrine that universals or general ideas are mere names without any corresponding reality, and that only particular objects exist; properties, numbers, and sets are thought of as merely features of the way of considering the things that exist. Important in medieval scholastic thought, nominalism is associated particularly with William of Occam. A theory that there are no universal essences in reality and that the mind can frame no single concept or image corresponding to any universal or general term. Nominalism is a philosophical view concerning the existence of abstract objects. <br><br>'Abstract objects' might be thought of as an overarching term for things like universals, essences, natures, and forms. Abstract objects are things like humanity, justice, colors, numbers, sets, and propositions. Sometimes we discuss these things as concepts and not as 'things' per se. After all, it seems very odd to think there is some perfect, immaterial, and immutable exemplar object or number existing in its own realm according to which we name and relate the physical things of our experience. <br><br>But this is the exact position entailed by what philosophers call 'realism.' Nominalism is best understood as the antithesis of realism."
          },
                                               
        
          
       

        
        // ... add more flashcards here
    ];

    // Elements
    const frontSide = document.getElementById("front-side");
    const backSide = document.getElementById("back-side");
    const flashcardContainer = document.querySelector(".flashcard");
    

    // Function to show a random flashcard
    function showRandomFlashcard() {
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        const flashcard = flashcards[randomIndex];

        frontSide.innerHTML = flashcard.front;
        backSide.innerHTML = flashcard.back;

        // Initially show the front side
        frontSide.style.display = "block";
        backSide.style.display = "none";
    }

    // Event Listener for flipping the flashcard
    flashcardContainer.addEventListener("click", function() {
        if (frontSide.style.display === "block") {
            frontSide.style.display = "none";
            backSide.style.display = "block";
        } else {
            frontSide.style.display = "block";
            backSide.style.display = "none";
        }
    });

    // Show an initial random flashcard on load
    showRandomFlashcard();

    // Expose the function to global scope for button click
    window.GetValue = showRandomFlashcard;
});

