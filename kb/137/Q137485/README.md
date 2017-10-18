---
layout: page
title: "Q137485: Hewlett-Packard Network Port Option May Not Be Available"
permalink: kb/137/Q137485/
---

## Q137485: Hewlett-Packard Network Port Option May Not Be Available

	Article: Q137485
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install the DLC protocol in Control Panel Networks, the Hewlett-
	Packard Network Port option may not appear as one of the Available Print
	Monitors. If you remove and re-install the DLC protocol and the Hewlett- Packard
	Network Port option is still not available, a network adapter setting may be
	incorrect.
	
	MORE INFORMATION
	================
	
	You can change the network adapter settings through the registry, provided only
	one network adapter is installed on the print device.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Control\Print\Monitors
	  \Hewlett-Packard Network Port\Options
	
	3. Select Adapter.
	
	4. From the Edit menu, select DWORD.
	
	5. Change the value to 0 and choose OK.
	
	6. Quit Registry Editor.
	
	7. Shutdown and restart Windows NT.
	
	Additional query words: prodnt hp hpmon
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
