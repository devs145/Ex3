var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters
    routes: [
      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/page2/',
        url: 'pages/page2.html',
      },

      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/podcasts/',
        url: 'pages/podcasts.html',
      },

      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/books/',
        url: 'pages/books.html',
      },

      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/homepage/',
        url: 'pages/homepage.html',
      },


    ],
  });
var mainView = app.views.create('.view-main')
