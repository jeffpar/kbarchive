---
layout: page
title: "Q173150: WD97: Hyperlink to Anchor or Bookmark Goes to Top of Document"
permalink: /kb/173/Q173150/
---

## Q173150: WD97: Hyperlink to Anchor or Bookmark Goes to Top of Document

	Article: Q173150
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When loading a Uniform Resource Locator (URL) that specifies a bookmark or
	anchor as part of the URL, Microsoft Word 97 does not position the window at the
	bookmark. For example, when loading the following URL, Microsoft Word positions
	you at the top of the document instead of jumping to the bookmark location
	within the document:
	
	  http://example.microsoft.com/page.html#BookmarkName
	
	NOTE: This problem does not exist when you jump to bookmarks in local documents.
	
	WORKAROUND
	==========
	
	Type or insert a hyperlink with a bookmark or anchor reference in your Microsoft
	Word document.
	
	  Example: http://example.microsoft.com/page.html#BookmarkName
	
	Although this hyperlink is in the correct format it will take you to the top of
	the named page and not to the named location.
	
	To make the hyperlink function correctly, follow these steps:
	
	1. Right-click the hyperlink.
	
	2. Point to hyperlink and then click Edit Hyperlink on the shortcut menu.
	
	3. Add a # (pound sign) to the front of the bookmark name in the "Named location
	  in file (optional)" area.
	
	4. Click OK.
	
	The hyperlink will now display a hyphen between the page name and the # and will
	work correctly (it will take you to the named location in the document).
	
	  Example: http://some.server.com/page.html - #BookmarkName
	
	NOTE: Typing the hyphen in the URL will not work.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Bookmarks (also called anchors in HTML) can be used to move to a particular
	section in a document. To create a link from one document to a specific section
	in another document, a named anchor or bookmark must first be created in the
	second document. Now, in the first document, you can create a hyperlink to the
	bookmark or anchor in the second document.
	
	
	REFERENCES
	==========
	
	For additional information about creating bookmarks in local documents, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q128499 How to Create Hyperlinks to Bookmarks in Local Documents
	
	  Q128500 Cannot Link to a Specific Section in Another Document
	
	For more information about "working with hyperlinks," click the Office Assistant,
	type "hyperlinks to bookmarks," click Search, and then click "Create a cross
	reference."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
