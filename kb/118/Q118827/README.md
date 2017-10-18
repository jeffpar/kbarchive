---
layout: page
title: "Q118827: How to Disable NetWare Broadcasts"
permalink: kb/118/Q118827/
---

## Q118827: How to Disable NetWare Broadcasts

	Article: Q118827
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50 3.51
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Microsoft Client or Gateway Service for NetWare, if you prefer
	to disable the NetWare broadcasts, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NWCWorkstation
	  \Parameters
	
	2. From the Edit menu, choose Add Value.
	
	3. Enter the following values:
	
	  Value Name: DisablePopup
	  Data Type: REG_DWORD
	  Value: 1
	
	4. Exit Registry Editor and restart Windows NT.
	
	NOTE: This option is equivalent to the CASTOFF ALL command for NetWare in a
	MS-DOS environment.
	
	NetWare is manufactured by Novell, Inc. a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt 3.10 CSNW GSNW message broadcast
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
