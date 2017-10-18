---
layout: page
title: "Q318991: FIX: Memory Leak with Function in SELECT with ORDER BY"
permalink: kb/318/Q318991/
---

## Q318991: FIX: Memory Leak with Function in SELECT with ORDER BY

	Article: Q318991
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbDatabase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call a function in a SELECT statement in which an error occurs, and the
	SELECT statement uses an ORDER BY clause, Visual FoxPro does not release the
	memory that was used to process the SELECT statement.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	Quit Visual FoxPro for the memory to be released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Paste the following code in a program (.prg) file, and then run the program
	  from the Command window:
	
	  ON ERROR *
	  CLOSE DATABASES ALL
	  DELETE FILE testtab1.DBF
	  CREATE TABLE testtab1 (longfield c(254))
	  FOR T=1 TO 10000
	     SELECT * FROM testtab1 ORDER BY UPPER(longfield)
	  ENDFOR
	  RETURN
	
	2. Press CTRL+ALT+DELETE to open Task Manager, and then note the amount of
	  memory that is available.
	
	3. Run the program again and note the amount of memory that is available. It
	  will be approximately 180 MB less than the amount of memory that was
	  available before the program was run.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
