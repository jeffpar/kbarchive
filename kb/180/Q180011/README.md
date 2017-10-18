---
layout: page
title: "Q180011: XADM: EDB File Size Not Updated"
permalink: kb/180/Q180011/
---

## Q180011: XADM: EDB File Size Not Updated

	Article: Q180011
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view the file size and properties of an Exchange Server database stored
	on an NTFS partition, the file size does not reflect the current size, date, or
	time until the database service (directory, information store, or directory
	synchronization) is stopped and restarted.
	
	CAUSE
	=====
	
	Because the *.edb files are locked open, the file properties cannot be updated.
	The properties of the drive are reported correctly.
	
	WORKAROUND
	==========
	
	To work around this problem, stop and restart the corresponding service
	(directory, information store, or directory synchronization).
	
	
	STATUS
	======
	
	This is a known problem with Windows NT NTFS partitions and the following
	Exchange Server databases:
	
	  Dir.edb, Priv.edb, Pub.edb, and Xdir.edb.
	
	MORE INFORMATION
	================
	
	Even though the size of the file in question is not updated, the free space on
	the drive is updated.
	
	If you are monitoring the file size to determine low disk space conditions, it is
	recommended that the free space on the drive be monitored and not the size of
	the Exchange Server database files.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
