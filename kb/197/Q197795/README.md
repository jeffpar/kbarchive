---
layout: page
title: "Q197795: WD97: Go To &#92;Page Bookmark Selects Whole Document"
permalink: /kb/197/Q197795/
---

## Q197795: WD97: Go To &#92;Page Bookmark Selects Whole Document

	Article: Q197795
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click Go To on the Edit menu and type "\Page" (without the quotation
	marks) in the Enter Page Number box, sometimes Word selects the entire document
	instead of the current page.
	
	This can also happen when you run a macro that uses the "\Page" reserved bookmark
	as shown in the following example:
	
	     Selection.GoTo What:=wdGoToBookmark, Name:="\page"
	
	CAUSE
	=====
	
	Word has not yet paginated your document, or the Background Repagination option
	is not turned on.
	
	Word repaginates your document before inserting page breaks. Until Word
	repaginates the document, it treats the document as a single page. If a new
	document has not been repaginated, the \Page bookmark selects the entire
	document. After repagination, Word inserts page breaks, so the \Page bookmark
	correctly selects only the current page.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- If background repagination is turned off, switch to page layout view or print
	  preview, which forces Word to repaginate your document. Then use the Go To
	  command.
	
	  -or-
	
	- Turn on the Background Repagination option by following these steps:
	  1. On the Tools menu, click Options.
	
	  2. Select the General tab.
	
	  3. Click to select the Background Repagination check box, and then click OK.
	
	MORE INFORMATION
	================
	
	The \Page bookmark is a reserved, predefined bookmark in Word that returns the
	contents of the current page.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
