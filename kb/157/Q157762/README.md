---
layout: page
title: "Q157762: FIX: Invalid Page Fault After Summing Currency Field of Cursor"
permalink: /kb/157/Q157762/
---

## Q157762: FIX: Invalid Page Fault After Summing Currency Field of Cursor

	Article: Q157762
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After using the CALCULATE command to SUM the contents of a currency field in a
	cursor file, and storing that sum in a variable, the resulting variable may
	cause system errors in subsequent operations. For example, one error is as
	follows:
	
	  Vfp.exe caused an Invalid Page Fault
	
	WORKAROUND
	==========
	
	Do one of the following:
	
	1. Use the SET TALK ON command.
	
	-or-
	
	2. Change the field type to something other than currency.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sequence of commands result in the error described above:
	
	     SET TALK OFF
	     CREATE CURSOR test (nAmount Y)
	     CALCULATE ALL SUM(nAmount) TO nTotal
	     ? nTotal # 0
	
	Make one of the changes below to work around the problem:
	
	1. Change the line "SET TALK OFF" to "SET TALK ON."
	
	-or-
	
	2. Change the field type in the CREATE CURSOR command to something other than
	  currency (Y).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
