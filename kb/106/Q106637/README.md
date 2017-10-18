---
layout: page
title: "Q106637: FIX: Typing 80 Characters in a Watch Window Can Hang the VWB"
permalink: kb/106/Q106637/
---

## Q106637: FIX: Typing 80 Characters in a Watch Window Can Hang the VWB

	Article: Q106637
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Typing a string of 80 or more characters in the Watch window and pressing the
	ENTER key hangs the Visual Workbench (VWB) if the string of characters does not
	contain spaces or FORTRAN operators.
	
	RESOLUTION
	==========
	
	Avoid entering large blocks of non-FORTRAN text into the Watch window. This
	problem is typically caused by pasting from the clipboard, so do not paste into
	the Watch without being certain that the text in the clipboard is a FORTRAN
	expression.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" from
	\F32\BIN directory will show version 2.8 for FORTRAN PowerStation version 1.0,
	and it will show version 1.0f for the maintenance release version 1.0a.
	
	To duplicate the error, follow these steps:
	
	1. From the Visual Workbench, build a program in Debug mode and press the F8 key
	  once.
	
	2. Type a string of 80 or more alpha-numeric characters (A-Z and 0-9) into the
	  Watch window and press the ENTER key. The string should not contain spaces or
	  operators (*, -, +, and so forth).
	
	3. Because VWB is now hung, press CTRL+ALT+DEL to close the Workbench.
	
	4. Use CTRL+ALT+DEL to terminate any open F32DEBUG or WINTEE sessions.
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
