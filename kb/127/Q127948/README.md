---
layout: page
title: "Q127948: Saving More Than 10 Most Recently Used Network Connections"
permalink: /kb/127/Q127948/
---

## Q127948: Saving More Than 10 Most Recently Used Network Connections

	Article: Q127948
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	Windows NT maintains a list of the ten most recently used (MRU) network
	drives. To view this list in File Manager, choose Connect Network Drive
	from the Disk menu. The drop-down Path menu lists the MRU connections.
	
	To save 23 MRU connections, modify the Registry:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_CURRENT_USER subtree, go to the following key:
	
	  \Software\Microsoft\Windows NT\CurrentVersion \Network\Persistent Connections
	
	3. Select Order.
	
	4. From the Edit menu, choose String.
	
	5. Change the entry to:
	
	  abcdefghijklmnopqrstuvw
	
	  NOTE: This example assumes that you have only one fixed hard disk partition
	  (drive C). If you have more than one drive, such as another hard disk
	  partition or a CD-ROM drive, remove the corresponding number of letters. For
	  example, if you also have drive D and a CD-ROM labeled E, change the entry to
	  ABCDEFGHIJKLMNOPQRSTU.
	
	6. Choose OK and quit the Registry Editor.
	
	Additional query words: prodnt 3.10 winfile
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
