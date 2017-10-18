---
layout: page
title: "Q189036: PRB: WinDBG for WinCe 2.0 Does Not Support Named Pipes"
permalink: kb/189/Q189036/
---

## Q189036: PRB: WinDBG for WinCe 2.0 Does Not Support Named Pipes

	Article: Q189036
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows CE, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article applies to the WinDBG debugger for Windows CE, version 2.0. When
	you use named pipes for a transport layer, the following error occurs:
	
	  Transport DLL "TLPIPE.DLL" cannot connect to remote computer.
	
	CAUSE
	=====
	
	WinDBG for Windows CE, version 2.0 does not support using named pipes for a
	transport layer. WinDBG allows the user to change the transport layer to TLPIPE
	even though it is not supported.
	
	RESOLUTION
	==========
	
	Currently, the only way to perform remote debugging with WinDBG is to use a
	Serial cable through the COM port.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: WinDebug kbDebug kbWinCE200
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVCsearch kbAudDeveloper kbZNotKeyword3 kbVC200WinCE
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
