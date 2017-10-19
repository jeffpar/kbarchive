---
layout: page
title: "Q259634: XADM: How to Obtain Correct Size of the Exchange Server Database"
permalink: /kb/259/Q259634/
---

## Q259634: XADM: How to Obtain Correct Size of the Exchange Server Database

	Article: Q259634
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 21-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Exchange Server services are running, the main database files (the Dir.edb,
	Priv.edb, and Pub.edb files) are locked open; the size of these files may not be
	dynamically updated.
	
	For example, if a new Priv.edb file has a size of 2 megabytes (MB), and 100 MB of
	data is moved or copied to that Priv.edb file, the file system may still report
	that the Priv.edb file is only 2 MB.
	
	MORE INFORMATION
	================
	
	You can update the file size of a database by using one of the two following
	methods:
	
	- Stop and start the corresponding Exchange Server service for that database.
	
	-or-
	
	- Remove the archive bit from the database and then reapply the archive bit. To
	  remove the archive bit:
	
	  1. Start Microsoft Windows NT Explorer.
	
	  2. Right-click the *.edb file, and then click Properties in the shortcut
	     menu.
	
	  3. In the Properties dialog box, click the General tab, click to clear the
	     Archive check box, and then click Apply.
	
	Reapply the archive bit after you check the size of the database.
	
	Additional query words: wrong size small file cache
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
