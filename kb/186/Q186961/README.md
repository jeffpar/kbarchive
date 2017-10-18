---
layout: page
title: "Q186961: WD97: Hyperlink to Bookmark Fails in Word Document Using Browser"
permalink: kb/186/Q186961/
---

## Q186961: WD97: Hyperlink to Bookmark Fails in Word Document Using Browser

	Article: Q186961
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click a hyperlink that is referenced to a bookmark in a Word document,
	
	- The document opens but does not go to the specified bookmark location.
	
	  -or-
	
	- You receive an error message stating that the browser cannot find the
	  Internet site <path>\<Filename.doc#<bookmark>
	
	CAUSE
	=====
	
	The hyperlink is referenced to a bookmark in a Microsoft Word document (*.doc).
	Web browsers do not currently support the use of anchors in files that are not
	in HTML format.
	
	RESOLUTION
	==========
	
	To resolve this problem, you must save the document containing the bookmarks as
	HTML format.
	
	To save a Word document as HTML, follow these steps:
	
	1. Open the document.
	
	2. On the File menu, click Save As.
	
	3. From the Save As Type list, select HTML Document (*.htm;*.html;*.htx).
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	Microsoft Word 97 allows you to use hyperlinks to go to a bookmark location in
	another document. This functionality is not disabled when editing a file that is
	saved as HTML. So, while editing an HTML file, if you insert a hyperlink to a
	bookmark location in a Word document (*.doc), that hyperlink will open the
	referenced document and go to the specified location.
	
	REFERENCES
	==========
	
	For more information regarding other issues with hyperlinks to bookmarks in
	Microsoft Word, see the following article in the Microsoft Knowledge Base:
	
	  Q173150 WD97: Hyperlink to Anchor or Bookmark Goes to Top of Document
	
	Additional query words: anchor htm http Web
	
	======================================================================
	Keywords          : kbdta word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
