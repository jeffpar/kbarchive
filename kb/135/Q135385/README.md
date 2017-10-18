---
layout: page
title: "Q135385: FIX: CANCEL After &quot;Object in Use&quot; Error Closes Visual FoxPro"
permalink: kb/135/Q135385/
---

## Q135385: FIX: CANCEL After &quot;Object in Use&quot; Error Closes Visual FoxPro

	Article: Q135385
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
	
	After suspending an error, using the CLEAR ALL command produces this error:
	
	  Cannot clear the object in use.
	
	Using the CANCEL command after this error causes Visual FoxPro to close (crash).
	This happens only after using a version 2.x READ WHEN command.
	
	WORKAROUND
	==========
	
	There is no problem if you reverse the command sequence:
	
	     CANCEL
	        * Click OK to clear the "Cannot clear object in use" error message.
	     CLEAR ALL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Code to Reproduce Problem
	-------------------------
	
	  DEFINE WINDOW one FROM 1,1 TO 20,20 FLOAT
	  ACTIVATE WINDOW one
	  @ 1,1 GET x DEFA 1 NAME bob
	  READ WHEN test()
	
	  PROC test
	  jhjhj            && Random characters to generate error
	
	  * When the error dialog appears, select SUSPEND
	  * In the Command window, enter the following lines of code:
	
	  CLEAR ALL
	     * Click OK to clear the "Cannot clear object in use" error message.
	  CANCEL
	
	Additional query words: 3.00 3.00b VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
