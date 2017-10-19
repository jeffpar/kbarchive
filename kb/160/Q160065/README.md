---
layout: page
title: "Q160065: FIX: Recurring BROWSE and SEEK Cause FoxPro to Slow Down"
permalink: /kb/160/Q160065/
---

## Q160065: FIX: Recurring BROWSE and SEEK Cause FoxPro to Slow Down

	Article: Q160065
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
	
	An application running as an executable that frequently calls a BROWSE and SEEK
	command progressively gets slower after several iterations.
	
	CAUSE
	=====
	
	Visual FoxPro is not releasing memory properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Compile the following code into a 3.0 executable:
	
	        FOR i = 1 to 200
	          SEEK STR(i)
	          BROWSE NOWAIT
	          WAIT TIMEOUT 1
	          KEYBOARD '{CTRL+W}'
	        NEXT i
	
	2. Run the Executable.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
