---
layout: page
title: "Q246523: Err Msg: 'RPC Service Unavailable' After Windows NT Upgrade"
permalink: /kb/246/Q246523/
---

## Q246523: Err Msg: 'RPC Service Unavailable' After Windows NT Upgrade

	Article: Q246523
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to add or delete a printer after you upgrade from Microsoft Windows
	NT Server 3.51 to Microsoft Windows NT Server 4.0, with File and Print Services
	for Netware (FPNW) installed, you may receive the following error message:
	
	  RPC Service unavailable
	
	Event Viewer may display the following events:
	
	  Event ID: 2510
	  Source: SRV
	  Type: Error
	  Description: The server service was unable to map error code 1722.
	
	  Event ID: 2510
	  Source: SRV
	  Type: Error
	  Description: The server service was unable to map error code 1726.
	
	CAUSE
	=====
	
	This behavior can occur because of a conflict between FPNW and the 'NWMON' value
	in the registry.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, perform one of the following procedures:
	
	Install Service Pack 3 (SP3) for Windows NT 4.0. Remote Procedure Call (RPC) is
	more stable with SP3 and may work better with a printer that is constantly busy
	through LPR (Line Print Remote).
	
	  -or-
	
	Check to see if the 'NWMON' value exists in the registry, and if it does, delete
	it. Follow these steps:
	
	1. Start Registry Editor (Regedt32.exe), and then use it to locate the following
	  registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\ 
	
	2. Save the Print key as a backup.
	
	3. Delete the NWMON value.
	
	4. Quit Registry Editor.
	
	5. Stop the Spooler service, and then restart it.
	
	Additional query words: win nt server
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
