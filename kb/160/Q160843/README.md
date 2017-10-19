---
layout: page
title: "Q160843: Windows 95/98 Clients Cannot See Long Share Names"
permalink: /kb/160/Q160843/
---

## Q160843: Windows 95/98 Clients Cannot See Long Share Names

	Article: Q160843
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 allows you to share disk and printer resources using more than 12
	characters for the share name. Share names that use more than 12 characters can
	be seen by Windows NT clients, but not by Windows 95/98 clients.
	
	MORE INFORMATION
	================
	
	During the dialect negotiation, when a Windows 95/98 client is browsing or
	connecting to the Windows NT server, it tells the server it only supports 8.3
	file names.
	
	When browsing the server from the Windows 95/98 client, this results in Windows
	NT only returning those shares with 12 characters or less.
	
	If you attempt to enter the path of a long share name in Microsoft Explorer, File
	Manager, or from the Run command on the Start menu, you will receive the
	following errors:
	
	From the Run command on the Start menu:
	
	  The folder <\\server\share> does not exist
	
	From Microsoft Explorer or File Manager:
	
	  The following error occurred while trying to connect x: to \\server\share
	
	  The share name was not found. Be sure you typed it correctly.
	
	Windows 95/98 does not support share names longer than 12 characters. To browse
	or connect to printer or disk shares on a Windows NT 4.0 server from a Windows
	95/98 client, the share name must be 12 characters or less.
	
	Additional query words: 4.00 95 prodnt can't see printer printing print
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	
	=============================================================================
	
