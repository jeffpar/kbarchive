---
layout: page
title: "Q218134: Error: SysTray.exe - DLL Initialization Failed After NT SP4 Inst"
permalink: /kb/218/Q218134/
---

## Q218134: Error: SysTray.exe - DLL Initialization Failed After NT SP4 Inst

	Article: Q218134
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Service Pack 4 on a computer running Windows NT Workstation
	4.0 with the Small Business Server client setup utilities, the following error
	message may be displayed prior to the automated restart that occurs at the end
	of the Service Pack installation:
	
	  SysTray.EXE - DLL initialization failed
	  The application failed to initialize because the window station is shutting
	  down.
	
	The amount of time that the error message is visible will depend on the system
	configuration. The error will usually remain visible for two to three seconds.
	
	CAUSE
	=====
	
	The error message is caused by the timing of the automated restart at the end of
	the service pack installation.
	
	RESOLUTION
	==========
	
	The error message is benign and can be ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.0,4.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
