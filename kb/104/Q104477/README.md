---
layout: page
title: "Q104477: FIX: FoxPro Calculator Returning Incorrect Percentages"
permalink: /kb/104/Q104477/
---

## Q104477: FIX: FoxPro Calculator Returning Incorrect Percentages

{% raw %}

	Article: Q104477
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FoxPro calculator returns the wrong values when the percent (%) sign is
	used. Incorrect values are consistently returned regardless of the numbers used
	in the calculation. For the numbers 2 and 3 divided by any number, the
	percentage returned appears to be half of what it should be. For higher numbers,
	it appears as if the calculator is actually inserting a MOD() function and
	returning a percentage of the remainder.
	
	RESOLUTION
	==========
	
	To work around this problem, choose the equal sign (=) instead of the percent
	sign, and then multiply by 100.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	NOTE: In Visual FoxPro to run the calculator, type the following in the Command
	window:
	
	  " ACTIVATE WINDOW CALCULATOR" (without the quotation marks)
	
	1. In the calculator, enter 1 divided by 2 and then choose the percent sign. The
	  correct value returned is 50.
	
	  NOTE: In Visual FoxPro for Windows, .02 is returned.
	
	2. Clear the value, enter 2 divided by 4, and then choose the percent sign. The
	  value returned is 25 (it should be 50).
	
	  NOTE: In Visual FoxPro for Windows, .08 is returned.
	
	Additional query words: VFoxWin FoxWin FoxDos 2.50 2.50a 2.50b buglist2.00 buglist2.50 buglist2.50a buglist2.50b buglist2.60 buglist2.60a fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : MS-DOS:2.0,2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
