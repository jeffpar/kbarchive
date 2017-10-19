---
layout: page
title: "Q149616: FIX: Developer Studio May Hang When Debug Session Starts/Ends"
permalink: /kb/149/Q149616/
---

## Q149616: FIX: Developer Studio May Hang When Debug Session Starts/Ends

	Article: Q149616
	Product(s): Microsoft C Compiler
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC400bug kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting or ending a debugging session, Developer Studio hangs (doesn't
	respond to user input).
	
	CAUSE
	=====
	
	The problem occurs because there is a large amount of text to display in the
	Output window, and Developer Studio is in a state where it is unable to display
	it.
	
	Here are two scenarios where this problem will occur:
	
	- The problem can occur when you start debugging an application that implicitly
	  links to a large number of DLLs. You implicitly link to a DLL by linking with
	  the import library for the DLL. The problem has been known to occur with an
	  application that implicitly links to more than 100 DLLs.
	
	  In this scenario, the debugger is attempting to output a message similar to
	  this one:
	
	  LDR: LdrpMapDll Relocating: Base Name MYDLL.dll
	
	  This message indicates that the operating system is relocating the DLL to load
	  it at an address other than its default base address.
	
	- The problem can also occur when an application sends out a large number of
	  debug messages as it exits. These could be messages from the application
	  itself, from the C run-time (CRT) library, or from the MFC libraries. This
	  has been known to occur when an application has a large number of memory
	  leaks that are reported by the MFC or the CRT libraries as the application
	  exits.
	
	RESOLUTION
	==========
	
	For the first scenario, you could use the /BASE linker option when building the
	DLLs with which the application implicitly links. The /BASE option allows you to
	set a preferred base address for a .dll or .exe file. If you set a different
	base address for each DLL, the operating system will not need to relocate them
	when loading them, and Developer Studio will not need to send a message to
	indicate this. Using the /BASE option avoids the problem and allows the
	application to load more efficiently regardless of whether it is being debugged
	or not. For more information about the /BASE option, please refer to the online
	documentation.
	
	For second scenario, if the application being debugged is using MFC, you can
	temporarily turn off tracing output using the MFC Tracer application, If the
	application does not use MFC and the debug messages are coming from the CRT
	library, then you could use the _CrtSetReportMode and _CrtSetReportFile
	functions in the application. These functions could be used to redirect the
	messages to a file instead of the Developer Studio Output window. For more
	information on the CRT debug functions, please refer to the online
	documentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in version 4.0.
	
	
	MORE INFORMATION
	================
	
	Even though this bug has been fixed in version 4.1, there may be a noticeable
	delay when you start a debugging session when the application implicitly links
	to a large number of DLLs.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbide kbVC kbVC400bug kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
