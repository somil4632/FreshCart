import p1_img from './assets/Thumbs up.png'
import p2_img from './assets/Atta.png'
import p3_img from './assets/yellow lays.png'
import p4_img from './assets/garlic powder.png'
import p5_img from './assets/amul gold.png'
import p6_img from './assets/bonn white bread.png'
import p7_img from './assets/britinina bread.png'
import p8_img from './assets/bonn bombay pav.png'
import p9_img from './assets/chocos.png'
import p10_img from './assets/amul moti tonned.png'
import p11_img from './assets/yakuit.webp'
import p12_img from './assets/alpino oats.png'
import p13_img from './assets/doctor choice oats.avif'
import p14_img from './assets/eggoz.png'
import p15_img from './assets/farm made eggs.png'
import p16_img from './assets/corn flakes.png'
import p17_img from './assets/nestle milk.webp'
import p18_img from './assets/yoga bar dark oats.webp'
import p19_img from './assets/white egg.jpg'
import p20_img from './assets/aanand panner.png'
import p21_img from './assets/amul masti curd.png'
import p22_img from './assets/cremyo yogurt.avif'
import p23_img from './assets/amul butter.webp'
import p24_img from './assets/dlecta cheese.webp'
import p25_img from './assets/dlecta cream.webp'
import p26_img from './assets/thai rice.webp'
import p27_img from './assets/wheat noodles.webp'
import p28_img from './assets/rajdhani poha.avif'
import p29_img from './assets/peanut butter.png'
import p30_img from './assets/RiteBite protien bar.png'
import p31_img from './assets/cucumber.png'
import p32_img from './assets/Bobby Muskmelon.png'
import p41_img from './assets/bonn pizza base.png'
import p42_img from './assets/mango.png'
import p43_img from './assets/chcoco chip muffin.png'
import p44_img from './assets/chocolate cone.png'
import p45_img from './assets/soya sauce.png'
import p46_img from './assets/chocolate cookie.png'
import p47_img from './assets/blueberry jamm.png'
import p48_img from './assets/kettle sweet chilly chips.png'



let all_product = [
    {
            id: 1,
            name: "Thumbs Up",
            category: "Drinks",
            image: p1_img,
            new_price: 40,
            old_price: 45,
        },
        {
            id: 2,
            name:"Multigrain Atta",
            category: "dairy products",
            image: p2_img,
            new_price: 350,
            old_price: 370,
        },
        {
            id: 3,
            name: "Yellow lays",
            category: "snack",
            image: p3_img,
            new_price: 15,
            old_price: 20,
        },
          {
                id: 4,
                name: "Orikia Garlic Powder",
                category: "dairy products",
                image: p4_img,
                new_price: 260,
                old_price: 300,
            },
        {
        id: 5,
        name: "Amul Gold Milk",
        category: "dairy products",
        image: p5_img,
        new_price: 65,
        old_price: 70,
    },

    {id:6, name: "Bonn White Bread" , category: "dairy products" , image: p6_img , new_price: 45, old_price: 60  },
    {id:7, name: "Britinna Fruit Bread", category: "dairy products", image: p7_img, new_price: 20, old_price: 22 },
    {id:8, name: "Bombay Pav", category: "snack", image: p8_img, new_price: 40, old_price: 35 },
    {id:9, name: "Chocos", category: "snack", image: p9_img, new_price: 200, old_price: 180 },
    {id:10, name: "Amul Moti Tonned Milk", category: "dairy products", image: p10_img, new_price: 72, old_price: 80 },
    {id:11, name: "Yakiut", category: "drink", image: p11_img, new_price: 30, old_price: 35 },
    {id:12, name: "Alpino Oats", category: "snack", image: p12_img, new_price: 90, old_price: 120 },
    {id:13, name: "Doctor Chouce Oats", category: "snack", image: p13_img, new_price: 300, old_price: 320 },
    {id:14, name: "Eggoz", category: "dairy products", image: p14_img, new_price: 180, old_price: 150 },
    {id:15, name: "Farm Made Egg", category: "dairy products", image: p15_img, new_price: 420, old_price: 380 },
    {id:16, name: "Corn Flakes", category: "snack", image: p16_img, new_price: 280, old_price: 200 },
    {id:17, name: "Nestle Milk", category: "dairy products", image: p17_img, new_price: 190, old_price: 166 },
    {id:18, name: "Yoga Bar Dark Oats", category: "snack", image: p18_img, new_price: 150, old_price: 110 },
    {id:19, name: "White Egg", category: "dairy products", image: p19_img, new_price: 60, old_price: 40 },
    {id:20, name: "Aanand Panner", category: "dairy products", image: p20_img, new_price: 300, old_price: 250 },
    {id:21, name: "Amul Masti Curd", category: "dairy products", image: p21_img, new_price: 80, old_price: 70 },
    {id:22, name: "Cremyo Yogurt", category: "dairy products", image: p22_img, new_price: 90, old_price: 65 },
    {id:23, name: "Amul Butter", category: "dairy products", image: p23_img, new_price: 120, old_price: 100 },
    {id:24, name: "Dlecta cheese", category: "dairy products", image: p24_img, new_price: 180, old_price: 150 },
    {id:25, name: "Dlecta Cream", category: "dairy products", image: p25_img, new_price: 220, old_price: 1902 },
    {id:26, name: "Thai Rice", category: "snack", image: p26_img, new_price: 80, old_price: 62 },
    {id:27, name: "Wheat Noodles", category: "snack", image: p27_img, new_price: 100, old_price: 90 },
    {id:28, name: "Rajdhaini Poha", category: "snack", image: p28_img, new_price: 70, old_price: 62 },
    {id:29, name: "Peanut Butter", category: "snack", image: p29_img, new_price: 180, old_price: 160 },
    {id:30, name: "RiteBite Bar", category: "snack", image: p30_img, new_price: 50, old_price: 45 },
    {id:31, name: "Cucumber", category: "vegetables", image: p31_img, new_price: 40, old_price: 60 },
    {id:32, name: "Bobby Muskmelon", category: "vegetables", image: p32_img, new_price: 40, old_price: 60 },
   { id: 41, name: "Bonn Pizza Base", category: "dairy products", image: p41_img, new_price: 50, old_price: 80},
           { id: 42, name: "Pure Mango", category: "vegetables", image: p42_img, new_price: 120, old_price: 150},
           { id: 43, name: "Choco Chip Muffin", category: "snack", image: p43_img, new_price: 180, old_price: 220},
           { id: 44, name: "Chocolate Ice Cream Cone", category: "snack ", image: p44_img, new_price: 90, old_price: 110},
           { id: 45, name: "Ching's Soya Sauce", category: "snack", image: p45_img, new_price: 250, old_price: 290},
           { id: 46, name: "Amul Chocolate Cookie", category: "snack", image: p46_img, new_price: 110, old_price: 135},
           { id: 47, name: "Darbo Blueberry Jam", category: "snack", image: p47_img, new_price: 250, old_price: 300},
           { id: 48, name: "Kettle Sweet Chilly Chips", category: "snack", image: p48_img, new_price: 140, old_price: 180},
]
export default all_product;