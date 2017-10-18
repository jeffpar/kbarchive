---
layout: page
title: "Q169639: XADM: Public Folder Hierarchy Comes From Pub.edb"
permalink: kb/169/Q169639/
---

## Q169639: XADM: Public Folder Hierarchy Comes From Pub.edb

	Article: Q169639
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot exc4 exc5 exc55
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The public folder hierarchy as seen through the Microsoft Exchange Server
	Administrator program is contained in the public folder database (Pub.edb).
	There is no public folder hierarchy representation in the directory.
	
	MORE INFORMATION
	================
	
	This information is important to remember when restoring a public information
	store from backup. Because the hierarchy is not in the directory, it will
	probably be different if a previous public folder database is restored. After a
	restore is done, the public folder hierarchy will eventually synchronize with
	the existing hierarchy in the organization via back-fill requests during
	replication.
	
	The only public folder objects stored in the Exchange Server directory (Dir.edb)
	are objects for the public folders stored on the server where that directory is
	also located. These can be original or replicated copies of a given public
	folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
