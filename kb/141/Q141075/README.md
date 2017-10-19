---
layout: page
title: "Q141075: FIX: FoxPro Quits When It Runs Out of File Handles"
permalink: /kb/141/Q141075/
---

## Q141075: FIX: FoxPro Quits When It Runs Out of File Handles

	Article: Q141075
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When FoxPro runs out of file handles, it quits and displays the followin message
	instead of giving an error message stating that there are too many files open:
	
	  This program has performed an illegal operation and will be shut down
	
	CAUSE
	=====
	
	FoxPro is trying to get another file handle to display the error message. Error
	messages in version 3.0b are now memory-based instead of file-based, so the "too
	many files open" message is displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Visual
	FoxPro version 3.0b for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the following program:
	
	     CLOSE DATA ALL
	     ON ERROR *   && no error messages will be displayed
	     FOR I=1 TO 255
	       CREATE CURSOR "CURS"+ALLTRIM(STR(I)) (fld1 I, fld2 C(10))
	     ENDFOR
	     ON ERROR       && set error routines back to default
	
	2. After the program runs, add a few lines to it such as wait windows, and then
	  press CTRL+W to close the program.
	
	You may need to run the program more than once to see the failure. Trying to open
	other windows such as the debug window may also cause the error after the
	program has run.
	
	Additional query words: 3.00b VFoxWin buglist3.00 fixlist3.0b
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
