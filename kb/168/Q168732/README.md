---
layout: page
title: "Q168732: WD97: Clicking UNC Hyperlink to HTML File Starts Web Browser"
permalink: kb/168/Q168732/
---

## Q168732: WD97: Clicking UNC Hyperlink to HTML File Starts Web Browser

	Article: Q168732
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbother kbtool word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a universal naming convention (UNC) HTML hyperlink in a Word
	document, the linked file is opened in your Web Browser instead of in Word. For
	example, if you click the following UNC link in a Word document
	
	  \\MyMachine\MyShare\MyFile.html
	
	the MyFile.html file is opened in a Web browser.
	
	CAUSE
	=====
	
	The file containing the UNC hyperlink is in Word document format.
	
	WORKAROUND
	==========
	
	To use Word to browse an HTML hyperlink, the document containing the hyperlink
	must be saved in HTML format.
	
	To save a Word document in HTML format, use the following steps:
	
	1. Open the document containing the HTML hyperlinks.
	
	2. On the File menu, click Save As HTML.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbother kbtool word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
