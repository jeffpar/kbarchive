---
layout: page
title: "Q138734: BUG: Cancel Doesn't Work in RESTORE MACROS FROM GETFILE()"
permalink: kb/138/Q138734/
---

## Q138734: BUG: Cancel Doesn't Work in RESTORE MACROS FROM GETFILE()

	Article: Q138734
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clicking the Cancel button in the dialog box launched by the following command
	re-opens the Find File dialog box.
	
	     RESTORE MACROS FROM GETFILE()
	
	Clicking the Cancel button a second time, re-opens the Find dialog box.
	
	Clicking the Cancel button a third time, causes this error:
	
	  File does not exist.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Enter the following line of code in the Command window:
	
	     RESTORE MACROS FROM GETFILE()
	
	2. Click the Cancel button in the Find dialog box. The Find dialog box
	  reappears.
	
	3. Click the Cancel button in the Find dialog box. The Find dialog box
	  reappears.
	
	4. Click the Cancel button in the Find dialog box. An error occurs:
	
	  File does not exist.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
