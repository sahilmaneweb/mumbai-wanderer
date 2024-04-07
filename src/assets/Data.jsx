import place1 from './pic-1.jpg';
import place2 from './pic-2.jpeg';
import place3 from './pic-3.jpeg';
import place4 from './pic-4.jpeg';
import place5 from './pic-5.jpeg';
import place6 from './pic-6.jpeg';
import place7 from './pic-7.jpeg';
import place8 from './pic-8.jpeg';
import place9 from './pic-9.jpeg';
import place10 from './pic-10.jpeg';
import place11 from './pic-11.jpeg';
import place12 from './pic-12.jpeg';

const data =[
    {
        id : 1,
        name : "Gateway of India",
        image : place1,
        tags : ['Heritage','History'],
        paragraph: "The Gateway of India, a majestic arch monument on Mumbai's waterfront, commemorates the 1911 visit of King George V and Queen Mary. Completed in 1924, the gateway's design blends Islamic styles with 16th-century Gujarati architecture. Though built to welcome the British royals, the monument ironically served as a symbolic exit point for the last British troops leaving India in 1947. Today, the Gateway of India is a popular tourist destination offering stunning views of the Arabian Sea and a glimpse into Mumbai's colonial past.",
        map : <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2125429639514!2d72.8346543!3d18.9219841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0xc70a25a7209c733c!2sGateway%20Of%20India%20Mumbai!5e0!3m2!1sen!2sin!4v1711875818953!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 2,
        name : "Marine Lines",
        image : place2,
        tags : ['Beauty','Sea'],
        paragraph : "Marine Lines is a posh neighborhood in South Mumbai, known for its stunning views of the Arabian Sea. Its name comes from the British-built Marine Battalion Lines, once a military base. Today, the area offers a mix of luxury high-rises, charming bungalows, and bustling commercial spaces. Marine Lines is a popular spot for entertainment, thanks to iconic landmarks like the Wankhede Stadium and art deco cinemas like Liberty. Foodies flock to Kyani & Co., an old-school Iranian cafe, for a taste of tradition. With its seaside beauty and vibrant energy, Marine Lines offers a unique slice of Mumbai life.",
        map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15095.010313292833!2d72.81488468770928!3d18.94234271575512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1de283029ed%3A0x5da3ab75b442c9b!2sMarine%20Lines%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711876188414!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 3,
        name : "Mahalaxmi Temple",
        image : place3,
        tags : ['Heritage','History','Religious Site'],
        paragraph : "The Mahalaxmi Temple is one of Mumbai's most renowned temples, built in 1831 by a Hindu merchant. Dedicated to Goddess Mahalakshmi, the central deity of Devi Mahatmyam, the temple also houses idols of Mahasaraswati and Mahakali.  Located near the seashore on Bhulabhai Desai Road, the temple complex features a tall dhwajstambh (pillar) and a beautifully carved deepmala (lamp holder).  It's a popular pilgrimage site, especially during Navaratri when the rising sun illuminates the deities for a few minutes.",
        map:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120734.74418203416!2d72.66236454335939!3d18.977340500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6ce5383ed1%3A0xe20c7a512463dd62!2sShree%20Mahalakshmi%20Temple!5e0!3m2!1sen!2sin!4v1711876130625!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 4,
        name : "Siddhivinayak Temple",
        image : place4,
        tags : ['Heritage','History','Religious Site'],
        paragraph : `The Siddhivinayak Temple, located in Mumbai's Prabhadevi neighborhood, is a highly revered Hindu temple dedicated to Lord Ganesha. Built in 1801, the temple attracts devotees from all over India seeking blessings from the "Ganesha who grants wishes." The main idol, a black stone statue of Ganesha, is housed in a small mandap with intricately carved wooden doors depicting the eight manifestations of Ganesha in Maharashtra. The temple's exterior boasts a unique pink hue and a dome that lights up in various colors at night.`,
        map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60380.043000930484!2d72.78398443824626!3d18.942337883380777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfe9788ad9e3%3A0x32ef6699b86e8e85!2sShri%20Siddhivinayak%20Temple!5e0!3m2!1sen!2sin!4v1711876234121!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 5,
        name : "Hanging Garden",
        image : place5,
        tags : ['Beauty','Nature'],
        paragraph : "The Hanging Gardens of Mumbai, also known as Pherozeshah Mehta Gardens, are a terraced wonder perched atop Malabar Hill. Offering stunning sunset views of the Arabian Sea, the gardens are a popular spot for relaxation and scenic beauty. Visitors can stroll along pathways lined with meticulously sculpted animal-shaped hedges and vibrant flowerbeds. A charming flower clock adds to the appeal of this verdant escape in the heart of the bustling city.",
        map:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4310878972615!2d72.80241167436837!3d18.956559782223632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce09e53e749f%3A0x94a70633cf948b9a!2sHanging%20Gardens!5e0!3m2!1sen!2sin!4v1711876265434!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 6,
        name : "Haji Ali Dargah",
        image : place6,
        tags : ['Heritage','History','Religious Site'],
        paragraph : "The Haji Ali Dargah, a beautiful landmark in the heart of Mumbai, is both a mosque and a tomb. Built in the 15th century, the dargah enshrines the remains of Pir Haji Ali Shah Bukhari, a revered Sufi saint. Located on a small island off the Worli coast, the white domes and minarets rise majestically above the Arabian Sea.  The dargah is a significant pilgrimage site for Muslims, but people of all faiths are welcome to visit this architectural gem.",
        map:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.836489935852!2d72.80632167436912!3d18.982827282202692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7e930d42e3%3A0xd5e05dc7ab078d05!2sHaji%20Ali%20Dargah!5e0!3m2!1sen!2sin!4v1711876303595!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 7,
        name : "Mount Mary Church",
        image : place7,
        tags : ['Heritage','History','Religious Site'],
        paragraph : "Mount Mary Church, also known as the Basilica of Our Lady of the Mount, is a revered Catholic shrine perched atop a Bandra hillock. The statue of Virgin Mary enshrined within, dating back to the 16th century, draws devotees of all faiths seeking solace and blessings. This iconic landmark boasts a beautiful semi-Gothic structure, offering panoramic Arabian Sea views. The annual Bandra Fair, celebrating the Virgin Mary's birth in September, sees a surge in pilgrims and festivities.",
        map:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.390566896304!2d72.81796858885497!3d19.0465581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9409a609d75%3A0xd0a71c45e7557bfa!2sBasilica%20of%20Our%20Lady%20of%20the%20Mount!5e0!3m2!1sen!2sin!4v1711876342713!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 8,
        name : "Water Kingdom",
        image : place8,
        tags : ['Adventure','Water Park'],
        paragraph : "Water Kingdom is Asia's largest themed water park, located right here in Mumbai. This exciting escape offers over 70 thrilling rides and attractions for all ages. From the world's largest wave pool to relaxing lazy rivers and high-speed slides, there's something for everyone to enjoy. With lush greenery and a jungle theme, Water Kingdom provides a cool and refreshing place to beat the Mumbai heat and create lasting memories with friends and family.",
        map : <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1684404828306!2d72.80495077437669!3d19.231489482005294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b158c07de9a1%3A0x32baf35dc9c8af10!2sWater%20Kingdom!5e0!3m2!1sen!2sin!4v1711876385476!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 9,
        name : "Mumba Devi Temple",
        image : place9,
        tags : ['Heritage','History','Religious Site'],
        paragraph : "The Mumba Devi Temple, located in the heart of Mumbai's Bhuleshwar area, is an ancient temple dedicated to the city's patron goddess, Mumbadevi. Enshrined within as a black stone idol, Mumbadevi is considered a local incarnation of the Hindu Devi, the Mother Goddess.  The temple itself is believed to be centuries old, though the current structure dates back to the 18th century. A popular pilgrimage site and daily visited by throngs of worshippers, the Mumba Devi Temple is also a significant landmark for tourists seeking a glimpse into Mumbai's cultural and religious heritage.",
        map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241506.2618083521!2d72.54236718671875!3d18.951950600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfecc763321b%3A0x9853129a582225b2!2sShree%20Mumbadevi%20Temple!5e0!3m2!1sen!2sin!4v1711876443126!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 10,
        name : "Juhu Beach",
        image : place10,
        tags : ['Beauty','Sea'],
        paragraph : "Juhu Beach, a sprawling six-kilometer stretch along Mumbai's western coast, is a vibrant hub of activity. From cricket matches on the sand to vendors selling delicious street food like bhelpuri and pani puri, the beach pulsates with life. Visitors flock here to relax on the shore, enjoy the cool sea breeze, and witness the stunning sunsets. Juhu Beach is a microcosm of Mumbai itself, offering a glimpse into the city's energetic spirit.",
        map : <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30161.1655688664!2d72.80894421622169!3d19.10126325491371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf95d4ba07%3A0x35047c9c36b6cea1!2sJuhu%2C%20Mumbai%2C%20Maharashtra%20400049!5e0!3m2!1sen!2sin!4v1711876477640!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 11,
        name : "Madh Fort",
        image : place11,
        tags : ['Heritage','History'],
        paragraph : "Madh Fort, also known as Versova Fort, is a small 17th century watchtower located on Madh Island in northern Mumbai. Built by the Portuguese, it offers scenic views of the coastline and was captured by the Marathas in the 18th century. Though the fort's interior is in ruins, the outer facade remains intact. Today, it's under the control of the Indian Air Force and requires permission to enter. Despite its limited accessibility, Madh Fort's historical significance and picturesque location make it a noteworthy landmark.",
        map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.43853733911!2d72.79219247437359!3d19.13227188208393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b5fafa0d4c9d%3A0xb0b1a1ed6e265e54!2sMadh%20Fort!5e0!3m2!1sen!2sin!4v1711876514314!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    },
    {
        id : 12,
        name : "Rani Bagh",
        image : place12,
        tags : ['Heritage','History','Adventure'],
        paragraph : "Rani Baug, also known as Veermata Jijabai Bhonsale Udyan, is a Mumbai landmark. Established in 1861, it's the city's oldest public garden. Originally named Victoria Gardens for Queen Victoria, it was later renamed for Jijabai, mother of the Maratha warrior Chhatrapati Shivaji. This 60-acre space offers a green escape in the bustling city. It houses a zoo with various animals, a museum, and a variety of plant life.",
        map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.9153719727456!2d72.832947524369!3d18.979344532205435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf170daaccc3%3A0x1b06578a4126ffa7!2sRanichi%20Baug!5e0!3m2!1sen!2sin!4v1711876555567!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
    }
];

export default data;