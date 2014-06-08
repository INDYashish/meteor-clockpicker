clockpicker
======================

Clockpicker (v0.0.6), a clock-style timepicker for Bootstrap, from Wang Shenwei, https://github.com/weareoutman/clockpicker, packaged for Meteor.js.

A clock-style timepicker for Bootstrap (or jQuery).
[Original documentation and examples](http://weareoutman.github.io/clockpicker/).

![Screenshot](http://weareoutman.github.io/clockpicker/assets/images/screenshot-1.png)


To install
----------

```sh
$ mrt add clockpicker
```

If you don't have the  Glyphicon Halflings font installed:
```sh
$ mrt add glyphicons-halflings
```


Examples
------

In your template:
```
<div class="input-group clockpicker">
    <input type="text" class="form-control" value="09:30">
    <span class="input-group-addon">
        <span class="glyphicon glyphicon-time"></span>
    </span>
</div>
```

In your corresponding JS File
```
Template.myTemplate.rendered = function () {
    $('.clockpicker').clockpicker();
};
```


Provided by [Philipp & Heé](http://blog.philippundhee.ch/)