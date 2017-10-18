---
layout: page
title: "Q190820: BUG: SYS(2014) Allows Wrong Data Type for Second Parameter"
permalink: kb/190/Q190820/
---

## Q190820: BUG: SYS(2014) Allows Wrong Data Type for Second Parameter

	Article: Q190820
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Passing anything other than a character data type as the second parameter to the
	SYS(2014) function does not result in a "Function argument value, type, or count
	is invalid" error even though the data type is incorrect. Under some
	circumstances, passing an incorrect data type may cause a Fatal Exception error.
	
	RESOLUTION
	==========
	
	You must check the data type of the second parameter before passing the value to
	the SYS(2014) function. Then you can use the TYPE() function to verify that the
	data type of this parameter is character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following line of code from the Command window:
	
	        SYS(2014,"TEST",.F.)
	
	RESULTS: You do not get the error message mentioned in the SYMPTOMS section, and
	a Fatal Exception may occur.
	
	Additional query words: kbVFp600bug kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
