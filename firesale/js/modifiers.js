$(function() {

	$("button[type=submit]").live('click', function() {
	    $("button", $(this).parents("form")).removeAttr("clicked");
	    $(this).attr("clicked", "true");
	});

	$('#mod_form').live('submit', function(e) {
		e.preventDefault();
		var action = $(this).find('button[clicked=true]').val();
		$.post($(this).attr('action'), $(this).serialize()+'&btnAction='+action, function(response) {
			build_alert(response);
			if( $(response).find('#modifiers').size() > 0 ) {
				$('#modifiers').html($(response).find('#modifiers').html());
				$('a.modifier.modal').colorbox.close("Modifier added successfully");
			} else {
				$('#mod_form').html(response);
			}
		});
	});

	$('#var_form').live('submit', function(e) {
		e.preventDefault();
		var action = $(this).find('button[clicked=true]').val();
		$.post($(this).attr('action'), $(this).serialize()+'&btnAction='+action, function(response) {
			build_alert(response);
			if( $(response).find('#modifiers').size() > 0 ) {
				$('#modifiers').html($(response).find('#modifiers').html());
				$('a.modifier.modal').colorbox.close("Variation added successfully");
			} else {
				$('#var_form').html(response);
			}
		});
	});

});