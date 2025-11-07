"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSalesChannel = createSalesChannel;
exports.createStore = createStore;
exports.createRegions = createRegions;
exports.createPublishableKey = createPublishableKey;
exports.createProductCategories = createProductCategories;
exports.createProductCollections = createProductCollections;
exports.createSeller = createSeller;
exports.createSellerStockLocation = createSellerStockLocation;
exports.createServiceZoneForFulfillmentSet = createServiceZoneForFulfillmentSet;
exports.createSellerShippingOption = createSellerShippingOption;
exports.createSellerProducts = createSellerProducts;
exports.createInventoryItemStockLevels = createInventoryItemStockLevels;
exports.createDefaultCommissionLevel = createDefaultCommissionLevel;
exports.createConfigurationRules = createConfigurationRules;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const seller_1 = require("@mercurjs/b2c-core/modules/seller");
const workflows_1 = require("@mercurjs/b2c-core/workflows");
const workflows_2 = require("@mercurjs/commission/workflows");
const framework_1 = require("@mercurjs/framework");
const seed_products_1 = require("./seed-products");
const countries = ['be', 'de', 'dk', 'se', 'fr', 'es', 'it', 'pl', 'cz', 'nl'];
async function createSalesChannel(container) {
    const salesChannelModuleService = container.resolve(utils_1.Modules.SALES_CHANNEL);
    let [defaultSalesChannel] = await salesChannelModuleService.listSalesChannels({
        name: 'Default Sales Channel'
    });
    if (!defaultSalesChannel) {
        const { result: [salesChannelResult] } = await (0, core_flows_1.createSalesChannelsWorkflow)(container).run({
            input: {
                salesChannelsData: [
                    {
                        name: 'Default Sales Channel'
                    }
                ]
            }
        });
        defaultSalesChannel = salesChannelResult;
    }
    return defaultSalesChannel;
}
async function createStore(container, salesChannelId, regionId) {
    const storeModuleService = container.resolve(utils_1.Modules.STORE);
    const [store] = await storeModuleService.listStores();
    if (!store) {
        return;
    }
    await (0, core_flows_1.updateStoresWorkflow)(container).run({
        input: {
            selector: { id: store.id },
            update: {
                default_sales_channel_id: salesChannelId,
                default_region_id: regionId
            }
        }
    });
}
async function createRegions(container) {
    const { result: [region] } = await (0, core_flows_1.createRegionsWorkflow)(container).run({
        input: {
            regions: [
                {
                    name: 'Europe',
                    currency_code: 'eur',
                    countries,
                    payment_providers: ['pp_system_default']
                }
            ]
        }
    });
    const { result: taxRegions } = await (0, core_flows_1.createTaxRegionsWorkflow)(container).run({
        input: countries.map((country_code) => ({
            country_code
        }))
    });
    await (0, core_flows_1.updateTaxRegionsWorkflow)(container).run({
        input: taxRegions.map((taxRegion) => ({
            id: taxRegion.id,
            provider_id: 'tp_system'
        }))
    });
    return region;
}
async function createPublishableKey(container, salesChannelId) {
    const apiKeyService = container.resolve(utils_1.Modules.API_KEY);
    let [key] = await apiKeyService.listApiKeys({ type: 'publishable' });
    if (!key) {
        const { result: [publishableApiKeyResult] } = await (0, core_flows_1.createApiKeysWorkflow)(container).run({
            input: {
                api_keys: [
                    {
                        title: 'Default publishable key',
                        type: 'publishable',
                        created_by: ''
                    }
                ]
            }
        });
        key = publishableApiKeyResult;
    }
    await (0, core_flows_1.linkSalesChannelsToApiKeyWorkflow)(container).run({
        input: {
            id: key.id,
            add: [salesChannelId]
        }
    });
    return key;
}
async function createProductCategories(container) {
    const { result } = await (0, core_flows_1.createProductCategoriesWorkflow)(container).run({
        input: {
            product_categories: [
                {
                    name: 'Sneakers',
                    is_active: true
                },
                {
                    name: 'Sandals',
                    is_active: true
                },
                {
                    name: 'Boots',
                    is_active: true
                },
                {
                    name: 'Sport',
                    is_active: true
                },
                {
                    name: 'Accessories',
                    is_active: true
                },
                {
                    name: 'Tops',
                    is_active: true
                }
            ]
        }
    });
    return result;
}
async function createProductCollections(container) {
    const { result } = await (0, core_flows_1.createCollectionsWorkflow)(container).run({
        input: {
            collections: [
                {
                    title: 'Luxury'
                },
                {
                    title: 'Vintage'
                },
                {
                    title: 'Casual'
                },
                {
                    title: 'Soho'
                },
                {
                    title: 'Streetwear'
                },
                {
                    title: 'Y2K'
                }
            ]
        }
    });
    return result;
}
async function createSeller(container) {
    const authService = container.resolve(utils_1.Modules.AUTH);
    const { authIdentity } = await authService.register('emailpass', {
        body: {
            email: 'seller@mercurjs.com',
            password: 'secret'
        }
    });
    const { result: seller } = await workflows_1.createSellerWorkflow.run({
        container,
        input: {
            auth_identity_id: authIdentity?.id,
            member: {
                name: 'John Doe',
                email: 'seller@mercurjs.com'
            },
            seller: {
                name: 'MercurJS Store'
            }
        }
    });
    return seller;
}
async function createSellerStockLocation(container, sellerId, salesChannelId) {
    const link = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    const { result: [stock] } = await (0, core_flows_1.createStockLocationsWorkflow)(container).run({
        input: {
            locations: [
                {
                    name: `Stock Location for seller ${sellerId}`,
                    address: {
                        address_1: 'Random Strasse',
                        city: 'Berlin',
                        country_code: 'de'
                    }
                }
            ]
        }
    });
    await link.create([
        {
            [seller_1.SELLER_MODULE]: {
                seller_id: sellerId
            },
            [utils_1.Modules.STOCK_LOCATION]: {
                stock_location_id: stock.id
            }
        },
        {
            [utils_1.Modules.STOCK_LOCATION]: {
                stock_location_id: stock.id
            },
            [utils_1.Modules.FULFILLMENT]: {
                fulfillment_provider_id: 'manual_manual'
            }
        },
        {
            [utils_1.Modules.SALES_CHANNEL]: {
                sales_channel_id: salesChannelId
            },
            [utils_1.Modules.STOCK_LOCATION]: {
                stock_location_id: stock.id
            }
        }
    ]);
    await workflows_1.createLocationFulfillmentSetAndAssociateWithSellerWorkflow.run({
        container,
        input: {
            fulfillment_set_data: {
                name: `${sellerId} fulfillment set`,
                type: 'shipping'
            },
            location_id: stock.id,
            seller_id: sellerId
        }
    });
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [stockLocation] } = await query.graph({
        entity: 'stock_location',
        fields: ['*', 'fulfillment_sets.*'],
        filters: {
            id: stock.id
        }
    });
    return stockLocation;
}
async function createServiceZoneForFulfillmentSet(container, sellerId, fulfillmentSetId) {
    await core_flows_1.createServiceZonesWorkflow.run({
        container,
        input: {
            data: [
                {
                    fulfillment_set_id: fulfillmentSetId,
                    name: `Europe`,
                    geo_zones: countries.map((c) => ({
                        type: 'country',
                        country_code: c
                    }))
                }
            ]
        }
    });
    const fulfillmentService = container.resolve(utils_1.Modules.FULFILLMENT);
    const [zone] = await fulfillmentService.listServiceZones({
        fulfillment_set: {
            id: fulfillmentSetId
        }
    });
    const link = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    await link.create({
        [seller_1.SELLER_MODULE]: {
            seller_id: sellerId
        },
        [utils_1.Modules.FULFILLMENT]: {
            service_zone_id: zone.id
        }
    });
    return zone;
}
async function createSellerShippingOption(container, sellerId, sellerName, regionId, serviceZoneId) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [shippingProfile] } = await query.graph({
        entity: framework_1.SELLER_SHIPPING_PROFILE_LINK,
        fields: ['shipping_profile_id'],
        filters: {
            seller_id: sellerId
        }
    });
    const { result: [shippingOption] } = await core_flows_1.createShippingOptionsWorkflow.run({
        container,
        input: [
            {
                name: `${sellerName} shipping`,
                shipping_profile_id: shippingProfile.shipping_profile_id,
                service_zone_id: serviceZoneId,
                provider_id: 'manual_manual',
                type: {
                    label: `${sellerName} shipping`,
                    code: sellerName,
                    description: 'Europe shipping'
                },
                rules: [
                    { value: 'true', attribute: 'enabled_in_store', operator: 'eq' },
                    { attribute: 'is_return', value: 'false', operator: 'eq' }
                ],
                prices: [
                    { currency_code: 'eur', amount: 10 },
                    { amount: 10, region_id: regionId }
                ],
                price_type: 'flat',
                data: { id: 'manual-fulfillment' }
            }
        ]
    });
    const link = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    await link.create({
        [seller_1.SELLER_MODULE]: {
            seller_id: sellerId
        },
        [utils_1.Modules.FULFILLMENT]: {
            shipping_option_id: shippingOption.id
        }
    });
    return shippingOption;
}
async function createSellerProducts(container, sellerId, salesChannelId) {
    const productService = container.resolve(utils_1.Modules.PRODUCT);
    const collections = await productService.listProductCollections({}, { select: ['id', 'title'] });
    const categories = await productService.listProductCategories({}, { select: ['id', 'name'] });
    const randomCategory = () => categories[Math.floor(Math.random() * categories.length)];
    const randomCollection = () => collections[Math.floor(Math.random() * collections.length)];
    const toInsert = seed_products_1.productsToInsert.map((p) => ({
        ...p,
        categories: [
            {
                id: randomCategory().id
            }
        ],
        collection_id: randomCollection().id,
        sales_channels: [
            {
                id: salesChannelId
            }
        ]
    }));
    const { result } = await core_flows_1.createProductsWorkflow.run({
        container,
        input: {
            products: toInsert,
            additional_data: {
                seller_id: sellerId
            }
        }
    });
    return result;
}
async function createInventoryItemStockLevels(container, stockLocationId) {
    const inventoryService = container.resolve(utils_1.Modules.INVENTORY);
    const items = await inventoryService.listInventoryItems({}, { select: ['id'] });
    const toCreate = items.map((i) => ({
        inventory_item_id: i.id,
        location_id: stockLocationId,
        stocked_quantity: Math.floor(Math.random() * 50) + 1
    }));
    const { result } = await core_flows_1.createInventoryLevelsWorkflow.run({
        container,
        input: {
            inventory_levels: toCreate
        }
    });
    return result;
}
async function createDefaultCommissionLevel(container) {
    await workflows_2.createCommissionRuleWorkflow.run({
        container,
        input: {
            name: 'default',
            is_active: true,
            reference: 'site',
            reference_id: '',
            rate: {
                include_tax: true,
                type: 'percentage',
                percentage_rate: 2
            }
        }
    });
}
async function createConfigurationRules(container) {
    for (const [ruleType, isEnabled] of framework_1.ConfigurationRuleDefaults) {
        await workflows_1.createConfigurationRuleWorkflow.run({
            container,
            input: {
                rule_type: ruleType,
                is_enabled: isEnabled
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZC1mdW5jdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvc2NyaXB0cy9zZWVkL3NlZWQtZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBbUNBLGdEQXdCQztBQUVELGtDQXFCQztBQUNELHNDQThCQztBQUVELG9EQWlDQztBQUVELDBEQWlDQztBQUVELDREQTJCQztBQUVELG9DQXlCQztBQUVELDhEQTJFQztBQUVELGdGQXdDQztBQUVELGdFQTBEQztBQUVELG9EQThDQztBQUVELHdFQXVCQztBQUVELG9FQWVDO0FBRUQsNERBVUM7QUF2Z0JELHFEQUE4RTtBQUM5RSw0REFlb0M7QUFFcEMsOERBQWlFO0FBQ2pFLDREQUlxQztBQUNyQyw4REFBNkU7QUFDN0UsbURBRzRCO0FBRTVCLG1EQUFrRDtBQUVsRCxNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBRXZFLEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxTQUEwQjtJQUNqRSxNQUFNLHlCQUF5QixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLE1BQU0seUJBQXlCLENBQUMsaUJBQWlCLENBQzNFO1FBQ0UsSUFBSSxFQUFFLHVCQUF1QjtLQUM5QixDQUNGLENBQUE7SUFFRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QixNQUFNLEVBQ0osTUFBTSxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFDN0IsR0FBRyxNQUFNLElBQUEsd0NBQTJCLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ25ELEtBQUssRUFBRTtnQkFDTCxpQkFBaUIs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