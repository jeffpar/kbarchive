---
layout: page
title: "Q166217: PRB: ATL EXE Server Built On Windows 95 Errors While Registering"
permalink: kb/166/Q166217/
---

## Q166217: PRB: ATL EXE Server Built On Windows 95 Errors While Registering

	Article: Q166217
	Product(s): Microsoft C Compiler
	Version(s): 2.1,3.0
	Operating System(s): 
	Keyword(s): kbATL210 kbCOMt kbRegistry kbOSWin95 kbATL300 kbGrpDSMFCATL
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building an Active Template Library (ATL) COM EXE server on a machine
	running Windows 95, you might get the message box that your server is linked to
	missing export from OLE32.DLL : CoSuspendClassObjects.
	
	CAUSE
	=====
	
	_WIN32_WINNT is defined in the Stdafx.h file and the problem is caused by the
	following code in the generated project source file:
	
	     #if _WIN32_WINNT >= 0x0400
	        if (CoSuspendClassObjects() == S_OK)
	           PostThreadMessage(dwThreadID, WM_QUIT, 0, 0);
	     #else
	        PostThreadMessage(dwThreadID, WM_QUIT, 0, 0);
	     #endif
	
	It is caused by the definition of _WIN32_WINNT in Stdafx.h. In ATL 1.1 for Visual
	C++ 4.2, this was not defined automatically, so users had to define it
	themselves if they were using Windows NT 4.0 or Windows 95 with DCOM. The
	majority of people will be targeting Windows NT 4.0 or Windows 95 with DCOM, so
	it is automatically defined.
	
	RESOLUTION
	==========
	
	If you want to develop under Windows 95, you can simply remove the macro from
	the generated Stdafx.h file. The problem also goes away when DCOM is installed
	on Windows 95.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new ATL COM Project on Windows 95.
	
	2. Choose EXE + Finish.
	
	3. Build the project.
	
	The output window contains the following text:
	
	  Linking....
	  Performing registration
	  A device attached to the system is not functioning.
	  Server registration done!
	
	Then the message box pops up informing you that the server EXE is linked to
	missing export OLE32.DLL : CoSuspendClassObjects.
	
	Additional query words: kbATL210 kbATL300 CoSuspendClassObjects kbfasttip kbctrl kbserver kbinternet
	
	======================================================================
	Keywords          : kbATL210 kbCOMt kbRegistry kbOSWin95 kbATL300 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL300 kbATL210
	Version           : :2.1,3.0
	Issue type        : kbprb
	
	=============================================================================
	
