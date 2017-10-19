---
layout: page
title: "Q217437: FIX: Visual C++ Debugger Crashes on Breakpoint"
permalink: /kb/217/Q217437/
---

## Q217437: FIX: Visual C++ Debugger Crashes on Breakpoint

	Article: Q217437
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDebug kbide kbVC420bug kbVC500bug kbVC600bug kbVS600sp2 kbVS600SP1 kbVS
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set a breakpoint, the debugger might crash with the following MSDev.exe
	application error when the application hits the breakpoint:
	
	  The instruction at "0x52522680" referenced memory at "0x02010019". The memory
	  could not be "read".
	
	The crash usually happens when the Auto or Watch debug windows are open.
	
	RESOLUTION
	==========
	
	To work around this problem, close the Auto debug window before you hit the
	breakpoint. In some circumstances you might have to close the Watch debug window
	too.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDebug kbide kbVC420bug kbVC500bug kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
