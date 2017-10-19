---
layout: page
title: "Q152990: 100-Megabit Ethernet May Hang or Exhibit Poor Performance"
permalink: /kb/152/Q152990/
---

## Q152990: 100-Megabit Ethernet May Hang or Exhibit Poor Performance

	Article: Q152990
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The client system may stop responding when transferring files between two
	Microsoft Windows NT version 3.51 computers using 100-megabit Ethernet cards
	over a 100-megabit segment. The receiving system or client stops responding and
	the CPU usage stays at 100 percent until the file transfer is completed. You may
	also see lower than expected transfer rates.
	
	
	WORKAROUND
	==========
	
	To work around this problem, change the Server Optimization to Balance on both
	the Windows NT Server and Windows NT Workstation. To change the Server
	Optimization for a Windows NT Server, configure the Server service using the
	Control Panel Network tool, and set Server Optimization to Balance. To change
	the Server Optimization for a Windows NT Workstation you need to modify the
	Registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) select the following subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet \Services\LanmanServer\Parameters
	
	2. Add or change the following value:
	
	  Size REG_DWORD: 0 x 2
	
	The value 0 x 2 sets the Server Optimization option to Balance.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT versions
	3.50 and 3.51. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
