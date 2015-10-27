(function twitchEmotes(){
  // because of CORS issues,  I have to embed the JSON here (parsed) 
  // source:  https://twitchemotes.com/apidocs
  var twitchObject = {
      "meta": {
        "generated_at": "2015-10-26T21:25:06Z"
      },
      "template": {
        "small": "//static-cdn.jtvnw.net/emoticons/v1/{image_id}/1.0",
        "medium": "//static-cdn.jtvnw.net/emoticons/v1/{image_id}/2.0",
        "large": "//static-cdn.jtvnw.net/emoticons/v1/{image_id}/3.0"
      },
      "emotes": {
        "4Head": {
          "description": "This is the face of a popular Twitch streamer. twitch.tv/cadburryftw",
          "image_id": 354
        },
        "ANELE": {
          "description": "This is the face of Twitch Partnerships Lead Anele. twitch.tv/anele",
          "image_id": 3792
        },
        "ArgieB8": {
          "description": null,
          "image_id": 51838
        },
        "ArsonNoSexy": {
          "description": "This is the face of streamer ArSon. twitch.tv/arson",
          "image_id": 50
        },
        "AsianGlow": {
          "description": "This is the face of Twitch staff member Eliene Sun. twitch.tv/eleinetv",
          "image_id": 74
        },
        "AtGL": {
          "description": "This is a promotional emote for the game Infinite Crisis.",
          "image_id": 9809
        },
        "AthenaPMS": {
          "description": "This is the face of Twitch staff member & PMS clan founder Amy Brady.",
          "image_id": 32035
        },
        "AtIvy": {
          "description": "This is a promotional emote for the game Infinite Crisis.",
          "image_id": 9800
        },
        "AtWW": {
          "description": "This is a promotional emote for the game Infinite Crisis.",
          "image_id": 9801
        },
        "BabyRage": {
          "description": null,
          "image_id": 22639
        },
        "BatChest": {
          "description": "The BatChest face belongs JhnnyCrwsh, part of the Twitch moderation team. It refers to how his chest hair looks like the Bat Symbol, and came about from a dumb highlight on his channel. twitch.tv/JhnnyCrwsh",
          "image_id": 1905
        },
        "BCWarrior": {
          "description": "This is the face of streamer Zeke. twitch.tv/ezekiel_iii",
          "image_id": 30
        },
        "BibleThump": {
          "description": "This is an icon from the game The Binding of Isaac.",
          "image_id": 86
        },
        "BigBrother": {
          "description": null,
          "image_id": 1904
        },
        "BionicBunion": {
          "description": "This is the \"icon\" of Twitch staff member, Russell aka Horror.",
          "image_id": 24
        },
        "BlargNaut": {
          "description": "This is the face of streamer Aria Blarg. twitch.tv/ariablarg",
          "image_id": 38
        },
        "bleedPurple": {
          "description": null,
          "image_id": 62835
        },
        "BloodTrail": {
          "description": "This is an icon of the main character in the game Super Meat Boy.",
          "image_id": 69
        },
        "BORT": {
          "description": "This is the face of Bart, Ambassador at Hi-Rez Studios. He goes by the nickname, Bort",
          "image_id": 243
        },
        "BrainSlug": {
          "description": "This is a Brain Slug. It controls your thoughts. Originally this was the face of Bwana, part of the Twitch moderation team. It was changed to be an actual Brain Slug due to racist abuse of this emote. More info: twitch.tv/bwana/c/2151897",
          "image_id": 881
        },
        "BrokeBack": {
          "description": "This is the face of streamer Alan. twitch.tv/seriousgaming",
          "image_id": 4057
        },
        "BuddhaBar": {
          "description": "This is the face of Yoh, a JavaScript nerd who works on social features for Twitch.",
          "image_id": 27602
        },
        "CoolCat": {
          "description": null,
          "image_id": 58127
        },
        "CorgiDerp": {
          "description": "This is Lana the corgi.",
          "image_id": 49106
        },
        "CougarHunt": {
          "description": "This is the face of former Justin.tv staff member, Phil.",
          "image_id": 21
        },
        "DAESuppy": {
          "description": "This is the face of famous Starcraft 2 player, EG.Suppy.",
          "image_id": 973
        },
        "DansGame": {
          "description": "This is the face of Dan. twitch.tv/dansgaming ",
          "image_id": 33
        },
        "DatHass": {
          "description": "This is the face of Twitch software engineer Hassaan.",
          "image_id": 20225
        },
        "DatSheffy": {
          "description": "This is the face of Twitch staff member Sheffy. twitch.tv/sheffy",
          "image_id": 170
        },
        "DBstyle": {
          "description": "This is the face of streamer and composer Dannybstyle. twitch.tv/dannybstyle",
          "image_id": 73
        },
        "deExcite": {
          "description": "This is a promotional emote for Deus Ex: Mankind Divided.",
          "image_id": 46249
        },
        "deIlluminati": {
          "description": "This is a promotional emote for Deus Ex: Mankind Divided.",
          "image_id": 46248
        },
        "DendiFace": {
          "description": "This is the face of Danil \"Dendi\" Ishutin a professional Dota2 player. The emote is a temporary (https://twitter.com/Trancez0r/status/534501083796611073) prize given to the winner of the Twitch Doube Trouble tournament. Although Dendi's team didn't actually win the tournament, the prize was graciously(?) given to Dendi by the winner. (https://twitter.com/Trancez0r/status/534501692285673472). The code itself is reference to what trolls use for the WinWaker emote.",
          "image_id": 58135
        },
        "DogFace": {
          "description": "DogFace is the face of Kyle Pulver, an indie game developer that added :dogface: to Steam.",
          "image_id": 1903
        },
        "DOOMGuy": {
          "description": "This is a promotional emote for Bethesda's upcoming reboot of the DOME franchise.",
          "image_id": 54089
        },
        "duDudu": {
          "description": null,
          "image_id": 62834
        },
        "EagleEye": {
          "description": "This is the face of Twitch staff member Jacob.",
          "image_id": 20
        },
        "EleGiggle": {
          "description": "This is the face of Twitch streamer Elegy of Games. twitch.tv/elegyofgames",
          "image_id": 4339
        },
        "EvilFetus": {
          "description": "This is the icon of Dr. Fetus, villain of the game Super Meat Boy.",
          "image_id": 72
        },
        "FailFish": {
          "description": "This is the face of streamer SpamFish. twitch.tv/spamfish",
          "image_id": 360
        },
        "FPSMarksman": {
          "description": "This is the face of Nick Overton, streamer and former Twitch staff member. twitch.tv/immarksman",
          "image_id": 42
        },
        "FrankerZ": {
          "description": "This is the face of Frank the dog of Twitch staff member Ernest Le. Brother of RalpherZ.",
          "image_id": 65
        },
        "FreakinStinkin": {
          "description": "This is the face of GQ, part of the Twitch moderation team. twitch.tv/thegreatgq",
          "image_id": 39
        },
        "FUNgineer": {
          "description": "This is the face of Twitch engineer, Jon. twitch.tv/jbrhymer",
          "image_id": 244
        },
        "FunRun": {
          "description": "This is the icon of Justin Ignacio aka TheGunrun, Twitch staff member and savior of eSports! twitch.tv/thegunrun",
          "image_id": 48
        },
        "FuzzyOtterOO": {
          "description": "This is the icon of Twitch staff member Justin Wong. twitch.tv/fuzzyotterballs",
          "image_id": 168
        },
        "GasJoker": {
          "description": "This is a promotional emote for the game Infinite Crisis.",
          "image_id": 9802
        },
        "GingerPower": {
          "description": "This is the face of Dylan Reichstadt. He works for Twitch in quality assurance. twitch.tv/dylanlive",
          "image_id": 32
        },
        "GrammarKing": {
          "description": "This is the face of Twitch employee/KBMOD writer Vol1tion. twitch.tv/vol1tion",
          "image_id": 3632
        },
        "HassanChop": {
          "description": "This is the face of Twitch Staff member Hassan. twitch.tv/hassan",
          "image_id": 68
        },
        "HeyGuys": {
          "description": "This is the face of Selen, director of recruiting at Twitch.",
          "image_id": 30259
        },
        "HotPokket": {
          "description": "This is the face of streamer Pokket. twitch.tv/pokket",
          "image_id": 357
        },
        "HumbleLife": {
          "description": "This icon was added for Extra Life 2014 where gamers raise money for Children's Miracle Network Hospitals. Find out more at extra-life.org.",
          "image_id": 46881
        },
        "ItsBoshyTime": {
          "description": "This is an icon from the game I Wanna Be the Boshy.",
          "image_id": 169
        },
        "Jebaited": {
          "description": "This is the face of Jebailey.",
          "image_id": 90
        },
        "JKanStyle": {
          "description": "This is the face of Justin Kan, co-founder of Justin.tv and Twitch.",
          "image_id": 15
        },
        "JonCarnage": {
          "description": "This is the face of Twitch staff member and caster Jon Carnage.",
          "image_id": 26
        },
        "KAPOW": {
          "description": "This is a promotional emote for the game Infinite Crisis.",
          "image_id": 9803
        },
        "Kappa": {
          "description": "This is the face of Josh, a former Justin.tv employee. Kappa is generally used to indicate sarcasm or trolling.",
          "image_id": 25
        },
        "KappaPride": {
          "description": "On June 26, 2015, the Supreme Court of the United States ruled that same-sex couples can marry nationwide. You can read the full decision at: http://www.supremecourt.gov/opinions/14pdf/14-556_3204.pdf The rainbow coloring is a symbol of the LGBT pride movement.",
          "image_id": 55338
        },
        "Keepo": {
          "description": "Keepo is Kappa stylized as the hero Meepo from DotA/DotA 2.",
          "image_id": 1902
        },
        "KevinTurtle": {
          "description": "This is the face of Klutch, part of the Twitch moderation team. twitch.tv/klutch",
          "image_id": 40
        },
        "Kippa": {
          "description": null,
          "image_id": 1901
        },
        "Kreygasm": {
          "description": "This is the face of streamer Kreyg. twitch.tv/kreyg",
          "image_id": 41
        },
        "KZskull": {
          "description": "This is a promotional emote from Killzone Shadow Fall.",
          "image_id": 5253
        },
        "Mau5": {
          "description": "The Mau5 emote belongs to music producer Deadmau5. twitch.tv/deadmau5",
          "image_id": 30134
        },
        "mcaT": {
          "description": "This is the logo of the music label Monstercat. twitch.tv/monstercat monstercat.com",
          "image_id": 35063
        },
        "MechaSupes": {
          "description": "This is a promotional emote for the game Infinite Crisis.",
          "image_id": 9804
        },
        "MingLee": {
          "description": "The face of Chris Mead, the Director of Partnerships EMEA at Twitch.",
          "image_id": 68856
        },
        "MrDestructoid": {
          "description": "This is the mascot of the gaming website Destructoid. twitch.tv/destructoid",
          "image_id": 28
        },
        "MVGame": {
          "description": "This is the face of streamer MAN. twitch.tv/manvsgame",
          "image_id": 29
        },
        "NightBat": {
          "description": "This is a promotional emote for the game Infinite Crisis.",
          "image_id": 9805
        },
        "NinjaTroll": {
          "description": "This is the face of streamer Ninja. twitch.tv/ninja",
          "image_id": 45
        },
        "NoNoSpot": {
          "description": "This is the face of streamer Towelliee. twitch.tv/towelliee",
          "image_id": 44
        },
        "NotATK": {
          "description": null,
          "image_id": 34875
        },
        "NotLikeThis": {
          "description": "This is the face of Twitch staff member Ben Swartz. twitch.tv/bensw",
          "image_id": 58765
        },
        "OMGScoots": {
          "description": "This is the face of SirScoots, a well known member of the eSports community.",
          "image_id": 91
        },
        "OneHand": {
          "description": "This is the face of streamer EdwardStarcraft.",
          "image_id": 66
        },
        "OpieOP": {
          "description": "This is the face of Jason Babo. Strategic Partnerships at TwitchTV and a Web Developer. twitch.tv/opie",
          "image_id": 356
        },
        "OptimizePrime": {
          "description": "This is the face of Emmett Shear, co-founder of Justin.tv and CEO of Twitch.",
          "image_id": 16
        },
        "OSbeaver": {
          "description": "This is a promotional emote for the Old Spice Nature Adventure where Twitch chat controlled a man's adventures in nature.",
          "image_id": 47005
        },
        "OSbury": {
          "description": "This is a promotional emote for the Old Spice Nature Adventure where Twitch chat controlled a man's adventures in nature.",
          "image_id": 47420
        },
        "OSdeo": {
          "description": "This is a promotional emote for the Old Spice Nature Adventure where Twitch chat controlled a man's adventures in nature.",
          "image_id": 47007
        },
        "OSfrog": {
          "description": "This is a promotional emote for the Old Spice Nature Adventure where Twitch chat controlled a man's adventures in nature.",
          "image_id": 47008
        },
        "OSkomodo": {
          "description": null,
          "image_id": 47010
        },
        "OSrob": {
          "description": "This is a promotional emote for the Old Spice Nature Adventure where Twitch chat controlled a man's adventures in nature.",
          "image_id": 47302
        },
        "OSsloth": {
          "description": "This is a promotional emote for the Old Spice Nature Adventure where Twitch chat controlled a man's adventures in nature.",
          "image_id": 47011
        },
        "panicBasket": {
          "description": "This emote was voted into existence by the Twitch Townhall attendees during PAX Prime 2014. It is inspired by the phrase \"PICNIC\" (based on PANIC) spammed in chat when a stream goes offline during a broadcast.",
          "image_id": 22998
        },
        "PanicVis": {
          "description": "This is the emote of Visual, part of the Twitch moderation team. Twitch.tv/visual",
          "image_id": 3668
        },
        "PazPazowitz": {
          "description": "This is the faces of Justin.tv streamer Paz. justin.tv/paz",
          "image_id": 19
        },
        "PeoplesChamp": {
          "description": "The PeoplesChamp emote belongs to Bobby 'Scar' of the smash community and of MeleeItOnMe. twitch.tv/meleeitonme",
          "image_id": 3412
        },
        "PermaSmug": {
          "description": "This is the face of Aaron Krasnov, a product manager at Twitch, captured during their AHGL Dota team photo.",
          "image_id": 27509
        },
        "PicoMause": {
          "description": "This is the face of streamer PicoMause. twitch.tv/picomause",
          "image_id": 27
        },
        "PipeHype": {
          "description": "The PipeHype emote is of Pipe, part of the Twitch support team. twitch.tv/pipe",
          "image_id": 4240
        },
        "PJHarley": {
          "description": "This is a promotional emote for the game Infinite Crisis.",
          "image_id": 9808
        },
        "PJSalt": {
          "description": " PJ stands for PeacefulJay, a Fighting Game Community (FGC) stream: twitch.tv/peacefuljay and Salt is a term used in the FGC to describe someone who is upset.",
          "image_id": 36
        },
        "PMSTwin": {
          "description": "This is the face of Twitch staff member & PMS clan founder Amber Dalton.",
          "image_id": 92
        },
        "PogChamp": {
          "description": "This is the face of streamer Gootecks. twitch.tv/gootecks",
          "image_id": 88
        },
        "Poooound": {
          "description": "This is the face of streamer RSQViper. twitch.tv/RSQViper",
          "image_id": 358
        },
        "PraiseIt": {
          "description": "This is the icon for the Helix Fossil item in Pokemon games. It became a meme as part of the TwitchPlaysPokemon streams.",
          "image_id": 38586
        },
        "PRChase": {
          "description": "This is the face of Twitch PR Director, Chase.",
          "image_id": 28328
        },
        "PunchTrees": {
          "description": "This is an icon of Steve, the ingame persona in the game Minecraft. One of the first objectives in Minecraft is to punch trees to get wood.",
          "image_id": 47
        },
        "PuppeyFace": {
          "description": "This is the face of Clement \"Puppey\" Ivanov a professional Dota2 player. twitch.tv/puppey",
          "image_id": 58136
        },
        "RaccAttack": {
          "description": "This is the avatar of Nick aka BlackLightAttack. Formerly of his personal channel, twitch.tv/blacklightattack, where raccoons are a recurring theme.",
          "image_id": 27679
        },
        "RalpherZ": {
          "description": "This is the face of Ralph the dog of Twitch staff member Ernest Le. Brother of FrankerZ.",
          "image_id": 1900
        },
        "RedCoat": {
          "description": "This is the face of former Justin.tv staff member, Bill.",
          "image_id": 22
        },
        "ResidentSleeper": {
          "description": "This is the face of Oddler. Oddler was doing a 72 hour Resident Evil marathon when he fell asleep about 66 hours into it. His stream with him sleeping became massively popular and at one point the viewer count even reached 13,000. twitch.tv/oddler",
          "image_id": 245
        },
        "riPepperonis": {
          "description": "This is a symbol for \"Rest In Pepperonis\". \"Rest In Pepperonis\" is a middle of the herd term used to describe a death, usually on a video game.",
          "image_id": 62833
        },
        "RitzMitz": {
          "description": "The emote RitzMitz is of RitzPlays. twitch.tv/ritzplays",
          "image_id": 4338
        },
        "RuleFive": {
          "description": "This is the face of streamer Chuk. twitch.tv/whenchukattacks",
          "image_id": 361
        },
        "SeemsGood": {
          "description": "The face of staff member Paul Diamond, twitch.tv/bearcat",
          "image_id": 64138
        },
        "ShadyLulu": {
          "description": "The face of Twitch Staff member Lauren Etner from Events/Marketing",
          "image_id": 52492
        },
        "Shazam": {
          "description": "This is a promotional emote for the game Infinite Crisis.",
          "image_id": 9807
        },
        "shazamicon": {
          "description": "This is a promotional emote for the game Infinite Crisis.",
          "image_id": 9806
        },
        "ShazBotstix": {
          "description": "This is the face of Ben Goldhaber, Twitch staff member and streamer. twitch.tv/fishstix",
          "image_id": 87
        },
        "ShibeZ": {
          "description": "This is a Dogecoin. en.wikipedia.org/wiki/Dogecoin",
          "image_id": 27903
        },
        "SMOrc": {
          "description": "This is an icon from the game Space Marine.",
          "image_id": 52
        },
        "SMSkull": {
          "description": "This is an icon from the game Space Marine.",
          "image_id": 51
        },
        "SoBayed": {
          "description": "This is the face of SONOS, Twitch staff member and streamer. twitch.tv/s0n0s",
          "image_id": 1906
        },
        "SoonerLater": {
          "description": "This is the face of Sooner, a popular Twitch streamer. twitch.tv/lolsooner",
          "image_id": 355
        },
        "SriHead": {
          "description": null,
          "image_id": 14706
        },
        "SSSsss": {
          "description": "This is an icon of a Creeper from the game Minecraft. They blow stuff up.",
          "image_id": 46
        },
        "StoneLightning": {
          "description": "This is the face of Michael Seibel, co-founder of Justin.tv.",
          "image_id": 17
        },
        "StrawBeary": {
          "description": "This is the icon of streamer LordKat. twitch.tv/lordkat",
          "image_id": 37
        },
        "SuperVinlin": {
          "description": "This is the face of Twitch staff member Kevin Lin.",
          "image_id": 31
        },
        "SwiftRage": {
          "description": "This is the face of streamer Swiftor. twitch.tv/swiftor",
          "image_id": 34
        },
        "tbBaconBiscuit": {
          "description": "This is a Taco Bell promotional emote.",
          "image_id": 44499
        },
        "tbChickenBiscuit": {
          "description": "This is a Taco Bell promotional emote.",
          "image_id": 56879
        },
        "tbQuesarito": {
          "description": "This is a Taco Bell promotional emote.",
          "image_id": 56883
        },
        "tbSausageBiscuit": {
          "description": "This is a Taco Bell promotional emote.",
          "image_id": 56881
        },
        "tbSpicy": {
          "description": "This is a Taco Bell promotional emote.",
          "image_id": 56882
        },
        "tbSriracha": {
          "description": "This is a Taco Bell promotional emote.",
          "image_id": 56880
        },
        "TF2John": {
          "description": "This is the face of stream and Twitch staff member, John. twitch.tv/synwyn",
          "image_id": 1899
        },
        "TheKing": {
          "description": "This is the face of Twitch Staff member John Imah, Strategic Partnerships and Business Development.",
          "image_id": 50901
        },
        "TheRinger": {
          "description": "This is the face of Kyle Vogt, co-founder of Justin.tv.",
          "image_id": 18
        },
        "TheTarFu": {
          "description": "This is the face of streamer Tarfu. twitch.tv/tarfu",
          "image_id": 70
        },
        "TheThing": {
          "description": "The emote \"TheThing\" is the face of Geoff \"iNcontroL\" Robinson. twitch.tv/incontroltv",
          "image_id": 7427
        },
        "ThunBeast": {
          "description": "ThunBeast belongs to Twitch caster ThunderCast twitch.tv/Thundercast",
          "image_id": 1898
        },
        "TinyFace": {
          "description": "This is the face of streamer, Foom. twitch.tv/king_foom",
          "image_id": 67
        },
        "TooSpicy": {
          "description": "This is the face of Miguel, part of the Twitch moderation team. twitch.tv/sournothardcore SourPls",
          "image_id": 359
        },
        "TriHard": {
          "description": "This is the face of speed runner Trihex. twitch.tv/trihex",
          "image_id": 171
        },
        "TTours": {
          "description": null,
          "image_id": 38436
        },
        "twitchRaid": {
          "description": null,
          "image_id": 62836
        },
        "UleetBackup": {
          "description": "This is the face of streamer Crream. twitch.tv/crream",
          "image_id": 49
        },
        "UncleNox": {
          "description": "This is the face of Nox, part of the Twitch moderation team. Rumor is that he does not wear pants. twitch.tv/nox",
          "image_id": 3666
        },
        "UnSane": {
          "description": "This is the face of streamer Tom. twitch.tv/unsanitylive",
          "image_id": 71
        },
        "VaultBoy": {
          "description": "This is a promotional emote for Bethesda's Fallout franchise. Vault Boy is the mascot for the fictional corporation known as Vault-Tec within the Fallout universe.",
          "image_id": 54090
        },
        "Volcania": {
          "description": "This is the logo of CelGaming. twitch.tv/celgaming",
          "image_id": 166
        },
        "WholeWheat": {
          "description": "This is the face of caster and Twitch staff member djWHEAT. twitch.tv/djwheat",
          "image_id": 1896
        },
        "WinWaker": {
          "description": "This is the face of speed runner CosmoWright. twitch.tv/cosmowright",
          "image_id": 167
        },
        "WTRuck": {
          "description": "WTRuck belongs Eddie Ruckus twitch.tv/eddieruckus",
          "image_id": 1897
        },
        "WutFace": {
          "description": "This is the face of Twitch staff member Alex Mendez. twitch.tv/goldenboyftw",
          "image_id": 28087
        },
        "YouWHY": {
          "description": "This is the emote of YouPickGames. twitch.tv/youpickgames",
          "image_id": 4337
        }
      }
    };
    
    var re = new RegExp(Object.keys(twitchObject.emotes).join("|"),"g"); 

    function makeImage(id){
      return '<img class="emoji" src="//static-cdn.jtvnw.net/emoticons/v1/'+id+'/1.0" />';
    }
    function replaceTextWithEmote(){
      var $last = $('.chat-main .text').last();
      var emoted = $last.html().replace(re, function(matched){
        return makeImage(twitchObject.emotes[matched].image_id);
      });
      $last.html(emoted);
    }
    Dubtrack.Events.bind("realtime:chat-message", replaceTextWithEmote);
})();