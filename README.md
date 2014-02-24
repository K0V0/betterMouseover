betterMouseover.js
==================

betterMouseover is a small jquery plugin which purpose is to avoid firing some action on accidental mouseovering element.

For example, You are changing background image of some section while reading and hovering items in menu. 
In cases when the user is going too fast trought menu items, your page can be transformed into stroboscope or cpu burner. 
Also many times you are using transitions when switching from one image to another for better and smoother look of page, but they take some time to show/disssapear/change.

Using this plugin, you can avoid this unwanted behavior. User will go trought items and if he "stays" over any for a given amount of time, action will be fired then. 

For tryout see my Fiddle:
[betterMouseover on JSFiddle](http://jsfiddle.net/Kovo/Y3wzJ/19/)

Usage
-----

standard syntax is:

```$("trigger_element_or_multiple_of_them").betterMouseover(time_in_microseconds, function() { do_something... });```

example from fiddle:

```$("#col3, #col4").betterMouseover(500, function() { bla bla bla });```

Compatibility
-------------

It's really simple plugin for now. There should not be jQuery compatibility / browser related problems.
jQuery used in time of writing this plugin is on version 1.8.3
