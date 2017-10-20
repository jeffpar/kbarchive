---
layout: page
title: "Q138993: PRB: Print Break in MFC App Running in Windows NT 3.51 Checked"
permalink: /kb/138/Q138993/
---

## Q138993: PRB: Print Break in MFC App Running in Windows NT 3.51 Checked

{% raw %}

	Article: Q138993
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbDebug kbMFC kbOSWinNT351 kbPrinting kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While using the Visual C++ debugger, if you click Print or Print Preview in an
	MFC application running under Windows NT version 3.51 Checked Build, a message
	box appears:
	
	In the Visual C++ 2.x debugger, the message box contains:
	
	  Break caused by hard coded breakpoint instruction
	
	In the Visual C++ 4.0 debugger, the message box contains:
	
	  User breakpoint called from code at 0x<8-digit address>
	
	The following message is also printed in the Output Window of the debugger:
	
	  BASE: GlobalFree called with a locked object.
	
	CAUSE
	=====
	
	MFC queries an HDEVNAMES handle for information about the printer device. This
	information is obtained by making calls to GlobalLock to get a valid pointer to
	the DEVNAMES structure. Under Win32, it is not technically necessary to call
	GlobalUnlock for every GlobalLock, so MFC doesn't always do so.
	
	The Checked Build of Windows NT 3.51 provides debugging information that warns
	you when GlobalFree is called on an object that does not have a lock count of 0.
	When this occurs, it outputs a trace message and causes a hard coded break
	instruction to be executed.
	
	RESOLUTION
	==========
	
	The message and the break can be safely ignored. To continue with execution in
	the debugger, you can just click Go on the Debug menu, or press the F5 key.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 2.00 2.10 2.20 4.00 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kberrmsg kbprint kbDebug kbMFC kbOSWinNT351 kbPrinting kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
