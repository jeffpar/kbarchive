---
layout: page
title: "Q69690: Terminal Automatically Loads TERMINAL.TRM"
permalink: /kb/069/Q69690/
---

## Q69690: Terminal Automatically Loads TERMINAL.TRM

	Article: Q69690
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows Terminal is started from the File Manager or Program Manager, it
	automatically looks for and loads the TERMINAL.TRM settings file if one exists.
	
	You can use this feature to specify your preferred terminal settings; then, every
	time you start Terminal, it uses that configuration.
	
	MORE INFORMATION
	================
	
	Specify whatever settings you desire (for example, Communications, Modem
	Commands, Terminal Preferences, etc.) and save them to a file named TERMINAL.TRM
	in the default directory (usually C:\WINDOWS).
	
	Terminal automatically looks for this file in the default/current/working
	directory, and loads those settings on startup.
	
	NOTE: The TERMINAL.TRM file must be in default/current/working directory when you
	start Terminal. By default, this is the Windows directory, but if you specify a
	different directory in the "Working Directory" field (in Program Manager File
	Properties), Terminal looks for the TERMINAL.TRM file in that directory.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.1 wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
