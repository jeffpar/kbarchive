---
layout: page
title: "Q139026: DOC: Remote Debugging with TCP/IP Isn't Supported on Win32s"
permalink: /kb/139/Q139026/
---

## Q139026: DOC: Remote Debugging with TCP/IP Isn't Supported on Win32s

	Article: Q139026
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbdocerr kbDebug kbide kbVC400 kbVC410 kbVC420
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	When MSVCMON is run in a Win32s system, you will not see the TCP/IP protocol as
	an option for connection. The TCP/IP communication layer for MSVCMON is written
	for true 32-bit platforms and requires multi-threading support to operate.
	Because of this, the remote debug monitor (MSVCMON) does not support TCP/IP on
	Win32s. It only supports a serial connection for remote debugging. This
	information should be added to your Visual C++ 4.x documentation.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbdocerr kbDebug kbide kbVC400 kbVC410 kbVC420 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:4.0,4.1,4.2
	
	=============================================================================
	
