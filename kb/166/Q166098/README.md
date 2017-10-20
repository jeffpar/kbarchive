---
layout: page
title: "Q166098: WD97: DocVariable Field Is Autoindex Field After Conversion"
permalink: /kb/166/Q166098/
---

## Q166098: WD97: DocVariable Field Is Autoindex Field After Conversion

{% raw %}

	Article: Q166098
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbother kbusage kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a Word 97 document in an earlier version of Word, the following
	field error may be displayed:
	
	  Error! Bookmark not defined.
	
	Viewing field codes(ALT+F9) displays the following field:
	
	  {autoindex "<Any text>" \* Mergeformat }
	
	CAUSE
	=====
	
	The document contained a DocVariable field that was inserted and saved from Word
	97 and the document has been:
	
	- Opened in an earlier version of Word (6.x or 7.x) using the Word 97 import
	  converter.
	
	  -or-
	
	- Opened and saved from a earlier version of Word (6.x or 7.x) using the Word
	  97 import converter and has been reopened in Word 97.
	
	The Autoindex field is a converted DocVariable field. Because the DocVariable
	field is not available in versions of Word prior to Word 97, the conversion
	process does not convert it. The document variables are lost during the
	conversion and cannot be retrieved.
	
	WORKAROUND
	==========
	
	To retain the document variables, while in Word 97, use the following steps to
	save the document using the Microsoft Word 6.0/95 or the Rich Text Format
	converter:
	
	1. Open the document in Word 97.
	
	2. On the File menu, click Save As.
	
	3. In the Save As dialog box, change the "Save File as type" to either "Word
	  6.0/95" or "Rich Text Format."
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q162602 WD97: Questions About Saving in the Word 6.0/95 File Format
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	DocVariable Field Description
	-----------------------------
	
	Inserts the string assigned to a document variable. Each document has a
	collection of variables, which can be added and referenced by the Visual Basic
	for Applications programming language. This field provides a way to display the
	contents of the document variables in the document.
	
	For more information about document variable fields, click Contents And Index on
	the Help menu, click the Index tab in Word Help, type the following text
	
	  docvariable
	
	and then double-click the selected text to go to the "DOCVARIABLE field" topic.
	If you are unable to find the information you need, ask the Office Assistant.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kberrmsg kbother kbusage kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
