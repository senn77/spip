<?php
function ckeditor_header_prive($flux) {
	global $visiteur_session;
	
	$exec = _request('exec');

	$couleurs = charger_fonction('couleurs', 'inc');
	$couleurs_spip = $couleurs(array(), true);
	$uiColor = (isset($visiteur_session['prefs']) && is_array($visiteur_session) && is_array($visiteur_session['prefs']))?$couleurs_spip[$visiteur_session['prefs']['couleur']]['couleur_claire']:'#eee';
	
	$flux .= "\n<!-- début de : ckeditor_header_prive --> \n";
	$flux .= "<script src=\"./../plugins/ckeditor_4.6.2/ckeditor_4.6.2/ckeditor.js\"></script> \n";
	$flux .= "<script>
		function loadCKEditor() {
			//for(name in CKEDITOR.instances) CKEDITOR.instances[name].destroy(true);
			console.log(CKEDITOR.instances);
			$('div.markItUpTabs').css('display', 'none');
			$('div.markItUpHeader').css('display', 'none');
			var text = $('#text_area').html();
			var regex = /\[.+\-&gt;.+\]/gmi;
			var regex2 = /\[.+\-&amp;gt;.+\]/gmi;
			while (text.match(regex) != null) {
				var a = text.match(regex)[0].split('-&gt;');
				a[0] = a[0].replace('[', '');
				a[1] = a[1].replace(']', '');
				text = text.replace(text.match(regex)[0], '<a href=\"'+a[1]+'\">'+a[0]+'</a>');
			}
			while (text.match(regex2) != null) {
				var a = text.match(regex2)[0].split('-&amp;gt;');
				a[0] = a[0].replace('[', '');
				a[1] = a[1].replace(']', '');
				text = text.replace(text.match(regex2)[0], '<a href=\"'+a[1]+'\">'+a[0]+'</a>');
			}
			$('#text_area').html(text);
			CKEDITOR.replace('text_area', { uiColor: '".$uiColor."' });
		}
	</script>";
				
	if ($exec == 'article_edit') {
		$flux .= "<script>$(function() { 
			setTimeout(function(){ loadCKEditor(); }, 1000);
		});</script>";
		
	}
	if ($exec == 'article') {
		$flux .= "<script>$(function() {
			$('#contenu > .ajaxbloc').bind('DOMSubtreeModified', function() {
				if ($(this).data('url') != undefined && $(this).data('url').indexOf('article_edit') > 0) location.reload();
			});		
		});</script>";
	}
	$flux .= "\n<!-- fin de : ckeditor_header_prive -->\n";
	return $flux;
}
?>