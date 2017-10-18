---
layout: page
title: "Q166504: PRB: MFC and CRT Must Match in debug/release and static/dynamic"
permalink: kb/166/Q166504/
---

## Q166504: PRB: MFC and CRT Must Match in debug/release and static/dynamic

	Article: Q166504
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbCRT kbMFC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MFC and CRT (C Run-Time) libraries do not match in debug/release or in
	static/dynamic, you get errors such as the following when linking:
	
	  nafxcwd.lib(appcore.obj) : error LNK2001: unresolved external symbol ___argc
	
	Many other strange problems may erupt during build or runtime: memory corruption,
	memory leaks, complaints from the debug C Run-Time libraries during run-time,
	and more.
	
	CAUSE
	=====
	
	When building an MFC application or DLL, you need to insure that all relevant
	libraries are in sync:
	
	- If you have selected to build an application using MFC in the Shared Library,
	  then you must also use the dynamic version of the C Run-Time (MSVCRT.DLL).
	
	- If you have selected to build a debug MFC application, then you must also use
	  the debug version of the C Run-Time. Similarly, release MFC applications must
	  use the non-debug version of the C Run-Time.
	
	- If your debug MFC application uses extension DLLs, every extension DLL must
	  be a debug build as well. Again, release apps must match release extension
	  DLLs. The type of C Run-Time library is fixed. Extension DLLs and the
	  applications which use them must all use MFC in the shared library, which
	  requires the dynamic DLL version of the C Run-Time.
	
	- If you are linking to any static libraries that also link to MFC or the CRT,
	  you should ensure that every static library shares the same properties
	  (debug/release, CRT-static/dynamic) as the application.
	
	RESOLUTION
	==========
	
	To change the type of C Run-Time library used by an application or DLL, go to
	the Build/Project settings property sheet and switch to the C/C++ tab. On the
	C/C++ page, choose the "Code Generation" category. Change the value of the "Use
	run-time library" listbox. Pay careful attention to make this specific for each
	configuration; only one configuration, such as "Win32 (80x86) Debug," should be
	selected when you change this value.
	
	  Debug, shared library MFC applications - "Debug Multithreaded Dll."
	
	  Release, shared library MFC applications - "Multithread Dll."
	
	  Debug, static library MFC applications - "Debug Multithreaded."
	
	  Release, static library MFC applications - "Multithreaded."
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information on C Run-Time options and MFC, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q126646 PRB: Error Msg: LNK2001 on __beginthreadex and __endthreadex
	
	  Q128641 The /Mx Compiler Options and the LIBC, LIBCMT, MSVCRT Libs
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbCRT kbMFC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
