---
layout: page
title: "Q193887: Replacing a Local WINS Database from a Replica Server"
permalink: /kb/193/Q193887/
---

## Q193887: Replacing a Local WINS Database from a Replica Server

	Article: Q193887
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	If a Microsoft Windows NT Windows Internet Name Service (WINS) database becomes
	corrupted, it may be necessary to rebuild its contents from the records of other
	WINS servers. This rebuilding can be done by starting the WINS service with a
	fresh database and bringing records from replication partners.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Normally, a WINS server will not receive records it owns from replication
	partners. If records are lost on a local database, it is difficult to replace
	these records, even if they exist in other WINS servers that are the local
	server's replication partners. This difficulty is because there are generally no
	records that exist on other servers that are higher than the local server's
	highest version ID. WINS servers use record version IDs to keep track of which
	records are new and need to be replicated to other WINS servers. Every record in
	a WINS database has an owner associated with it. This owner is generally the
	server that the WINS client originally registered with.
	
	When the Microsoft WINS service is started with a blank database, it will
	replicate back records from other servers' records that are owned itself. This
	is because it starts with a fresh version ID.
	
	On a WINS network with many records, a registry entry will keep the server from
	accepting queries or registrations until the database is reconstructed. This
	entry is configured by setting the following registry parameter to 1.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins\Parameters\InitTimePause
	
	  Data Type : REG_DWORD
	  Range : 0 or 1
	
	This registry entry is also documented in the following article in the Microsoft
	Knowledge Base:
	
	  Q135922 Windows NT Registry Parameters for WINS
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbWinNTS351search kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
