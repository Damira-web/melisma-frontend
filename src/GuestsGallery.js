import React from 'react';
import './App.css';

const guestsData = [
    { id: 1, image: 'https://img.freepik.com/free-photo/happy-woman-home-during-coronavirus-quarantine_53876-137722.jpg?w=1380&t=st=1705465053~exp=1705465653~hmac=9b845bb2862aeefa2099227bd1debbf6296c9ac7097cbac44c807d62e5fcbe54', name: 'Алина' },
    { id: 2, image: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=1800&t=st=1705465244~exp=1705465844~hmac=6a6c4905c14300ab8a6e497fd784a831e8162c4e31a6dc4cd2a25e4fba308192', name: 'Евгений' },
    { id: 3, image: 'https://img.freepik.com/free-photo/stylish-confident-businesswoman-smiling_176420-19466.jpg?w=1800&t=st=1705465165~exp=1705465765~hmac=59e45352ed71d9da15fc82dd4c8ee89705ee5e13c3e8bfc4a963f37d706b324c', name: 'Ирина' },
    { id: 4, image: 'https://img.freepik.com/free-photo/portrait-funny-little-boy-with-red-hair-freckles-smiling_176420-15520.jpg?w=1800&t=st=1705465335~exp=1705465935~hmac=76dcd6a07a373bec68d0eeff6e0a0251c7a5aaf6d4196b67a596f8bea67ea451', name: 'Артем' },
    { id: 5, image: 'https://img.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg?w=1800&t=st=1705465191~exp=1705465791~hmac=11d2eb2453947094bb1e13df04fa8f75b0225cc81eb43c702f4fefbf5c686d19', name: 'Марина' },
    { id: 6, image: 'https://img.freepik.com/free-photo/close-up-shot-ordinary-fair-haired-caucasian-male-with-bristle-earrings-staring-carefree-being-indifferent-calm_176420-25002.jpg?w=1800&t=st=1705465296~exp=1705465896~hmac=70042ebd5c97bc3611164e7b2ec47b7ba7246e406d8b3fdfed1f8b935d02315c', name: 'Владимир' },
    { id: 7, image: 'https://img.freepik.com/free-photo/beautiful-smiling-woman-looking-friendly-ready-help-customer-client-holding-hands-together-staring-camera-white-background_176420-53436.jpg?w=1800&t=st=1705465215~exp=1705465815~hmac=6a730e08c54543b7515b00894a69d25c75c2400b0d584cb04c172c431d3f5774', name: 'Светлана' },
    { id: 8, image: 'https://img.freepik.com/free-photo/smiley-little-boy-isolated-pink_23-2148984799.jpg?w=1800&t=st=1705465357~exp=1705465957~hmac=6d198c6aaac07fe7030bef3936f65faa2f51556bd98ac1b84344f27bc6705a0e', name: 'Олег' },
    { id: 9, image: 'https://img.freepik.com/free-photo/african-american-man-wearing-yellow-t-shirt_273609-23333.jpg?w=1800&t=st=1705465268~exp=1705465868~hmac=34bfdbe21998eb6190adf11483020588cc49c1b438570560c0919fe75fa91fda', name: 'Джонни' },
    { id: 10, image: 'https://img.freepik.com/free-photo/cool-musician_1385-106.jpg?w=1480&t=st=1705473490~exp=1705474090~hmac=0ca129aa674203380b099897c13cf2a13c0b3ddc467e430919e1ef880066d175', name: 'Messo' },
    { id: 11, image: 'https://img.freepik.com/free-photo/portrait-young-boy-with-electric-guitar-isolated-white-background_186202-4479.jpg?w=996&t=st=1705473512~exp=1705474112~hmac=26b392a72208a6c061a564cde28090e9d64485678ebb8d211fa85a5a7644c510', name: 'Даниал' },
    { id: 12, image: 'https://img.freepik.com/free-photo/portrait-young-attractive-caucasian-teen-girls-posing_155003-2290.jpg?w=1800&t=st=1705473570~exp=1705474170~hmac=8fe1ba86b25389e053f8259cd697780d0d2706a6ac40b5fbb36a43e1a3c37de3', name: 'Spice girls' },
    { id: 13, image: 'https://img.freepik.com/free-photo/fashion-portrait-two-smiling-brunette-models-summer-casual-hipster-clothes-isolated-white_158538-12151.jpg?w=1800&t=st=1705473598~exp=1705474198~hmac=202bfa571e501e99297bed013742819ef16ecc09385fbed7e1fa127b80dfebb0', name: 'Анна и Виктория' },
    { id: 14, image: 'https://img.freepik.com/free-photo/young-teenager-jumping-with-guitar_144627-34452.jpg?w=1800&t=st=1705473654~exp=1705474254~hmac=a3faac298265d51a38cd147ce08149d35d5c10ec5711984652f034b93be81624', name: 'Денис' },
    { id: 15, image: 'https://img.freepik.com/free-photo/full-shot-modern-boys-having-fun_23-2148423270.jpg?w=826&t=st=1705473696~exp=1705474296~hmac=257c6c725bf99b5654f1b5efd068a8e34bfbedfe36d92f649acf07a6aeba2b02', name: 'Кирилл и Юрий' },
    { id: 16, image: 'https://img.freepik.com/free-photo/front-view-beautiful-happy-woman_23-2148778276.jpg?w=900&t=st=1705473780~exp=1705474380~hmac=8511ff398b6be7e8dbf8a54f14420a22272cf9f23a19d5365e4d488c223c054e', name: 'Елена' },
    { id: 17, image: 'https://img.freepik.com/free-photo/lifestyle-leisure-people-concept-carefree-happy-asian-man-enjoying-singing-karaoke-holding-microphone-fist-pump-delight-performing-white-background_1258-55883.jpg?w=1800&t=st=1705473877~exp=1705474477~hmac=d73ee88a76d9bd36aa46d98e4a12e0e61990b3071d14c112efcaf606730515c5', name: 'Тимур' },
    { id: 18, image: 'https://img.freepik.com/free-photo/adorable-cute-child-with-microphone-hands-singing-songs-looks-camera-performing-isolated-yellow-background-child-arranging-concert-sings-karaoke_176532-13686.jpg?w=1800&t=st=1705473909~exp=1705474509~hmac=8dacc70f4e638db81271e88ee1faca5fc540fd7637f262ab433738cfbca4ddd7', name: 'Юлия' },
    { id: 19, image: 'https://img.freepik.com/free-photo/portrait-expressive-young-woman-singing_1258-48133.jpg?w=1800&t=st=1705473835~exp=1705474435~hmac=e1d6d28b3d379d443d6d7227d5e59a9cc91dc2a677e3ebef2d9efc926439016c', name: 'Лариса' },
    { id: 20, image: 'https://img.freepik.com/free-photo/party-festive-events-concept-funny-guy-singing-microphone-raising-finger-up-as-reaching-high_1258-163900.jpg?w=2000&t=st=1705475857~exp=1705476457~hmac=27e96b34bdbe0b583029052f257fe95115145b6b44f7dbc865daaa415823b025', name: 'Андрей' },
    { id: 21, image: 'https://img.freepik.com/free-photo/asian-female-casual-t-shirt-posing_1258-36690.jpg?w=1800&t=st=1705475962~exp=1705476562~hmac=91eac2bd5bbc4f18398a92e23566208129d0c2afa3f758793e2b85c855609e60', name: 'Татьяна' },
    { id: 22, image: 'https://img.freepik.com/free-photo/little-girl-learning-how-sing-home-with-microphone_23-2148843843.jpg?w=826&t=st=1705475993~exp=1705476593~hmac=1218519d9223c1f9c20819927d2751d01bdd23b4102dd17cf2bc2ec01d441635', name: 'Айлин' },
    { id: 23, image: 'https://img.freepik.com/free-photo/singer-with-microphone-singing-studio_1303-26953.jpg?w=1800&t=st=1705476025~exp=1705476625~hmac=a16181fed7b8e8b688a67347a2b200a249bbb51dac254e4dfebb632ddbfc5947', name: 'Павел' },
    { id: 24, image: 'https://img.freepik.com/free-photo/girl-headphones-holds-microphone-sings-her-favorite-song-young-woman-fashionable-clothes-with-bright-lipstick-posing_197531-18617.jpg?w=1800&t=st=1705476080~exp=1705476680~hmac=7a4fb23c10b8c4315df4fed1849e733b67ce6863ce96bacfc62af66a93549c23', name: 'Алла' },
    { id: 25, image: 'https://img.freepik.com/free-photo/front-view-musicians-working-studio_23-2150265022.jpg?w=1800&t=st=1705476123~exp=1705476723~hmac=d738d8f290342f2691ad081a0e4d8e2fe51ab67c9b551104d29e2ea50581f727', name: 'Ninety one' },
    { id: 26, image: 'https://img.freepik.com/free-photo/portrait-young-women-2000s-fashion-style-posing-with-camera_23-2149442859.jpg?w=826&t=st=1705476188~exp=1705476788~hmac=340bf04eb17016fb0caeb37a4ab5f4f950b8f1f66c3095b2f1ed7ff2864ea94b', name: 'Блестящие' },
    { id: 27, image: 'https://img.freepik.com/free-photo/playful-stylish-senior-man-spending-happy-time-with-granddaughter-neon_155003-19202.jpg?w=1800&t=st=1705476214~exp=1705476814~hmac=1c5c1577d3179cc3be57a6fcc03a8872bb0629b5a7962dfa06e26ca9c1b29cdb', name: 'Маша и медведь' },
    { id: 28, image: 'https://img.freepik.com/free-photo/teen-music-band-performing-recording-studio_155003-12431.jpg?w=1800&t=st=1705476271~exp=1705476871~hmac=f5a3ca4695c5016e87a18f9e2885b275a6e61922534d662c09874252776c8244', name: 'Горошек' },
    { id: 29, image: 'https://img.freepik.com/free-photo/two-young-men-sat-chair-played-guitar_1150-25052.jpg?w=826&t=st=1705476295~exp=1705476895~hmac=b274fe2eda4259122ac405ac2fdf341f2244687dabe1761b271154592faf5bb8', name: 'Кайрат и Рустем' },
    { id: 30, image: 'https://img.freepik.com/free-photo/cool-guy-with-hat-playing-guitar-gray-background_155003-15354.jpg?w=826&t=st=1705476331~exp=1705476931~hmac=b866c07cd07553c1c11779dee733563713ad7398ebac4954e66d28db7b97b742', name: 'Ержан' },
];

const GuestsGallery = () => {
    return (
        <div className="guests-gallery">
            {guestsData.map((guest) => (
                <div
                    key={guest.id}
                    className="guest-item"
                    style={{
                        top: `${Math.random() * 400}px`, 
                        left: `${Math.random() * 1000}px`,
                    }}
                >
                    <img src={guest.image} alt={guest.name} className="guest-image" />
                    <div className="guest-name">{guest.name}</div>
                </div>
            ))}
        </div>
    );
};

export { GuestsGallery};