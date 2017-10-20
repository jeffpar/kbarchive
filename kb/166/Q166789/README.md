---
layout: page
title: "Q166789: WD97: Title of HTML Document Begins with a Question Mark"
permalink: /kb/166/Q166789/
---

## Q166789: WD97: Title of HTML Document Begins with a Question Mark

{% raw %}

	Article: Q166789
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a Word document in HTML format, the saved HTML document title
	begins with a question mark.
	
	CAUSE
	=====
	
	This problem occurs if the first line text in the document is a bullet item.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Change the Title in the Summary Information
	-----------------------------------------------------
	
	Before you save the Word document as HTML, perform the following steps:
	
	1. On the File menu, click Properties.
	
	2. Click the Summary tab.
	
	3. In the Title box, delete the square character (and following space) at the
	  start of the title, and then click OK.
	
	  NOTE: The square represents the bullet from the first line of text of the
	  document.
	
	Method 2: Delete the Bullet Code from the <TITLE> Tag
	-----------------------------------------------------
	
	View the HTML source and delete the "&#nnnnn;" from the <TITLE> tag.
	
	NOTE: The nnnnn can be any series of numbers. These numbers represent the bullet
	that cannot be correctly converted by Microsoft Word when contained as part of
	the Title of the Word document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you save a document, Word will automatically create a title for the
	document from the text of the Word document. If the text starts with a bullet
	character, Word doesn't correctly convert the bullet character.
	
	Although the converted bullet doesn't appear as part of the document title (on
	the Word document Title bar); it does appear in the Title box on the Summary tab
	in the Properties dialog box. When you save a Word document in HTML format, Word
	uses the Title from the document Summary Information as the title of the HTML
	document.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q126793 Limitations of Word HTML Converter
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
