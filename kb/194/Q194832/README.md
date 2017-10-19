---
layout: page
title: "Q194832: FIX: Memo Has Characters Added to Value in Locals/Watch Window"
permalink: /kb/194/Q194832/
---

## Q194832: FIX: Memo Has Characters Added to Value in Locals/Watch Window

	Article: Q194832
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbvfp600fix kbXBase
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you place a memo field name into the Debugger Watch Window, the value that
	displays may contain extra characters appended to the end of the memo field's
	actual contents.
	
	This behavior does not occur in Visual FoxPro 6.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        _CLIPTEXT = 'mymemo'
	        CREATE CURSOR CTEMP(MYMEMO M(4))
	        APPEND BLANK
	        REPLACE MYMEMO WITH 'Junk'
	        CLEAR DEBUG
	        KEYBOARD '{alt+3}{ctrl+v}{enter}'
	
	2. Look at the value of mymemo in the Watch Window.
	
	  The value for mymemo in the Watch window contains something like the
	  following:
	
	        "Junk|", or "JunkW       TTOOLBAR    Debugger                L ST
	         "
	
	The extra characters vary depending on what you were doing in Visual FoxPro
	before you look at the value in the Watch Window.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbvfp600fix kbXBase 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
