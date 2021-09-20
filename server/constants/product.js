export const products = [
    {   //change detailUrl : 'http://......' to 
        // detailUrl: {
        //      imgOne: 'http://......'
        //      imgTwo: 'http://......'
        //      imgThree: 'http://......'
        //      imgFour: 'http://......'
        // }
        // or to an array of images
        // change arUrl: 'http://......' to
        // arModel: {
        //      androidModel: 'http://......'
        //      iosModel: 'http://......'
        // }
        // images & models are to be stored in google drive as per product id
        id: 'product1',
        url: 'https://media.architecturaldigest.com/photos/5b68b771e4ca455528fdf8c5/master/w_1600%2Cc_limit/The%252520Inside%252520Banana%252520Palm%252520Cocktail%252520Ottoman.jpg', 
        detailUrl: 'https://media.architecturaldigest.com/photos/5b68b771e4ca455528fdf8c5/master/w_1600%2Cc_limit/The%252520Inside%252520Banana%252520Palm%252520Cocktail%252520Ottoman.jpg',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Banana Palm cocktail ottoman by The Inside'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'The Cocktail Ottoman is foot stool and coffee table combined. It exudes coziness while remaining every bit sophisticated.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day',
        arUrl: 'https://soham-madhav.github.io/webAR-products/blueSofa.html'
    },
    { 
        id: 'product2',
        url: 'https://theinside.imgix.net/products/wwvaP49iXb4Bi1zkitKQqXRIxsG13KFDvIGjOXtO.jpeg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798', 
        detailUrl: 'https://theinside.imgix.net/products/wwvaP49iXb4Bi1zkitKQqXRIxsG13KFDvIGjOXtO.jpeg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798',
        title: {
            shortTitle: 'Cocktail Chair',
            longTitle: 'Jade Cherry Blossom Cocktail Chair'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This elegant arm chair is reminiscent of mid-century cocktail furnishings when entertaining was everyday.',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more',
        arUrl: 'https://soham-madhav.github.io/webAR-products/asianBed.html'
    },
    { 
        id: 'product3',
        url: 'https://theinside.imgix.net/products/kpxIMiSq2vBLRGgXeJDTFdUCq4kXvJ9M0cBBavmd.jpeg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798', 
        detailUrl: 'https://theinside.imgix.net/products/kpxIMiSq2vBLRGgXeJDTFdUCq4kXvJ9M0cBBavmd.jpeg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798', 
        title: {
            shortTitle: 'X Bench',
            longTitle: 'Coral Zebra X Bench'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'The classic X Bench--perfect in every way and even better as a pair. Fully upholstered and extra comfortable as an additional seat.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day',
        arUrl: 'https://soham-madhav.github.io/webAR-products/redShelf.html'
    },
    { 
        id: 'product4',
        url: 'https://theinside.imgix.net/products/XLpm4BetCFMVtJ38O8NrteCXfEO9dmeyF8uEq90H.jpeg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798', 
        detailUrl: 'https://theinside.imgix.net/products/XLpm4BetCFMVtJ38O8NrteCXfEO9dmeyF8uEq90H.jpeg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798', 
        title: {
            shortTitle: 'Classic Sofa',
            longTitle: 'Classic Sofa with organic elegance of natural malachite stone.',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'Featuring a t-shaped back cushion and caster leg, our Classic Sofa is timeless in style and luxe in comfort. The perfect centerpiece for a modern or traditional living room.',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        arUrl: 'https://soham-madhav.github.io/webAR-products/biggreenchair.html'
    },
    { 
        id: 'product5',
        url: 'https://theinside.imgix.net/products/T7Q5i5CGOFTSim4uEiYvbE22bdllyIPISXhsLpA1.jpg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798',
        detailUrl: 'https://theinside.imgix.net/products/T7Q5i5CGOFTSim4uEiYvbE22bdllyIPISXhsLpA1.jpg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798',
        title: {
            shortTitle: 'CLASSIC WINGBACK BED',
            longTitle: 'Lattice Shibori Classic Wingback Bed'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: 'Our Classic Wingback Bed is all about elegant simplicity. Box spring required.',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more',
        arUrl: 'https://soham-madhav.github.io/webAR-products/grayLsofa.html'
    },
    { 
        id: 'product6',
        url: 'https://theinside.imgix.net/products/8THjKHm3ai2WR5HsAIcurqUp44hBBdpFCxQaf3Lf.jpeg?auto=format',
        detailUrl: 'https://theinside.imgix.net/products/8THjKHm3ai2WR5HsAIcurqUp44hBBdpFCxQaf3Lf.jpeg?auto=format',
        title: {
            shortTitle: 'Mid-Century Accent Chair',
            longTitle: 'Mid-Century Accent Chair with Porcelain Austin Stripe'
        }, 
        price: {
            mrp: 2250,
            cost: 1199,
            discount: '46%'
        },
        description: 'The Mid-Century Accent Chair is the perfect occasional seat for your modern lifestyle. This chair fits effortlessly into any space, and looks great as a pair too.',
        discount: 'Minimum 40% Off', 
        tagline: 'Top Selling',
        arUrl: 'https://soham-madhav.github.io/webAR-products/coconchair.html'
    },
    { 
        id: 'product7',
        url: 'https://theinside.imgix.net/products/hTxiNKszpquAWAiyYiOVXcvKzFeYj9ucoJqEYIvU.jpeg?auto=format',
        detailUrl: 'https://theinside.imgix.net/products/hTxiNKszpquAWAiyYiOVXcvKzFeYj9ucoJqEYIvU.jpeg?auto=format',
        title: {
            shortTitle: 'Mid-Century Bench',
            longTitle: 'Coral LinenMid-Century Bench'
        }, 
        price: {
            mrp: 2990,
            cost: 1199,
            discount: '59%'
        },
        description: 'Clean and minimal, the Mid-Century Bench is a piece that plays well with others.',
        discount: 'Minimum 50% Off', 
        tagline: 'Grab Now!',
        arUrl: 'https://soham-madhav.github.io/webAR-products/bed.html'
    },
    { 
        id: 'product8',
        url: 'https://theinside.imgix.net/products/cOmZCuJ0FIXUu3wh6JmD8c3UIJ25VqMyJ7WPZyh3.jpg?auto=format',
        detailUrl: 'https://theinside.imgix.net/products/cOmZCuJ0FIXUu3wh6JmD8c3UIJ25VqMyJ7WPZyh3.jpg?auto=format',
        title: {
            shortTitle: 'Cubist Nightstand',
            longTitle: 'Grey Cubist Nightstand'
        }, 
        price: {
            mrp: 2990,
            cost: 1199,
            discount: '59%'
        },
        description: 'The perfect marriage of modern and industrial design. The Cubist Nightstand is made from solid acacia wood and set on a powder coated iron frame making it durable and long-lasting. Its two spacious drawers provide ample storage and its sleek cubism-inspired fronts will keep your space modern.',
        discount: 'Minimum 50% Off', 
        tagline: 'Grab Now!',
        arUrl: 'https://soham-madhav.github.io/webAR-products/redShelf.html'
    },
    { 
        id: 'product9',
        url: 'https://theinside.imgix.net/products/dSm1MDj2F0Chyf4TzIsnYG1wvm9Bc76KEUSufrkn.jpg?auto=format',
        detailUrl: 'https://theinside.imgix.net/products/dSm1MDj2F0Chyf4TzIsnYG1wvm9Bc76KEUSufrkn.jpg?auto=format',
        title: {
            shortTitle: 'Campaign Chest',
            longTitle: 'Dark Walnut Campaign Chest'
        }, 
        price: {
            mrp: 2990,
            cost: 1199,
            discount: '59%'
        },
        description: 'This three-drawer campaign chest is a versatile addition with virtually any décor. It is crafted from mango wood solids and wood products.',
        discount: 'Minimum 50% Off', 
        tagline: 'Grab Now!',
        arUrl: 'https://soham-madhav.github.io/webAR-products/redShelf.html'
    }
];