---
layout: page
title: "Q146447: FIX: BreakPoints not hit for long file name DLL/EXE"
permalink: kb/146/Q146447/
---

## Q146447: FIX: BreakPoints not hit for long file name DLL/EXE

	Article: Q146447
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrl kbDebug kbDLL kbInprocSvr kbVC400bug kbVC420fix kbBug kbGrpDSVC
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running in debug mode using a dynamically loaded dynamic link library (DLL)
	such as an OLE control with a long file name or an .exe file with a long file
	name, you may find that it doesn't break at set break points. You may be able to
	set break points both before starting and while it is running, but the debugger
	will not break on them.
	
	When starting the debug session, you may see the following message from the
	Microsoft Developer Studio:
	
	  
	
	  One or more breakpoints cannot be set and have been disabled.
	  Execution will stop at the beginning of the program.
	
	If you receive this message and then attempt to set a break point in your code,
	you will not be able to do so and the Developer Studio will beep. If this
	message does not appear, you will be able to set break points, but they will be
	ignored.
	
	This does not occur in Windows 95
	
	CAUSE
	=====
	
	The name of the DLL has more than eight characters.
	
	RESOLUTION
	==========
	
	Use DLL names of 8 characters or less.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.2.
	
	Additional query words: 4.00 4.10 vcfixlist420
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrl kbDebug kbDLL kbInprocSvr kbVC400bug kbVC420fix kbBug kbGrpDSVCCompiler kbNoUpdate kbISS 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC32bitSearch
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
