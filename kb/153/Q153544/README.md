---
layout: page
title: "Q153544: Starting 16-Bit WOW Subsystem on Windows NT Server"
permalink: kb/153/Q153544/
---

## Q153544: Starting 16-Bit WOW Subsystem on Windows NT Server

	Article: Q153544
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may want to have the 16-bit Windows on Windows subsystem start automatically
	when you start up the Windows NT Server. Although this is the default on Windows
	NT workstation, it is not the default on Windows NT Server. A change in the
	registry is required to make the Windows on Windows subsystem start on boot.
	This change is also required in order to start any 16-bit processes not started
	from the GUI interface, if it is the first 16- bit process started on Windows
	NT.
	
	MORE INFORMATION
	================
	
	To start the Windows on Windows subsystem automatically on startup, add the
	following command to the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey in the
	  system registry:
	
	  System/Software/Microsoft/Windows NT/CurrentVersion/Winlogon
	
	3. Edit the value Userinit and add ",win.com wowexec" to the end of the string.
	
	4. Restart the computer.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
