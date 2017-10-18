---
layout: page
title: "Q84905: Startup Directory Doesn't Work in Standard on Novell"
permalink: kb/084/Q84905/
---

## Q84905: Startup Directory Doesn't Work in Standard on Novell

	Article: Q84905
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running MS-DOS applications in Microsoft Windows version 3.1 in standard
	mode on a Novell network, the Working Directory setting in the Program Item
	Properties dialog box, and the Start-up Directory setting in a PIF do not
	function if the directory specified is a network drive (not the local hard
	drive). This problem does not occur in 386 enhanced mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	WORKAROUND
	==========
	
	To work around this problem
	
	1. Create a batch file (for example, APP.BAT) that changes to the desired
	  directory, and then starts the MS-DOS application (for example, MYAPP.EXE).
	
	        CD\ 
	        U:
	        CD\DATA
	        C:\MYDIR\MYAPP.EXE
	
	2. Do one of the following:
	
	  a. Change the PIF's Program Filename to APP.BAT:
	
	        Program Filename:       APP.BAT
	        Windows Title:          MyApp
	        Optional Parameters:
	        Start-up Directory:
	
	     -or-
	
	  b. Modify the command line for the icon's properties to APP.BAT:
	
	        Description:            MyApp
	        Command Line:           APP.BAT
	        Working Directory:
	        Shortcut Key:
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
