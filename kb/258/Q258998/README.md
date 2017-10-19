---
layout: page
title: "Q258998: PRB: DateTime Subtraction May Not Produce an Exact Integer"
permalink: /kb/258/Q258998/
---

## Q258998: PRB: DateTime Subtraction May Not Produce an Exact Integer

	Article: Q258998
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 11-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When subtracting two DateTimes, the result is a floating point number. As such,
	the displayed value may not be the exact value. This may lead to further
	inaccuracies.
	
	CAUSE
	=====
	
	Floating point math is frequently inaccurate in any language.
	
	RESOLUTION
	==========
	
	When subtracting DateTimes, use ROUND(nDifference, 0) to ensure that you are
	working with the value you think you are.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To observe the problem, run the following code in the Command window:
	
	  lnDiff = {^2000-03-20 11:31:00} - {^2000-03-20 10:25:00}
	  ? lnDiff                      && 3960
	  DISPLAY MEMORY LIKE lnDiff    && 3959.99996513
	  ? INT(lnDiff)                 && 3960
	  ? INT(lnDiff / 60)            && 65
	  ? INT(ROUND(lnDiff, 0) / 60)  && 66
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
