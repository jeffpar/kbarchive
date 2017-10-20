---
layout: page
title: "Q125577: PC WSPlus: Schedule Access Library GP Faults"
permalink: /kb/125/Q125577/
---

## Q125577: PC WSPlus: Schedule Access Library GP Faults

{% raw %}

	Article: Q125577
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Schedule+ Access Libraries include sample Microsoft C and Microsoft Visual
	Basic applications. While running the C sample application, SALAPP.EXE, the
	following error can occur:
	
	  SALAPP caused a General Protection Fault in module SALAPP.EXE at 0001:58AF
	
	This error is most likely to occur while reading a meeting request sent to the
	user.
	
	NOTE: The Schedule+ Access Libraries are included in the Microsoft Mail for PC
	Networks Software Development Kit version 3.2.
	
	CAUSE
	=====
	
	This error message can be caused by coding errors in the STRUCTS.C file included
	with the sample. Any applications written using functions included in this file
	could also produce the same error.
	
	RESOLUTION
	==========
	
	There are several instances of the same error in the STRUCTS.C file. The error
	involves the use of the GlobalAlloc() function and subsequent usage of the
	_fstrcpy() function.
	
	The problem occurs because the lstrlen() function counts the characters in the
	string parameter but does not count the zero character that terminates the
	string. The _fstrcpy() will copy the string and the trailing null character that
	can be one more character than the GlobalAlloc() function allowed.
	
	To correct the code, update the STRUCTS.C file by adding one additional byte to
	the count returned by the lstrlen() function. The following is an example:
	
	(originally)
	
	     GlobalAlloc(GMEM_MOVEABLE,lstrlen(lpApptIn->lpszItemType));
	
	(change to)
	
	     GlobalAlloc(GMEM_MOVEABLE,lstrlen(lpApptIn->lpszItemType)+1);
	
	These changes need to be made in 14 places in the STRUCTS.C file; one for each
	occurrence of the lstrlen function. Search the file for lstrlen and correct the
	GlobalAlloc() function that contains each instance.
	
	MORE INFORMATION
	================
	
	The occurrence of a general protection fault (GP fault) is intermittent. This is
	because the GlobalAlloc function may allocate more memory than is requested in
	the call. The amount specified is the minimum amount that the function will
	allocate. The problem occurs frequently when the subject line of the meeting
	request is exactly 32 characters.
	
	
	Additional query words: schedule plus 1.00a salapp sal gp-fault
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100a
	Version           : WINDOWS:1.0a
	
	=============================================================================
	

{% endraw %}
