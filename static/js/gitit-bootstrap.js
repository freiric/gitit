$(document).ready(function() {
  //$('link[href="/css/custom.css"]').attr('href','/css/bootstrap.css');
  // layout
  $('#doc3').addClass('container-fluid');
  $('#yui-main').addClass('row-fluid');
  $('#maincol').addClass('col-md-10').wrapInner('<div class="well" />');
  $('#sidebar').addClass('sidebar-nav').addClass('col-md-2').wrapInner('<div class="well" />');
  $('#sidebar').insertBefore($('#maincol'));

  // change global navbar
  var $link = $('<li class="active"><a class="brand" href="/">Bootstrap Wiki</a></li>');
  var $con = $('<div class="container-fluid" />')
	                 .append($('<div class="nav-collapse">')
		                                    .append($('.tabs'), $('#userbox')));
//  $con = $('<div class="navbar-inner" />').append($con);
  $con = $('<nav class="navbar navbar-fixed-top navbar-inverse" />').append($con);
  //$con = $con.wrap('<div class="navbar" />');
  $('body').css('padding-top', '60px').append($con);
  console.log($con);
  $('.tabs').prepend($link);
  $('.tabs').addClass('nav');
  $('.tabs').addClass('navbar-nav');
  $('.selected').addClass('active');
  $('#userbox').addClass('navbar-text  pull-right');

//  var $form = $('<div class="row-fluid"/>');
//  $form
//       .append($('<div class="input-group"/>')
//       .append($('#searchform'));
//  $('#fieldset').append($form);
//  $('#searchform').addClass('col-lg-12');
  // $('#patterns').addClass('span9');
  // $('#search').addClass('span3');

  // change sidebar
//  $('#sidebar').addClass('navbar').addClass('navbar-left').prepend('<hr>').insertBefore($('#doc3'));
//  $('.sitenav').addClass('nav').addClass('navbar-left').prepend('<hr>').insertAfter($('#doc3'));
  $('#footer').addClass('container-fluid').prepend('<hr>').insertAfter($('#doc3'));

  // change form width
  $('#editedText').css({
    'width': '98%',
    'height': '400px'}
    );
  $('#logMsg').css({'width': '98%'});

  // change button styles
  $("input[type='submit']").addClass('btn btn-primary');
  $("input[type='button']").addClass('btn btn-inverse');
  $("#exportbox").addClass('btn-group');
  var $exportgroup = $('<div class="btn-group" />');
  $exportgroup.append($("select"));
  $("#exportbox").prepend($exportgroup);
  $("select").addClass('btn btn-primary drop-down-toggle form-control');
});
