---
layout: page
title: "Q139731: Network Errors Using 3COM 3C590 NIC In Windows NT"
permalink: kb/139/Q139731/
---

## Q139731: Network Errors Using 3COM 3C590 NIC In Windows NT

	Article: Q139731
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbnetwork kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the 3Com 3C590 network interface card (NIC) with Windows NT,
	network errors occur.
	
	CAUSE
	=====
	
	This problem occurs in any network operating system. There is a problem with the
	PCI busmastering on the 3Com 3C590 NIC.
	
	RESOLUTION
	==========
	
	To correct this problem, disable the PCI busmastering of the NIC by modifying
	the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\EL59X1\Parameters
	
	3. From the Edit menu, select Add Value.
	
	4. Add the following:
	
	  Value Name: Busmaster
	  Data Type: REG_SZ
	  Data: no
	
	5. Choose OK and quit Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	MORE INFORMATION
	================
	
	This problem may be observed when a client computer is opening a Microsoft
	Access database on a network share from a client computer.
	
	NOTE: Other network access methods may not result in the symptoms for example,
	file copy, opening Microsoft Word documents, and so on). Specifically, the
	client may see one of the following messages from a client:
	
	  disk or network error
	  Fatal Exception Error
	  General Protection Fault
	  Dr Watson - access violation
	
	Additional query words: prodnt bus master mastering
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51
	
	=============================================================================
	
