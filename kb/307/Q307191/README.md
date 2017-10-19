---
layout: page
title: "Q307191: BUG: VB 5.0 Setup.exe Consumes CPU, Installation Inefficient"
permalink: /kb/307/Q307191/
---

## Q307191: BUG: VB 5.0 Setup.exe Consumes CPU, Installation Inefficient

	Article: Q307191
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use the Visual Basic 5.0 Setup Wizard to create the setup program for
	your application. During the installation process, you may notice that Setup.exe
	consumes a lot of CPU time even though Setup1.exe is the process that performs
	the main installation tasks.
	
	CAUSE
	=====
	
	When you run a setup program build with the Visual Basic Setup Wizard, the setup
	program runs in two stages:
	
	1. The Setup.exe (or "bootstrap) program runs to ensure that all system
	  dependencies are in place. If so, Setup.exe starts Setup1.exe.
	
	2. While Setup1.exe runs the portion of the setup that is based on the graphical
	  user interface (GUI), Setup.exe waits in the background for Setup1.exe to
	  finish. Setup.exe waits in the background so that it can clean up after
	  Setup1.exe.
	
	Setup.exe waits by means of a polling loop. This polling loop calls the
	PeekMessage function with the PM_NOREMOVE value several times, calls the Yield
	function, and then checks the exit code of the Setup1.exe process to see if
	Setup1.exe has exited. If you watch this process in PerfMon on the system,
	Setup.exe consumes all of the free CPU cycles as part of the polling loop.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	NOTE: You must have a Visual Studio license agreement to obtain this fix.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time     Version      Size     File name
	  ----------------------------------------------------
	  31-Aug-2001 11:02am  5.0.92.31    87.5 KB  Setup.exe     
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: wastes CPU time
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
