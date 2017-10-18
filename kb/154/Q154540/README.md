---
layout: page
title: "Q154540: Printer Setup Looks for Drivers on Network Share"
permalink: kb/154/Q154540/
---

## Q154540: Printer Setup Looks for Drivers on Network Share

	Article: Q154540
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbsetup kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you attempt to install a printer on a computer using Microsoft Windows NT
	version 4.0, Setup may attempt to retrieve required driver files from a network
	share instead of a local source.
	
	MORE INFORMATION
	================
	
	If you install Microsoft Windows NT Version 4.0 from a network share, the
	registry will be updated with the installation path. Although attempts to
	install other software components may seek a local device, the printer setup
	will default to the installation path stored in the registry.
	
	To change this path you must edit the registry value:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Locate the following registry value in the HKEY_LOCAL_MACHINE subtree:
	
	  \Software\Microsoft\Windows\CurrentVersion\Setup\Installation Sources
	
	3. Change the string to include the installation path to be used as the default.
	
	4. Quit the Registry Editor.
	
	NOTE: The following registry value
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\ 
	
	     WindowsNT\CurrentVersion\SourcePath
	
	refers to the default source for other installable software components. This
	value may also be changed to a valid local path.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbprint kbsetup kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
