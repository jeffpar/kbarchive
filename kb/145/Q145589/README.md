---
layout: page
title: "Q145589: How to Add NetWare 4.x Servers to Windows NT Domain"
permalink: /kb/145/Q145589/
---

## Q145589: How to Add NetWare 4.x Servers to Windows NT Domain

	Article: Q145589
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	When you select a NetWare 4.x server (running in bindery emulation mode) in
	the Select NetWare Server dialog box in Directory Service Manager for
	NetWare (DSMN), the following error message appears:
	
	  <Server Name> is a Netware 4.X server. It cannot be added to the
	  Domain.
	
	By default, DSMN allows you to synchronize user accounts between Windows NT
	Server domains and NetWare 2.x and 3.x servers.
	
	To add NetWare 4.x servers running in bindery emulation mode to Windows NT
	Server domains:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\MSSYNC\Parameters
	
	3. From the Edit menu, choose Add Value.
	
	4. Type the following in the appropriate text boxes:
	
	  Value Name: Allow4X
	  Data Type: REG_DWORD
	  Data: 1
	
	5. Choose OK and close the Registry Editor.
	
	6. Shut down and restart Windows NT Server.
	
	Additional query words: prodnt novell
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
