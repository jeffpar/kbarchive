---
layout: page
title: "Q126646: PRB: Error Msg: LNK2001 on &#95;&#95;beginthreadex and &#95;&#95;endthreadex"
permalink: /kb/126/Q126646/
---

## Q126646: PRB: Error Msg: LNK2001 on &#95;&#95;beginthreadex and &#95;&#95;endthreadex

	Article: Q126646
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbLinker kbMFC kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrp
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling an MFC application using the single-threaded run-time library,
	you receive the following two unresolved external error messages:
	
	  
	
	  nafxcwd.lib(thrdcore.obj) : error LNK2001:
	   unresolved external symbol "__beginthreadex"
	
	  
	
	  nafxcwd.lib(thrdcore.obj) : error LNK2001:
	   unresolved external symbol "__endthreadex"
	
	CAUSE
	=====
	
	Starting with version 3.0, all MFC classes are "thread safe" and require the
	multi-threaded run-time libraries to link successfully. Many people try to use
	the single-threaded run-time libraries because they assume these libraries are
	needed to enable the application to run in Win32s. This is not the case. MFC
	versions 3.0 and later will use a single thread, so as long as you are not
	creating additional threads in the application, the application will run under
	Win32s.
	
	RESOLUTION
	==========
	
	To avoid these unresolved external errors, do not set the Project Settings to
	Single-Threaded for an MFC version 3.0 or later application. This setting can be
	changed by doing the following:
	
	On Visual C 2.x, 5.0, and 6.0:
	
	1. Select the Project menu, and then continue Steps 2 through 5 below.
	
	On Visual C 4.x:
	
	1. Select the Build menu.
	
	2. Select the Settings... option.
	
	3. Select the C/C++ tab.
	
	4. Select Code Generation on the Category list box.
	
	5. Finally, make a selection other than Single-Threaded on the "Use Run Time
	  Library" list box.
	
	To set the option in Visual C++ .NET, read the online help topic under "Setting
	Visual C++ Project Properties".
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For Win32s, MFC versions 3.0 and later do not create additional threads.
	However, the MFC does make use of Thread Local Storage (TLS) in the
	multithreaded libraries to provide per-process data in DLLs that are used by
	multiple applications under Win32s.
	
	In the Project Settings dialog box, if you select the run-time library option to
	link "Multithreaded using DLL," you can take advantage of using the shared DLL,
	MSVCRTx0.DLL (where "x" represents the major version of Visual C++). There are
	separate versions of MSVCRTx0.DLL for Windows NT and Win32s that cannot be
	interchanged. "Multithreaded using DLL" is required when building an AFXDLL.
	
	Linking to the multithreaded libraries may cause multiple defined symbol errors.
	This usually occurs when the application uses user-created or third-party static
	libraries that were created as single-threaded.
	
	The best solution in this case is to rebuild the static libraries to use the same
	library options as MFC (either /MT or /MD, depending on which MFC lib is used).
	
	In this case, you may be able to use /NOD:LIBC.LIB. However, if the static
	library accesses any static global C Run-Time data such as _errno or stdin, you
	will get unresolved externals on these symbols.
	
	One solution which will always work is to isolate the single-threaded code into a
	DLL, and call it, protected by semaphores, from the multithreaded MFC code.
	
	
	REFERENCES
	==========
	
	For more information about the run-time library options, see the online help
	topic for the compiler options /MT, /MD.
	
	Additional query words: 3.00 9.00
	
	======================================================================
	Keywords          : kbCompiler kbLinker kbMFC kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
