---
layout: page
title: "Q240699: PC WSPlus: Error Message &quot;Schedule Plus Caused a GPF in Dem..."
permalink: /kb/240/Q240699/
---

## Q240699: PC WSPlus: Error Message &quot;Schedule Plus Caused a GPF in Dem...

	Article: Q240699
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 1.0,95,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 1.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Schedule+, it stops responding with the following error message:
	
	  Schedule + caused a GPF in demilyr.dll
	
	CAUSE
	=====
	
	A corrupted appointment or meeting is in the calendar.
	
	RESOLUTION
	==========
	
	To resolve this problem, reset the calendar contents:
	
	1. Export the schedule to a .sch file.
	
	2. Rename both local and server .cal files.
	
	3. Create new .cal files.
	
	4. Test.
	
	5. Import the .sch file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch
	Version           : :1.0,95,98
	Issue type        : kbprb
	
	=============================================================================
	
