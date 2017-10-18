---
layout: page
title: "Q99328: Write Err Msg: Cannot Print Picture. Picture Will Be Ignored."
permalink: kb/099/Q99328/
---

## Q99328: Write Err Msg: Cannot Print Picture. Picture Will Be Ignored.

	Article: Q99328
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document that contains a graphic in the header of the first
	page from Microsoft Windows Write, you may receive the following error message:
	
	  Write cannot print picture. Picture will be ignored.
	
	Choosing OK in response to this error message may or may not cause the page to be
	printed correctly.
	
	CAUSE
	=====
	
	The above error occurs only if a header has not been viewed in any document
	during that particular instance of Write. After you view a header in any
	document, the above error does not occur. It also does not occur if the Print On
	First Page option is NOT selected in the Page Header dialog box (accessed by
	choosing Header from the Document menu).
	
	WORKAROUND
	==========
	
	To work around this problem, first view the header before you print the
	document. After viewing the header, this error does not occur.
	
	To view the header:
	
	1. Open Write and open the document that contains the graphical header.
	
	2. From the Document menu, choose Header.
	
	  The header, including the graphic, should now be displayed.
	
	3. Select the Return To Document button to return to the first page.
	
	4. Print the page.
	
	If you close Write, the above procedure will need to be followed again to print
	the document.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
