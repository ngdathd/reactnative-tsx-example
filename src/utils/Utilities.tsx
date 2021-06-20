import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width, height} = Dimensions.get('screen');
const sizeOfWidth = 375;
const sizeOfHeight = 812;

export default class Utilities {
    static getWidthScreen(isPixel?: any) {
        if (width < height) {
            if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(width);
            return width;
        }
        if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(height);
        return height;
    }

    static getHeightScreen(isPixel?: any) {
        if (width < height) {
            if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(height);
            return height;
        }
        if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(width);
        return width;
    }

    /* 
        sizeOfItemDesign - kich thuoc chieu rong cua view can tinh toan
        sizeOfWidth - kich thuoc man hinh theo thiet ke theo chieu rong (Width)
    */
    static getResolutionByWidth = (sizeOfItemDesign: any) =>
        (sizeOfItemDesign / sizeOfWidth) * Utilities.getWidthScreen();

    /* 
        sizeOfItemDesign - kich thuoc chieu cao cua view can tinh toan
        sizeOfHeight - kich thuoc man hinh thiet ke theo chieu cao (Height)
    */
    static getResolutionByHeight = (sizeOfItemDesign: any) =>
        (sizeOfItemDesign / sizeOfHeight) * Utilities.getHeightScreen();

    static isAndroid = () => Platform.OS === 'android';

    static isIphoneX() {
        const dim = Dimensions.get('window');

        return (
            Platform.OS === 'ios' &&
            (dim.height === 812 ||
                dim.width === 812 ||
                dim.height === 896 ||
                dim.width === 896)
        );
    }

    static getPolygonTest1() {
        return [
            {
                longitude: -73.93383000695911,
                latitude: 40.81949109558767,
            },
            {
                longitude: -73.93411701695138,
                latitude: 40.81955053491088,
            },
            {
                longitude: -73.93431276819767,
                latitude: 40.81962986684897,
            },
            {
                longitude: -73.93440040009484,
                latitude: 40.819667782434465,
            },
            {
                longitude: -73.93439036753757,
                latitude: 40.81958743539698,
            },
            {
                longitude: -73.93438112852347,
                latitude: 40.81932807562949,
            },
            {
                longitude: -73.9342948780807,
                latitude: 40.81890498677685,
            },
            {
                longitude: -73.93423576072603,
                latitude: 40.818649319251364,
            },
            {
                longitude: -73.93408482013453,
                latitude: 40.81793086150489,
            },
            {
                longitude: -73.9340746397773,
                latitude: 40.81782651394852,
            },
            {
                longitude: -73.93412816761214,
                latitude: 40.8177339625139,
            },
            {
                longitude: -73.93423519549512,
                latitude: 40.81755488121525,
            },
            {
                longitude: -73.93445400138874,
                latitude: 40.81718852906137,
            },
            {
                longitude: -73.93463790272767,
                latitude: 40.81690804797262,
            },
            {
                longitude: -73.93487343834981,
                latitude: 40.8165278475176,
            },
            {
                longitude: -73.93575548210782,
                latitude: 40.81532558429708,
            },
            {
                longitude: -73.93613554330996,
                latitude: 40.8147881266393,
            },
            {
                longitude: -73.93620957748075,
                latitude: 40.81467385042275,
            },
            {
                longitude: -73.93668854882762,
                latitude: 40.81404163072326,
            },
            {
                longitude: -73.93708163694987,
                latitude: 40.81350614105259,
            },
            {
                longitude: -73.93714398424214,
                latitude: 40.81342104144455,
            },
            {
                longitude: -73.93761714951756,
                latitude: 40.81274036483138,
            },
            {
                longitude: -73.93813552407511,
                latitude: 40.812065619232335,
            },
            {
                longitude: -73.93820642688317,
                latitude: 40.81196760479798,
            },
            {
                longitude: -73.93830925043022,
                latitude: 40.81182546401121,
            },
            {
                longitude: -73.93838748529838,
                latitude: 40.81171844357887,
            },
            {
                longitude: -73.93863753326706,
                latitude: 40.81137638806709,
            },
            {
                longitude: -73.93874394437573,
                latitude: 40.811230820566436,
            },
            {
                longitude: -73.93901753314599,
                latitude: 40.810856556874455,
            },
            {
                longitude: -73.93740733660461,
                latitude: 40.810175611401206,
            },
            {
                longitude: -73.93580780201182,
                latitude: 40.80949763825762,
            },
            {
                longitude: -73.93586263420018,
                latitude: 40.80943020292132,
            },
            {
                longitude: -73.93625936035667,
                latitude: 40.808855608725686,
            },
            {
                longitude: -73.93671827467928,
                latitude: 40.80822047872675,
            },
            {
                longitude: -73.93718011799034,
                latitude: 40.80759900035796,
            },
            {
                longitude: -73.93763439424364,
                latitude: 40.806974606921834,
            },
            {
                longitude: -73.93808666916728,
                latitude: 40.80635301191095,
            },
            {
                longitude: -73.93854407929403,
                latitude: 40.805729652932854,
            },
            {
                longitude: -73.93869430486176,
                latitude: 40.80579102921082,
            },
            {
                longitude: -73.94015793743944,
                latitude: 40.80640908964353,
            },
            {
                longitude: -73.94177140170032,
                latitude: 40.807089000349656,
            },
            {
                longitude: -73.94491601785558,
                latitude: 40.80841350378125,
            },
            {
                longitude: -73.94499360671229,
                latitude: 40.80844618384186,
            },
            {
                longitude: -73.94506102986607,
                latitude: 40.8084745003499,
            },
            {
                longitude: -73.94773985453432,
                latitude: 40.80959972161701,
            },
            {
                longitude: -73.94783892229975,
                latitude: 40.8096411278052,
            },
            {
                longitude: -73.9479230680906,
                latitude: 40.809676922465236,
            },
            {
                longitude: -73.95067975515929,
                latitude: 40.81084296435352,
            },
            {
                longitude: -73.95210125149222,
                latitude: 40.81144285350124,
            },
            {
                longitude: -73.95150537264615,
                latitude: 40.81200768463676,
            },
            {
                longitude: -73.95098203327805,
                latitude: 40.81252162978943,
            },
            {
                longitude: -73.95092865672767,
                latitude: 40.81257507153118,
            },
            {
                longitude: -73.95035019142966,
                latitude: 40.81315938878694,
            },
            {
                longitude: -73.94986218985588,
                latitude: 40.81379998043675,
            },
            {
                longitude: -73.94962668076091,
                latitude: 40.81410004983843,
            },
            {
                longitude: -73.94962653685337,
                latitude: 40.81410023874317,
            },
            {
                longitude: -73.94962639580584,
                latitude: 40.81410043619291,
            },
            {
                longitude: -73.94940550546026,
                latitude: 40.814407409502984,
            },
            {
                longitude: -73.9491996001398,
                latitude: 40.81472085408311,
            },
            {
                longitude: -73.94900927796705,
                latitude: 40.815039942538704,
            },
            {
                longitude: -73.9488349125204,
                latitude: 40.81536398055535,
            },
            {
                longitude: -73.94867681741437,
                latitude: 40.81569228551455,
            },
            {
                longitude: -73.94835601519225,
                latitude: 40.816374305618886,
            },
            {
                longitude: -73.94800732867309,
                latitude: 40.8171165088993,
            },
            {
                longitude: -73.94766641252582,
                latitude: 40.817855509489,
            },
            {
                longitude: -73.94734953979686,
                latitude: 40.81853499822355,
            },
            {
                longitude: -73.94703623206819,
                latitude: 40.81920837200807,
            },
            {
                longitude: -73.94671832033764,
                latitude: 40.81989426803384,
            },
            {
                longitude: -73.9464028984772,
                latitude: 40.82057204218477,
            },
            {
                longitude: -73.94607828674226,
                latitude: 40.82126321606192,
            },
            {
                longitude: -73.94516004895775,
                latitude: 40.82087904397888,
            },
            {
                longitude: -73.94460364603806,
                latitude: 40.82146198118819,
            },
            {
                longitude: -73.9440498636813,
                latitude: 40.822051592105,
            },
            {
                longitude: -73.94350594463333,
                latitude: 40.82262775327937,
            },
            {
                longitude: -73.94292366912582,
                latitude: 40.82326058725043,
            },
            {
                longitude: -73.9424295395631,
                latitude: 40.823909156935464,
            },
            {
                longitude: -73.94195569728996,
                latitude: 40.82455444012053,
            },
            {
                longitude: -73.9415031265368,
                latitude: 40.82517136689069,
            },
            {
                longitude: -73.94104840809351,
                latitude: 40.8257926296038,
            },
            {
                longitude: -73.94059472654726,
                latitude: 40.82641360402922,
            },
            {
                longitude: -73.94013953822807,
                latitude: 40.82703869055559,
            },
            {
                longitude: -73.9396895279914,
                latitude: 40.827656574227866,
            },
            {
                longitude: -73.93924885616293,
                latitude: 40.828296351211876,
            },
            {
                longitude: -73.93896034889055,
                latitude: 40.82898632996019,
            },
            {
                longitude: -73.93864026693868,
                latitude: 40.82973887442052,
            },
            {
                longitude: -73.93899743437669,
                latitude: 40.82988885286428,
            },
            {
                longitude: -73.93943428772432,
                latitude: 40.83007611669215,
            },
            {
                longitude: -73.93962569930143,
                latitude: 40.83015583738796,
            },
            {
                longitude: -73.94017089788652,
                latitude: 40.83038439112869,
            },
            {
                longitude: -73.94007905795213,
                latitude: 40.83046395774134,
            },
            {
                longitude: -73.93998939894344,
                latitude: 40.83073096688919,
            },
            {
                longitude: -73.93996368656906,
                latitude: 40.83082053430401,
            },
            {
                longitude: -73.93996366268432,
                latitude: 40.83082060632692,
            },
            {
                longitude: -73.9399239511922,
                latitude: 40.83090806016343,
            },
            {
                longitude: -73.93992389241943,
                latitude: 40.830908177064586,
            },
            {
                longitude: -73.93992383233875,
                latitude: 40.8309082768776,
            },
            {
                longitude: -73.93987063346383,
                latitude: 40.83099179606697,
            },
            {
                longitude: -73.93987057339177,
                latitude: 40.83099188616358,
            },
            {
                longitude: -73.93987049016128,
                latitude: 40.83099197658315,
            },
            {
                longitude: -73.9398049898395,
                latitude: 40.831069790159276,
            },
            {
                longitude: -73.93980484742822,
                latitude: 40.831069960289355,
            },
            {
                longitude: -73.93980468099204,
                latitude: 40.83107011331944,
            },
            {
                longitude: -73.93972831443872,
                latitude: 40.831140898571746,
            },
            {
                longitude: -73.9396098257029,
                latitude: 40.83125089467677,
            },
            {
                longitude: -73.93960970782902,
                latitude: 40.831251002332976,
            },
            {
                longitude: -73.93960960075394,
                latitude: 40.83125111920869,
            },
            {
                longitude: -73.93950338652492,
                latitude: 40.831369460472445,
            },
            {
                longitude: -73.9394108340693,
                latitude: 40.83149499458965,
            },
            {
                longitude: -73.93941078701702,
                latitude: 40.83149507581406,
            },
            {
                longitude: -73.93933313154191,
                latitude: 40.83162629993882,
            },
            {
                longitude: -73.93927119324165,
                latitude: 40.8317616573971,
            },
            {
                longitude: -73.93927116936439,
                latitude: 40.8317617200385,
            },
            {
                longitude: -73.93927114613948,
                latitude: 40.8317617928992,
            },
            {
                longitude: -73.93922536460632,
                latitude: 40.83189966097508,
            },
            {
                longitude: -73.93913480796968,
                latitude: 40.83209759542905,
            },
            {
                longitude: -73.93902897268019,
                latitude: 40.83229149797039,
            },
            {
                longitude: -73.93894859789032,
                latitude: 40.832417335825774,
            },
            {
                longitude: -73.9389083447814,
                latitude: 40.8324803571376,
            },
            {
                longitude: -73.93877360195538,
                latitude: 40.83266321215949,
            },
            {
                longitude: -73.93868316230177,
                latitude: 40.83280078941747,
            },
            {
                longitude: -73.93862894892672,
                latitude: 40.83285794170846,
            },
            {
                longitude: -73.93857474693523,
                latitude: 40.83291508577085,
            },
            {
                longitude: -73.93838508900461,
                latitude: 40.83311350252125,
            },
            {
                longitude: -73.93795718243024,
                latitude: 40.83345441842215,
            },
            {
                longitude: -73.93729719818138,
                latitude: 40.83397732122566,
            },
            {
                longitude: -73.93729666512158,
                latitude: 40.833977744101354,
            },
            {
                longitude: -73.93705905884407,
                latitude: 40.834165988650966,
            },
            {
                longitude: -73.93700641578684,
                latitude: 40.83419311017997,
            },
            {
                longitude: -73.93649557128383,
                latitude: 40.83456879562555,
            },
            {
                longitude: -73.93572624332147,
                latitude: 40.835156346599724,
            },
            {
                longitude: -73.93530788003893,
                latitude: 40.83547772443074,
            },
            {
                longitude: -73.93506336342621,
                latitude: 40.835677658809985,
            },
            {
                longitude: -73.93496274110689,
                latitude: 40.83575993474983,
            },
            {
                longitude: -73.93485740276071,
                latitude: 40.83598502557723,
            },
            {
                longitude: -73.93479886277844,
                latitude: 40.83611011575883,
            },
            {
                longitude: -73.93474569422972,
                latitude: 40.83609209412601,
            },
            {
                longitude: -73.93467393068329,
                latitude: 40.8360649032391,
            },
            {
                longitude: -73.93460027698636,
                latitude: 40.836096868110225,
            },
            {
                longitude: -73.93436132705641,
                latitude: 40.836200775593426,
            },
            {
                longitude: -73.93445239397373,
                latitude: 40.83598096014986,
            },
            {
                longitude: -73.93456051826973,
                latitude: 40.83586608172802,
            },
            {
                longitude: -73.9347546645066,
                latitude: 40.83558929983925,
            },
            {
                longitude: -73.93475368707841,
                latitude: 40.835569821114206,
            },
            {
                longitude: -73.93480514039258,
                latitude: 40.835427472645954,
            },
            {
                longitude: -73.93481898168221,
                latitude: 40.83539825039465,
            },
            {
                longitude: -73.93483181137555,
                latitude: 40.83538552549233,
            },
            {
                longitude: -73.93484813571963,
                latitude: 40.83535143220732,
            },
            {
                longitude: -73.93486985067804,
                latitude: 40.835332715131045,
            },
            {
                longitude: -73.93489460041994,
                latitude: 40.83525404312231,
            },
            {
                longitude: -73.9349153357865,
                latitude: 40.83523082193877,
            },
            {
                longitude: -73.93493620828455,
                latitude: 40.83508021765152,
            },
            {
                longitude: -73.93494225855345,
                latitude: 40.83502687541725,
            },
            {
                longitude: -73.93495859566971,
                latitude: 40.834882778542124,
            },
            {
                longitude: -73.93497941208676,
                latitude: 40.83478912095097,
            },
            {
                longitude: -73.93498833140738,
                latitude: 40.83474865739103,
            },
            {
                longitude: -73.9349508717846,
                latitude: 40.83470667336766,
            },
            {
                longitude: -73.93495775984087,
                latitude: 40.83468276036334,
            },
            {
                longitude: -73.9349652301556,
                latitude: 40.83465684795367,
            },
            {
                longitude: -73.93496624164193,
                latitude: 40.83462912314566,
            },
            {
                longitude: -73.93497316061229,
                latitude: 40.83462163453901,
            },
            {
                longitude: -73.93497219073575,
                latitude: 40.834608144294975,
            },
            {
                longitude: -73.9349938973671,
                latitude: 40.83459766568047,
            },
            {
                longitude: -73.9350306032399,
                latitude: 40.83439236534125,
            },
            {
                longitude: -73.93503612427712,
                latitude: 40.83429832034331,
            },
            {
                longitude: -73.9350312411865,
                latitude: 40.8342488623469,
            },
            {
                longitude: -73.93504212490855,
                latitude: 40.83421139923443,
            },
            {
                longitude: -73.93507644502898,
                latitude: 40.83392404328705,
            },
            {
                longitude: -73.93506958098244,
                latitude: 40.83388731750217,
            },
            {
                longitude: -73.93508341363373,
                latitude: 40.8338655969296,
            },
            {
                longitude: -73.93509687471908,
                latitude: 40.83371535679221,
            },
            {
                longitude: -73.93509690469142,
                latitude: 40.83368463190984,
            },
            {
                longitude: -73.93510384255589,
                latitude: 40.83365765691782,
            },
            {
                longitude: -73.93511245100076,
                latitude: 40.83342573907345,
            },
            {
                longitude: -73.9351174304809,
                latitude: 40.83337703428137,
            },
            {
                longitude: -73.93512041704275,
                latitude: 40.83335380306745,
            },
            {
                longitude: -73.93513225848743,
                latitude: 40.83334482290499,
            },
            {
                longitude: -73.93512636041868,
                latitude: 40.833326080356244,
            },
            {
                longitude: -73.93512935500891,
                latitude: 40.83329460947993,
            },
            {
                longitude: -73.93512443552862,
                latitude: 40.833281118185184,
            },
            {
                longitude: -73.93513826819081,
                latitude: 40.83326014375564,
            },
            {
                longitude: -73.93513729127852,
                latitude: 40.83324141318857,
            },
            {
                longitude: -73.9351304030063,
                latitude: 40.833228667273474,
            },
            {
                longitude: -73.93512154973723,
                latitude: 40.83320169227403,
            },
            {
                longitude: -73.93512352949863,
                latitude: 40.83318969900627,
            },
            {
                longitude: -73.93511565892307,
                latitude: 40.83317620538069,
            },
            {
                longitude: -73.93513243602689,
                latitude: 40.83316272511775,
            },
            {
                longitude: -73.93513935847737,
                latitude: 40.83315149100031,
            },
            {
                longitude: -73.93512752379405,
                latitude: 40.833142488809095,
            },
            {
                longitude: -73.93512465984577,
                latitude: 40.833051069029295,
            },
            {
                longitude: -73.93512171853354,
                latitude: 40.83302859034757,
            },
            {
                longitude: -73.93511580946038,
                latitude: 40.83302184217288,
            },
            {
                longitude: -73.93511187882301,
                latitude: 40.833003100729215,
            },
            {
                longitude: -73.9351197936552,
                latitude: 40.832983628174176,
            },
            {
                longitude: -73.93511783020568,
                latitude: 40.83296713902448,
            },
            {
                longitude: -73.93512376770083,
                latitude: 40.832945412996715,
            },
            {
                longitude: -73.93512085547363,
                latitude: 40.83290419576848,
            },
            {
                longitude: -73.93513170518374,
                latitude: 40.832902697673674,
            },
            {
                longitude: -73.93514455114399,
                latitude: 40.83288472203649,
            },
            {
                longitude: -73.93516725294636,
                latitude: 40.83287499227589,
            },
            {
                longitude: -73.9351648084094,
                latitude: 40.832852883264245,
            },
            {
                longitude: -73.93515659173381,
                latitude: 40.83268240623723,
            },
            {
                longitude: -73.93512878131627,
                latitude: 40.83236353447687,
            },
            {
                longitude: -73.93511398341515,
                latitude: 40.83236577683714,
            },
            {
                longitude: -73.9350778924617,
                latitude: 40.83194162361134,
            },
            {
                longitude: -73.9350956518488,
                latitude: 40.83194238126701,
            },
            {
                longitude: -73.93508783728588,
                latitude: 40.83185919835,
            },
            {
                longitude: -73.93506824974105,
                latitude: 40.83170406762572,
            },
            {
                longitude: -73.93502275465515,
                latitude: 40.83131999954984,
            },
            {
                longitude: -73.93498505621454,
                latitude: 40.83102735335791,
            },
            {
                longitude: -73.93493515655048,
                latitude: 40.83060244471323,
            },
            {
                longitude: -73.93489353332376,
                latitude: 40.83028656383774,
            },
            {
                longitude: -73.9348308720848,
                latitude: 40.82980843705177,
            },
            {
                longitude: -73.93479881905735,
                latitude: 40.82979230914966,
            },
            {
                longitude: -73.93480080676932,
                latitude: 40.82977283325497,
            },
            {
                longitude: -73.93478996278796,
                latitude: 40.82976832407672,
            },
            {
                longitude: -73.93479293827903,
                latitude: 40.829756340752134,
            },
            {
                longitude: -73.93478111085824,
                latitude: 40.82974059316723,
            },
            {
                longitude: -73.93477028229691,
                latitude: 40.829720361694214,
            },
            {
                longitude: -73.93475944294427,
                latitude: 40.82970012100015,
            },
            {
                longitude: -73.93476343288322,
                latitude: 40.82965740394856,
            },
            {
                longitude: -73.93474372591281,
                latitude: 40.82963716812013,
            },
            {
                longitude: -73.93473930830996,
                latitude: 40.82960906094397,
            },
            {
                longitude: -73.93474919492779,
                latitude: 40.82959708136339,
            },
            {
                longitude: -73.93473737349919,
                latitude: 40.82957458942519,
            },
            {
                longitude: -73.93472260127821,
                latitude: 40.82955060049557,
            },
            {
                longitude: -73.93472557699927,
                latitude: 40.82952736927084,
            },
            {
                longitude: -73.93471476025762,
                latitude: 40.82949514407967,
            },
            {
                longitude: -73.93470100252415,
                latitude: 40.82944043079997,
            },
            {
                longitude: -73.93469412707415,
                latitude: 40.829416455216,
            },
            {
                longitude: -73.93471288560723,
                latitude: 40.829400725442056,
            },
            {
                longitude: -73.93470504902284,
                latitude: 40.8293407746905,
            },
            {
                longitude: -73.93469321669619,
                latitude: 40.829328773601276,
            },
            {
                longitude: -73.93467597101815,
                latitude: 40.82931340221048,
            },
            {
                longitude: -73.93466228987832,
                latitude: 40.82918075994599,
            },
            {
                longitude: -73.93468302702506,
                latitude: 40.829165787333515,
            },
            {
                longitude: -73.9347076940248,
                latitude: 40.82915830979219,
            },
            {
                longitude: -73.93470080780772,
                latitude: 40.829132073631314,
            },
            {
                longitude: -73.93468107924859,
                latitude: 40.82913355777876,
            },
            {
                longitude: -73.93467714880202,
                latitude: 40.82911632854787,
            },
            {
                longitude: -73.93467025222027,
                latitude: 40.829112570426375,
            },
            {
                longitude: -73.9346544761815,
                latitude: 40.82909757696104,
            },
            {
                longitude: -73.93464959243246,
                latitude: 40.829048119407005,
            },
            {
                longitude: -73.93466193198351,
                latitude: 40.82903876029445,
            },
            {
                longitude: -73.93466295225605,
                latitude: 40.82901403331146,
            },
            {
                longitude: -73.93466495971361,
                latitude: 40.82897356682647,
            },
            {
                longitude: -73.9346561102258,
                latitude: 40.8289428363861,
            },
            {
                longitude: -73.93465515536505,
                latitude: 40.82891285858107,
            },
            {
                longitude: -73.93463641852125,
                latitude: 40.828906860149004,
            },
            {
                longitude: -73.93461640343895,
                latitude: 40.82869365579327,
            },
            {
                longitude: -73.93461171264785,
                latitude: 40.82868983525941,
            },
            {
                longitude: -73.9346026032382,
                latitude: 40.8286824012377,
            },
            {
                longitude: -73.93460883576688,
                latitude: 40.82866118868208,
            },
            {
                longitude: -73.93461052506919,
                latitude: 40.82865543568963,
            },
            {
                longitude: -73.93460804993306,
                latitude: 40.82865336301816,
            },
            {
                longitude: -73.93460065845316,
                latitude: 40.82864718221304,
            },
            {
                longitude: -73.93459873640631,
                latitude: 40.82860072400893,
            },
            {
                longitude: -73.9346019211835,
                latitude: 40.82859254929859,
            },
            {
                longitude: -73.93461159553205,
                latitude: 40.82856775518616,
            },
            {
                longitude: -73.9346091744548,
                latitude: 40.82852167496809,
            },
            {
                longitude: -73.93461017716513,
                latitude: 40.828502936290164,
            },
            {
                longitude: -73.93461219001,
                latitude: 40.828457229149016,
            },
            {
                longitude: -73.93460433489886,
                latitude: 40.82842800279464,
            },
            {
                longitude: -73.9346073136309,
                latitude: 40.828401025563686,
            },
            {
                longitude: -73.93460043185587,
                latitude: 40.828382282414324,
            },
            {
                longitude: -73.93460834555331,
                latitude: 40.82836355753896,
            },
            {
                longitude: -73.93459750565475,
                latitude: 40.82834482035352,
            },
            {
                longitude: -73.93460048488119,
                latitude: 40.828328333985056,
            },
            {
                longitude: -73.93459360040842,
                latitude: 40.82830135116008,
            },
            {
                longitude: -73.93458674147796,
                latitude: 40.82825938499242,
            },
            {
                longitude: -73.93459562914447,
                latitude: 40.82825114985731,
            },
            {
                longitude: -73.93458676210544,
                latitude: 40.828238402776456,
            },
            {
                longitude: -73.9345917047489,
                latitude: 40.82822716755982,
            },
            {
                longitude: -73.9345976397154,
                latitude: 40.82820843167847,
            },
            {
                longitude: -73.93458877267295,
                latitude: 40.828195693476445,
            },
            {
                longitude: -73.93458684240801,
                latitude: 40.828156719068794,
            },
            {
                longitude: -73.93456513010248,
                latitude: 40.828162704449355,
            },
            {
                longitude: -73.93455810179866,
                latitude: 40.82811740277772,
            },
            {
                longitude: -73.93454586266017,
                latitude: 40.82804816146416,
            },
            {
                longitude: -73.93454230638145,
                latitude: 40.82802687031302,
            },
            {
                longitude: -73.93453258880567,
                latitude: 40.82796855836172,
            },
            {
                longitude: -73.93452175638055,
                latitude: 40.82790780009134,
            },
            {
                longitude: -73.93453898134064,
                latitude: 40.827903472670705,
            },
            {
                longitude: -73.93453183092765,
                latitude: 40.82784940204341,
            },
            {
                longitude: -73.93452076528119,
                latitude: 40.827765689650995,
            },
            {
                longitude: -73.93451590672417,
                latitude: 40.82772893075845,
            },
            {
                longitude: -73.9344239633905,
                latitude: 40.82704289397212,
            },
            {
                longitude: -73.93448291058759,
                latitude: 40.82703709277874,
            },
            {
                longitude: -73.93446426549492,
                latitude: 40.826842205193444,
            },
            {
                longitude: -73.93442844400516,
                latitude: 40.82646785059142,
            },
            {
                longitude: -73.93436717955377,
                latitude: 40.82582759815849,
            },
            {
                longitude: -73.93435643452149,
                latitude: 40.82582093714432,
            },
            {
                longitude: -73.93432574289122,
                latitude: 40.82523259029442,
            },
            {
                longitude: -73.93429530732776,
                latitude: 40.824649231222764,
            },
            {
                longitude: -73.93429371670614,
                latitude: 40.82449638641463,
            },
            {
                longitude: -73.93427285440853,
                latitude: 40.82443895275131,
            },
            {
                longitude: -73.93424642895086,
                latitude: 40.82416688303718,
            },
            {
                longitude: -73.93421834803296,
                latitude: 40.8237990457901,
            },
            {
                longitude: -73.93416594530659,
                latitude: 40.82307858087094,
            },
            {
                longitude: -73.93414657666992,
                latitude: 40.82302903205041,
            },
            {
                longitude: -73.93414604382139,
                latitude: 40.82302061918035,
            },
            {
                longitude: -73.93413373625339,
                latitude: 40.82280065597678,
            },
            {
                longitude: -73.93412126165074,
                latitude: 40.822647252741696,
            },
            {
                longitude: -73.93411752612663,
                latitude: 40.82252433268843,
            },
            {
                longitude: -73.9341023336635,
                latitude: 40.82220121691671,
            },
            {
                longitude: -73.9340998673827,
                latitude: 40.8221399123411,
            },
            {
                longitude: -73.93409843799961,
                latitude: 40.822104227343814,
            },
            {
                longitude: -73.9340911251742,
                latitude: 40.82199603748752,
            },
            {
                longitude: -73.93407944723481,
                latitude: 40.82180557579623,
            },
            {
                longitude: -73.93407434354855,
                latitude: 40.82171709911024,
            },
            {
                longitude: -73.93407734095156,
                latitude: 40.82169456177001,
            },
            {
                longitude: -73.93407005522697,
                latitude: 40.82155932093417,
            },
            {
                longitude: -73.93404447476466,
                latitude: 40.82117670357437,
            },
            {
                longitude: -73.93404599779085,
                latitude: 40.82113387652021,
            },
            {
                longitude: -73.93403560443227,
                latitude: 40.82095254677987,
            },
            {
                longitude: -73.93402662334586,
                latitude: 40.820816809752856,
            },
            {
                longitude: -73.93400389615744,
                latitude: 40.820397839681526,
            },
            {
                longitude: -73.93400069207455,
                latitude: 40.82033819717466,
            },
            {
                longitude: -73.93398295705481,
                latitude: 40.8199999202017,
            },
            {
                longitude: -73.93398664640615,
                latitude: 40.819968034725136,
            },
            {
                longitude: -73.93397241531086,
                latitude: 40.819729574765596,
            },
            {
                longitude: -73.93383009163725,
                latitude: 40.81971974292704,
            },
            {
                longitude: -73.9338307684026,
                latitude: 40.81959665747723,
            },
            {
                longitude: -73.93383000695911,
                latitude: 40.81949109558767,
            },
        ];
    }

    static getPolygonTest2() {
        return [
            {latitude: 40.83838286035866, longitude: -73.9273902028799},
            {latitude: 40.80354604335127, longitude: -73.9273902028799},

            {latitude: 40.80354604335127, longitude: -73.95854104310274},
            {latitude: 40.83838286035866, longitude: -73.95854104310274},
        ];
    }
}
