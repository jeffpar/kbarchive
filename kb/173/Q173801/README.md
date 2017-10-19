---
layout: page
title: "Q173801: WD97: Word Count Is Zero When Object Is Selected"
permalink: /kb/173/Q173801/
---

## Q173801: WD97: Word Count Is Zero When Object Is Selected

	Article: Q173801
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbproof winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word, all values in the Word Count dialog box except Pages and
	Lines may equal zero, regardless of the content of the document.
	
	CAUSE
	=====
	
	This behavior occurs if you only have an object (such as a picture) selected
	when you click Word Count on the Tools menu.
	
	RESOLUTION
	==========
	
	Cancel the selection of any object before you click Word Count on the Tools
	menu. To do this, click anywhere in the text of the document.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Word Count feature returns the number of words and characters in the current
	selection. If nothing is selected, values are returned for the entire document.
	However, if a non-text object like a picture is selected, the Word Count returns
	zero.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbproof winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
