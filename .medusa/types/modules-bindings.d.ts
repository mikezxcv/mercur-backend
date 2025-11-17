import type Attribute from '@mercurjs/b2c-core/.medusa/server/src/modules/attribute'
import type Configuration from '@mercurjs/b2c-core/.medusa/server/src/modules/configuration'
import type Marketplace from '@mercurjs/b2c-core/.medusa/server/src/modules/marketplace'
import type Payout from '@mercurjs/b2c-core/.medusa/server/src/modules/payout'
import type Seller from '@mercurjs/b2c-core/.medusa/server/src/modules/seller'
import type SplitOrderPayment from '@mercurjs/b2c-core/.medusa/server/src/modules/split-order-payment'
import type Taxcode from '@mercurjs/b2c-core/.medusa/server/src/modules/taxcode'
import type Wishlist from '@mercurjs/b2c-core/.medusa/server/src/modules/wishlist'
import type Commission from '@mercurjs/commission/.medusa/server/src/modules/commission'
import type Algolia from '@mercurjs/algolia/.medusa/server/src/modules/algolia'
import type Review from '@mercurjs/reviews/.medusa/server/src/modules/reviews'
import type OrderReturn from '@mercurjs/requests/.medusa/server/src/modules/order-return-request'
import type Requests from '@mercurjs/requests/.medusa/server/src/modules/requests'
import type { IStockLocationService } from '@medusajs/framework/types'
import type { IInventoryService } from '@medusajs/framework/types'
import type { IProductModuleService } from '@medusajs/framework/types'
import type { IPricingModuleService } from '@medusajs/framework/types'
import type { IPromotionModuleService } from '@medusajs/framework/types'
import type { ICustomerModuleService } from '@medusajs/framework/types'
import type { ISalesChannelModuleService } from '@medusajs/framework/types'
import type { ICartModuleService } from '@medusajs/framework/types'
import type { IRegionModuleService } from '@medusajs/framework/types'
import type { IApiKeyModuleService } from '@medusajs/framework/types'
import type { IStoreModuleService } from '@medusajs/framework/types'
import type { ITaxModuleService } from '@medusajs/framework/types'
import type { ICurrencyModuleService } from '@medusajs/framework/types'
import type { IPaymentModuleService } from '@medusajs/framework/types'
import type { IOrderModuleService } from '@medusajs/framework/types'
import type Settings from '@medusajs/medusa/settings'
import type { IAuthModuleService } from '@medusajs/framework/types'
import type { IUserModuleService } from '@medusajs/framework/types'
import type { IFulfillmentModuleService } from '@medusajs/framework/types'
import type { INotificationModuleService } from '@medusajs/framework/types'
import type { ICacheService } from '@medusajs/framework/types'
import type { IEventBusModuleService } from '@medusajs/framework/types'
import type { IWorkflowEngineService } from '@medusajs/framework/types'
import type { ILockingModule } from '@medusajs/framework/types'
import type { IFileModuleService } from '@medusajs/framework/types'

declare module '@medusajs/framework/types' {
  interface ModuleImplementations {
    'attribute': InstanceType<(typeof Attribute)['service']>,
    'configuration': InstanceType<(typeof Configuration)['service']>,
    'marketplace': InstanceType<(typeof Marketplace)['service']>,
    'payout': InstanceType<(typeof Payout)['service']>,
    'seller': InstanceType<(typeof Seller)['service']>,
    'split_order_payment': InstanceType<(typeof SplitOrderPayment)['service']>,
    'taxcode': InstanceType<(typeof Taxcode)['service']>,
    'wishlist': InstanceType<(typeof Wishlist)['service']>,
    'commission': InstanceType<(typeof Commission)['service']>,
    'algolia': InstanceType<(typeof Algolia)['service']>,
    'review': InstanceType<(typeof Review)['service']>,
    'order_return': InstanceType<(typeof OrderReturn)['service']>,
    'requests': InstanceType<(typeof Requests)['service']>,
    'stock_location': IStockLocationService,
    'inventory': IInventoryService,
    'product': IProductModuleService,
    'pricing': IPricingModuleService,
    'promotion': IPromotionModuleService,
    'customer': ICustomerModuleService,
    'sales_channel': ISalesChannelModuleService,
    'cart': ICartModuleService,
    'region': IRegionModuleService,
    'api_key': IApiKeyModuleService,
    'store': IStoreModuleService,
    'tax': ITaxModuleService,
    'currency': ICurrencyModuleService,
    'payment': IPaymentModuleService,
    'order': IOrderModuleService,
    'settings': InstanceType<(typeof Settings)['service']>,
    'auth': IAuthModuleService,
    'user': IUserModuleService,
    'fulfillment': IFulfillmentModuleService,
    'notification': INotificationModuleService,
    'cache': ICacheService,
    'event_bus': IEventBusModuleService,
    'workflows': IWorkflowEngineService,
    'locking': ILockingModule,
    'file': IFileModuleService
  }
}