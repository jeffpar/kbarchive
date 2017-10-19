---
layout: page
title: "Q151663: PRB: Memory Leak in MFC Using ODBC Oracle Driver on Win 95"
permalink: /kb/151/Q151663/
---

## Q151663: PRB: Memory Leak in MFC Using ODBC Oracle Driver on Win 95

	Article: Q151663
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10
	Operating System(s): 
	Keyword(s): kberrmsg kbnokeyword kbDatabase kbMFC kbODBC kbVC kbprb
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC ODBC application dynamically linked to an MFC DLL and connecting to an
	Oracle data source from a Windows 95 machine using the Intersolve 32-bit ODBC
	driver for Oracle, may display the following error messages in the output window
	of the debugger (with MFC tracing enabled) when exiting:
	
	  
	
	  The thread 0xFFFB9919 has exited with code -1 (0xFFFFFFFF).
	  Detected memory leaks!
	  Dumping objects ->
	  {203} normal block at 0x00650D10, 512 bytes long.
	  Data: <               > CD CD CD CD CD CD CD CD CD CD CD CD CD CD CD CD
	  Object dump complete.
	
	Object addresses and thread ID may be different. The same error messages may also
	appear when using DAO to access a linked table via an ODBC driver in an Oracle
	data source.
	
	CAUSE
	=====
	
	When the application connects to the data source, a thread is created that
	terminates when the application terminates. This causes DllMain in the MFC DLL
	to be called with DLL_PROCESS_DETACH from the secondary thread and causes the
	memory detection code to be executed before the memory is actually freed.
	
	RESOLUTION
	==========
	
	The error message refers to memory that is actually being freed, not a memory
	leak. The message can be safely ignored. This can be verified by setting a
	breakpoint in _AFX_THREAD_STATE destructor (AFXSTATE.CPP) and stepping through
	the code. In one of the cases, you should see that the following line is
	executed for the memory at the address that is supposed to be leaking:
	
	          free(m_pSafetyPoolBuffer);
	
	STATUS
	======
	
	This behavior is by design. However, the design was changed in Visual C++
	version 4.2, so this is no longer a problem.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, set up an Oracle data source on a Windows 95 machine
	with an Intersolve 32-bit ODBC driver and the proper SQL*Net components.
	Generate a default ODBC application ( SDI, "Database support, no file support"
	). Add the following code to the InitInstance() function:
	
	     CDatabase db;
	     db.Open(NULL); // select 32-bit Oracle data source at run-time
	     db.Close();
	     return FALSE;
	
	     /* Compile options needed: Standard
	     */ 
	
	Using the Visigenic 32-bit ODBC driver for Oracle produces similar error
	messages, but Visigenic currently does not support their driver on Windows 95.
	For more information on that issue, please refer to the following article in the
	Microsoft Knowledge Base:
	
	  Q140498 INF: Using the Visigenic Oracle Driver on WinNT & Win95
	
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kberrmsg kbnokeyword kbDatabase kbMFC kbODBC kbVC kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.00 4.10
	Issue type        : kbprb
	
	=============================================================================
	
