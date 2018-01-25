CKEDITOR.editorConfig = function( config ) {
	config.filebrowserBrowseUrl = './../plugins/ckeditor_4.8.0/kcfinder_3.12/browse.php?opener=ckeditor&type=files';
	config.filebrowserImageBrowseUrl = './../plugins/ckeditor_4.8.0/kcfinder_3.12/browse.php?opener=ckeditor&type=images';
	config.filebrowserFlashBrowseUrl = './../plugins/ckeditor_4.8.0/kcfinder_3.12/browse.php?opener=ckeditor&type=flash';
	config.filebrowserUploadUrl = './../plugins/ckeditor_4.8.0/kcfinder_3.12/upload.php?opener=ckeditor&type=files';
	config.filebrowserImageUploadUrl = './../plugins/ckeditor_4.8.0/kcfinder_3.12/upload.php?opener=ckeditor&type=images';
	config.filebrowserFlashUploadUrl = './../plugins/ckeditor_4.8.0/kcfinder_3.12/upload.php?opener=ckeditor&type=flash';
	
	config.height = 500;
	config.language = 'fr';
	config.forcePasteAsPlainText = true;
	
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'undo', 'clipboard' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup', 'colors' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'paragraph', groups: [ 'indent', 'blocks', 'align', 'bidi', 'list', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		'/',
		'/',
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Save,NewPage,Preview,Print,Templates,Paste,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,RemoveFormat,NumberedList,Outdent,Indent,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Flash,HorizontalRule,Smiley,PageBreak,Iframe,Format,Font,BGColor,Maximize,ShowBlocks,About,SpecialChar,FontSize,CopyFormatting,Anchor,Styles';
	
	config.removeDialogTabs = 'link:upload;link:target;link:advanced;image:Upload;image:advanced;image:Link;table:advanced';
	
	config.colorButton_colors = '581d74,9856b4,5f6367,bababa,cccccc,e5e5e5';
	
	config.stylesSet = 'styles';
};

CKEDITOR.stylesSet.add('styles', [
    {name: 'Sub Title',  element: 'h2'},
    {name: 'Column',  element: 'table', attributes: { 'class': 'column' }},
    {name: 'Blue',  element: 'table', attributes: { 'class': 'blue' }},
    {name: 'Blue2',  element: 'table', attributes: { 'class': 'blue2' }},
    {name: 'Achtung',  element: 'table', attributes: { 'class': 'achtung' }}
]);