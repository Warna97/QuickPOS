# Frontend folder structure
/src
 ├── /app
 │    ├── /components                  # Shared components
 │    │     ├── /product-management     # Product-related components
 │    │     │      ├── product-list      # List of products
 │    │     │      │    ├── product-list.component.ts
 │    │     │      │    ├── product-list.component.html
 │    │     │      │    └── product-list.component.scss
 │    │     │      └── product-detail    # Adding/updating products
 │    │     │           ├── product-detail.component.ts
 │    │     │           ├── product-detail.component.html
 │    │     │           └── product-detail.component.scss
 │    │     ├── /order-management       # Order-related components
 │    │     │      ├── order             # Creating a new order
 │    │     │      │    ├── order.component.ts
 │    │     │      │    ├── order.component.html
 │    │     │      │    └── order.component.scss
 │    │     │      └── order-list        # Viewing order history
 │    │     │           ├── order-list.component.ts
 │    │     │           ├── order-list.component.html
 │    │     │           └── order-list.component.scss
 │    │     ├── /user-management        # User-related components
 │    │     │      ├── user-login        # Login functionality
 │    │     │      │    ├── user-login.component.ts
 │    │     │      │    ├── user-login.component.html
 │    │     │      │    └── user-login.component.scss
 │    │     │      └── user-signup       # Signup functionality
 │    │     │           ├── user-signup.component.ts
 │    │     │           ├── user-signup.component.html
 │    │     │           └── user-signup.component.scss
 │    │     └── /shared                 # Shared components like headers, footers
 │    │            ├── header            # Header component
 │    │            │    ├── header.component.ts
 │    │            │    ├── header.component.html
 │    │            │    └── header.component.scss
 │    │            └── footer            # Footer component
 │    │                 ├── footer.component.ts
 │    │                 ├── footer.component.html
 │    │                 └── footer.component.scss
 │    ├── /services                     # API communication
 │    │     ├── product.service.ts       # Service for product data
 │    │     ├── order.service.ts         # Service for order data
 │    │     └── auth.service.ts          # Authentication service
 │    ├── /models                       # Data models
 │    │     ├── product.model.ts         # Product model
 │    │     ├── order.model.ts           # Order model
 │    │     ├── order-item.model.ts      # OrderItem model
 │    │     └── user.model.ts            # User model
 │    ├── /pages                        # Page-level components for routing
 │    │     ├── products                 # Product page component
 │    │     │    ├── products.page.ts
 │    │     │    ├── products.page.html
 │    │     │    └── products.page.scss
 │    │     ├── orders                   # Orders page component
 │    │     │    ├── orders.page.ts
 │    │     │    ├── orders.page.html
 │    │     │    └── orders.page.scss
 │    │     ├── login                    # Login page component
 │    │     │    ├── login.page.ts
 │    │     │    ├── login.page.html
 │    │     │    └── login.page.scss
 │    │     └── signup                   # Signup page component
 │    │          ├── signup.page.ts
 │    │          ├── signup.page.html
 │    │          └── signup.page.scss
 │    ├── /guards                       # Route guards
 │    │     └── auth.guard.ts            # Auth guard for routes
 │    ├── /interceptors                 # HTTP interceptors
 │    │     └── token.interceptor.ts     # Token attachment interceptor
 │    ├── app-routing.module.ts         # Routing configuration
 │    ├── app.module.ts                 # Root module
 │    └── app.component.ts              # Root component
 ├── assets                            # Static assets (images, etc.)
 └── environments                      # Environment configurations


