---
layout: page
title: "Q250038: Print Server Hangs After Restarting Spooler Service"
permalink: kb/250/Q250038/
---

## Q250038: Print Server Hangs After Restarting Spooler Service

	Article: Q250038
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a print server, it may stop responding (hang).
	When you try to troubleshoot by stopping and then restarting the Spooler
	service, the server hangs when the Spooler service restarts. When you try
	restarting the server, the server again appears to hang after you type your user
	name and password.
	
	CAUSE
	=====
	
	This behavior can occur when the Winnt\System32\Spool\Printers folder is very
	large. After you restart the Spooler service, it takes a long time to process
	all of the print jobs in the Printers folder.
	
	RESOLUTION
	==========
	
	To resolve this behavior, delete or move the files in the Printers folder:
	
	1. Restart the print server:
	
	  a. If the server uses the NTFS file system, perform a parallel installation
	     and then restart the server to the new installation.
	
	  b. If the server uses the file allocation table (FAT) file system, use an
	     MS-DOS boot disk to restart the server.
	
	2. Delete the files in the Winnt\System32\Spool\Printers folder, or move them to
	  another location.
	
	  NOTE: If you move the files from the Printers folder, copy a few print jobs at
	  a time back to the Printers folder to resume printing.
	
	If you can stop the Spooler service, clear the Winnt\System32\Spool\Printers
	service, and then restart the Spooler service.
	
	Additional query words: win nt server 4.0 logon screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
