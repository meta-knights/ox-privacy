require([ "io.ox/core/extensions" ], function(ext) {

	var writetoolbar_point = ext.point("io.ox/mail/write/toolbar");
	writetoolbar_point.extend({
		id : 'ox-privacy-write-panel',
		index : 1,
		draw : function() {
			c = $("<div>");
			c.css("float", "left");
			$("<h4>[ Encryption Panel goes here ]</h4>").appendTo(c);
			this.append(c);
		}
	});

	var maildetail_point = ext.point("io.ox/mail/detail");
	maildetail_point.extend({
		id : 'ox-privacy-maildetail-panel',
		index : 300,
		draw : function() {
			c = $("<div>").text("[ Encryption Information ]");
			this.append(c);
		}
	});

	var mailsettings_point = ext.point("io.ox/mail/settings/detail");
	mailsettings_point.extend({
		id : 'ox-privacy-mailsettings-panel',
		index : 300,
		draw : function() {
			signature_list = $('<div>');
			signature_list.attr('id', 'signaturelist');
			signature_list.attr('class', 'listbox');
			signature_list.css({
				'min-height': '80px',
				'max-height': '200px'
			});
			this.append(
					$('<legend>').text('Encryption').attr('class', 'sectiontitle'),
					$('<div>').text('Private Keys:'),
					signature_list,
					$('<div>').attr('class', 'sectioncontent').append(
							$('<button>').attr('class', 'btn btn-primary').css({'margin-right': '15px'}).text('Add'),
							$('<button>').attr('class', 'btn').css({'margin-right': '15px'}).text('Edit'),
							$('<button>').attr('class', 'btn').css({'margin-right': '15px'}).text('Delete')
					),
					$('<br>')
					);
		}
	});
	
});
