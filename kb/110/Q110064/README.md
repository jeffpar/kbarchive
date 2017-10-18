---
layout: page
title: "Q110064: Bug: Appstart Crashes WordPerfect 6.0"
permalink: kb/110/Q110064/
---

## Q110064: Bug: Appstart Crashes WordPerfect 6.0

	Article: Q110064
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	
	APPSTART.EXE is a Windows utility provided with LAN Manager 2.2. It simplifies
	launching network applications from the Windows desktop by automatically
	connecting and disconnecting the network share(s) where applications reside.
	
	When you run WordPerfect 6.0 for Windows through APPSTART.EXE with:
	
	- MS-DOS 5.0, 6.0, or 6.2
	
	- LAN Manager 2.2
	
	- Windows version 3.1
	
	- Windows for Workgroups 3.1 or 3.11
	
	you receive this error message when you exit from WordPerfect 6.0:
	
	  WFWIN20 caused a segment load failure in the module MFWIN20.EXE at 0008:041E
	
	After the error message the system hangs. This happens only when you exit the
	program after starting it with APPSTART.EXE. Otherwise, WordPerfect for Windows
	6.0 works correctly.
	
	CAUSE
	=====
	
	Under investigation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Appstart version 1.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 2.20 2.2 wfw 3.1 3.11 wfwg
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
