---
layout: page
title: "Q198839: FIX: Problems with Asynchronous Break on Multiprocessor Machines"
permalink: /kb/198/Q198839/
---

## Q198839: FIX: Problems with Asynchronous Break on Multiprocessor Machines

{% raw %}

	Article: Q198839
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDebug kbVC500bug kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Debugging a multithreaded application on a multiprocessor machine may show that
	at some point the asynchronous break fails after a breakpoint is encountered
	more than once. The CPU usage shows 100 percent busy for all processors in the
	application that is being debugged. However, this application is not running any
	useful code and you can not break into it.
	
	In some cases, you may find that the debugger does not break at a breakpoint.
	
	CAUSE
	=====
	
	This occurs because of the way that a breakpoint is marked and resumed in a
	multithreaded application, which affects thread resume operations in a
	multiprocessor machine.
	
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
	Keywords          : kbservicepack kbDebug kbVC500bug kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
