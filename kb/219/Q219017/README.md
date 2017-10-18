---
layout: page
title: "Q219017: Win95/98 Server Tools Do Not Show Complete Event ID Description"
permalink: kb/219/Q219017/
---

## Q219017: Win95/98 Server Tools Do Not Show Complete Event ID Description

	Article: Q219017
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you view the event logs of a Windows NT Server computer from a Windows 95
	or Windows 98 computer with the Server Tools installed, the event descriptions
	are truncated. For example, the following event ID
	
	  The browser has forced an election on network \Device\NetBT_El90x1 because a
	  Windows NT Server (or domain master) browser is started.
	
	may be displayed as
	
	  The description for Event ID ( 8015 ) in Source ( BROWSER ) could not be
	  found. It contains the following insertion string(s): \Device\NetBT_El90x1.
	
	CAUSE
	=====
	
	This problem can occur if the hidden administrative shares have been disabled on
	the computer running Windows NT Server.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, re-enable the hidden administrative shares. To do so:
	
	1. Start REGEDT32 and select the following path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	2. Change the value of AutoShareServer from 0 to 1.
	
	3. Exit REGEDT32 and restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
