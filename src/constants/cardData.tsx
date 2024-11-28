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