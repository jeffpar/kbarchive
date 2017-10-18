---
layout: page
title: "Q139835: FIX: TTOD() Returns Incorrect Date with Time of 12:00:00 AM"
permalink: kb/139/Q139835/
---

## Q139835: FIX: TTOD() Returns Incorrect Date with Time of 12:00:00 AM

	Article: Q139835
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use TTOD() on a variable containing a time of 12:00:00 AM, TTOD()
	returns an incorrect date. If one second is added to the date value, TTOD()
	returns the correct date.
	
	CAUSE
	=====
	
	12 AM is considered to be the start of a new day, so at 12 AM, TTOD() should
	display the date for the next day. However, TTOD() miscalculates and incorrectly
	displays the date for the previous day.
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The TTOD() function returns a date value from a datetime function or value.
	
	Steps to Reproduce Problem
	--------------------------
	
	In the following example, a variable is set to 10/24/95 at 10 PM. Two hours are
	added to the value, one at a time. Then the date is checked to make sure it has
	switched to 10/25/95 12:00:00 AM.
	
	In the Command window, type the following commands:
	
	  x = {10/24/95 22:00:00} && Initialize date variable to 10 PM Oct 24, 1995
	  ? type("x")             && Should return 'T' for DateTime
	  ?x                      && Should return 10/24/95
	  x=x+3600                && Add one hour to the time
	  ?x                      && Should display 11 PM on Oct 24, 1995
	  x=x+3600                && Add another hour to the time
	  ?x                      && Should display 12 AM Oct 25, 1995
	  ?ttod(x)                && Will display 10/24/95 when you expect 10/25/95
	
	The following two lines show that adding one second to 10/25/95 12:00:00 AM does
	allow TTOD() to return 10/25/95 as expected:
	
	  x=x+1                   && Add one second for 12:00:01 AM Oct 25, 1995
	  ?ttod(x)                && Should return 10/25/95
	
	Additional query words: date
	
	======================================================================
	Keywords          : kbvfp kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
