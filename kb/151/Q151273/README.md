---
layout: page
title: "Q151273: XGEN: Definitions of Folder Design Conflict Messages"
permalink: kb/151/Q151273/
---

## Q151273: XGEN: Definitions of Folder Design Conflict Messages

	Article: Q151273
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two types of folder conflict messages that can be generated: folder
	design conflict messages and folder item conflict messages.
	
	MORE INFORMATION
	================
	
	A folder DESIGN conflict message will be generated if two folder owners are
	modifying the design of a folder from different replicas and their modifications
	are completed within the same replication interval. Design changes include
	permissions, forms, and views of a folder. Design conflicts will also be
	generated if the folder replication list changes in multiple ways during a
	replication interval. This can be done by Microsoft Exchange Administrator's
	changing the replicas. These are purely informational and no action is
	required.
	
	A folder ITEM conflict message will be generated if two or more people modify the
	same item in a folder on different replicas and they conflict or collide. The
	owner of the folder will need to decide which version of the item should be
	saved, which should be deleted, or whether to keep both versions.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
