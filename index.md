title: Realtime for Reals
author:
  name: Alexis Abril
  twitter: alexisabril
  url: featherjs.com
output: index.html
style: style.css
theme: sudodoki/reveal-cleaver-theme

--

# Realtime
## for reals!

--

<img src="images/bitovi.png" class="plain" style="width: 800px;"/>

--

<img src="images/jmvc.png" class="plain" style="width: 300px; margin: 0 auto; display: block;"/>

<ul class="list">
  <li>
    <img src="images/canjs.png" class="plain" style="height: 79px;"/>
  </li>

  <li>
    <img src="images/stealjs.png" class="plain" style="height: 79px;"/>
  </li>

  <li>
    <img src="images/funcunit.png" class="plain" style="height: 79px;"/>
  </li>

  <li>
    <img src="images/docjs.png" class="plain" style="height: 79px;"/>
  </li>

  <li>
    <img src="images/jquerypp.png" class="plain" style="height: 79px;"/>
  </li>

</ul>

--

# @DallasJS

--

<img src="images/utd.gif" class="plain" style="display: block; margin: 0 auto;"/>

--

# What is FeathersJS?

--

### Service Objects

    var myService = {
      find: function(params, callback) {},
      get: function(id, params, callback) {},
      create: function(data, params, callback) {},
      update: function(id, data, params, callback) {},
      remove: function(id, params, callback) {}
    }

--

### A Simple Todo Service

<img src="images/todomvc.png" style="width: 100%;"/>

--

### A Simple Todo Service

    var todoService = {
      find: function(params, callback) {
        /* var todos = DB call for todos */

        callback(null, todos);
      },

      create: function(data, params, callback) {
        /* var todo = DB call to create a todo */

        callback(null, todo);
      }
    };

--

### REST API Setup

    feathers()
      .configure(feathers.rest())
      .use('/todos', todoService)
      .listen(3000);

--

### REST & WebSocket API Setup

    feathers()
      .configure(feathers.rest())
      .configure(feathers.socketio())
      .use('/todos', todoService)
      .listen(3000);

--

# The Showdown

<div class="showdown">
    <img class="img-thumbnail img-circle" src="images/kirk.jpg"/>
    vs
    <img class="img-thumbnail img-circle" src="images/picard.jpg"/>
</div>

--

### theshowdown.herokuapp.com
#### To the Editor!

--

### Common REST Architecture

<img src="images/rest.png"/>

--

### Feathers in the Middle

<img src="images/feathers.png"/>

--

<img src="images/blooper.jpg"/>