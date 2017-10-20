---
layout: page
title: "Q167217: WD97: Field Switches Moved Inside Field After Saving as HTML"
permalink: /kb/167/Q167217/
---

## Q167217: WD97: Field Switches Moved Inside Field After Saving as HTML

{% raw %}

	Article: Q167217
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbhtml kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a Word 97 document that contains an IncludePicture field with a \d
	switch in HyperText Markup Language (HTML) format, the /d switch moves to the
	front of the field.
	
	For example, if your document contains the following field:
	
	     {INCLUDEPICTURE "C:\\Clipart\\1STPLACE.WMF" \d }
	
	and you convert the document to HTML, the field looks will like this:
	
	     {INCLUDEPICTURE \d  "file:///C:/Clipart/1STPLACE.WMF" }
	
	The placement of the \d switch does not affect the appearance of the picture. The
	field switch can be located anywhere inside the field braces ({}).
	
	NOTE: By design, the backslash (\) characters change to slash mark (/) characters
	when you convert the document.
	
	MORE INFORMATION
	================
	
	For more information about "working with web pages," click the Office Assistant,
	type "saving as HTML," click Search, and then click "Learn what happens when you
	save a Word 97 document as a Web page."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For more information about graphics on web pages, please see the following
	articles in the Microsoft Knowledge Base: Q157086 WD97: Limitations of
	Converting from Word Format to HTML
	
	  Q159948 WD97: General Information About Web Page Authoring
	
	  Q163095 WD97: Pictures Lost Saving a Web Page in Word
	
	  Q164011 WD97: Default Bullet Format Lost After Reopening HTML File
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbhtml kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
