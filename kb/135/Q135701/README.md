---
layout: page
title: "Q135701: FIX: TTOC Returns More Than 14 Characters"
permalink: /kb/135/Q135701/
---

## Q135701: FIX: TTOC Returns More Than 14 Characters

	Article: Q135701
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TTOC({},1) returns more than 14 characters.
	
	WORKAROUND
	==========
	
	Use the following expression to provide a proper 14-character string:
	
	  IIF(<aDate> =={}, replicate("0",14), TTOC(<aDate>, 1))
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	  ?TTOC({},1)  &&"000000000478376201"
	  ?TTOC(CTOD('  /  /  '),1)   &&"000000000478376201"
	
	Additional query words: 3.00 VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
