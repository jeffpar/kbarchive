---
layout: page
title: "Q118928: Mac Srv: Mail Server Disk Caching and Optimizing Performance"
permalink: kb/118/Q118928/
---

## Q118928: Mac Srv: Mail Server Disk Caching and Optimizing Performance

	Article: Q118928
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Of the factors which affect performance in Microsoft Mail for AppleTalk
	Networks, hard disk performance is the most important. Both seek time and
	throughput of the disk will affect Mail server performance. Virtually every
	workstation request requires the Mail server to access the hard disk on the
	server.
	
	MORE INFORMATION
	================
	
	Also a large disk cache setting may affect server performance causing the
	"Looking for Mail Server ... Give Up" dialog to appear on the workstations
	attached to the Mail server. Microsoft Mail version 3.1 ignores caching;
	therefore, it is not affected by any cache settings.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
