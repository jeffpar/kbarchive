---
layout: page
title: "Q162954: WD97: Formatting Not Retained for Blank Table Cells in HTML"
permalink: /kb/162/Q162954/
---

## Q162954: WD97: Formatting Not Retained for Blank Table Cells in HTML

	Article: Q162954
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you apply formatting to a blank table cell, save the document as HTML, and
	then reopen the file, the blank cell formatting will be lost in the conversion
	process to and from HTML.
	
	CAUSE
	=====
	
	Formatting for blank table cells is lost when you save the file in HTML format.
	
	WORKAROUND
	==========
	
	To work around this problem, put a nonbreaking space(CTRL+SHIFT+SPACEBAR) in the
	empty table cell. (A standard space or tab in the empty cell will not preserve
	the formatting.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
