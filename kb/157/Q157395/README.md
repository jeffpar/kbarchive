---
layout: page
title: "Q157395: WD97: Tabs or Spaces Missing Using Continuous Section Break"
permalink: /kb/157/Q157395/
---

## Q157395: WD97: Tabs or Spaces Missing Using Continuous Section Break

	Article: Q157395
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you center a selection that contains leading and trailing tabs (or spaces)
	followed by a continuous section break, the leading tabs (or spaces) are
	removed, but the trailing tabs (or spaces) are retained.
	
	For example, when you center the following selection:
	
	-->A--><Enter><Continuous Section Break>
	
	the result is this:
	
	A--><Enter><Continuous Section Break>
	
	If you center a selection that contains leading and ending tabs (or spaces)
	followed by a continuous section break and another line that contains leading
	and ending tabs, the leading tab is removed from the first line but not the
	second line, and the ending tab is removed from the second line but not the
	first line.
	
	For example, when you center the following selection:
	
	-->A--><Enter><Continuous Section Break>
	-->B--><Enter>
	
	the result is this:
	
	A--><Enter><Continuous Section Break>
	-->B<Enter>
	
	The drawback to this is that your text will be off-center.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Remove the tabs either before or after you center the text.
	
	  -or-
	
	- Remove the section break before you center the text; all of the tabs will be
	  removed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
