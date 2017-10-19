---
layout: page
title: "Q188645: XADM: Deleted Directory Objects Remain Deleted"
permalink: /kb/188/Q188645/
---

## Q188645: XADM: Deleted Directory Objects Remain Deleted

	Article: Q188645
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	Directory replication transactions are static. After an object is deleted, it
	remains deleted. For example, if you delete a server from a site and then later
	re-introduce the server, the deleted items will not be recovered from that
	server.
	
	This behavior is by design. An example can be seen if a server is deleted from a
	site and then reintroduced into the site. If you restore a directory on the
	server that is re-joining the site, its server objects will not be available.
	
	Even though the objects are present in the restored directory, the replication
	transaction from when the server was deleted overrides and deletes the objects.
	
	The objects must be recreated with a newer transaction date in order to be
	available in the site.
	
	You can recreate deleted objects manually through the Microsoft Exchange
	Administrator program or, in the case of mailbox objects, by using the Directory
	Import feature.
	
	If a disaster recovery computer is available and isolated from the site, you can
	restore the directory and use Directory Export to make a CSV file. This CSV file
	can then be used to import the objects on the production server.
	
	For more information about directory import and export, see the Microsoft
	Knowledge Base article Q155414, "XADM: Bulk Import/Export FAQ."
	
	SUMMARY
	=======
	
	Objects that are deleted from an Exchange site remain deleted even if the
	objects are restored through an online restore of a directory. This is because
	directory replication assures that deleted objects remain deleted. This article
	describes this behavior and how to work around it.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
