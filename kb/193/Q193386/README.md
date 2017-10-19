---
layout: page
title: "Q193386: MSJET35.dll Error Installing Microsoft Office 97 SR2"
permalink: /kb/193/Q193386/
---

## Q193386: MSJET35.dll Error Installing Microsoft Office 97 SR2

	Article: Q193386
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Office 97 SR2, you receive the following error message:
	
	  Error title: Microsoft Office 97 Setup
	  Setup cannot register MSJET35.dll in the system registry because an older
	  version is in use. Close all applications and try again.
	
	You are given two choices: Retry and Cancel.
	
	If you click Retry, the error message persists. If you click Cancel, Office Setup
	quits.
	
	CAUSE
	=====
	
	The Msjet35.dll file is in use by the Terminal Server Licensing service or
	another program.
	
	RESOLUTION
	==========
	
	Terminal Server
	---------------
	
	To work around this issue, temporarily stop the Terminal Server licensing
	Service, and select RETRY.
	
	Windows 95
	----------
	
	1. Restart your computer to a command prompt by restarting the computer,
	  pressing the F8 key when you see the "Starting Windows 95" message, and then
	  choosing Command Prompt Only from the Startup menu.
	
	2. Rename the Msjet35.dll file.
	
	3. Restart the computer normally, and then start Office Setup again.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
