---
layout: page
title: "Q162168: DLC Printers Show &quot;Status Unknown&quot; After Restarting Spooler"
permalink: /kb/162/Q162168/
---

## Q162168: DLC Printers Show &quot;Status Unknown&quot; After Restarting Spooler

	Article: Q162168
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbsetup
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After restarting the spooler service, all DLC print queues show "Status
	Unknown." The Application Event Log shows the following data:
	
	  Event ID: 1002
	  Source:   hpmon
	  Type:     Error
	  Category: None
	
	  OpenAdapter failed with error (0x015E). Make sure the DLC protocol is
	  properly installed.
	
	  Event ID: 1050
	  Source:   hpmon
	  Type:     Error
	  Category: None
	
	  The DLC protocol is not loaded. Make sure the DLC protocol is properly
	  installed.
	
	CAUSE
	=====
	
	The DLC adapter was moved from primary to secondary and there is no secondary
	adapter.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious system-wide
	problems that may require you to reinstall Windows NT. Microsoft cannot
	guarantee that problems resulting from the incorrect use of Registry Editor can
	be solved. Use Registry Editor at your own risk.
	
	To change the adapter selected back to primary (0):
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  \SYSTEM
	  \CurrentControlSet
	  \Control
	  \Print
	  \Monitors
	  \Hewlett-Packard Network Port
	  \Options
	
	3. Double-click Adapter:REG_DWORD:0x1.
	
	4. In the DWORD Editor dialog box, change data from 1 to 0 and click OK.
	
	5. Exit Regedt32.exe.
	
	6. Stop and restart the spooler service.
	
	
	Additional query words: prodnt hpmon
	======================================================================
	Keywords          : kbnetwork kbprint kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
