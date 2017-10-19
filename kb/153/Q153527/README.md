---
layout: page
title: "Q153527: PRB: PRTINFO() Function Returns an Incorrect Value"
permalink: /kb/153/Q153527/
---

## Q153527: PRB: PRTINFO() Function Returns an Incorrect Value

	Article: Q153527
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PRTINFO(2) function returns an incorrect value when the current printer
	driver is set to "Canon Bubble-Jet BJ330" and a user-defined page size (B4 :
	250x354mm) is used.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The PRTINFO() function is used to return the current FoxPro for Windows printer
	settings. It can accept the values 1, 2, 3, or 4 as parameters. When 1 is passed
	to PRTINFO(), the page orientation for the printer is returned if it can be
	determined. When 2 is passed to PRTINFO(), the paper size of the printer is
	returned if it can be determined. If PRTINFO() cannot determine the paper size,
	it should return -1. In this case, PRTINFO(3) and PRTINFO(4) can be used to
	determine the paper length and width, respectively.
	
	If the current printer is a Canon Bubble-Jet BJ330 and a user-defined page size
	is B4 (250x354mm) for that printer, PRTINFO(2) will return an incorrect value.
	This incorrect value is not documented. PRTINFO(2) should return 12.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
