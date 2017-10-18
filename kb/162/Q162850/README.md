---
layout: page
title: "Q162850: KiXtart Environment Variables Do Not Exist After Script Runs"
permalink: kb/162/Q162850/
---

## Q162850: KiXtart Environment Variables Do Not Exist After Script Runs

	Article: Q162850
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0;Windows:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Environment variables set up through your KiXtart Script do not exist after the
	script terminates. When you run the KiXtart logon script on a computer running
	Windows 95, the environment variables appear to work properly.
	
	CAUSE
	=====
	
	The Set command in Windows 95 is only active during the same MS-DOS session.
	When the current session is closed, the variable is no longer in memory.
	
	NOTE: This is different behavior than from a computer running Windows NT Server
	version 4.0.
	
	RESOLUTION
	==========
	
	To have environment variables for use outside the logon script, use Winset.exe
	from the Windows 95 compact disc to set global environment variables.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q162793 How to Setup KiXtart Logon Scripts on a Windows 95 Client
	
	MORE INFORMATION
	================
	
	The following is an excerpt from the KiXtart Documentation:
	
	  Only programs that specifically support this feature (such as ProgMan and
	  TaskMan) will have their environment updated. When in doubt about a
	  particular program, please ask the supplier of the program whether or not his
	  program supports the "WM_WININICHANGE" message for changes to the
	  environment.
	
	The product mentioned here is manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WinNT:4.0;Windows:95
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
