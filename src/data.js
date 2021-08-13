

const images = [
    "01shered.png", //00
    "02ciculo.png", //1
    "03cross.png", //2
    "04tri.png", //3 
    "05line.png", //4
    "06dot.png", //5
    "07giotto.png", //6
    "08udridero.png", //7
    "09hell.png", //8 
    "10CircleofBaccioBaldini.png", //9
    "11papanachtok.png", //10
    "12coatlcue.png", //1
    "13auroraophanim.png", //2
    "14inner.png", //3 
    "15gabriel.png", //4
    "16trifonisneuvoldor.png", //5
    "17almauno.png", //6
    "18legion.png", //7
    "19cielo.png", //8 
    "20esfera.png", //9
    "21masajco.png", //20
    "22monstruo.png", //1
    "23singingmass.png", //2
    "24semiarchiboldo.png", //3 
    "25man.png", //4
    "26wicker.png", //5
    "27nation.png", //6
    "28cirmanr.png", //7
    "29wildmannn.png", //8 
    "30niemandoutis.png", //9
    "31niemand.png", //30
    "32hauser.png", //1
    "33matervivac.png", //2
    "34aspens.png", //3 
    "35hormiguerac.png", //4
    "36dragon.png", //5
    "37fungi.png", //6
    "38eelcatfish.png", //7
    "39cordiseps.png", //8 
    "40pepino.png", //9
    "41microfosil.png", //40
    "42endling.png", //1
    "43higado.png", //2
    "44fungi.png", //3 
    "45spheram3.png", //4
    "46cincod.png", //5
    "47mandelbroot.png", //6
    "48sunflower.png", //7
    "49helicoid2.png", //8 
    "50hyperbolicspace.png", //9
    "51internet.png", //50
    "52hiperbole.png", //1
    "53doblez.png", //2
    "54bezoar2.png", //3 
    "55metatorion.png", //4
    "56onfalo.png", //5
    "57romawolf.png", //6
    "58daemon.png", //7
    "59familytree.png", //8 
    "60nasos.png", //9
    "61flygia.png", //60
    "62pneuma.png", //1
    "63hercules.png", //2
    "64sade.png", //3  
    "65monoespejo.png", //4
    "66narciso.png", //5
    "67vitruvio.png", //6
    "68perpecteur.png", //7
    "69hobbes-leviathan.png", //8 
    "70against2.png", //9
    "71flemishstate.png", //70
    "72lsolo.png", //1
    "73colossobn.png", //2
    "74caballotroya.png", //3 
    "75reyone.png", //4
    "76stomach.png", //5
    "77laocconok.png", //6
    "78reymultok.png", //7
    "79laocconup.png", //8 
    "80laooconpriest.png", //9
];



var card_titles_texts = [
    ["",""], //01
    ["",""], //02
    ["",""], //03
    ["",""], //04
    ["",""], //05
    ["",""], //06
    ["",""], //07
    ["",""], //08
    ["",""], //09
    ["",""], //10
    ["",""], //11
    ["",""], //12
    ["",""], //13
    ["",""], //14
    ["",""], //15
    ["",""], //16
    ["",""], //17
    ["",""], //18
    ["",""], //19
    ["",""], //20
    ["",""], //21
    ["",""], //22
    ["",""], //23
    ["",""], //24
    ["",""], //25
    ["",""], //26
    ["",""], //27
    ["",""], //28
    ["",""], //29
    ["",""], //30
    ["",""], //31
    ["",""], //32
    ["",""], //33
    ["",""], //34
    ["",""], //35
    ["",""], //36
    ["",""], //37
    ["",""], //38
    ["",""], //39
    ["",""], //40
    ["",""], //41
    ["",""], //42
    ["",""], //43
    ["",""], //44
    ["Perichoresis","from the Greek peri, \"around\" and chōreō, \"to go, or come\"</br>\
    -The Perichorein is point where the universe began according to ancient Greeks. It \
    is a place where all things are present sharing the same space and time without \
    loosing its own characteristics. In medieval times the church used it to solve the \
    conflict of “many souls vs one soul” (a clear influence of shamanism in christianity) \
    and arrived to the holy trinity as the real perichoresis."], //45
    ["5 dimensions","Five dimensions is difficult to visualise since each time a dimension is observed \
    from another it implies a projection or necessary deformation toll to adjust to specific set of \
    conditions required. For example if we would like to imagine a 4d cube we have to imagine a 3d cube \
    with a \“smaller\” nested cube supported by each of its insides by other cubes, but all of them are \
    the same size occupying the same space at the same time.</br>\
    If we see this cubes in different moments occupying the same time (with animated sequence) if \
    possible to glimpse through movement the actual nature of the immobile object. Sometimes 4d \
    is referred as “time” which is not accurate but only through a time projection we are able to \
    access.</br>\
    A 5d cube is a 4d projected to another 4d cube supported by other 4d cube. Sometimes 5d is \
    introduced as “intensity” “concentration” or “density” since on higher dimensions space widens \
    inside objects, creating an apparent effect of folding in themselves."], //46
    ["Mandelbroot set","It exhibits an elaborate and infinitely complicated boundary that reveals \
    progressively ever-finer recursive detail at increasing magnifications, making the boundary of the \
    Mandelbrot set a fractal curve. The \"style\" of this repeating detail depends on the region of the \
    set being examined. Mandelbrot set images may be created by sampling the complex numbers and \
    testing, for each sample point c, whether the sequence \
    f c ( 0 ) , f c ( f c ( 0 ) ) , ,f_{c}(f_{c}(0))...  goes to infinity.</br>\
    The Mandelbrot set is self-similar under magnification in the neighborhood of the Misiurewicz \
    points."], //47
    ["Pattern","Flowers (a sunflower by example) distribute their seeds in the circumference of their surface \
    according to a fraction of turn that would maximize the efficiency of localization of spokes so to \
    achieve the higher number of seeds possible. Paradoxically the best configuration is a place \
    where it is difficult to recognise spoke since two spokes are intertwined.</br>\
    Irrational numbers are the best to achieve a good distribution since it spreads along the turn. 1-+\
    √ 5 / 2 (1.61803398874989) is Golden ratio of such fractions."], //48
    ["Helicoid","It is the only ruled minimal surface other than the plane.</br>\
    Since it is considered that the planar range extends through negative and positive infinity, close \
    observation shows the appearance of two parallel or mirror planes in the sense that if the slope \
    of one plane is traced, the co-plane can be seen to be bypassed or skipped \
    Conversely, a plane can be turned into a helicoid by choosing a line, or axis, on the plane, then \
    twisting the plane around that axis.</br>\
    </br>\
    It is a body that shifts axis through continue movement jumping from dancer to the partner and \
    vice versa. </br>\
    In each “pass” a doubt is embedded so each dancer falls in self consciousness only to lose it \
    immediately since the leading is carried by the other which is imprisoned by the dance."], //49
    ["Hyperbolic Space","A homogeneous space that has a constant negative curvature, where in this case the \
    curvature is the sectional curvature. It is hyperbolic geometry in more than 2 dimensions, and is \
    distinguished from Euclidean spaces with zero curvature that define the Euclidean geometry, \
    and elliptic geometry that have a constant positive curvature."], //50
    ["Internet mapping growth 2021",""], //51
    ["Hyperbola","It is a type of smooth curve lying in a plane, defined by its geometric properties \
    or by equations for which it is the solution set. A hyperbola has two pieces, called connected \
    components or branches, that are mirror images of each other and resemble two infinite bows."], //52
    ["Fold","Once the unit projects itself against its own image a double appears. \
    This doppelgänger or bind opens the space to a next dimension."], //53
    ["Bezoar","It is often a mass trapped in the guts of whales and other large animals which are \
    believed to be the cure to any poison and have other magical properties. Found in sacrificial \
    animals as direct exchange with gods."], //54
    ["Metatorion","The stone Hagia Sophia where kings are crowned. Not only the stone gives power and \
    contact with history by thaumaturgy but also acquires a meta flesh quality since it is able to \
    create body politic on its own."], //55
    ["Omphalos","Iy is the first stone of the universe which fall from Cronos belly in the fights \
    against Zeus.In its fall it dragged the Milky Way creating the world to land in. As navel of the \
    world they allow direct communication with gods through oracles and signs. It can be understood as \
    the vanishing point of cosmic perspective."], //56
    ["Myth","The myth is a form of pure attraction because it has no substance. The myth usually signals \
    towards the origins of something without solving any form, which means that it turns into pure \
    desire energy voided of any meaning. It is the promise of an explanation for the appearance of \
    something in the real. Myths are units beyond a scale that haven’t been translated, into \
    recognizable elements. They constitute phantasmagoric dimension where “inertia” interacts with \
    the real producing vacant meaning.</br>\
    But the horizon created by this vacuum opens up an ideological space and time that displays \
    images of pathos and produce a multitude of mythologies. It is through the reaction of our \
    psyche to this unfulfilled desire that variations of things appear. Tension works as a motor of \
    visualization."], //57
    ["Daemon","Daimon \"provider, divider (of fortunes or destinies),\" from the root *da- \"to divide\".</br>\
    Daimons were possibly seen as the souls or tutelar sities of a collectivity.</br>\
    </br>\
    Troy was impossible to defeat until its incarnated soul object was stolen. The Palladium was the \
    non anthropomorphized wooden image of Pallas. It evolved through time into Athenea effigy \
    and was saved by Diomedes only to morph into the daemons giving birth to Rome."], //58
    ["Blood line","Before the modern construction of the individual the most important entity was \
    blood line. An intricate family agreements which allow the apparition of a collective body which \
    kept property, privileges and power. Will has no meaning beyond this frame work."], //59
    ["Homme dos nassos.","The man has as many noses as the year has days, and loses one every day and \
    can only be seen on December 31st."], //60
    ["Flygia","The Old Norse word Fylgja translates to “to accompany or help”, “to follow”, but also \
    (and perhaps most notably) to \“lead or guide\”</br>\
    The Fylgja, psychic Double with tutelary functions, is closely linked to destiny in the \
    Scandinavian tradition. </br>\
    \“I dreamed of the same woman as before, and it seemed to me... that she was putting my \
    entrails back in place and I felt good about this interaction.\” </br>\
    The woman proceeds, therefore,  with the inverse operation to the one that she had \
    performed in the first dream, and it saved An’s life.</br>\
    She also talks about a Fylgja as sometimes being seen as the protective matriarch of an entire \
    family line, rather than just belonging to a single person."], //61
    ["Pneuma","Antonio Canova, 1797, L’amour et Psyché debout.</br>\
    </br>\
    When psyche and Eros gathered as lover they shared a butterfly (pneuma, breath or soul) as \
    symbol of their union. Eros demanded Psyche the secrecy of the night so he could hide his \
    divine nature but Psyche couldn’t full fill her fantasy without images. So she sneaked with an oil \
    lamp, feeling a betrayal Eros fled and there is where the story of Psyche starts trying to recover \
    her lover moved by the image-memory."], //62
    ["Heroe Heracles","Heracles is the incarnation of the hero. A collection of deeds of the whole \
    community gathered \
    in the flesh of a meta human able to do anything opening the territory of the known world. But \
    he is not unique, he has a twin brother Iphycles who later became a politician."], //63
    ["Histoire du prince Apprius /Priapus","Adriani Imperatorie Concubinatus</br>\
    </br>\
    Priapus was then cursed by giving to his member will on its own and never obey him. Men as \
    descendance of this linage are imprisoned by desire of anther one."], //64
    ["Illustrated monkey","When the seller goes to sleep the monkeys steal his belongings \
    and some even start their own market.</br>\
    Theory of the mind vs selfies.</br>\
    </br>\
    1597-1608. Le Mercier pillé par les singes, Pieter van der Borcht"], //65
    ["Narcisse",""], //66
    ["Proportion man","Le proporzioni del corpo umano secondo Vitruvius</br>\
    Leonardo Da Vinci</br>\
    </br>\
    Man as a cosmografia del minor mondo</br>\
    For the human body is so designed by nature that the face, from the chin to the top of the \
    forehead and the lowest roots of the hair, is a tenth part of the whole height; the open hand from \
    the wrist to the tip of the middle finger is just the same; the head from the chin to the crown \
    is an eighth, and with the neck and shoulder from the top of the breast to the lowest roots of \
    the hair is a sixth; from the middle of the breast to the summit of the crown is a fourth."], //67
    ["Vanishing point","Les perspecteurs, Abraham bosse</br>\
    From Maniere universelle de M.Desargue pour traiter la perspective 1648</br>\
    Alberti bases his idea on how a single eye perceives an object. He says that there are three\
    important kinds of rays when painting an object: the \"extreme\" rays defined by the contour of the\
    object, the \"median\" rays revealing the color and tones and the \"centric\" ray which is the ray\
    orthogonal to the picture plane and going into the eye. The first two rays form a cone which is\
    often called the visual cone.</br>\
    </br>\
    The individual acquires the power to shape (deform) the real to fit his eye. The projection \
    creates a new appropriation of the world. Paradoxically"], //68
    ["Tessellated leviathan","Leviathan of Leviathans"], //69
    ["Kingdomes monster","IMAGES"], //70
    ["Government animal","Allegorie op de moeilijkheid van het besturen, 1578, \
    Pieter van der Borcht </br>\
    </br>\
    This represented the deeply divided Netherlands politically and religiously. This division made \
    the country difficult to govern. In the background, various religious and secular leaders watch. \
    </br>\
    O praefecturae difficile officium!, can be read at the bottom right. Then the wars of religion \
    raged,"], //71
    ["Leviathan","The frontispiece of Thomas Hobbes’s “Leviathan or The Matter, Forme and Power of a \
    Commonwealth Ecclesiasticall and Civil uses a mass as constituting substance of the king’s \
    body, portrayed in awe and fear. </br>\
    But his Body politic is a Body that cannot be seen or handled, consisting of Policy and \
    Government, and constituted for the Direction of the People, and the Management of the public \
    weal, and this Body is utterly void of Infancy, and old Age...</br>\
    Kantorowicz, E., The King’s Two Bodies"], //72
    ["Sans-culotte Colossus","Le Peuple mangeur de rois : statue colossale proposée \
    par le journal des Révolutions de Paris, \
    pour être placée sur les points les plus éminents de nos </br>\
    artist unknown, 1793"], //73
    ["Trojan Horse","Anonyme </br> \
    1700 </br> \
    Oil on Canvas, 77 x 94 cm </br> \
    Statens Porträttgalleri </br> \
    Gripsholm Castle, Mariefred, Sweden </br> \
    </br> \
    The Trojan horse hides its secrets in full sight."], //74
    ["Kings multiplied body","Legibus et armis \
    The world descends, to kifle their feet."], //75
    ["The belly and the members","Aesop tells us about how a stomach refused to give \
    nourishment to the rest of the body.\
    \“For the body is not one member, but many. If the foot shall say, Because I am not the hand, I\
    am not of the body, is it therefore not of the body? And if the ear shall say, Because I am not \
    the eye, I am not of the body, is it therefore not of the body? If the whole body were an eye,\
    where were the hearing? If the whole were hearing, where were the smelling? But now hath God set \
    the members every one of them in the body, as it hath pleased him. And if they were all one \
    member, where were the body? But now are they many members, yet but one body. And the \
    eye cannot say unto the hand, I have no need of thee: nor again the head to the feet, \
    I have no need of you.\”"], //76
    ["Multiple Laocoon","Laocoon initiates the modern man. The individual confronts \
    the whole society denying truth as \
    social agreement. Eventually entire societies will incarnate Laocoon perspective. Body."], //77
    ["One King","Gabrielis Rollenhagii <br> \
    Felectoru emblematum </ br> \
    Sentiría secunda </ br> </ br> \
    Concordia insuperabili </ br> \
    Concordes superare potessi vis nulla, nel ulula </ br> \
    Disrupt fiddle fondus amicitia</ br> \
    The king in its own body rights is able to hold its attributes with his own hands."], //78
    ["Laocoon knee","By placing his knee over the sacrificial altar, he refuses to pay the infinite blood debt to gods. \
    His energy turns internal and appears as the administration of ones own free will.He is punished \
    by two diva sea dragons who ate his two sons. (some say they really represent his two eyes or \
    even his own cancelled past and future)"], //79
    ["Laocoon","(Laos-people/Koeo- to perceive or comprehend) <br> \
    He was a well known thymbricus priest follower of Apollo on public service. The first modern \
    man since he was able to recognise men behind the offerings of the gods and by doing so being \
    alone for the first time. He realised that behind a divine apparatus a political one is always \
    hiding."], //80

];


class Card {

    constructor (n, t) {
        this.title = n;
        this.text = t;
    }
}

let cards = [];

for (var card of card_titles_texts) {

    var c = new Card (card[0],card[1]);
    cards.push(c);
}

export {cards, images}

