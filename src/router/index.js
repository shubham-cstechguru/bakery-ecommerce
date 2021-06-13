import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/master',
    component: () => import(/* webpackChunkName: "master" */ '../Admin/MasterAdmin/Main.vue'),
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/cake',
        name: 'Cake',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "cake" */ '../views/Cake.vue')
      },
      {
        path: '/gift',
        name: 'Gift',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "gift" */ '../views/Gift.vue')
      },
      {
        path: '/blogs',
        name: 'Blogs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "blogs" */ '../views/Blog.vue'),
        children: [
          {
            path: ':id',
            name: 'single-blog',
            props: true,
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "single-blog" */ '../views/SingleBlog.vue')
          },
        ]
      },
      {
        path: '/contact',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '../views/Cart.vue')
      },
      {
        path: '/detail',
        name: 'detail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '../views/ProductDetail.vue')
      },
    ]
  },
  {
    path: '/master-admin',
    component: () => import(/* webpackChunkName: "master-admin" */ '../Admin/MasterAdmin/Admin.vue'),
    children: [
      {
        path: '/master-admin',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../Admin/MasterAdmin/Dashboard.vue'),
      },
      {
        path: '/master-admin/add-shop',
        name: 'add-shop',
        props: true,
        component: () => import(/* webpackChunkName: "add-shop" */ '../Admin/MasterAdmin/Shop/AddShop.vue'),
      },
      {
        path: '/master-admin/view-shop',
        name: 'view-shop',
        props: true,
        component: () => import(/* webpackChunkName: "view-shop" */ '../Admin/MasterAdmin/Shop/ViewShop.vue'),
      },
      {
        path: '/master-admin/assign-product',
        name: 'assign-product',
        props: true,
        component: () => import(/* webpackChunkName: "assign-product" */ '../Admin/MasterAdmin/Shop/AssignProduct.vue'),
      },
      {
        path: '/master-admin/edit-shop',
        name: 'edit-shop',
        props: true,
        component: () => import(/* webpackChunkName: "edit-shop" */ '../Admin/MasterAdmin/Shop/EditShop.vue'),
      },
      {
        path: '/master-admin/country',
        name: 'country',
        props: true,
        component: () => import(/* webpackChunkName: "country" */ '../Admin/MasterAdmin/Location/Country.vue'),
      },
      {
        path: '/master-admin/state',
        name: 'state',
        props: true,
        component: () => import(/* webpackChunkName: "state" */ '../Admin/MasterAdmin/Location/State.vue'),
      },
      {
        path: '/master-admin/city',
        name: 'city',
        props: true,
        component: () => import(/* webpackChunkName: "city" */ '../Admin/MasterAdmin/Location/City.vue'),
      },
      {
        path: '/master-admin/area',
        name: 'area',
        props: true,
        component: () => import(/* webpackChunkName: "area" */ '../Admin/MasterAdmin/Location/Area.vue'),
      },
      {
        path: '/master-admin/add-category',
        name: 'add-category',
        props: true,
        component: () => import(/* webpackChunkName: "add-category" */ '../Admin/MasterAdmin/Category/AddCategory.vue'),
      },
      {
        path: '/master-admin/view-category',
        name: 'view-category',
        props: true,
        component: () => import(/* webpackChunkName: "view-category" */ '../Admin/MasterAdmin/Category/ViewCategory.vue'),
      },
      {
        path: '/master-admin/gst-rate',
        name: 'gst-rate',
        props: true,
        component: () => import(/* webpackChunkName: "gst-rate" */ '../Admin/MasterAdmin/GSTRate.vue'),
      },
      {
        path: '/master-admin/add-product',
        name: 'add-product',
        props: true,
        component: () => import(/* webpackChunkName: "add-product" */ '../Admin/MasterAdmin/Product/AddProduct.vue'),
      },
      {
        path: '/master-admin/view-product',
        name: 'view-product',
        props: true,
        component: () => import(/* webpackChunkName: "view-product" */ '../Admin/MasterAdmin/Product/ViewProduct.vue'),
      },
      {
        path: '/master-admin/edit-product',
        name: 'edit-product',
        props: true,
        component: () => import(/* webpackChunkName: "edit-product" */ '../Admin/MasterAdmin/Product/EditProduct.vue'),
      },
      {
        path: '/master-admin/blog/add-blog',
        name: 'add-blog',
        props: true,
        component: () => import(/* webpackChunkName: "add-blog" */ '../Admin/MasterAdmin/Blogs/AddBlog.vue'),
      },
      {
        path: '/master-admin/blog/view-blog',
        name: 'view-blog',
        props: true,
        component: () => import(/* webpackChunkName: "view-blog" */ '../Admin/MasterAdmin/Blogs/ViewBlog.vue'),
      },
      {
        path: '/master-admin/edit-blog',
        name: 'edit-blog',
        props: true,
        component: () => import(/* webpackChunkName: "edit-blog" */ '../Admin/MasterAdmin/Blogs/EditBlog.vue'),
      },
      {
        path: '/master-admin/blog/blog-category',
        name: 'blog-category',
        props: true,
        component: () => import(/* webpackChunkName: "blog-category" */ '../Admin/MasterAdmin/Blogs/BlogCategory.vue'),
      },
      {
        path: '/master-admin/blog/blog-tag',
        name: 'blog-tag',
        props: true,
        component: () => import(/* webpackChunkName: "blog-tag" */ '../Admin/MasterAdmin/Blogs/BlogTag.vue'),
      },
      {
        path: '/master-admin/blog/blog-comments',
        name: 'blog-comments',
        props: true,
        component: () => import(/* webpackChunkName: "blog-comments" */ '../Admin/MasterAdmin/Blogs/BlogComments.vue'),
      },
      {
        path: '/master-admin/faq',
        name: 'faq',
        props: true,
        component: () => import(/* webpackChunkName: "faq" */ '../Admin/MasterAdmin/Faq.vue'),
      },
      {
        path: '/master-admin/report/cash-book',
        name: 'cash-book',
        component: () => import(/* webpackChunkName: "cash-book" */ '../Admin/MasterAdmin/Report/CashBook.vue'),
      },
      {
        path: '/master-admin/report/day-book',
        name: 'day-book',
        component: () => import(/* webpackChunkName: "day-book" */ '../Admin/MasterAdmin/Report/DayBook.vue'),
      },
      {
        path: '/master-admin/report/bank-book',
        name: 'bank-book',
        component: () => import(/* webpackChunkName: "bank-book" */ '../Admin/MasterAdmin/Report/BankBook.vue'),
      },

      {
        path: '/master-admin/report/sales',
        name: 'sales',
        component: () => import(/* webpackChunkName: "sales" */ '../Admin/MasterAdmin/Report/Sales.vue'),
      },
      {
        path: '/master-admin/report/ledger',
        name: 'stock',
        component: () => import(/* webpackChunkName: "stock" */ '../Admin/MasterAdmin/Report/Ledger.vue'),
      },
      {
        path: '/master-admin/report/margin',
        name: 'margin',
        component: () => import(/* webpackChunkName: "margin" */ '../Admin/MasterAdmin/Report/Margin.vue'),
      },
    ]
  },
  {
    path: '/shop-admin',
    component: () => import(/* webpackChunkName: "shop-admin" */ '../Admin/ShopAdmin/Admin.vue'),
    children: [
      {
        path: '/shop-admin',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../Admin/ShopAdmin/Dashboard.vue'),
      },
      {
        path: '/shop-admin/order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "order" */ '../Admin/ShopAdmin/Order.vue'),
      },
      {
        path: '/shop-admin/products',
        name: 'products',
        component: () => import(/* webpackChunkName: "products" */ '../Admin/ShopAdmin/Products.vue'),
      },
      {
        path: '/shop-admin/add-product-variant',
        name: 'product-variant',
        component: () => import(/* webpackChunkName: "product-variant" */ '../Admin/ShopAdmin/ProductVariant.vue'),
      },
      {
        path: '/shop-admin/report/cash-book',
        name: 'cash-book',
        component: () => import(/* webpackChunkName: "cash-book" */ '../Admin/ShopAdmin/Report/CashBook.vue'),
      },
      {
        path: '/shop-admin/report/day-book',
        name: 'day-book',
        component: () => import(/* webpackChunkName: "day-book" */ '../Admin/ShopAdmin/Report/DayBook.vue'),
      },
      {
        path: '/shop-admin/report/bank-book',
        name: 'bank-book',
        component: () => import(/* webpackChunkName: "bank-book" */ '../Admin/ShopAdmin/Report/BankBook.vue'),
      },

      {
        path: '/shop-admin/report/sales',
        name: 'sales',
        component: () => import(/* webpackChunkName: "sales" */ '../Admin/ShopAdmin/Report/Sales.vue'),
      },
      {
        path: '/shop-admin/report/stock',
        name: 'stock',
        component: () => import(/* webpackChunkName: "stock" */ '../Admin/ShopAdmin/Report/Stock.vue'),
      },
      {
        path: '/shop-admin/report/margin',
        name: 'margin',
        component: () => import(/* webpackChunkName: "margin" */ '../Admin/ShopAdmin/Report/Margin.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
