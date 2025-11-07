"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsToInsert = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.productsToInsert = [
    {
        title: 'AIR FORCE 1 LUXE UNISEX Sneakers',
        handle: 'air-force-1-luxe-unisex-sneakers',
        subtitle: ' foam midsole with Air-Sole unit',
        description: 'The iconic Air Force 1 with premium materials and enhanced comfort. Features a full-grain leather upper',
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/AIR-FORCE-1-LUXE-UNISEX-1 -01JRYW1QY88H8T98HNPZF7NJTF.png',
        options: [
            {
                title: 'Color',
                values: ['White']
            }
        ],
        variants: [
            {
                title: 'White',
                allow_backorder: false,
                manage_inventory: true,
                prices: [
                    {
                        amount: 99,
                        currency_code: 'eur'
                    }
                ],
                options: {
                    Color: 'White'
                }
            }
        ],
        discountable: true,
        images: [
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/AIR-FORCE-1-LUXE-UNISEX-1 -01JRYW1QY88H8T98HNPZF7NJTF.png'
            },
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/AIR-FORCE-1-LUXE-UNISEX-2 -01JRYW1QY96TV72HCK602R8ASK.png'
            }
        ]
    },
    {
        title: 'New Runner Flag Sneakers',
        handle: 'new-runner-flag',
        subtitle: '',
        description: 'Heritage-inspired running silhouette featuring distinctive flag details and national color accents. Combines lightweight cushioning, breathable materials, and nostalgic design elements for a unique statement piece with exceptional comfort.',
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/New-Runner-Flag-1-01JRYW0TG1KQ5T688H810M9BE3.png',
        discountable: true,
        variants: [
            {
                title: 'Brown / 41 / New',
                allow_backorder: false,
                manage_inventory: true,
                options: { Color: 'Brown', Size: '41', Condition: 'New' },
                variant_rank: 0,
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 59
                    }
                ]
            },
            {
                title: 'Brown / 40 / New',
                allow_backorder: false,
                manage_inventory: true,
                options: { Color: 'Brown', Size: '40', Condition: 'New' },
                variant_rank: 1,
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 59
                    }
                ]
            },
            {
                title: 'Brown / 39 / New',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 2,
                options: { Color: 'Brown', Size: '39', Condition: 'New' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 59
                    }
                ]
            },
            {
                title: 'Brown / 38 / New',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 3,
                options: { Color: 'Brown', Size: '38', Condition: 'New' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 59
                    }
                ]
            },
            {
                title: 'Brown / 41 / Used',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 4,
                options: { Color: 'Brown', Size: '41', Condition: 'Used' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 39
                    }
                ]
            },
            {
                title: 'Brown / 40 / Used',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 5,
                options: { Color: 'Brown', Size: '40', Condition: 'Used' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 39
                    }
                ]
            },
            {
                title: 'Brown / 39 / Used',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 5,
                options: { Color: 'Brown', Size: '39', Condition: 'Used' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 39
                    }
                ]
            },
            {
                title: 'Brown / 38 / Used',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 5,
                options: { Color: 'Brown', Size: '38', Condition: 'Used' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 39
                    }
                ]
            }
        ],
        options: [
            {
                title: 'Size',
                values: ['38', '39', '40', '41']
            },
            {
                title: 'Color',
                values: ['Brown']
            },
            {
                title: 'Condition',
                values: ['New', 'Used']
            }
        ],
        images: [
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/New-Runner-Flag-1-01JRYW0TG1KQ5T688H810M9BE3.png'
            }
        ]
    },
    {
        title: 'CLASSIC CUPSOLE Sneakers',
        handle: 'classic-cupsole-sneakers',
        subtitle: '',
        description: 'Retro court style reimagined for today',
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/CLASSIC-CUPSOLE-1 -01JRYVZQBJ85B2MPZ3Q0KTBYGA.png',
        discountable: true,
        variants: [
            {
                title: 'White / Used / 41',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 0,
                options: {
                    Color: 'White',
                    Size: '41',
                    Condition: 'Used'
                },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 59
                    }
                ]
            },
            {
                title: 'Black / Used / 41',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 1,
                options: {
                    Color: 'Black',
                    Size: '41',
                    Condition: 'Used'
                },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 69
                    }
                ]
            }
        ],
        options: [
            {
                title: 'Size',
                values: ['40', '41']
            },
            {
                title: 'Color',
                values: ['White', 'Black']
            },
            {
                title: 'Condition',
                values: ['New', 'Used']
            }
        ],
        images: [
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/CLASSIC-CUPSOLE-1 -01JRYVZQBJ85B2MPZ3Q0KTBYGA.png'
            }
        ]
    },
    {
        title: 'STORM 96 2K LITE Sneakers',
        handle: 'storm-96-2k-lite',
        subtitle: '',
        description: "Retro-futuristic design combining '90s athletic aesthetics with contemporary technology. Features sculpted, lightweight midsole, mixed material upper, and unique lacing system for stand-out street style with all-day wearability.",
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/STORM-96-2K-LITE-1-01JRYVZ58MYDM626NAX1E9ZDDQ.png',
        discountable: true,
        variants: [
            {
                title: 'Black / 42',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 0,
                options: {
                    Color: 'Black',
                    Size: '42'
                },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 79
                    }
                ]
            },
            {
                title: 'Black / 41',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 1,
                options: {
                    Color: 'Black',
                    Size: '41'
                },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 79
                    }
                ]
            }
        ],
        options: [
            { title: 'Size', values: ['41', '42'] },
            { title: 'Color', values: ['Black'] }
        ],
        images: [
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/STORM-96-2K-LITE-1-01JRYVZ58MYDM626NAX1E9ZDDQ.png'
            }
        ]
    },
    {
        title: 'U574 UNISEX Sneakers',
        handle: 'u574-unisex-sneakers',
        subtitle: '',
        description: 'Featuring the classic 574 silhouette with updated materials and cushioning. Includes ENCAP midsole technology for support and maximum durability, plus a suede/mesh upper for breathability and style.',
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/U574-UNISEX-1-01JRYVYJVR8ZWQF87V8NS2HHX9.png',
        discountable: true,
        variants: [
            {
                title: '37 / Orange / New',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 0,
                options: {
                    Color: 'Orange',
                    Size: '37',
                    Condition: 'New'
                },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 87
                    }
                ]
            }
        ],
        options: [
            { title: 'Color', values: ['Orange'] },
            { title: 'Size', values: ['37'] },
            { title: 'Condition', values: ['Used', 'New'] }
        ],
        images: [
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/U574-UNISEX-1-01JRYVYJVR8ZWQF87V8NS2HHX9.png'
            },
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/U574-UNISEX-2-01JRYVYJVTX6NRM2CCEPR6T994.png'
            }
        ]
    },
    {
        title: 'Air VaporMax 2023 Flyknit Triple Black Sneakers',
        handle: 'air-vapormax-2023-flyknit-triple-black-sneakers',
        subtitle: '',
        description: 'Revolutionary cushioning with VaporMax Air technology and lightweight Flyknit construction. The unique sole eliminates excess weight, while the sleek triple black colorway offers versatile styling options.',
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/Air-VaporMax-2023-Flyknit-Triple-Black-1 -01JRYVXVMV7D60YFGHGCY7FD1K.png',
        discountable: true,
        variants: [
            {
                title: 'Black / 41 / New',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 0,
                options: { Color: 'Black', Size: '41', Condition: 'New' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 99
                    }
                ]
            }
        ],
        options: [
            { title: 'Color', values: ['Black'] },
            { title: 'Size', values: ['41'] },
            { title: 'Condition', values: ['Used', 'New'] }
        ],
        images: [
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/Air-VaporMax-2023-Flyknit-Triple-Black-1 -01JRYVXVMV7D60YFGHGCY7FD1K.png'
            },
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/Air-VaporMax-2023-Flyknit-Triple-Black-2 -01JRYVXVMZS1REFQNM6WKJWDPG.png'
            }
        ]
    },
    {
        title: 'Reelwind Sneakers',
        handle: 'reelwind-sneakers',
        subtitle: '',
        description: 'Performance-meets-lifestyle design with responsive cushioning and flexible support. Made with recycled materials, featuring a breathable upper and durable rubber outsole for all-day comfort.',
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/Reelwind-1-01JRYVWVF8XVHG23RXMNAY2EFJ.png',
        discountable: true,
        variants: [
            {
                title: 'Red / 38',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 0,
                options: { Color: 'Red', Size: '38' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 59
                    }
                ]
            }
        ],
        options: [
            {
                title: 'Size',
                values: ['38']
            },
            {
                title: 'Color',
                values: ['Red']
            }
        ],
        images: [
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/Reelwind-1-01JRYVWVF8XVHG23RXMNAY2EFJ.png'
            }
        ]
    },
    {
        title: 'Cool Balance U9060EEE Sneakers',
        handle: 'u9060eee',
        subtitle: '',
        description: 'Modern interpretation of the classic running silhouette with exaggerated proportions and enhanced cushioning. Features a combination of premium suede and mesh with an angular, sculptural midsole design for contemporary street style.',
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/U9060EEE-1-01JRYVW83SET4B4ZYZVSK39FDF.png',
        discountable: true,
        variants: [
            {
                title: 'Gray / Used',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 1,
                options: {
                    Color: 'Gray',
                    Condition: 'Used'
                },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 39
                    }
                ]
            },
            {
                title: 'Gray / New',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 0,
                options: { Color: 'Gray', Condition: 'New' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 79
                    }
                ]
            }
        ],
        options: [
            {
                title: 'Condition',
                values: ['New', 'Used']
            },
            {
                title: 'Color',
                values: ['Gray']
            }
        ],
        images: [
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/U9060EEE-1-01JRYVW83SET4B4ZYZVSK39FDF.png'
            }
        ]
    },
    {
        title: 'Brown Sneakers',
        handle: 'brown-sneakers',
        subtitle: 'Cosy',
        description: 'Classic brown sneakers with leather and suede upper, and a durable rubber sole. Timeless and versatile.',
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/u2735941527_Product_photography_of_brown_Adidas_samba_Sneaker_80c8f007-dcfa-4e5b-b8ac-bf88851a7376_0-01JRWZZ5V9M2ZC0K0WSC96E4AZ.png',
        discountable: true,
        variants: [
            {
                title: 'Brown / New',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 0,
                options: {
                    Color: 'Brown',
                    Condition: 'New'
                },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 89
                    }
                ]
            }
        ],
        options: [
            { title: 'Color', values: ['Brown'] },
            { title: 'Condition', values: ['New'] }
        ],
        images: [
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/u2735941527_Product_photography_of_brown_Adidas_samba_Sneaker_80c8f007-dcfa-4e5b-b8ac-bf88851a7376_0-01JRWZZ5V9M2ZC0K0WSC96E4AZ.png'
            }
        ]
    },
    {
        title: 'Green high-tops',
        handle: 'green-high-tops',
        subtitle: '',
        description: 'Bold green high-tops with classic canvas upper and rubber sole. A timeless streetwear staple.',
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/u2735941527_Product_photography_of_green_converse_Sneakers_no_1ef027ea-f31f-4996-b419-63f85716a277_1-01JRWZYCWYAD4QVMRRTFVWHHDK.png',
        discountable: true,
        variants: [
            {
                title: 'Green / 40 / New',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 0,
                options: { Color: 'Green', Size: '40', Condition: 'New' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 99
                    }
                ]
            }
        ],
        options: [
            { title: 'Color', values: ['Green'] },
            { title: 'Size', values: ['40'] },
            { title: 'Condition', values: ['Used', 'New'] }
        ],
        images: [
            {
                url: 'https://mercur-connect.s3.eu-central-1.amazonaws.com/u2735941527_Product_photography_of_green_converse_Sneakers_no_1ef027ea-f31f-4996-b419-63f85716a277_1-01JRWZYCWYAD4QVMRRTFVWHHDK.png'
            }
        ]
    },
    {
        title: 'High Sneakers',
        handle: 'high-sneakers',
        subtitle: 'Purple, beige, and orange',
        description: 'High Sneakers in a bold mix of purple, beige, and orange. Premium materials, iconic silhouette, and standout color blocking.',
        is_giftcard: false,
        status: utils_1.ProductStatus.PUBLISHED,
        thumbnail: 'https://i.imgur.com/zIcEOTS.png',
        discountable: true,
        variants: [
            {
                title: 'High Sneakers',
                allow_backorder: false,
                manage_inventory: true,
                variant_rank: 0,
                options: { Color: 'Purple' },
                prices: [
                    {
                        currency_code: 'eur',
                        amount: 119
                    }
                ]
            }
        ],
        options: [
            {
                title: 'Color',
                values: ['Purple']
            }
        ],
        images: [
            {
                url: 'https://i.imgur.com/zIcEOTS.png'
            }
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZC1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zY3JpcHRzL3NlZWQvc2VlZC1wcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBeUQ7QUFFNUMsUUFBQSxnQkFBZ0IsR0FBRztJQUM5QjtRQUNFLEtBQUssRUFBRSxrQ0FBa0M7UUFDekMsTUFBTSxFQUFFLGtDQUFrQztRQUMxQyxRQUFRLEVBQUUsa0NBQWtDO1FBQzVDLFdBQVcsRUFDVCx5R0FBeUc7UUFDM0csV0FBVyxFQUFFLEtBQUs7UUFDbEIsTUFBTSxFQUFFLHFCQUFhLENBQUMsU0FBUztRQUMvQixTQUFTLEVBQ1AsZ0hBQWdIO1FBQ2xILE9BQU8sRUFBRTtZQUNQO2dCQUNFLEtBQUssRUFBRSxPQUFPO2dCQUNkLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNsQjtTQUNGO1FBQ0QsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLE1BQU0sRUFBRTtvQkFDTjt3QkFDRSxNQUFNLEVBQUUsRUFBRTt3QkFDVixhQUFhLEVBQUUsS0FBSztxQkFDckI7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEtBQUssRUFBRSxPQUFPO2lCQUNmO2FBQ0Y7U0FDRjtRQUNELFlBQVksRUFBRSxJQUFJO1FBQ2xCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLEdBQUcsRUFBRSxnSEFBZ0g7YUFDdEg7WUFDRDtnQkFDRSxHQUFHLEVBQUUsZ0hBQWdIO2FBQ3RIO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsS0FBSyxFQUFFLDBCQUEwQjtRQUNqQyxNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUNULGlQQUFpUDtRQUNuUCxXQUFXLEVBQUUsS0FBSztRQUNsQixNQUFNLEVBQUUscUJB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