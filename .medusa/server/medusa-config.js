"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV || 'development', process.cwd());
module.exports = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        http: {
            storeCors: process.env.STORE_CORS,
            adminCors: process.env.ADMIN_CORS,
            // @ts-expect-error: vendorCors is not a valid config
            vendorCors: process.env.VENDOR_CORS,
            authCors: process.env.AUTH_CORS,
            jwtSecret: process.env.JWT_SECRET || 'supersecret',
            cookieSecret: process.env.COOKIE_SECRET || 'supersecret'
        }
    },
    plugins: [
        {
            resolve: '@mercurjs/b2c-core',
            options: {}
        },
        {
            resolve: '@mercurjs/commission',
            options: {}
        },
        {
            resolve: '@mercurjs/algolia',
            options: {
                apiKey: process.env.ALGOLIA_API_KEY,
                appId: process.env.ALGOLIA_APP_ID
            }
        },
        {
            resolve: '@mercurjs/reviews',
            options: {}
        },
        {
            resolve: '@mercurjs/requests',
            options: {}
        },
        {
            resolve: '@mercurjs/resend',
            options: {}
        }
    ],
    modules: [
        {
            resolve: '@medusajs/medusa/payment',
            options: {
                providers: [
                    {
                        resolve: '@mercurjs/payment-stripe-connect/providers/stripe-connect',
                        id: 'stripe-connect',
                        options: {
                            apiKey: process.env.STRIPE_SECRET_API_KEY
                        }
                    }
                ]
            }
        },
        {
            resolve: '@medusajs/medusa/notification',
            options: {
                providers: [
                    {
                        resolve: '@mercurjs/resend/providers/resend',
                        id: 'resend',
                        options: {
                            channels: ['email'],
                            api_key: process.env.RESEND_API_KEY,
                            from: process.env.RESEND_FROM_EMAIL
                        }
                    },
                    {
                        resolve: '@medusajs/medusa/notification-local',
                        id: 'local',
                        options: {
                            channels: ['feed', 'seller_feed']
                        }
                    }
                ]
            }
        }
    ]
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxREFBaUU7QUFFakUsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBRTdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBQSxvQkFBWSxFQUFDO0lBQzVCLGFBQWEsRUFBRTtRQUNiLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDckMsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVztZQUNsQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFXO1lBQ2xDLHFEQUFxRDtZQUNyRCxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFZO1lBQ3BDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVU7WUFDaEMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLGFBQWE7WUFDbEQsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLGFBQWE7U0FDekQ7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQO1lBQ0UsT0FBTyxFQUFFLG9CQUFvQjtZQUM3QixPQUFPLEVBQUUsRUFBRTtTQUNaO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLE9BQU8sRUFBRSxFQUFFO1NBQ1o7UUFDRDtZQUNFLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWU7Z0JBQ25DLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7YUFDbEM7U0FDRjtRQUNEO1lBQ0UsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixPQUFPLEVBQUUsRUFBRTtTQUNaO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLE9BQU8sRUFBRSxFQUFFO1NBQ1o7UUFDRDtZQUNFLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsT0FBTyxFQUFFLEVBQUU7U0FDWjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1A7WUFDRSxPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLE9BQU8sRUFBRTtnQkFDUCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUNMLDJEQUEyRDt3QkFDN0QsRUFBRSxFQUFFLGdCQUFnQjt3QkFDcEIsT0FBTyxFQUFFOzRCQUNQLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQjt5QkFDMUM7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsK0JBQStCO1lBQ3hDLE9BQU8sRUFBRTtnQkFDUCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLG1DQUFtQzt3QkFDNUMsRUFBRSxFQUFFLFFBQVE7d0JBQ1osT0FBTyxFQUFFOzRCQUNQLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0QkFDbkIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYzs0QkFDbkMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCO3lCQUNwQztxQkFDRjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUscUNBQXFDO3dCQUM5QyxFQUFFLEVBQUUsT0FBTzt3QkFDWCxPQUFPLEVBQUU7NEJBQ1AsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQzt5QkFDbEM7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUEifQ==