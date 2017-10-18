---
layout: page
title: "Q169532: WD97: Paragraph Borders Displayed Erratically with Objects"
permalink: kb/169/Q169532/
---

## Q169532: WD97: Paragraph Borders Displayed Erratically with Objects

	Article: Q169532
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your document contains floating objects, paragraph borders or shading may not
	be displayed or printed the way you expect.
	
	Depending on the amount of text in the paragraph and where the floating object is
	placed, paragraph borders or shading may not be displayed or printed to the
	right of the object. For example, if a line of text in the paragraph fails to
	extend to the right of the object, a border (or shading) will not be displayed
	or printed to the right of the object for that line.
	
	CAUSE
	=====
	
	This problem occurs when the following conditions are true:
	
	- The floating object has a wrapping style applied to it.
	
	  -and-
	
	- The floating object is placed over a paragraph that is formatted with borders
	  or shading.
	
	WORKAROUND
	==========
	
	To display the border correctly, use the following steps:
	
	1. Place the insertion point at the end of the line of text that does not extend
	  past the floating object.
	
	2. Press the TAB key until the insertion point moves to the right of the object.
	  (The insertion point may not move to the right of the object if the object is
	  close to the right margin or indent.)
	
	NOTE: Converting the object to a framed object will not correct the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: Wrapped Escher shape drawn
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
