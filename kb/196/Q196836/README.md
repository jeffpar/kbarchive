---
layout: page
title: "Q196836: PRB: MFC Socket Functions Fail from ExitInstance"
permalink: /kb/196/Q196836/
---

## Q196836: PRB: MFC Socket Functions Fail from ExitInstance

{% raw %}

	Article: Q196836
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDLL kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbWinsock kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
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
	
	When you call MFC socket functions from ExitInstance of a DLL, the functions may
	fail and return an error.
	
	CAUSE
	=====
	
	In an MFC DLL, the CWinApp::ExitInstance function is called from the DllMain
	function in response to the DLL_PROCESS_DETACH case.
	
	The MFC socket functions call the WinSock APIs implemented in wsock32.dll. When
	an application shuts down, the DllMain with DLL_PROCESS_DETACH of the WinSock
	DLL may be called before the DllMain of the MFC regular DLL. This can cause some
	process specific information to be lost.
	
	NOTE: This problem applies to non-MFC DLLs and non-MFC sockets as well.
	
	RESOLUTION
	==========
	
	Do not call socket functions from CWinApp::ExitInstance (DLL_PROCESS_DETACH).
	Provide a cleanup function that the application can call to perform the last
	socket functions.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A common mistake is to call the CSocket::Close (or CAsyncSocket::Close) function
	in CWinApp::ExitInstance. This can generate an assertion in sockcore.cpp line
	856 in Microsoft Visual C++ 5.0, and line 667 in Microsoft Visual C++ 6.0.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDLL kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbWinsock kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
