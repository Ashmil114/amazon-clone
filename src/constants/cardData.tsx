export type dataType =
  | {
      type: "multiple";
      title: string;
      images: {
        url: string;
        title: string;
      }[];
      footer: string;
    }
  | {
      type: "single";
      title: string;
      url: string;
      footer: string;
    };

export const data: dataType[] = [
  {
    title: "Score Black Friday Week deals",
    type: "multiple",
    images: [
      {
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_772_BFW_CM_DQC_AmazonBasics_3D_1x_v3._SY116_CB541717183_.jpg",
        title: "Amazon Basics & more",
      },
      {
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_768_BFW_CM_DQC_HomeImprovement_2D_1x_v3._SY116_CB541717183_.jpg",
        title: "Home improvement",
      },
      {
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_770_BFW_CM_DQC_Phone_Accessories_3B_1x_v3._SY116_CB541717183_.jpg",
        title: "Cell phones & accessories",
      },
      {
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_769_BFW_CM_DQC_Furniture_3A_1x_v3._SY116_CB541717183_.jpg",
        title: "Furniture",
      },
    ],
    footer: "Shop all deals",
  },
  {
    title: "Refresh your space",
    type: "multiple",
    images: [
      {
        url: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg",
        title: "Dining",
      },
      {
        url: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
        title: "Home",
      },
      {
        url: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
        title: "Kitchen",
      },
      {
        url: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
        title: "Health and Beauty",
      },
    ],
    footer: "See more",
  },

  {
    title: "Toys under $25",
    type: "single",
    url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg",
    footer: "Shop now",
  },
  {
    type: "single",
    title: "Shop Black Friday deals",
    url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BlackFriday24/Fuji_Black_Friday_Dashboard_card_1X_EN._SY304_CB542042483_.jpg",
    footer: "Shop Black Friday deals",
  },
  {
    type: "multiple",
    title: "Must-see Black Friday Week deals",
    images: [
      {
        title: "Home",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_761_BFW_CM_DQC_Home_1A_1x_v3._SY116_CB541717183_.jpg",
      },
      {
        title: "Sports & outdoors",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_767_BFW_CM_DQC_Sports_Outdoors_2C_1x_v3._SY116_CB541717183_.jpg",
      },
      {
        title: "Beauty",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_764_BFW_CM_DQC_Beauty_1D_1x_v3._SY116_CB541717183_.jpg",
      },
      {
        title: "Headphones",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_766_BFW_CM_DQC_Headphones_2B_1x_v3._SY116_CB541717183_.jpg",
      },
    ],
    footer: "Shop all deals",
  },
  {
    type: "multiple",
    title: "Black Friday Week deals are here",
    images: [
      {
        title: "Tech & gaming",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_763_BFW_CM_DQC_ComputerVideoGames_1C_1x_v3._SY116_CB541717183_.jpg",
      },
      {
        title: "Toys & games",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_771_BFW_CM_DQC_Deals_Toys_Games_3C_1x_v3._SY116_CB541717183_.jpg",
      },
      {
        title: "Kitchen",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_765_BFW_CM_DQC_Kitchen_2A_1x_v3._SY116_CB541717183_.jpg",
      },
      {
        title: "Fashion",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/BFCM/GW/Quad_Cards/BFCM_2024_762_BFW_CM_DQC_Fashion_1B_1x_v3._SY116_CB541717183_.jpg",
      },
    ],
    footer: "Shop all deals",
  },
  {
    type: "single",
    title: "Get your game on",
    url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg",
    footer: "Shop gaming",
  },
  {
    type: "multiple",
    title: "Easy updates for elevated spaces",
    images: [
      {
        title: "Baskets & hampers",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2023/Q2/Homepage/2023Q2_GW_EE_LaundryLuxe_D_Quad_186x116._SY116_CB594237035_.jpg",
      },
      {
        title: "Hardware",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2023/Q2/Homepage/2023Q2_GW_EE_Kitchen_D_Quad_186x116._SY116_CB594237035_.jpg",
      },
      {
        title: "Accent furniture",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2023/Q2/Homepage/2023Q2_GW_EE_AccentFurniture_D_Quad_186x116._SY116_CB594237035_.jpg",
      },
      {
        title: "Wallpaper & paint",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2023/Q2/Homepage/2023Q2_GW_EE_Hallway_D_Quad_186x116._SY116_CB594237035_.jpg",
      },
    ],
    footer: "Shop home products",
  },
];

export const data2: dataType[] = [
  {
    type: "multiple",
    title: "Most-loved travel essentials",
    images: [
      {
        title: "Backpacks",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Backpack_1x._SY116_CB566100767_.jpg",
      },
      {
        title: "Suitcases",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/TravelBag_1x._SY116_CB566100767_.jpg",
      },
      {
        title: "Accessories",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Accessories_1x._SY116_CB566100767_.jpg",
      },
      {
        title: "Handbags",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Handbags_1x._SY116_CB566100767_.jpg",
      },
    ],
    footer: "Discover more",
  },
  {
    type: "multiple",
    title: "Gaming merchandise",
    images: [
      {
        title: "Apparel",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg",
      },
      {
        title: "Hats",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg",
      },
      {
        title: "Action figures",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg",
      },
      {
        title: "Mugs",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg",
      },
    ],
    footer: "See more",
  },
  {
    type: "multiple",
    title: "Fantastic Finds for Home",
    images: [
      {
        title: "Kitchen",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Kitchen._SY116_CB558654384_.jpg",
      },
      {
        title: "Home Decor",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Home_decor._SY116_CB558654384_.jpg",
      },
      {
        title: "Dining",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Dining._SY116_CB558654384_.jpg",
      },
      {
        title: "Smart Home",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Smart_home._SY116_CB558654384_.jpg",
      },
    ],
    footer: "See more",
  },
  {
    type: "multiple",
    title: "Upgrade on Tech",
    images: [
      {
        title: "PC",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/PC_186x116._SY116_CB561026793_.jpg",
      },
      {
        title: "Wireless",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/Wireless_186x116._SY116_CB561026793_.jpg",
      },
      {
        title: "Software",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2024/img/Consumer_Electronics/XCM_CUTTLE_1708672_3706051_186x116_1X_en_US._SY116_CB561559219_.jpg",
      },
      {
        title: "Home entertainment",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/HomeEntertainment_186x116._SY116_CB561026793_.jpg",
      },
    ],
    footer: "Shop all tech  deals",
  },
];

export const data3: dataType[] = [
  {
    type: "multiple",
    title: "Upgrade on Tech",
    images: [
      {
        title: "PC",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/PC_186x116._SY116_CB561026793_.jpg",
      },
      {
        title: "Wireless",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/Wireless_186x116._SY116_CB561026793_.jpg",
      },
      {
        title: "Software",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2024/img/Consumer_Electronics/XCM_CUTTLE_1708672_3706051_186x116_1X_en_US._SY116_CB561559219_.jpg",
      },
      {
        title: "Home entertainment",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/HomeEntertainment_186x116._SY116_CB561026793_.jpg",
      },
    ],
    footer: "Shop all tech deals",
  },
  {
    type: "single",
    title: "Gaming Corner",
    url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/Gaming_zone_1x._SY304_CB540253513_.jpg",
    footer: "For all your gaming needs",
  },
  {
    type: "multiple",
    title: "Home & Kitchen essentials",
    images: [
      {
        title: "Coffee Machines",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/Coffee_Machine._SY116_CB545166645_.jpg",
      },
      {
        title: "Multi-Cookers",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/Multi-Cooker_1x._SY116_CB545166645_.jpg",
      },
      {
        title: "Vaccum Cleaner",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/VaccumCleaner_1x._SY116_CB545166645_.jpg",
      },
      {
        title: "Iron and Steamer",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/Iron_1x._SY116_CB545166645_.jpg",
      },
    ],
    footer: "Shop now",
  },
  {
    type: "multiple",
    title: "Toys for all ages",
    images: [
      {
        title: "Rider on's",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/RideOn._SY116_CB545223412_.jpg",
      },
      {
        title: "Building & construction",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/BuildingConstruction._SY116_CB545223412_.jpg",
      },
      {
        title: "Dolls & Doll Houses",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/DollDoll_House._SY116_CB545223412_.jpg",
      },
      {
        title: "Swimming pools",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/SwimmingPool._SY116_CB545223412_.jpg",
      },
    ],
    footer: "See all",
  },
];

export const data4: dataType[] = [
  {
    type: "multiple",
    title: "Vacation getaway",
    images: [
      {
        title: "Handbags",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bag_1X._SY116_CB563194051_.jpg",
      },
      {
        title: "Swimwear",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Swim_1X._SY116_CB563194051_.jpg",
      },
      {
        title: "Skincare",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Beauty_1X._SY116_CB563194051_.jpg",
      },
      {
        title: "Sandals",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Shoes_1X._SY116_CB563194051_.jpg",
      },
    ],
    footer: "Shop More",
  },
  {
    type: "multiple",
    title: "Discover these beauty products for you",
    images: [
      {
        title: "Skincare",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Skincare_1x._SY116_CB563150139_.jpg",
      },
      {
        title: "Makeup",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Makeup_1x._SY116_CB563150139_.jpg",
      },
      {
        title: "Nails",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Nail_1x._SY116_CB563150139_.jpg",
      },
      {
        title: "Fragrances",
        url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Fragrance_1x._SY116_CB563150139_.jpg",
      },
    ],
    footer: "Explore all in Beauty",
  },
  {
    type: "single",
    title: "Transformers toys & more",
    url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/TransformersCat_1x._SY304_CB540253513_.jpg",
    footer: "Shop now",
  },
  {
    type: "single",
    title: "Personal Care under $25",
    url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v10._SY304_CB573698005_.jpg",
    footer: "See more",
  },
];
