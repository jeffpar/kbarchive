---
layout: page
title: "Q190536: FIX: Invalid Page Fault in Msvcrt.dll"
permalink: kb/190/Q190536/
---

## Q190536: FIX: Invalid Page Fault in Msvcrt.dll

	Article: Q190536
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCRT kbVC600 kbVS600sp2 kbVS600sp2bug kbVS600sp2fix kbVS600SP1 kbVS600sp
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the run-time libraries (Msvcrt.dll) from Visual C++ 6.0 on
	your computer, the applications that previously ran correctly fail and an
	application error similar to the following appears:
	
	  <Application Name> caused an invalid page fault in module MSVCRT.DLL at
	  XXXX:XXXXXXXX.
	
	CAUSE
	=====
	
	One possible cause of this error is that the application has written past the
	block of memory that is owned by a particular object. The small-block heapmemory
	manager that ships with the Visual C++ 6.0 run-time libraries incorporates heap
	control structures within the small-block heap. Overwriting the memory block
	changes small-block heap pointer addresses, effecting a bad pointer and possibly
	a fault in Msvcrt.dll when the pointer is referenced.
	
	RESOLUTION
	==========
	
	Application vendors need to ensure that their applications are using the C
	run-time small-block heap correctly.
	
	To help customers who are experiencing this problem in their third-party
	applications, Microsoft has released a new C run-time dynamic-link library
	(DLL), Msvcrt.dll, which implements two heap managers: the Visual C++ version
	5.0-compatible heap manager and the Visual C++ version 6.0-compatible heap
	manager. Msvcrt.dll detects which version of Visual C++ your application is
	built with, and uses the appropriate heap manager for that application. If the
	version is Visual C++ 6.0 or greater, the Visual C++ 6.0-compatible heap manager
	is used; if the version is earlier than version 6.0, the Visual C++
	5.0-compatible heap is used.
	
	Visual Studio 6.0 users can get the new Msvcrt.dll file by installing the latest
	Microsoft Visual Studio Service Pack. If you are not using Visual Studio,
	install the Microsoft Libraries Update; for additional information, see the
	following article in the Microsoft Knowledge Base:
	
	  Q197298 INFO: Microsoft Libraries Update: What, Where, Why
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3 (SP3). For more
	information about Visual Studio service packs, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The small-block heap comprises allocations that are less than 1K in size. Bugs
	of this nature might behave differently in older versions of the C run-time
	library because the control structures are located in a different and separate
	location in memory. Often, these types of coding errors result in the corruption
	of another block of memory and possibly a crash. The sequence of events that
	lead to an access violation are different when you use the Visual C++ 6.0 C
	run-time libraries.
	
	You can control these types of problems by using the debug heap. Please see the
	online documentation titled, "Using the Debug Heap." You need to enable the
	debug heap by calling _CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF
	|_CRTDBG_CHECK-_ALWAYS_DF) at process initialization in a debug build of your
	application.
	
	
	Additional query words: SP3 crt msvcirt
	
	======================================================================
	Keywords          : kbservicepack kbCRT kbVC600 kbVS600sp2 kbVS600sp2bug kbVS600sp2fix kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
