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
			this.append(
					$('<legend>').text('Encryption'),
					$('<div>').text('[ Settings Panel for Encryption ]'),
					$('<br>')
					);
		}
	});
	
});
