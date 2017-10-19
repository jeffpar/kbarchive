---
layout: page
title: "Q198076: WD97: Go To Bookmark Selects Entire Inserted Document"
permalink: /kb/198/Q198076/
---

## Q198076: WD97: Go To Bookmark Selects Entire Inserted Document

	Article: Q198076
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Go To command (Edit menu) to go to the first bookmark that is
	contained in an inserted document, the entire inserted document is selected
	instead of just the bookmarked text that you want.
	
	CAUSE
	=====
	
	The bookmarked text is at the beginning of the inserted document.
	
	WORKAROUND
	==========
	
	Method 1: Add a Blank Line Above the Bookmarked Text
	----------------------------------------------------
	
	Open the document that is to be inserted, and ensure that the first bookmarked
	text is not at the beginning of the document. To view the bookmarks, follow
	these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the View tab.
	
	3. Select the Bookmarks check box, and then click OK.
	
	  Your bookmarks appear either as a large "I" or as large square brackets ([]).
	
	NOTE: You need to delete the first bookmark, add a blank line above the
	bookmarked text, and then insert the bookmark again.
	
	Method 2: Do Not Link to File
	-----------------------------
	
	1. In a new document, click File on the Insert menu.
	
	2. Select the document that contains the bookmarks, and then click OK.
	
	  NOTE: Do not select the "Link To File" check box. If you select this check
	  box, your document will be inserted with an IncludeText field, and you will
	  have to use Method 1.
	
	The document containing the bookmarks will be inserted as text, not an
	IncludeText field. When you use the Go To command to go to the first bookmark
	contained in the inserted file, only the bookmarked text will be selected, not
	the entire inserted document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you use an IncludeText field or when you select "Link To File", the
	IncludeText field is selected when you use the Go To command to go to the first
	bookmark contained in the inserted document.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
