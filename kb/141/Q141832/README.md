---
layout: page
title: "Q141832: How to Change the Boot Disk Order with Multiple SCSI Adapters"
permalink: kb/141/Q141832/
---

## Q141832: How to Change the Boot Disk Order with Multiple SCSI Adapters

	Article: Q141832
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.00
	Operating System(s): 
	Keyword(s): kbnetwork kbhowto
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you add multiple SCSI adapters with Windows NT, it is possible to give disk
	0 a drive letter other than C:.
	
	This is because Windows NT gives the drive letters according to the order that
	the SCSI device driver is loaded, which is determined by the tag order of that
	driver. By changing the tag order of that driver, you can change the order of
	which driver is loaded.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \System\CurrentControlSet\Services\%adaptername%
	
	  You will see a parameter called TAG on the right-hand side of the split
	  screen.
	
	3. Select the TAG value, and press ENTER to open the DWORD editor.
	
	4. Reset the values in the fields. The lowest number should be the adapter you
	  want to have initialized first.
	
	5. Shut down and restart Windows NT.
	
	6. Run Disk Administrator to verify changes were made correctly.
	
	
	======================================================================
	Keywords          : kbnetwork kbhowto 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.00
	
	=============================================================================
	
