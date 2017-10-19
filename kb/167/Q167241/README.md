---
layout: page
title: "Q167241: BUG: API Fails Passing Very Small Double Datatypes to VFP"
permalink: /kb/167/Q167241/
---

## Q167241: BUG: API Fails Passing Very Small Double Datatypes to VFP

	Article: Q167241
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aBUG kbvfp500bug
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling an API that returns a very small double value, Visual FoxPro
	interprets this value as zero.
	
	RESOLUTION
	==========
	
	NOTE: The file referenced in this article as Project1.dll is for example
	purposes only. Project1.dll is theoretical API library not installed by any
	version of Microsoft Visual FoxPro.
	
	As a workaround, call the function through the FoxTools library.
	
	This workaround example is based on the "Steps To Reproduce Behavior" section of
	this article. The code in this example is case sensitive; therefore, it must be
	typed exactly as it appears below:
	
	     SET LIBRARY TO SYS(2004)+"FOXTOOLS"
	     hh=REGFN32("getVal","C","F","Project1.dll")
	     x = "0.00000000000000000000000000000000085555"
	     ?CALLFN(hh,x)
	
	This returns the correct value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Consider a custom DLL Project1.dll containing the function getVal. Function
	getVal takes a number in text format and converts it to a double, which it
	returns to the calling procedure.
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the problem, type the following code:
	
	     DECLARE DOUBLE getVal IN Project1.dll STRING
	     x = "0.00000000000000000000000000000000085555"
	     ? getVal(x)
	
	This returns 0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aBUG kbvfp500bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	
