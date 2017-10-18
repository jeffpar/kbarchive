---
layout: page
title: "Q39908: Time Functions Calculate for Daylight Savings Time"
permalink: kb/039/Q39908/
---

## Q39908: Time Functions Calculate for Daylight Savings Time

	Article: Q39908
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	The Microsoft time functions calculate for daylight saving time. In
	particular, mktime() will set the hour ahead or back one hour
	according to the rules of daylight saving time. The only way to change
	the dates that the time functions use in calculating daylight saving
	time is to get the run-time library source code available for the time
	functions and modify the routine _isindst() in the file TZSET.C.
	
	Additional query words: kbinf 1.00 1.50 6.00 6.00a 6.00ax 7.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	
