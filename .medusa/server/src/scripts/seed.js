"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = seedMarketplaceData;
const utils_1 = require("@medusajs/framework/utils");
const seed_functions_1 = require("./seed/seed-functions");
async function seedMarketplaceData({ container }) {
    const logger = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    logger.info('=== Configurations ===');
    logger.info('Creating default sales channel...');
    const salesChannel = await (0, seed_functions_1.createSalesChannel)(container);
    logger.info('Creating default regions...');
    const region = await (0, seed_functions_1.createRegions)(container);
    logger.info('Creating publishable api key...');
    const apiKey = await (0, seed_functions_1.createPublishableKey)(container, salesChannel.id);
    logger.info('Creating store data...');
    await (0, seed_functions_1.createStore)(container, salesChannel.id, region.id);
    logger.info('Creating configuration rules...');
    await (0, seed_functions_1.createConfigurationRules)(container);
    logger.info('=== Example data ===');
    logger.info('Creating product categories...');
    await (0, seed_functions_1.createProductCategories)(container);
    logger.info('Creating product collections...');
    await (0, seed_functions_1.createProductCollections)(container);
    logger.info('Creating seller...');
    const seller = await (0, seed_functions_1.createSeller)(container);
    logger.info('Creating seller stock location...');
    const stockLocation = await (0, seed_functions_1.createSellerStockLocation)(container, seller.id, salesChannel.id);
    logger.info('Creating service zone...');
    const fulfillmentSetId = stockLocation.fulfillment_sets?.[0]?.id;
    if (!fulfillmentSetId) {
        throw new Error('No fulfillment set found on stockLocation');
    }
    const serviceZone = await (0, seed_functions_1.createServiceZoneForFulfillmentSet)(container, seller.id, fulfillmentSetId);
    logger.info('Creating seller shipping option...');
    await (0, seed_functions_1.createSellerShippingOption)(container, seller.id, seller.name, region.id, serviceZone.id);
    logger.info('Creating seller products...');
    await (0, seed_functions_1.createSellerProducts)(container, seller.id, salesChannel.id);
    logger.info('Creating inventory levels...');
    await (0, seed_functions_1.createInventoryItemStockLevels)(container, stockLocation.id);
    logger.info('Creating default commission...');
    await (0, seed_functions_1.createDefaultCommissionLevel)(container);
    logger.info('=== Finished ===');
    logger.info(`Publishable api key: ${apiKey.token}`);
    logger.info(`Vendor panel access:`);
    logger.info(`email: seller@mercurjs.com`);
    logger.info(`pass: secret`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zY3JpcHRzL3NlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFvQkEsc0NBMERDO0FBN0VELHFEQUFxRTtBQUVyRSwwREFlOEI7QUFFZixLQUFLLFVBQVUsbUJBQW1CLENBQUMsRUFBRSxTQUFTLEVBQVk7SUFDdkUsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUVsRSxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO0lBQ2hELE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBQSxtQ0FBa0IsRUFBQyxTQUFTLENBQUMsQ0FBQTtJQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7SUFDMUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLDhCQUFhLEVBQUMsU0FBUyxDQUFDLENBQUE7SUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0lBQzlDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxxQ0FBb0IsRUFBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtJQUNyQyxNQUFNLElBQUEsNEJBQVcsRUFBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0lBQzlDLE1BQU0sSUFBQSx5Q0FBd0IsRUFBQyxTQUFTLENBQUMsQ0FBQTtJQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO0lBQzdDLE1BQU0sSUFBQSx3Q0FBdUIsRUFBQyxTQUFTLENBQUMsQ0FBQTtJQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7SUFDOUMsTUFBTSxJQUFBLHlDQUF3QixFQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsNkJBQVksRUFBQyxTQUFTLENBQUMsQ0FBQTtJQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUE7SUFDaEQsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFBLDBDQUF5QixFQUNuRCxTQUFTLEVBQ1QsTUFBTSxDQUFDLEVBQUUsRUFDVCxZQUFZLENBQUMsRUFBRSxDQUNoQixDQUFBO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQ3ZDLE1BQU0sZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFBO0lBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBQ0QsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFBLG1EQUFrQyxFQUMxRCxTQUFTLEVBQ1QsTUFBTSxDQUFDLEVBQUUsRUFDVCxnQkFBZ0IsQ0FDakIsQ0FBQTtJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtJQUNqRCxNQUFNLElBQUEsMkNBQTBCLEVBQzlCLFNBQVMsRUFDVCxNQUFNLENBQUMsRUFBRSxFQUNULE1BQU0sQ0FBQyxJQUFJLEVBQ1gsTUFBTSxDQUFDLEVBQUUsRUFDVCxXQUFXLENBQUMsRUFBRSxDQUNmLENBQUE7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7SUFDMUMsTUFBTSxJQUFBLHFDQUFvQixFQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUE7SUFDM0MsTUFBTSxJQUFBLCtDQUE4QixFQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO0lBQzdDLE1BQU0sSUFBQSw2Q0FBNEIsRUFBQyxTQUFTLENBQUMsQ0FBQTtJQUU3QyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtJQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQzdCLENBQUMifQ==