---
layout: page
title: "Q131146: PRB: CLEAR ALL in Cleanup Code of FoxPro 2.6 Form Causes Error"
permalink: kb/131/Q131146/
---

## Q131146: PRB: CLEAR ALL in Cleanup Code of FoxPro 2.6 Form Causes Error

	Article: Q131146
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If in Visual FoxPro, you execute a FoxPro version 2.6 screen that has a CLEAR
	ALL command in the Cleanup code, the following error message appears:
	
	  Cannot clear the object in use.
	
	CAUSE
	=====
	
	As stated in the Visual FoxPro Help file topic for the CLEAR command:
	
	CLEAR ALL within an event or method for an active control or object generates a
	Visual FoxPro error message. An object type memory variable cannot be released
	from memory when its associated control or object is active.
	
	STATUS
	======
	
	This behavior is by design.
	
	In FoxPro version 2.6, CLEAR ALL releases everything from memory except system
	memory variables.
	
	In Visual FoxPro version 3.0, CLEAR ALL releases everything from memory except
	system memory variables and objects currently in use.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
