---
layout: page
title: "Q152297: PRB: Calling APRINTERS Function Causes Feature Not Available"
permalink: /kb/152/Q152297/
---

## Q152297: PRB: Calling APRINTERS Function Causes Feature Not Available

	Article: Q152297
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program calls the APRINTERS() function to place the names of printers
	currently installed into a memory variable array, Visual FoxPro generates the
	error number 1001 "Feature not Available."
	
	CAUSE
	=====
	
	This function is supported on the Windows platform only. The APRINTERS()
	function makes a call to the operating system to return the information about
	mounted printers. The Macintosh operating system does not provide this
	information. Thus, the APRINTERS function is not available in Visual FoxPro for
	Macintosh.
	
	STATUS
	======
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	If you are writing a cross-platform application, you can build a conditional
	structure that only includes calls to the APRINTERS function if you are running
	on the Windows platform.
	
	For example:
	
	     DO CASE
	      CASE _WINDOWS
	       <include your commands here>
	
	      CASE _MAC
	        <get information about the current printer>
	
	     ENDCASE
	
	Additional query words: VFoxmac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
