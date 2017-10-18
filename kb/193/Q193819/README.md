---
layout: page
title: "Q193819: Errors When Using Directory Replicator to Backup DHCP Database"
permalink: kb/193/Q193819/
---

## Q193819: Errors When Using Directory Replicator to Backup DHCP Database

	Article: Q193819
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Chapter 5, Network Services: Enterprise Level, of the Microsoft Windows NT
	Server Networking Guide version 4.0 on page 327, it states:
	
	  DHCP is a data base that is not automatically replicated. For this reason,
	  Terra Flora will use the Replicator service, which is a service that is part
	  of the Windows NT Workstation and Server, to backup the DHCP database and
	  files to another server...
	
	On page 328, it says in Step 3:
	
	  The Replicator service will be used to back up the necessary file stored in
	  the System32\DHCP\Backup directory to an enterprise/Enterprise Remote server
	  which is not running the DHCP service.
	
	On page 329, it says in Step 9:
	
	  Change the first part of the line to indicate a different physical drive on
	  the server, such as D:\System32\dhcp\backup.
	
	  You can now use the Replicator Service to copy that directory to a backup
	  server.
	
	These are documentation errors. Using the Directory Replicator Service to back up
	DHCP is not the Microsoft recommended way to back up the DHCP database
	directory.
	
	If you follow the instructions for using the Directory Replicator service to back
	up a DHCP database and files as recommended in the Microsoft Windows NT Server
	Networking Guide version 4.0 on pages 327-333, the following errors will
	repeatedly appear in the System Event Log of the DHCP server:
	
	  Event: 1014
	  Source: DhcpServer
	  Description: The JET Database call returned the following Error  -1022
	
	  Event: 1014
	  Source: DhcpServer
	  Description: The JET Database call returned the following error -1032
	
	  Event: 1014
	  Source: DhcpServer
	  Description: The JET Database call returned the following error -524
	
	  Event 1016
	  Source: DhcpServer
	  Description: The DHCP server encountered the following error when
	               backing up the user database with a hex data status of
	               "2d 4e 00 00 (0x4e2d =20013)"
	
	
	RESOLUTION
	==========
	
	As a workaround, use another method to back up the DHCP database. An example of
	an alternative method might be to use the robust copy utility, Robocopy.exe,
	provided in the Microsoft resource kit.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q160513 Alternatives to the Directory Replicator Service
	
	
	Additional query words: backing-up recover automatic
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
